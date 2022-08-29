import React from "react";
import {View, ScrollView, Image, StyleSheet, Dimensions} from 'react-native'
import news_banner_data from './news_banner_data.json'

const Banner = () => {
    return (
        <View>
            <ScrollView horizontal = {true} showsHorizontalScrollIndicator = {false} >
                    
                    {news_banner_data.map(bannerNews => (

                    <Image 

                        style = {styles.banners} 

                        source={{ uri : bannerNews.imageUrl}} />))}

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    banners : {
        height : Dimensions.get('window').height / 4,
        width : Dimensions.get('window').width / 1,
      }
})

export default Banner