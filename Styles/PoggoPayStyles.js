/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';


export const Styles = StyleSheet.create({
//-----------General Screens----------//
  topContainer: {
    backgroundColor: '#F4AE4A',
    paddingTop: 20,
    height: 180,
    zIndex: -2,
  },
  elipseRight: {
    display: 'flex',
    alignItems: 'flex-end',
    marginTop: -20,
  },
  titleContainer: {
    marginTop: -20,
    paddingBottom: 30,
    display: 'flex',
    alignItems: 'center',
  },
  textTitle: {
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 29,
    color: '#023047',
  },
  elipseLeft: {
    marginTop: -45,
  },
  petsBox: {
    display: 'flex',
    alignItems: 'center',
    marginTop: -100,
  },
  petsBox2: {
    display: 'flex',
    alignItems: 'center',
    marginTop: -85,
  },
  viewSection: {
    backgroundColor: '#FFFBE7',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    marginTop: -30,
    zIndex: -1,
  },
  viewSection2: {
    backgroundColor: '#FFFBE7',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    marginTop: -15,
    zIndex: -1,
  },
  viewSection3: {
    marginTop: -15,
    backgroundColor: '#FFFBE7',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    zIndex: -1,
  },
  //------------Home Screen------------//
  welcomeBox: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 20,
  },
  welcomeText: {
    fontFamily: 'Poppins-SemiBold',
    color: '#FCBF49',
    fontWeight: '600',
    fontSize: 36,
  },
  poggoText: {
    marginTop: -10,
    fontFamily: 'Poppins-SemiBold',
    color: '#000000',
    fontWeight: '600',
    fontSize: 20,
  },
  blueBottonBox: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 20,
    zIndex: 1,
  },
  blueBottonBox2: {
    display: 'flex',
    alignItems: 'center',
    padding: 30,
  },
  blueBotton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#219EBC',
    borderRadius: 6,
    width: 160,
    height: 40,
    elevation: 8,
  },
  blueButtonText: {
    fontFamily: 'Poppins-Regular',
    textTransform: 'capitalize',
    color: '#fff',
  },
  lineImage: {
    marginTop: -35,
    zIndex: -1,
  },
  lineImage2: {
    marginTop: -20,
    zIndex: -1,
  },
  statusCredit: {
    display: 'flex',
    alignItems: 'center',
    marginTop: -100,
    // paddingTop: 30,
  },
  statusCreditText: {
    fontFamily: 'Poppins-Regular',
    color: '#000000',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  imageR: {
    // display: 'flex',
    justifyContent:'flex-end',
  },
  line2Image: {
    height: 100,
    zIndex: 1,
  },
  titleBoxHome: {
    flexDirection:'row',
    alignItems: 'center',
    marginTop: -85,
    paddingTop: 30,
    paddingLeft: 30,
  },
  cardHourBox: {
    flexDirection: 'row',
    justifyContent:'center',
    alignContent: 'center',
    padding: 15,
  },
  cardHour: {
    display: 'flex',
    justifyContent:'space-between',
    alignContent: 'center',
    backgroundColor: '#DFF1F9',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    padding: 10,
    margin: 5,
    width: 80,
    borderRadius: 12,
  },
  hourTitle: {
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    color: '#000000',
  },
  hour: {
    textAlign: 'center',
    fontFamily: 'Poppins-Light',
    color: '#000000',
  },
  boneImage: {
    display: 'flex',
    alignItems: 'flex-end',
    paddingRight: 15,
    marginTop: -65,
  },
  articuleBox: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 10,
  },
  articuleBox2: {
    display: 'flex',
    alignItems: 'center',
    marginTop: -173,
  },
  articuleCard: {
    backgroundColor: '#FFFFFF',
    // width: 300,
    flexDirection: 'row',
    borderRadius: 14,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  artextBox: {
    paddingLeft: 10,
    width: 250,
  },
  artitleText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#000000',
  },
  artText: {
    fontFamily: 'Poppins-Light',
    fontSize: 11,
    color: '#000000',
  },
  readmoreButton: {
    backgroundColor: 'rgba(252, 191, 73, 0.21);',
    alignItems: 'center',
    width: 85,
    padding: 2,
    borderRadius: 5,
    marginTop: 3,
  },
  readmoreText: {
    fontFamily: 'Poppins-Light',
    color: '#FB8500',
    fontSize: 10,
  },
  boxTitle: {
    display: 'flex',
    alignItems: 'center',
  },
//-----------Services Component------------//
titleBox: {
  flexDirection: 'row',
  alignItems: 'center',
  paddingTop: 30,
  paddingLeft: 30,
},
titleBox2: {
  flexDirection: 'row',
  display: 'flex',
  alignItems: 'center',
  paddingTop: 30,
},
titleBox3: {
  flexDirection: 'row',
  display: 'flex',
  alignItems: 'center',
  paddingTop: 30,
  paddingBottom: 30,
},
textBox: {
  display: 'flex',
  alignItems: 'center',
  padding: 10,
},
infoText: {
  fontFamily: 'Poppins-Light',
  textAlign: 'center',
  color: '#000000',
  fontSize: 15,
},
titleText: {
  fontFamily: 'Poppins-Medium',
  color: '#000000',
  // textDecorationLine: 'underline',
  // textDecorationColor: '#FB8500',
  fontSize: 20,
},
icons: {
  paddingRight: 8,
},
cards: {
  backgroundColor: '#FFFFFF',
  shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  width: 150,
  height: 120,
  paddingTop: 15,
  paddingLeft: 15,
  margin: 10,
  borderRadius: 14,
},
textCard: {
  fontFamily: 'Poppins-Regular',
  color: '#000000',
  paddingTop: 5,
  paddingBottom: 10,
},
costText: {
  fontFamily: 'Poppins-Medium',
  color: '#FB8500',
  fontSize: 12,
},
seeMoreBox: {
  paddingTop: 10,
  borderRadius: 2,
},
seeMoreButton: {
  backgroundColor: 'rgba(0, 209, 255, 0.39);',
  alignItems: 'center',
  width: 85,
  padding: 2,
  borderRadius: 5,
},
seeMoreText: {
  color: '#007C9A',
},
//-----------Map Screen------------//
foundBox: {
  flexDirection:'row',
  alignItems: 'center',
  paddingLeft: 30,
},
foundText: {
  fontFamily: 'Poppins-Light',
  fontSize: 15,
},
mapBox: {
  paddingLeft: 30,
  paddingRight: 30,
  width: 333,
  height: 300,
},
map: {
  width: 333,
  height: 300,
},
formBox: {
  paddingTop: 30,
  paddingLeft: 15,
  paddingRight: 15,
  paddingBottom: 20,
},
labelText: {
  marginLeft: 15,
  marginBottom: -10,
  fontFamily: 'Poppins-Medium',
  color: '#000000',
  fontSize: 15,
},
input: {
  backgroundColor: '#FFFFFF',
  height: 40,
  margin: 12,
  borderRadius: 6,
  padding: 10,
  shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
},
titleForm: {
  fontFamily: 'Poppins-Bold',
  color: '#000000',
  fontSize: 20,
},
docsBottonBox: {
  // display: 'flex',
  // alignItems: 'center',
  paddingBottom: 20,
  paddingLeft: 10,
},
docsBotton: {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#219EBC',
  borderRadius: 6,
  width: 260,
  height: 40,
  elevation: 8,
},
submitBox: {
  display: 'flex',
  alignItems: 'flex-end',
  paddingTop: 50,
  paddingBottom: 10,
},
submitBotton: {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#FB8500',
  borderRadius: 6,
  width: 120,
  height: 40,
  elevation: 8,
},
serviceBox: {
  display: 'flex',
  alignItems: 'center',
  padding: 15,
  marginTop: -170,
},
cardServicesBox: {
  backgroundColor: '#FFFFFF',
  borderRadius: 8,
  padding: 20,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.27,
  shadowRadius: 4.65,
  elevation: 6,
},
cardTitle: {
  fontFamily: 'Poppins-Medium',
  fontSize: 12,
  color: '#000000',
  textAlign: 'center',
  marginBottom: 10,
},
cardText: {
  fontFamily: 'Poppins-Light',
  fontSize: 10,
  color: '#000000',
  textAlign: 'justify',
},
serviceBoxGeneric: {
  display: 'flex',
  // alignItems: 'center',
  padding: 20,
  width: 390,
  marginTop: -179,
},
cardServicesBoxGeneric: {
  backgroundColor: '#FFFFFF',
  borderRadius: 8,
  padding: 20,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.27,
  shadowRadius: 4.65,
  elevation: 6,
  // margin: 10,
},
cardTitleGeneric: {
  fontFamily: 'Poppins-Medium',
  fontSize: 12,
  color: '#000000',
  // textAlign: 'center',
  marginBottom: 10,
},
cardTextGeneric: {
  fontFamily: 'Poppins-Light',
  fontSize: 10,
  color: '#000000',
  // textAlign: 'justify',
},
pawImage: {
  display: 'flex',
  alignItems: 'flex-end',
},
});
