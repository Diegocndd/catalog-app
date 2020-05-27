import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

export default function BottomButton({text, onPress}){

    return(
        <View style={styles.allButton}>
        <TouchableOpacity accessible={true} accessibilityLabel="Explorar categorias" accessibilityHint="Navegar para a próxima tela" onPress={onPress}>
            <View>
                <Text style={styles.textButton}>{text}</Text>
            </View>
        </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    textButton:{
        color: '#ffa500',
        textAlign: 'left',
        fontSize: 27,
        fontFamily: 'Montserrat'    
    }
});