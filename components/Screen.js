import React , {useState} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button,
    TextInput
  } from 'react-native';
import { Container, Header, Content, Form, Item, Input  } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import shortid from 'shortid';


const Screen = ({ navigation}) => {
    const [movievalue , setMovieValue] = useState('');
    const [seasonValue , setSeasonValue] = useState('');


    const addTolist = async ()=>{
       try {
        if(movievalue.length == 0 || seasonValue.length == 0){
          console.log("fill both");
          return;
      }

      const movieObject = {
        id : shortid.generate(),
        name :movievalue,
        season:seasonValue,
        isWatched:false
      }

      const storedvalue = await AsyncStorage.getItem('@season_list')
      const prevlist = JSON.parse(storedvalue);

      if(!prevlist){
          const newList = [movieObject]
          await AsyncStorage.setItem('@season_list',JSON.stringify(newList));
      }
      else{
        prevlist.push(movieObject)
        await AsyncStorage.setItem('@season_list',JSON.stringify(prevlist));
      }
        navigation.navigate('Home')
       } catch (error) {
         console.log(error)
       }
  
    }

    return(
        <Container>
        <Header />
        <Content>
          <Form>
            <Item>
              <Input onChangeText = {(value) => {setMovieValue(value)}} placeholder="movie" />
            </Item>
            <Item >
              <Input onChangeText = {(value) => {setSeasonValue(value)}}placeholder="number of series" />
            </Item>
          </Form>
          <Button  onPress={addTolist} title ="submit"/>
        </Content>
      </Container>
    )
  };

  export default Screen;