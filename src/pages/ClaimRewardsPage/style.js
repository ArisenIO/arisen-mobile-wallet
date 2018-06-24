/**
 * Created by dongjie on 20/6/18.
 */

import {Dimensions, StyleSheet} from "react-native";
const footerHeight = 45;

const styles = StyleSheet.create({
    bodyBox: {
        position: "relative",
        flexBasis: "100%",
        backgroundColor: "#eee",
        minHeight: Dimensions.get("window").height - 80,
    },
    contentBox: {
        minHeight: Dimensions.get("window").height,
    },


    footerView:{
        height:footerHeight,
        width:'100%',
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:'#3D4144',
    },


    footerSubmit:{
        width:'100%',
        color:'#ffffff',
        fontSize:20,
        lineHeight:45,
        // paddingTop:4,
        textAlign:'center',
    },
});
const countStyles = StyleSheet.create({
    countBox: {
        position: "relative",
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5,
        backgroundColor: "#fff",
        overflow: "hidden",
    },
    countItem: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
    },
    countName: {
        color: "#222",
        fontSize: 16,
        lineHeight: 60,
    },
    countValue: {
        color: "#181818",
        fontSize: 20,
        fontWeight: "600",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    countStakeValue: {
        color: "#F65858",
        fontSize: 20,
        fontWeight: "600",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    countValueUnit: {
        fontSize: 14,
        color: "#0c0c0c",
    },
});
const stakeStyles = StyleSheet.create({
    stakeBox: {
        position: "relative",
        marginTop: 25,
    },
    titleTipBox: {
        position: "relative",
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
    },
    titleTip: {
        color: "#999",
        fontSize: 16,
    },
    stakeConBox: {
        position: "relative",
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: "#fff",
    },
    stakeItem: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
    },
    stakeName: {
        color: "#222",
        fontSize: 16,
        lineHeight: 60,
    },
    stakeValue: {
        position: "relative",
    },
    stakeValueInput: {
        width: 180,
        height: 60,
        lineHeight: 60,
        color: "#222",
        textAlign: "right",
    },
    checkBox: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "flex-end",
        alignItems: "center",
    },
});
const ruleStyles = StyleSheet.create({
    ruleBox: {
        position: "relative",
        marginLeft: 15,
        marginRight: 15,
        marginTop: 25,
    },
    ruleTitle: {
        marginBottom: 5,
        color: "#555",
        fontSize: 16,
    },
    ruleDesc: {
        color: "#555",
        fontSize: 14,
        lineHeight: 28,
    },
});
const btnStyles = StyleSheet.create({
    btnBox: {
        position : "absolute",
        bottom : 5,
        width : "96%",
        left: "2%",
        backgroundColor: "#3D4144",
    },
    btn: {
        color: "#fff",
        fontSize: 18,
        lineHeight: 44,
        textAlign: "center",
    },
});



export {
    styles,
    countStyles,
    stakeStyles,
    ruleStyles,
    btnStyles,
};
