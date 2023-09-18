import axios from "axios";
import { useEffect, useState } from "react";
import { Button, FlatList, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
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
        backgroundColor: "#fff",
        padding: 5,
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
        padding: 10,
        borderWidth: 5,
        borderColor: '#62a4ab',
        borderRadius: 5,
        margin: 5,
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
    pagina: {
        fontSize: 20,
        color: "#392c21",
        marginHorizontal: 5,
    }
})


const Home = ({ navigation }) => {

    const [characters, setCharacters] = useState();
    const [pagina, setPagina] = useState(1);

    const fetchCharacters = async ({ pagina }) => {
        try {
            const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${pagina}`)
            setCharacters(response.data.results)
        } catch (error) {
            console.log('Erro ao buscar personagens: ', error)
        }
    }

    useEffect(() => {
        fetchCharacters({ pagina })
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
                        uri: `${image}`,
                    } }
                />
                <CustomButton funcao={ () => navigation.navigate('Detalhes', { id }) } title='Details' />
            </View>
        )
    }

    const primeiraPagina = async () => {
        const response = await axios.get('https://rickandmortyapi.com/api/character?page=1')
        setPagina(1)
        setCharacters(response.data.results)
    }


    const ultimaPagina = async () => {
        const response = await axios.get('https://rickandmortyapi.com/api/character')
        setPagina(response.data.info.pages)
        setCharacters(response.data.results)
    }

    const nextPage = async ({ pagina }) => {
        const novaPagina = pagina + 1
        const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${pagina}`)
        if (!response.data.info.next) {
            setPagina(novaPagina)
            setCharacters(response.data.info.next)
        }
    }

    const prevPage = async () => {
        const novaPagina = pagina - 1
        const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${pagina}`)
        if (!response.data.info.prev) {
            setPagina(novaPagina)
            setCharacters(response.data.info.prev)
        }
    }


    return (
        <SafeAreaView style={ styles.container } >
            <View style={ styles.buttonContainer }>
                <CustomButton funcao={ primeiraPagina } title='First Page' />
                <CustomButton funcao={ prevPage } title='<<' />
                <Text style={ styles.pagina }>{ pagina }</Text>
                <CustomButton funcao={ nextPage } title='>>' />
                <CustomButton funcao={ ultimaPagina } title='Last Page' />
            </View>
            <FlatList
                data={ characters }
                renderItem={ ({ item }) => <CharacterItem character={ item } />
                }
            />
            <View style={ styles.buttonContainer }>
                <CustomButton funcao={ () => navigation.popToTop() } title='Logout' />
                <CustomButton funcao={ () => navigation.navigate('Outra Página') } title='Outra Página' />
            </View>
        </SafeAreaView >
    );
}

export default Home;