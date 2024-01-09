import { Text, View } from "react-native"
import { Constants } from "../../constants/Constants";
import React, { useEffect } from "react";
import { TouchableOpacity } from "@gorhom/bottom-sheet";


const Categories = ({ navigation }: { navigation: any }) => {
    const [dataReady, setDataReady] = React.useState(false);

    // faccio in modo che dataReady sia true dopo 3 secondi
    useEffect(() => {
        setTimeout(() => {
            setDataReady(true);
        }, 3000)
    }, [])

    const categoryElements = [
        {
            id: 1,
            name: 'Primi',
        },
        {
            id: 2,
            name: 'Secondi',
        },
        {
            id: 3,
            name: 'Contorni',
        },
        {
            id: 4,
            name: 'Dolci',
        },
    ]

    const renderCategoryElements = () => {
        return categoryElements.map((category) => {
            return (
                <TouchableOpacity key={category.id} onPress={() => {
                    navigation.navigate('Products')
                }}>
                <View style={{
                    height: 100,
                    width: '100%',
                    backgroundColor: Constants.COLORS.Primary,
                    borderRadius: 10,
                    marginBottom: 10,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text style={{
                        color: Constants.COLORS.White,
                        fontSize: 26,
                        fontFamily: 'AnekOdia-Bold',
                    }}>{category.name}</Text>
                </View>
                </TouchableOpacity>
            )
        })
    }

    return (
        <View style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center'
        }}>
            <View style={{
                width: '100%',
                paddingHorizontal: 20,
            }}>
                {
                    renderCategoryElements()
                }
            </View>
        </View>
    )
}

export default Categories;