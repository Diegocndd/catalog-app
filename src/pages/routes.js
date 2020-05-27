import React from 'react';
import {Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Genres from './Genres';
import SearchName from './SearchName';
import Details from './Details';
import SearchGenre from './SearchGenre';

const Stack = createStackNavigator();

const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" 
            component={Home}
            options={{headerShown: false}}
            />
            <Stack.Screen name="Genres" component={Genres} options={{ title: 'Explore', headerTintColor: '#ffa500', headerPressColorAndroid: '#ffa500' }}/>
            <Stack.Screen name="SearchName" component={SearchName} options={{ title: 'Search a Movie', headerTintColor: '#ffa500', headerPressColorAndroid: '#ffa500'}}/>
            <Stack.Screen name="Details" component={Details} options={{ title: 'Details', headerTintColor: '#ffa500', headerPressColorAndroid: '#ffa500' }}/>
            <Stack.Screen name="SearchGenre" component={SearchGenre} options={{ title: 'Explore', headerTintColor: '#ffa500', headerPressColorAndroid: '#ffa500' }}/>

        </Stack.Navigator>
    </NavigationContainer>
    );

export default Routes;