import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import { NavigationEvents } from 'react-navigation';
export default function TopButton({text, onPress}){

    return(
        <TouchableOpacity accessible={true} accessibilityLabel="Pesquisar por um filme" accessibilityHint="Navegar para a próxima tela"  onPress={onPress}>
            <View>
                <Text style={styles.textButton}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    textButton:{
        color: '#ffa500',
        textAlign: 'left',
        fontSize: 27,
        marginTop: 10,
        fontFamily: 'Montserrat'    
    }
});