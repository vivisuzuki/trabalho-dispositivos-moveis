import { Button, SafeAreaView, Text } from "react-native";

const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={ { marginTop: 20 } }>
            <Text>Tela Home</Text>
            <Button
                title="Logout"
                onPress={ () => navigation.popToTop() }
            />
            <Button
                title="Ir para Detalhes"
                onPress={ () => navigation.navigate('Detalhes') }
            />
        </SafeAreaView>
    );
}

export default Home;