import { StyleSheet } from 'react-native';
import { Constants } from '../constants/Constants';

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    paddingVertical: 30,
  },
  title: {
    color: Constants.COLORS.cdfBlue,
    fontWeight: 'bold',
    fontSize: 23,
    paddingHorizontal: 30,
  },
  subtext: {
    marginTop: 5,
    fontWeight: 'normal',
    color: Constants.COLORS.cdfBlue,
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

    borderColor: Constants.COLORS.cdfBlue,
    width: 130
  },
  whiteBtnText: {
    color: Constants.COLORS.cdfBlue,
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
  whiteBtnTextTime: {
    color: Constants.COLORS.cdfBlue,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  orangeBtnTextTime: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
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
    borderColor: Constants.COLORS.cdfBlue,
  },
  addressBtnText: {
    color: Constants.COLORS.cdfBlue,
    fontWeight: 'bold',
    fontSize: 15,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: Constants.COLORS.cdfBlue,
  },
  addressText: {
    color: Constants.COLORS.cdfBlue,
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
    backgroundColor: Constants.COLORS.cdfOrange,
    borderRadius: 20,

    borderWidth: 0,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: 'black',
    shadowOpacity: 0.05,
    elevation: 3,

    borderColor: Constants.COLORS.cdfBlue,
    width: 130
  },
  sectionName: {
    color: Constants.COLORS.cdfBlue,
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
    backgroundColor: Constants.COLORS.cdfOrange,
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

    borderColor: Constants.COLORS.cdfBlue,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    width: 80,
  },
  customDatePickerCheckedText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  customDatePickerChecked: {
    backgroundColor: Constants.COLORS.cdfOrange,
    borderRadius: 20,
    shadowColor: '#000',

    borderWidth: 0,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: 'black',
    shadowOpacity: 0.05,
    elevation: 3,

    borderColor: Constants.COLORS.cdfBlue,
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

    // width: 105,
    width: (Constants.DIMENSIONS.SCREEN_WIDTH - 100) / 3,

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
    marginLeft: 20,

    borderWidth: 1,
    borderColor: '#F0F0F0',
  },

  timeButtonChecked: {
    backgroundColor: Constants.COLORS.cdfOrange,
    borderRadius: 20,

    // width: 105,
    width: (Constants.DIMENSIONS.SCREEN_WIDTH - 100) / 3,

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
    marginLeft: 20,

  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  contactButton: {
    backgroundColor: Constants.COLORS.cdfBlue,
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
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 30,
    width: '100%',
    height: '55%',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  modalText: {
    color: Constants.COLORS.cdfBlue,
    fontWeight: 'bold',
    fontSize: 20,
  },

  customOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000, // Assicurati che sia abbastanza alto
    borderWidth: 2,
    backgroundColor: '#00000030',
  },

  modesContainer: {
    display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: 30, paddingHorizontal: 30, gap: 20
  },

  deliveryMethodContainer: {
    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: 30
  },

  datesContainer: {
    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', backgroundColor: '#F0F0F0', marginTop: 30, paddingHorizontal: 30, paddingVertical: 30
  },

  datesTitleContainer: { display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '100%', gap: 10, backgroundColor: '#F0F0F0' },
  datesResultsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#F0F0F0',
    marginTop: 20,
    gap: 20
  },
  timesContainer: { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: 30, paddingVertical: 0 },
  timesTitleContainer: { display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '100%', gap: 10, paddingHorizontal: 30 },
  nextButtonContainer: { display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', width: '100%', marginTop: 30, paddingHorizontal: 30 },
  nextButtonSubContainer: { display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', width: '100%' }
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
    height: '100%',
  },
  searchSection: {
    width: '100%',
    height: 40,
    paddingHorizontal: 20,
    paddingVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10
  },
  title: {
    color: Constants.COLORS.cdfBlue,
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
    color: Constants.COLORS.cdfBlue,
    fontWeight: 'normal',
    fontSize: 16,
    marginLeft: 10,
  },
  submitAddress: {
    height: '100%',
    width: 30,
    backgroundColor: Constants.COLORS.cdfBlue,
    borderWidth: 0
  },
  utilityIcons: {
    position: 'absolute',
    right: 30,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    gap: 20,
    top: 20,

    paddingLeft: 10,
  }
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
    color: Constants.COLORS.cdfBlue,
    fontWeight: 'normal',
    fontSize: 20,
    paddingHorizontal: 30,
    fontWeight: 'bold',
    paddingTop: 20
  },
  bottomSheetInput: {
    width: '100%',
    borderWidth: 2,
    marginTop: 20,
  },
  subtitles: {
    color: Constants.COLORS.cdfBlue,
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
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F2',
  },
  currentPositionButton: {
    borderColor: Constants.COLORS.cdfBlue,
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
    color: Constants.COLORS.cdfBlue,
    fontWeight: 'bold',
    fontSize: 16,
    textDecorationLine: 'underline',
  },

});