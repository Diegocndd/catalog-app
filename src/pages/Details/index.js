import React, {useState} from 'react';
import {Text, View, FlatList, Image, ScrollView} from 'react-native';
import style from './styles';

function convertFormateDate(date){
    var day  = date.split("-")[2];
    var month  = date.split("-")[1];
    var year  = date.split("-")[0];
    return day + '/' + month.slice(-2) + '/' + year;
}

const Details = ({navigation, route}) => {

  const url = `https://api.themoviedb.org/3/movie/${route.params.item.id}?api_key=765f55a54e148f3662cd6d58d0461fbd`;

  const [data,setData] = useState([]);

        fetch(url)
            .then(res => res.json())
            .then(res => {
                setData(res.genres);
            })
            .catch(error=>{
              console.log(error);
            })
 
  return(
    <View style={style.container}>
      <ScrollView> 

      <Image
      style={style.backdrop}
      source={{
        uri: `http://image.tmdb.org/t/p/w500${route.params.item.backdrop_path}`
      }}
      />
      <Image
        style={style.poster}
        source={{
          uri: `https://image.tmdb.org/t/p/w600_and_h900_bestv2${route.params.item.poster_path}`,
        }}
        />

      <Text style={style.title}>
        {route.params.item.title}
      </Text>

      <View style={style.voteBox}>
        <Text style={style.vote}>
          {route.params.item.vote_average * 10 + '%'}
        </Text>
        <Text style={style.subtitle_vote} accessibilityLabel="Média dos votos">
          vote average
        </Text>
      </View>

      <View style={style.infoBox}>
        <View> 
          <Text style={style.titleInfo}accessible={true} accessibilityLabel="Data de lançamento">
              Release Date
          </Text>
          <Text style={style.textInfo}>
            {convertFormateDate(route.params.item.release_date)}
          </Text>
        </View>

        <View>
          <Text style={style.titleInfo} accessibilityLabel="Gêneros">
            Genres
          </Text>

          <View>
          <FlatList horizontal 
            data={data} 
            renderItem={({ item }) => (
                <Text style={style.buttonGenre}> {item.name}</Text>
            )}
            keyExtractor={(item, index) => index.toString()}                    
          />     
          </View>

          <View>
          <Text style={style.titleInfo} accessibilityLabel="Número de votos">
            Ratings
          </Text>
          </View>

          <View>
            <Text style={style.textInfo}>{route.params.item.vote_count}</Text>
          </View>
        </View>

        <View> 
          <Text style={style.titleInfo} accessibilityLabel="Resumo do filme">
              Overview
          </Text>

          <Text style={style.textInfo}>
            {route.params.item.overview}
          </Text>
        </View>

      </View>
      </ScrollView>
    </View>

  )

}

export default Details;
