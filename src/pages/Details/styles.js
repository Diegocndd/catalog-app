import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#1b1c1d'
    },
    poster : {
        width: 180,
        height: 270,
        alignSelf: "center",
        marginTop: 90
    },
    backdrop : {
        height: 200,
        width: 420,
        position: "absolute",
        opacity: 0.5
    },
    title : {
        textAlign: 'center',
        color: '#ffa500',
        alignSelf: 'center',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 28,
        marginTop: 10
    },
    voteBox : {
        marginTop: 15
    },
    vote : {
        color: 'white',
        alignSelf: 'center',
        fontSize: 30,
        fontFamily: 'Montserrat-Bold'
    },
    subtitle_vote : {
        color: 'white',
        alignSelf: 'center',
        fontFamily: 'Montserrat-Bold',
        fontSize: 9,
        marginTop: -8
    },
    infoBox : {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 25,
        marginBottom: 10
    },
    titleInfo : {
        color: '#ffa500',
        fontSize: 20,
        fontFamily: 'Montserrat-Bold',
        marginTop: 20
    },
    textInfo : {
        color: 'white',
        fontSize: 17,
        fontFamily: 'Montserrat',
        textAlign: 'justify',
        marginTop: 10,
    },
    buttonGenre : {
        color: 'white',
        fontSize: 17,
        fontFamily: 'Montserrat-Bold',
        textAlign: 'justify',
        marginTop: 10,
        backgroundColor: '#ffa500',
        marginRight: 5,
        padding: 10,
        borderRadius: 10

    }
});

export default style;