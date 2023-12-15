import { Button, Icon } from "@ui-kitten/components";
import { homeStyles } from "../styles/homeStyles";
import { Constants } from "../constants/Constants";
import { Alert, Modal, Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";
import { Calendar, DateData } from "react-native-calendars";
import { AvailableDeliveryHours, HomeService } from "../screens/home/home.service";
import { CheckoutService } from "../core/services/checkout/checkout.service";
import { MarkedDates } from "react-native-calendars/src/types";
import axios from "axios";
import React from "react";
import { DateElement, Time } from "../screens/home/home.interface";

interface CustomDatePickerProps {
    minimumDate: Date;
    dates: DateElement[];
    setDates: React.Dispatch<React.SetStateAction<DateElement[]>>;
    times: Time[];
    setTimes: React.Dispatch<React.SetStateAction<Time[]>>;
    isDatePickedChecked: boolean;
    setIsDatePickedChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CustomDatePicker = ({
    minimumDate,
    dates,
    setDates,
    setTimes,
    isDatePickedChecked,
    setIsDatePickedChecked,
}: CustomDatePickerProps) => { // Componente bottone data personalizzato
    const [datePickerValue, setDatePickerValue] = React.useState('');
    const [showCalendar, setShowCalendar] = useState(false);
    const [markedDates, setMarkedDates] = useState<MarkedDates>({});

    useEffect(() => {
        let datesArr = [{ // Qui è passato Nic
            Month: new Date().getMonth(),
            Year: new Date().getFullYear()
        }, {
            Month: new Date(new Date().setMonth(new Date().getMonth() + 1)).getMonth(),
            Year: new Date(new Date().setMonth(new Date().getMonth() + 1)).getFullYear()
        }, {
            Month: new Date(new Date().setMonth(new Date().getMonth() + 2)).getMonth(),
            Year: new Date(new Date().setMonth(new Date().getMonth() + 2)).getFullYear()
        }
        ]
        getUnavailableDays(datesArr);

        if (CheckoutService.getInstance().checkoutData.DeliveryDate) {
            // setDatePickerValue(CheckoutService.getInstance().checkoutData.DeliveryDate);
            // setIsDatePickedChecked(true);
            const datesString = dates.map(date => date.data);
            console.log("datesString", datesString)
            console.log("datesString.slice(0, 2)", datesString.slice(0, 2))

            const deliveryDate = CheckoutService.getInstance().checkoutData.DeliveryDate;
            console.log("deliveryDate", deliveryDate)

            if (datesString.slice(0, 2).indexOf(deliveryDate as string) === -1) {
                console.log("Dates", dates);

                const newDates = dates.map(date => ({ ...date, isChecked: false }));
                setDates(newDates);

                setDatePickerValue(deliveryDate as string);
                setIsDatePickedChecked(true);
            }
        }

    }, []);

    const getUnavailableDays = async (datesArr: any[]) => {
        try {
            const response = await axios.post('https://casa-del-formaggio.bbsway.dev/api/app/orders/unavailable-delivery-dates', datesArr);

            let markedDatesNew = {} as MarkedDates;
            response.data.forEach((element: any) => {
                const [day, month, year] = element.split('/');
                const formattedDate = `${year}-${month}-${day}`;
                markedDatesNew[formattedDate] = {
                    disabled: true,
                    disableTouchEvent: true
                }
            })

            setMarkedDates(prevState => ({
                ...prevState,
                ...markedDatesNew
            }))
        } catch (error) {
            console.log('entro nel catch', error)
        }
    };


    const showCalendarModal = () => {
        const [canGoForward, setCanGoForward] = useState(true);
        const [canGoBackward, setCanGoBackward] = useState(false);

        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={showCalendar}

                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setShowCalendar(false)
                }}>

                <View style={homeStyles.centeredView}>
                    <View style={homeStyles.modalView}>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                            borderBottomWidth: 0.5,
                            borderBottomColor: Constants.COLORS.DescriptionGray,
                            paddingBottom: 10,
                        }}>
                            <Text style={homeStyles.modalText}>Data personalizzata</Text>
                            <TouchableOpacity onPress={() => {
                                setShowCalendar(false)
                            }}>
                                <Icon name='close' width={25} height={25} fill={Constants.COLORS.cdfBlue} />
                            </TouchableOpacity>
                        </View>

                        <View style={{ width: '100%', marginTop: 10 }}>
                            <Calendar
                                firstDay={1}
                                onMonthChange={(data: DateData) => {
                                    let monthDiffRes = monthDiff(new Date(), new Date(data.dateString));
                                    if (monthDiffRes === 0) {
                                        setCanGoBackward(false);
                                        setCanGoForward(true);
                                    }
                                    else if (monthDiffRes === 2) {
                                        setCanGoBackward(true);
                                        setCanGoForward(false);
                                    }
                                    else {
                                        setCanGoBackward(true);
                                        setCanGoForward(true);
                                    }
                                }}

                                disableArrowLeft={!canGoBackward}
                                disableArrowRight={!canGoForward}
                                markedDates={markedDates}
                                hideExtraDays={true} // Nascondo i giorni extra del mese (quelli del mese precedente e successivo)
                                current={minimumDate.toDateString()}
                                minDate={minimumDate.toDateString()}
                                initialDate={minimumDate.toDateString()}
                                enableSwipeMonths={true}
                                theme={{
                                    arrowColor: Constants.COLORS.cdfOrange,
                                    todayTextColor: Constants.COLORS.cdfOrange,
                                    textDayFontWeight: 'bold',
                                    textDayFontSize: 20,
                                    textMonthFontSize: 20,
                                    // imposto in rotto i giorni disabilitati (sabato e domenica)
                                    textDisabledColor: 'lightgray',

                                    textDayStyle: {
                                        color: Constants.COLORS.Primary,
                                    },
                                }}

                                onDayPress={(day) => {
                                    // formatto la data nel formato 'dd/mm/yyyy' partendo da day.dateString
                                    const dayString = formatDate(day.dateString);

                                    setShowCalendar(false);

                                    // HomeService.getInstance().getAvailableHours(selectedDate).then((response: AvailableDeliveryHours) => {
                                    //     if (response) {
                                    //         const newTimes = response.allSlots.map((time: string) => ({ orario: time, isChecked: false }));
                                    //         newTimes[0].isChecked = true;
                                    //         setTimes(newTimes);
                                    //     }
                                    // })   
                                    CheckoutService.getInstance().checkoutData.DeliveryDate = dayString; // Imposto la data di consegna

                                    HomeService.getInstance().getAvailableHours(dayString).then((response: AvailableDeliveryHours) => {

                                        setDatePickerValue(dayString as any);
                                        const newDates = dates.map(date => ({ ...date, isChecked: false }));
                                        setDates(newDates); // Notifico il cambiamento delle date

                                        setIsDatePickedChecked(true); // Imposto a true il booleano che mi permette di cambiare colore al bottone

                                        const newTimes = response.allSlots.map((time: string) => ({ orario: time, isChecked: false }));
                                        newTimes[0].isChecked = true;
                                        setTimes(newTimes);

                                        CheckoutService.getInstance().checkoutData.DeliveryTime = newTimes[0].orario;

                                    }).catch((error) => {
                                        console.log('error getAvailableHours', error);
                                        setShowCalendar(false)
                                        Alert.alert(
                                            'Attenzione!',
                                            error,
                                            [
                                                {
                                                    text: 'Ok',
                                                    onPress: () => {
                                                        setDatePickerValue('')
                                                        setIsDatePickedChecked(false); // Imposto a true il booleano che mi permette di cambiare colore al bottone

                                                        setShowCalendar(true);
                                                        setTimes([]);
                                                    }
                                                }
                                            ]
                                        )
                                    });

                                }}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }

    const formatDatePickerDate = (date: string) => {
        // Formatto la data nel formato 'dd/mm/yyyy'
        const day = date.split('/')[0];
        const month = date.split('/')[1];
        const year = date.split('/')[2];

        if (day.length === 1) {
            return '0' + day + '/' + month + '/' + year;
        }
        else if (month.length === 1) {
            return day + '/' + '0' + month + '/' + year;
        }
        else {
            return day + '/' + month + '/' + year;
        }
    }

    const monthDiff = (dateFrom: Date, dateTo: Date) => {
        return dateTo.getMonth() - dateFrom.getMonth() +
            (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
    }

    const formatDate = (date: string) => {
        return new Date(date).toLocaleDateString('it-IT');
    };

    return (
        <Button style={isDatePickedChecked ? homeStyles.customDatePickerChecked : homeStyles.customDatePicker} onPress={() => {
            setShowCalendar(true);
        }}>
            <>
                {
                    datePickerValue ? (
                        <Text style={isDatePickedChecked ? homeStyles.orangeBtnText : homeStyles.whiteBtnText}>{formatDatePickerDate(datePickerValue)}</Text>
                    ) : (
                        <Icon name='calendar' width={25} height={25} fill={isDatePickedChecked ? 'white' : Constants.COLORS.cdfBlue} />
                    )
                }
                {
                    showCalendarModal()
                }
            </>
        </Button>
    )
};