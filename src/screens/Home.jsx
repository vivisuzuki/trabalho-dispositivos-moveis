import axios from "axios";
import { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row', // Alinha os botões horizontalmente
        justifyContent: 'space-around', // Distribui espaço igualmente entre os botões
        alignItems: 'center', // Alinha os botões verticalmente no centro
    },
    buttonView: {
        flex: 1,
        padding: 10, // Espaçamento entre os botões
    },
})


const Home = ({ navigation }) => {

    const [characters, setCharacters] = useState([]);


    const fetchRickMortyData = async () => {
        try {
            const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${pagina}`)

        } catch (error) {
            console.log('Erro ao buscar personagens: ', error)
        }
    }


    return (
        <SafeAreaView style={ { marginTop: 20 } }>
            <Text>Tela Home</Text>
            {/* <View style={ styles.buttonView }>
                    <Button
                        title="Ir para Detalhes"
                        onPress={ () => navigation.navigate('Detalhes') }
                    />
                </View> */}
            <CustomButton funcao={ () => navigation.popToTop() } title='Logout' />
        </SafeAreaView>
    );
}

export default Home;