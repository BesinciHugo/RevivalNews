import React from "react";
import {SafeAreaView, View, Text, FlatList, StyleSheet, ScrollView, Image, Dimensions} from 'react-native'
import news_data from './news_data.json' 
import NewsCard from "./components/NewsCard";
import Banner from './Banner'

const App = () => {
  
  const RenderNews = ({item}) => <NewsCard news = {item} />

  return (
    <SafeAreaView style = {styles.container} >

      <Text style = {styles.brandText} >REVIVAL NEWS</Text>

        <View style = {styles.content} >

            <FlatList 

                ListHeaderComponent={() => <Banner/>}

                data = {news_data} 
              
                renderItem = {RenderNews}>

            </FlatList>

        </View>

    </SafeAreaView>
)
}

  const styles = StyleSheet.create({
    container : {
      backgroundColor : '#22559C',
      flex : 1,
    },

    title : {
      color : 'white',
      fontWeight : 'bold',
      fontSize : 60,
      textAlign : 'center',
      fontStyle : 'italic',
    },

    content : {
      margin : 10
    },

    brandText : {
      backgroundColor : 'white',
      color : 'black',
      fontSize : 35,
      fontWeight : 'bold',
      fontStyle : 'italic'
    },

  })

export default App