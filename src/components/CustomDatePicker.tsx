import { Button, Icon } from "@ui-kitten/components";
import { homeStyles } from "../styles/homeStyles";
import { Constants } from "../constants/Constants";
import { Alert, Modal, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { Calendar } from "react-native-calendars";
import { MarkedDates } from "react-native-calendars/src/types";
import React from "react";

export interface Time {
    orario: string;
    isChecked: boolean;
}

export interface DateElement {
    data: string;
    isChecked: boolean;
    label?: string;
}


export const CustomDatePicker = () => { // Componente bottone data personalizzato
    const [datePickerValue, setDatePickerValue] = React.useState('');
    const [showCalendar, setShowCalendar] = useState(false);
    const [markedDates, setMarkedDates] = useState<MarkedDates>({});


    const showCalendarModal = () => {
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
                                markedDates={markedDates}
                                hideExtraDays={true} // Nascondo i giorni extra del mese (quelli del mese precedente e successivo)
                                current={new Date().toDateString()}
                                minDate={new Date().toDateString()}
                                initialDate={new Date().toDateString()}
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
        <Button style={homeStyles.customDatePicker} onPress={() => {
            setShowCalendar(true);
        }} activeOpacity={0.8}>
            <>
                {
                    datePickerValue ? (
                        <Text style={homeStyles.whiteBtnText}>{formatDatePickerDate(datePickerValue)}</Text>
                    ) : (
                        <Icon name='calendar' width={25} height={25} fill={Constants.COLORS.cdfBlue} />
                    )
                }
                {
                    showCalendarModal()
                }
            </>
        </Button>
    )
};