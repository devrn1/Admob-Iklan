const { StyleSheet, Dimensions } = require("react-native");

const {width,height} = Dimensions.get("window")

export const StyleHome = StyleSheet.create({
    // box
    box:{
        width:width,
        height:height,
        flex:1,
        backgroundColor:'#fff'
    },
    boxRelative:{
        width:'100%',
        height:height / 6,
        backgroundColor:'#00BFFF',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:width / 30,
        paddingTop:height / 50
    },
    boxAbsolute:{
        width:'100%',
        height:'100%',
        position:'absolute',
        alignItems:'center',
        paddingTop:height / 10
    },
    boxDesc:{
        borderWidth:1,
        width:'90%',
        height:height /10,
        backgroundColor:'#87CEFA',
        borderRadius:height / 200,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderColor:'#fff',
    },
    boxDesc1:{
        width:'33%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    boxIklan:{
        width:'100%',
        paddingHorizontal:width / 40,
        paddingVertical:height / 100,
        alignItems:"flex-start"
    },
    boxTouch:{
        width:'48%',
        marginHorizontal:"1%",
        height:height / 18,
        backgroundColor:'#00BFFF',
        marginVertical:height / 200,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:height / 200
    },
    boxModal:{
        width:width,
        height:height,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"rgba(0,0,0,0.5)"
    },
    boxComponentModal:{
        width:'85%',
        paddingVertical:height / 100,
        backgroundColor:'#fff',
        alignItems:'center',
        borderRadius:height / 100,
    },
    boxRowModal:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:width / 30,
        paddingTop:height / 100,
        paddingBottom:height / 30
    },
    boxListLink:{
        flexDirection:'row', 
        justifyContent:'space-between',
        flexWrap:'wrap', 
        width:"100%",
        paddingHorizontal:width / 30,
        marginVertical:height / 200,
        alignItems:'flex-start'
    },
    boxInput:{
        width:'90%',
        borderRadius:height / 100,
        borderWidth:0.5,
        height:height / 20,
        textAlignVertical:'center',
        paddingHorizontal:width / 70,
        marginVertical:height / 80,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    input:{
        width:width / 1.6,
        height:'100%',
        fontSize:height / 50,
        // backgroundColor:'red'
    },
    boxModalValue:{
        width:'80%',
        paddingVertical:height / 50,
        backgroundColor:'#fff',
        borderRadius:height / 150,
        paddingHorizontal:width / 30
    },
    boxTouchModal:{
        width:'100%',
        paddingVertical:height / 100,
        justifyContent:"center",
        fontSize:height / 45
    },

    // text,
    textIklan:{
        fontSize:height / 45,
        marginVertical:height / 50,
        paddingLeft:height / 55,
        paddingRight:height / 30,
        paddingVertical:height /150,
        backgroundColor:'#87CEFA',
        borderBottomLeftRadius:height / 50,
        borderTopRightRadius:height / 50,
        fontWeight:"700"
    },
    textDesc1:{
        fontSize:height / 23,
        color:'#000',
        fontWeight:'bold'
    },
    textDesc2:{
        fontSize:height / 45,
        color:'#000',
        fontWeight:'600'
    },
    textAddIklan:{
        fontSize:height / 55,
        fontWeight:'bold',
        paddingHorizontal:width / 50,
        paddingVertical:height / 300,
        backgroundColor:"#00BFFF",
        borderRadius:height / 100,
        color:"#fff"
    },
    textAddIklanClose:{
        fontSize:height / 55,
        fontWeight:'bold',
        paddingHorizontal:width / 50,
        paddingVertical:height / 300,
        backgroundColor:"red",
        borderRadius:height / 100,
        color:"#fff"
    },
    textTitleModal:{
        fontSize:height / 45,
        fontWeight:"bold",
        marginTop:height / 150
    },
    textLink:{
        width:width / 1.55,
        color:"#000"
        // backgroundColor:'red'
    },
    textDellet:{
        borderRadius:100, 
        backgroundColor:"red", 
        paddingHorizontal:width / 40,
        paddingVertical:height / 150,
        fontSize:height / 60,
        fontWeight:'bold',
        color:"#fff"
},
textRelative1:{
    fontSize:height / 35,
    color:"#fff"
},
textRelative2:{
    fontSize:height / 43,
    color:"#fff",
    fontWeight:'bold'
},

// touch
touchSaveModal:{
    width:width/8, 
    backgroundColor:"green",
    height:'100%',
    justifyContent:'center',
    alignItems:'center',
    borderTopRightRadius:height / 100,
    borderBottomRightRadius:height / 100
}
})