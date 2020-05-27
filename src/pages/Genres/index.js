import React, {Component} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import api from '../../services/api';
import style from './styles.js';

export default class Genres extends Component{

    state={
        genre:['']
    }

    componentDidMount(){
        this.getGenres();
    }

    //In getGenres, Axios is used for simplicity and convenience within a function: 
    getGenres = async () =>{
        const response = await api.get('3/genre/movie/list?api_key=765f55a54e148f3662cd6d58d0461fbd')
        const response2 = response.data;
        this.setState({genre : response2.genres});        
    }

    render(){
        return(
            <View style={style.container}>
                <ScrollView>
                {this.state.genre.map(genero=>
                
                    <View style={style.genre_names}>

                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('SearchGenre', {genero})}>

                        <Text style={style.textGenres}>
                            {genero.name}
                        </Text>

                        </TouchableOpacity>
                    
                    </View>
                    )}
                </ScrollView>
             </View>
            )}

}