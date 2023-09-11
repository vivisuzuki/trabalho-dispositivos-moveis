import { Button, SafeAreaView, Text } from "react-native";

const Login = ({ navigation }) => {
    return (
        <SafeAreaView style={ { marginTop: 20 } }>
            <Text>Tela Login</Text>
            <Button
                title="Login"
                onPress={ () => navigation.navigate('Home') }
            />
        </SafeAreaView>
    );
}

export default Login;