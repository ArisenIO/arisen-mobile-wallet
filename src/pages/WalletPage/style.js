import {Dimensions, StyleSheet} from "react-native";

const styles = StyleSheet.create({
  bodyBox: {
    position: "relative",
    flexBasis: "100%",
    backgroundColor: "#fafafa",
    paddingLeft : 15,
  },
  contentBox: {
    paddingTop: 25,
    paddingRight:10,
  },
  titleBox: {
    position: "relative",
    marginBottom: 15,
  },
  titleTextTop: {
    fontSize: 18,
    color: "#222",
    textAlign: "right",
    lineHeight: 25,
    marginRight: 15,
  },
  contentMain :{
    width : "90%",
    marginLeft : "3%",
    paddingTop: 30,
  },
  ContentTitleText:{
    fontSize: 28,
    color: "#000",
    paddingBottom: 10,
  },
  ContentBg:{
    backgroundColor: "#000",
    borderRadius : 5,
    padding : 15
  },
  ContentBgTopText:{
    paddingTop: 20,
    color : "#fff",
    fontSize: 20,
  },
  ContentBgMid:{
    paddingTop: 25,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems : "center"
  },
  ContentBgMidText:{
    color : "#fafafa",
    fontSize: 18,
  },
  ContentBgMidBack:{

  },
  ContentBgMidAccount :{
    color : "#fff",
    fontSize : 26,
    fontWeight: "bold",
  },
  ContentBgMidName :{
    color : "#fff",
    fontSize : 18,
  },
  ContentBgBottomText:{
    color : "#fafafa",
    fontSize : 18,
    textAlign: "right"
  },
  ContentBgBottom :{
    paddingTop: 15,
  },
  bottomContent  :{
    position : "absolute",
    bottom : 40,
    width : "100%",
  },
  buttonSubmit:{
    width : "90%",
    marginLeft : "5%",
    backgroundColor: "#000",
    color : "#fff",
    textAlign: "center",
    fontSize : 18,
    paddingBottom : 10,
    paddingTop  :10,
    borderRadius: 3
  },
  // modal的样式
  modalStyle: {
    // backgroundColor:'#ccc',
    alignItems: 'center',
    justifyContent:'center',
    flex:1,
  },
  // modal上子View的样式
  subView:{
    marginLeft:60,
    marginRight:60,
    backgroundColor:'#fff',
    alignSelf: 'stretch',
    justifyContent:'center',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor:'#ccc',
  },
  // 标题
  titleText:{
    marginTop:10,
    marginBottom:5,
    fontSize:16,
    fontWeight:'bold',
    textAlign:'center',
  },
  // 内容
  contentText:{
    margin:10,
    paddingBottom : 20,
    paddingTop  :10,
    fontSize:14,
    textAlign:'center',
  },
  // 水平的分割线
  horizontalLine:{
    marginTop:5,
    height:0.5,
    backgroundColor:'#ccc',
  },
  // 按钮
  buttonView:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonStyle:{
    flex:1,
    height:44,
    alignItems: 'center',
    justifyContent:'center',
  },
  bodyFooterBox: {
    position: "absolute",
    bottom: 5,
    width: Dimensions.get("window").width,
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
  },
  bodyFooterFlg: {
    flex: 0,
    height: 5,
    width: Dimensions.get("window").width/2.5,
    borderRadius: 3,
    backgroundColor: "#222",
  },
});
export {
  styles
};
