import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({

    container : {
        backgroundColor : '#277BC0',
        borderRadius : 10,
        margin : 5
    },

    image : {
        height : Dimensions.get('window').height / 4,
        borderTopLeftRadius : 10,
        borderTopRightRadius : 10,
    },

    title : {
        color : '#EDE862',
        fontWeight : 'bold', 
        fontSize : 20,
        padding : 5,
        textAlign : 'left',
    },

    description : {
        color : '#FA9856',
        padding : 10,
        fontSize : 15,
    },

    author : {
        color : '#F7D6BF',
        textAlign : 'right',
        marginBottom : 10,
        fontStyle : 'italic',
        marginEnd : 10,
    },


})