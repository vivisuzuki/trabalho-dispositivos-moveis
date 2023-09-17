import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9b978",
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
    },
    buttonView: {
        flex: 1,
        padding: 5
    },
    imageCharacter: {
        width: 100,
        height: 100,
    },
    imageView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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


const Home = ({ navigation }) => {

    const [characters, setCharacters] = useState();


    const fetchCharacters = async () => {
        try {
            const response = await axios.get('https://rickandmortyapi.com/api/character?page=1')
            setCharacters(response.data.results)
        } catch (error) {
            console.log('Erro ao buscar personagens: ', error)
        }
    }

    useEffect(() => {
        fetchCharacters()
    }, [])

    const CharacterItem = ({ character }) => {
        const { id, name, image } = character

        return (
            <View style={ styles.imageView }>
                <View style={ styles.textView }>
                    <Text style={ styles.title }>ID: </Text>
                    <Text style={ styles.text }>{ id ? id : "" }</Text>
                </View>
                <View style={ styles.textView }>
                    <Text style={ styles.title }>Name: </Text>
                    <Text style={ styles.text }>{ name ? name : "" }</Text>
                </View>
                <Image
                    style={ styles.imageCharacter }
                    source={ {
                        uri: `${character.image}`,
                    } }
                />
                <CustomButton funcao={ () => navigation.navigate('Detalhes') } title='Details' />
            </View>
        )
    }

    return (
        <SafeAreaView style={ styles.container } >
            <FlatList
                data={ characters }
                renderItem={ ({ item }) => <CharacterItem character={ item } />
                }
            />
            <View style={ styles.buttonContainer }>
                <CustomButton funcao={ () => navigation.popToTop() } title='Logout' />
                <CustomButton funcao={ () => navigation.navigate('Outra Página') } title='Outra Página' />
            </View>
        </SafeAreaView>
    );
}

export default Home;