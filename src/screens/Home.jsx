import axios from "axios";
import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row', // Alinha os botões horizontalmente
        justifyContent: 'space-around', // Distribui espaço igualmente entre os botões
        alignItems: 'center', // Alinha os botões verticalmente no centro
    },
    buttonView: {
        flex: 1,
        padding: 5
    },
})


const Home = ({ navigation }) => {

    const [characters, setCharacters] = useState([]);


    const fetchRickMortyData = async () => {
        try {
            // const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${pagina}`)
            const response = await axios.get('https://rickandmortyapi.com/api/character?page=1')

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
            <View style={ styles.buttonContainer }>
                <CustomButton funcao={ () => navigation.popToTop() } title='Logout' />
                <CustomButton funcao={ () => navigation.navigate('Outra Página') } title='Outra Página' />
            </View>
        </SafeAreaView>
    );
}

export default Home;