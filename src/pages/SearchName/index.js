import React, {Component} from 'react';
import {Text, View, FlatList, Image, TouchableWithoutFeedback} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import {dataAction} from '../../reduxControl/actions';
import styles from './styles';

class SearchName extends Component{
    mounted = true;

    state = {
        loading: false,
        data: [''],
        error: null,
    }

    componentDidMount(){
        this.arrayholder = [];
        this.x = [];
        this.mounted = true;
        const url = `http://api.themoviedb.org/3/list/143355?api_key=765f55a54e148f3662cd6d58d0461fbd`;
        this.setState({loading: true});
        
        if(this.mounted){
        fetch(url)
            .then(res => res.json())
            .then(res => {
                /*
                The Redux library is used at this point only to exemplify the operation of an action, as there was 
                no real need in other parts of the project, in view of its simplicity and the passing of parameters 
                between components already well accomplished with React Navigation 5.
                */
                this.x = this.props.dispatch(dataAction(res.items));
                this.setState({
                    data:this.x.newValue,
                    error: res.error || null,
                    loading: false,
                })
                this.arrayholder = res.items;
            })
            .catch(error=>{
                this.setState({error, loading:false});
            })
        }
    }

    searchFilter = (text) => {
        {const newData  = this.arrayholder.filter(item => {
            const itemData = `${item.title.toUpperCase()}`;

            const textData = text.toUpperCase();

            return itemData.indexOf(textData) > -1;
        })
        this.setState({data : newData}) }
    }

    componentWillUnmount(){
        this.mounted = false;
    }

    render(){
        return(
            <View style={styles.container}>
                <TextInput
                style={styles.textInputStyle}
                onChangeText={text => {this.searchFilter(text)}}
                placeholder="Type the title here"
                /> 
                        <FlatList 
                            style={styles.flatlistStyle}         
                            data={this.state.data} 
                            renderItem={({ item }) => ( 
                                <TouchableWithoutFeedback accessible={true} accessibilityLabel={item.title} accessibilityHint="Ver informações do filme" onPress={()=>this.props.navigation.navigate('Details', {item})}>
                                 <View style={styles.boxMovie}>
                                 <Image
                                    style={styles.imageMovie}
                                    source={{
                                    uri: `https://image.tmdb.org/t/p/w600_and_h900_bestv2${item.poster_path}`,
                                    }}
                                    />
                                <Text style={styles.textList}>{item.title}</Text>
                                </View>

                                </TouchableWithoutFeedback>
                            )}
                            keyExtractor={(item, index) => index.toString()}          
                        />      
            </View>
        )
    }
}


const mapStateToProps = store => ({
    newValue: store.data
  });

export default connect(mapStateToProps)(SearchName);