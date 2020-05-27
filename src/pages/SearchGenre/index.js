import React, {useState} from 'react';
import {Text, View, FlatList, StyleSheet, Image, TouchableWithoutFeedback, Button} from 'react-native';
import api from '../../services/api';
import style from './styles';

function showTitle(item, id, navigation){
    if(item.genre_ids.indexOf(id) > -1){
      return( 
          <View style={style.boxMovie}>

            <Image
            style={style.imageMovie}
            source={{
              uri: `https://image.tmdb.org/t/p/w600_and_h900_bestv2${item.poster_path}`,
            }}/>
            <TouchableWithoutFeedback onPress={()=>navigation.navigate('Details', {item})}>
            <Text style={style.textMovie}>{item.title}</Text>
            </TouchableWithoutFeedback>

          </View>
      )
    } else return false;
}

const SearchGenre = ({navigation, route}) => {

    const url = `http://api.themoviedb.org/3/list/143355?api_key=765f55a54e148f3662cd6d58d0461fbd`;

    const [data,setData] = useState([]);

          fetch(url)
              .then(res => res.json())
              .then(res => {
                  setData(res.items);
              })
              .catch(error=>{
                console.log(error);
              })
    
    const id = route.params.genero.id;

    return(
      <View style={style.container}>
        <Text style={style.genreName}>{route.params.genero.name}</Text>
        <FlatList     
          data={data} 
          renderItem={({ item }) => (
            <View>
                {showTitle(item,id, navigation)}
            </View>
            )}
          KeyExtractor={(item, index) => index.toString()}          
      />     
      </View>
    )

}

export default SearchGenre;