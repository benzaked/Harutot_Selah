import { StyleSheet, PixelRatio } from "react-native";

const styles = StyleSheet.create({
    commentContainer: {
        paddingRight: 5,
        marginBottom: 2,
        flexDirection: "row",

    },
    left: {
        padding: 5
    },
    image: {
        height: 30,
        width: 30,
        borderRadius: 15
    },
    right: {
        flex: 1
    },
    rightContent: {
        borderRadius: 10,
        padding: 5,
        backgroundColor: "#daedf9",
        elevation: 3,

    },
    rightContentTop: {
        flexDirection: "row"
    },

    name: {
        fontWeight: "bold",
        paddingBottom: 5
    },
    editIcon: {
        flex: 1,
        alignItems: "flex-end"
    },
    body: {
        paddingBottom: 10

    },
    rightActionBar: {
        paddingRight: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    time: {
        fontSize: 12,
        paddingLeft: 5,
        color: "#9B9B9B",
        fontStyle: "italic"
    },
    actionText: {
        color: "#9B9B9B",
        fontWeight: "bold"
    },
    repliedSection: {
        paddingTop: 15,
        paddingBottom: 20,
        width: 150,
        justifyContent: "space-between",
        flexDirection: "row"
    },
    repliedImg: {
        height: 20,
        width: 20,
        borderRadius: 10
    },
    repliedUsername: {
        color: "#9B9B9B"
    },
    repliedText: {
        color: "#9B9B9B"
    },
    repliedCount: {
        color: "#9B9B9B",
        fontSize: 11
    },
    inputSection: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
    },
    submit: {
        padding: 10
    },
    input: {
        flex: 1,
        padding: 10,
        backgroundColor: "#fff",
        color: "#424242"
    },
    likeNr: {
        fontWeight: "normal",
        fontSize: 12
    },
    likeHeader: {
        textAlign: "center",
        padding: 10,
        marginTop: 30,
        fontWeight: "bold"
    },
    likeButton: {
        margin: 10,
        alignItems: "center"
    },
    likeContainer: {
        padding: 10,
        width: 200,
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row"
    },
    likeImage: {
        width: 30,
        height: 30,
        borderRadius: 15
    },
    likename: {
        fontWeight: "bold",
        fontSize: 14
    },
    editModalContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    editModal: {
        backgroundColor: "white",
        margin: 10,
        paddingTop: 10,
        width: "90%",
        height: 300,
        borderWidth: 2,
        borderColor: "silver"
    },
    editButtons: {
        flexDirection: "row",
        justifyContent: "space-around",
        height: 40,
        width: 80,
        paddingLeft: 5,
        paddingRight: 5,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "silver",
        borderRadius: 5,
        margin: 10
    },
    menu: {
        borderWidth: 1,
        borderColor: "silver",
        zIndex: 999,
        width: 200,
        right: 0,
        top: 0,
        backgroundColor: "white",
        position: "absolute"
    },
    menuItem: {
        padding: 10,
        height: 40,

        justifyContent: "center"
    },
    menuText: {
        textAlign: "center"
    },

    darkButtonStyle: {
        
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: "#526674",
        marginTop:7,
        marginBottom:7,
        paddingHorizontal: 4,
        borderRadius:20
      },

      darkButtonStyleStretch:{
        flex:1,
        alignSelf: 'stretch',
        justifyContent: "center",
        backgroundColor: "#526674",
        marginTop:7,
        marginBottom:7,
        marginLeft: 40,
        marginRight:40,
        borderRadius:20
      },
      
      darkButtonText: {
        fontSize: 22,
        fontWeight: '900',
        paddingTop: 6,
        paddingBottom:6,
        color:'white',
        textAlign: 'center',
    },

    lightBlueContainer: {
        
        paddingTop:4,
        paddingLeft: 4,
        paddingRight:4,
        paddingBottom:4,
        minHeight: 190,
        backgroundColor: "#daedf9",
        borderRadius:20,
        marginBottom: 4,
        marginTop: 4,
        marginLeft: 40,
        marginRight:40,
        elevation: 3,
    },

    smallBlackText:{
    
        lineHeight: 25,
        fontSize: 15,
        fontWeight: '600',
        color: 'black',
        textAlign: 'center'
            
      },

      medumBlackText:{
        lineHeight: 32,
        fontSize: 22,
        fontWeight: '600',
        color: 'black',
        textAlign: 'center'
      },

      modalImage:{
        width:300,
        height: 300,
        resizeMode:'contain'
      }
});

export default styles;
