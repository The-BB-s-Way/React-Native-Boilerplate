import { StyleSheet } from 'react-native';
import { Constants } from '../constants/Constants';

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingVertical: 30,
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
  },
  title: {
    color:  Constants.COLORS.cdfBlue,
    fontWeight: 'bold',
    fontSize: 23,
    paddingHorizontal: 30,
    // fontFamily: Constants.COLORSmily.bold,
  },
  subtext: {
    marginTop: 5,
    fontWeight: 'normal',
    color:  Constants.COLORS.cdfBlue,
    fontSize: 20,
    paddingHorizontal: 30
  },
  input: {
    marginTop: 20,
    width: 300,
    backgroundColor: '#fff',
    borderWidth: 0,
  },
  whiteBtn: {
    backgroundColor: '#fff',
    borderRadius: 20,

    borderWidth: 0,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: 'black',
    shadowOpacity: 0.05,
    elevation: 3,

    borderColor:  Constants.COLORS.cdfBlue,
    width: 130
  },
  whiteBtnText: {
    color:  Constants.COLORS.cdfBlue,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 13,
  },
  orangeBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 13,
  },
  addressBtn: {
    marginTop: 20,
    backgroundColor: '#fafafa',
    borderWidth: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor:  Constants.COLORS.cdfBlue,
  },
  addressBtnText: {
    color:  Constants.COLORS.cdfBlue,
    fontWeight: 'bold',
    fontSize: 15,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor:  Constants.COLORS.cdfBlue,
  },
  addressText: {
    color:  Constants.COLORS.cdfBlue,
    fontWeight: 'bold',

    width: 300,
    textAlign: 'center',
    paddingTop: 10
  },
  addressBtnTextWhite: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#fff',
  },
  orangeButton: {
    backgroundColor:  Constants.COLORS.cdfOrange,
    borderRadius: 20,

    borderWidth: 0,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: 'black',
    shadowOpacity: 0.05,
    elevation: 3,

    borderColor:  Constants.COLORS.cdfBlue,
    width: 130
  },
  sectionName: {
    color:  Constants.COLORS.cdfBlue,
    fontWeight: 'bold',
    fontSize: 18,
  },
  dateButton: {
    backgroundColor: '#fff',
    borderRadius: 20,

    borderWidth: 0,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: 'black',
    shadowOpacity: 0.05,
    elevation: 3,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    flex: 1
  },
  dateButtonChecked: {
    backgroundColor:  Constants.COLORS.cdfOrange,
    borderRadius: 20,

    borderWidth: 0,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: 'black',
    shadowOpacity: 0.05,
    elevation: 3,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    flex: 1
  },
  customDatePicker: {
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: '#000',

    borderWidth: 0,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: 'black',
    shadowOpacity: 0.05,
    elevation: 3,

    borderColor:  Constants.COLORS.cdfBlue,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    flex: 1
  },
  customDatePickerCheckedText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  customDatePickerChecked: {
    backgroundColor:  Constants.COLORS.cdfOrange,
    borderRadius: 20,
    shadowColor: '#000',

    borderWidth: 0,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: 'black',
    shadowOpacity: 0.05,
    elevation: 3,

    borderColor:  Constants.COLORS.cdfBlue,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    flex: 1,
  },
  timeButton: {
    backgroundColor: '#fff',
    borderRadius: 20,

    width: 105,

    borderWidth: 0,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: 'black',
    shadowOpacity: 0.05,
    elevation: 3,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    flex: 1,
    marginLeft: 25
  },

  'timeButton:first-child': {
    marginLeft: 25
  },

  timeButtonChecked: {
    backgroundColor:  Constants.COLORS.cdfOrange,
    borderRadius: 20,

    width: 105,

    borderWidth: 0,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: 'black',
    shadowOpacity: 0.05,
    elevation: 3,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    flex: 1,
    marginLeft: 25
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  contactButton: {
    backgroundColor:  Constants.COLORS.cdfBlue,
    borderWidth: 0,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: 'black',
    shadowOpacity: 0.05,
    elevation: 3,
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  contactText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    paddingHorizontal: 20,
  },
});

export const addressPageStyles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    fontSize: 18,
    height: '100%'
  },
  searchSection: {
    width: '100%',
    height: 40,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    color:  Constants.COLORS.cdfBlue,
    fontWeight: 'bold',
    fontSize: 20,    
  },
  autocompleteElement: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F2',
  },
  autocompleteElementText: {
    color:  Constants.COLORS.cdfBlue,
    fontWeight: 'normal',
    fontSize: 16,
    marginLeft: 10,
  },
});

export const bottomSheetStyles = StyleSheet.create({
  bottomSheet: {
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
    marginTop: 20,
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
  },
  headerText: {
    color:  Constants.COLORS.cdfBlue,
    fontWeight: 'normal',
    fontSize: 20,
  },
  bottomSheetInput: {
    width: '100%',
    borderWidth: 2,
    marginTop: 20,
  },
  subtitles: {
    color:  Constants.COLORS.cdfBlue,
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
  },
  lastPositions: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    marginTop: 20,
    paddingHorizontal: 30,
  },
  lastPositionElement: {
    marginBottom: 10,
    width: '100%',
    paddingVertical: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  currentPositionButton: {
    borderColor:  Constants.COLORS.cdfBlue,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 20,
    gap: 10
  },
  currentPositionButtonText: {
    color:  Constants.COLORS.cdfBlue,
    fontWeight: 'bold',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});