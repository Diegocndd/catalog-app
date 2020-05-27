import React from 'react';
import {View, Image, ImageBackground} from 'react-native';
import BottomButton from './bottomButton';
import TopButton from './topButton';
import styles from './styles';

export default function Home({navigation}){
    return(
    <View style={styles.container}>

        <ImageBackground source={require('../../../img/home_background.png')} style={styles.background}>
        <Image style={styles.logo} source={require('../../../img/logo_short.png')} />
        
        <View style={styles.buttons} >
                <TopButton text="Search a movie" onPress={()=>navigation.navigate('SearchName')}/>
            <View style={styles.bottomButton}>
                <BottomButton text="Explore" onPress={()=>navigation.navigate('Genres')}/>
            </View>
        </View>
        </ImageBackground> 
        
    </View>
    );
}
