import { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import CustomButton from "../components/CustomButton";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9b978',
    },
    textInput: {
        width: '80%',
        borderWidth: 1,
        borderRadius: 4,
        padding: 16,
        margin: 8,
        backgroundColor: '#fff'
    },
    text: {
        marginLeft: 32,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#392c21',
        alignSelf: 'flex-start',
    },
})


const Login = ({ navigation }) => {

    const [inputEmailValue, setInputEmailValue] = useState()
    const [inputEmailValid, setInputEmailValid] = useState(true)

    const [inputPasswordValue, setInputPasswordValue] = useState()
    const [inputPasswordValid, setInputPasswordValid] = useState(true)

    const onChangeEmailValue = (emailValue) => {

        const emailRegex = /\S+@\S+\.\S+/;
        let validacao = emailRegex.test(emailValue);

        if (validacao) {
            setInputEmailValid(true)
        } else {
            setInputEmailValid(false)
        }
        setInputEmailValue(emailValue)
    }

    const onChangePasswordValue = (passwordValue) => {

        const senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%^&*()_+])[A-Za-z\d@#$!%^&*()_+]{8,}$/; //regex para maiuscula, minuscula e caracter especial
        let validacao = senhaRegex.test(passwordValue);

        if (passwordValue.length >= 8 && validacao) {
            setInputPasswordValid(true)
        } else {
            setInputPasswordValid(false)
        }
        setInputPasswordValue(passwordValue)
    }

    return (
        <SafeAreaView style={ styles.container }>
            <Text style={ styles.text }>Login</Text>
            <TextInput
                value={ inputEmailValue }
                onChangeText={ onChangeEmailValue }
                onEndEditing={ () => setInputEmailValid(true) }
                placeholder="Ex: example@teste.com"
                style={ styles.textInput }
            />
            <Text style={ styles.text }>Senha</Text>
            <TextInput
                value={ inputPasswordValue }
                onChangeText={ onChangePasswordValue }
                onBlur={ () => setInputPasswordValid(true) }
                placeholder="Digite sua senha"
                style={ styles.textInput }
            />
            { inputEmailValid === true ? <></> : <Text>Email não é válido</Text> }
            { inputPasswordValid === true ? <></> : <Text>Senha não é válida</Text> }

            <CustomButton funcao={ () => navigation.navigate('Home') } title='Login' />
        </SafeAreaView>
    );
}

export default Login;