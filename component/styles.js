import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  headerBackground: {
    flex: 0.2,
    resizeMode: 'center',
    justifyContent: 'center',
    padding: 0,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    backgroundColor: 'transparent',
    color: '#01010F', 
    padding: 5,
    textAlign: 'center',
  },
  textContainer: {
    width: '99%',
    marginTop: 50,
    padding: 5,
    backgroundColor: '#3B9EC5',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 5,
    width: '100%',
  },
  announcementList: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  announcementItem: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  announcementName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  announcementTime: {
    fontSize: 14,
    color: '#000',
  },
  announcementDescription: {
    fontSize: 14,
    color: '#000',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3B9EC5',
  },
  button: {
    backgroundColor: '#3B9EC5',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default styles;