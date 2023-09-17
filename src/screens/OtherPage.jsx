import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import axios from "axios";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d6d644',
        padding: 20,
    },
    textView: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    title: {
        flex: 1,
        fontSize: 20,
        fontWeight: "bold",
        color: "#392c21",
    },
    text: {
        flex: 2,
        fontSize: 20,
        color: "#392c21",
    },
})

const OtherPage = () => {

    const [activity, setActivity] = useState()
    const [type, setType] = useState()
    const [participants, setParticipants] = useState()

    const fetchActivity = async () => {
        try {
            const { data } = await axios.get('https://www.boredapi.com/api/activity')
            setActivity(data.activity)
            setType(data.type)
            setParticipants(data.participants)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <SafeAreaView style={ styles.container }>
            <View style={ styles.textView }>
                <Text style={ styles.title }>Activity: </Text>
                <Text style={ styles.text }>{ activity ? activity : "" }</Text>
            </View>
            <View style={ styles.textView }>
                <Text style={ styles.title }>Type: </Text>
                <Text style={ styles.text }>{ type ? type : "" }</Text>
            </View>
            <View style={ styles.textView }>
                <Text style={ styles.title }>Participants: </Text>
                <Text style={ styles.text }>{ participants ? participants : "" }</Text>
            </View>
            <CustomButton funcao={ fetchActivity } title='Buscar Atividade' />
        </SafeAreaView>
    );
}

export default OtherPage;