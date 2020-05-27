import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#1b1c1d',
        zIndex: 4
    },
    boxMovie : {
        marginTop: 23,
        alignSelf: 'center',
        width: 380,
        height: 100,
        backgroundColor: '#000000',
        zIndex: 3
    },
    textMovie : {
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
    imageMovie : {
        width: 380,
        height: 100,
        zIndex: 1,
        opacity: 0.2
    },
    genreName : {
        color: '#ffa500',
        fontFamily: 'Montserrat-Bold',
        fontSize: 30,
        marginTop: 10,
        marginLeft: 15,
    }
});

export default style;