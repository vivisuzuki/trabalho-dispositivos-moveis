import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const styles = StyleSheet.create({
    buttonContainer: {
        padding: 12,
        borderRadius: 8,
        backgroundColor: '#62a4ab',
        margin: 20,
    },
    buttonTitle: {
        color: '#392c21',
        fontSize: 18,
        textAlign: 'center'
    }
})

const CustomButton = ({ funcao, title }) => {
    return (
        <TouchableOpacity onPress={ funcao }>
            <View style={ styles.buttonContainer }>
                <Text style={ styles.buttonTitle }>{ title }</Text>
            </View>
        </TouchableOpacity>
    );
}

export default CustomButton;