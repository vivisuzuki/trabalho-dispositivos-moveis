import { useEffect, useState } from "react";
import { Button, SafeAreaView, Text, TextInput } from "react-native";


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
        <SafeAreaView style={ { marginTop: 20 } }>
            <TextInput
                value={ inputEmailValue }
                onChangeText={ onChangeEmailValue }
                onEndEditing={ () => setInputEmailValid(true) }
                placeholder="Ex: example@teste.com"
            />
            <TextInput
                value={ inputPasswordValue }
                onChangeText={ onChangePasswordValue }
                onBlur={ () => setInputPasswordValid(true) }
                placeholder="Digite sua senha"
            />
            { inputEmailValid === true ? <></> : <Text>Email não é válido</Text> }
            { inputPasswordValid === true ? <></> : <Text>Senha não é válida</Text> }

            <Button
                title="Login"
                onPress={ () => navigation.navigate('Home') }
            />
        </SafeAreaView>
    );
}

export default Login;