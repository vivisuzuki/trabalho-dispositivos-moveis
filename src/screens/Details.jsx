import axios from "axios";
import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "#62a4ab",
    },
    textView: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#392c21",
    },
    text: {
        fontSize: 20,
        color: "#392c21",
    },
})

const Details = ({ route }) => {
    const { id } = route.params;

    const [detailCharacter, setDetailCharacter] = useState();

    const fetchDetails = async () => {
        try {
            const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            setDetailCharacter(response.data)
        } catch (error) {
            console.log('Erro ao buscar detalhes do personagem: ', error)
        }
    }

    useEffect(() => {
        fetchDetails()
    }, [])

    return (
        <SafeAreaView style={ styles.container }>
            <View style={ styles.textView }>
                <Text style={ styles.title }>ID: </Text>
                <Text style={ styles.text }>{ detailCharacter?.id ? detailCharacter.id : "" }</Text>
            </View>
            <View style={ styles.textView }>
                <Text style={ styles.title }>Name: </Text>
                <Text style={ styles.text }>{ detailCharacter?.name ? detailCharacter.name : "" }</Text>
            </View>
            <View style={ styles.textView }>
                <Text style={ styles.title }>Specie: </Text>
                <Text style={ styles.text }>{ detailCharacter?.species ? detailCharacter.species : "" }</Text>
            </View>
            <View style={ styles.textView }>
                <Text style={ styles.title }>Origin: </Text>
                <Text style={ styles.text }>{ detailCharacter?.location.name ? detailCharacter.location.name : "" }</Text>
            </View>
        </SafeAreaView>
    );
}

export default Details;