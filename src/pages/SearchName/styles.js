import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#1b1c1d'
    },
    textInputStyle: {
        height: 50,
        borderWidth: 1,
        paddingLeft: 20,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 16,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        fontSize: 20,
        fontFamily: 'Montserrat'
      },
    textList:{
        fontSize: 25,
        marginLeft: 15,
        marginTop: 27,
        textAlign: 'center',
        alignSelf: 'center',
        position: 'absolute',
        color: '#ffa500',
        fontFamily: 'Montserrat',
        zIndex: 2
    },
    flatlistStyle:{
        marginBottom: 20
    },
    boxMovie : {
        marginTop: 23,
        alignSelf: 'center',
        width: 380,
        height: 100,
        backgroundColor: '#000',
        zIndex: 3
    },
    imageMovie : {
        width: 380,
        height: 100,
        zIndex: 1,
        opacity: 0.2
    }
})

export default styles;
