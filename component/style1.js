import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerBackground: {
    width: '100%',
    height: 100, 
    justifyContent: 'center',
    alignItems: 'flex-start', 
    paddingHorizontal: 2, 
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', 
    paddingHorizontal: 6,

  },
  headerText: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#243568',
    marginTop: 30,
  },
  listContainer: {
    flex: 1,
    padding: 6,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    backgroundColor: '#3B9EC5',
    color: '#fff',
    padding: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff', 
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#3B9EC5',
    borderRadius: 5,
    padding: 10,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  messageSent: {
    alignSelf: 'flex-end',
    backgroundColor: '#3B9EC5',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    maxWidth: '80%', 
  },
  messageReceived: {
    alignSelf: 'flex-start',
    backgroundColor: '#ECECEC',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    maxWidth: '80%', 
  },
  messageText: {
    color: '#fff',
    fontWeight: 'bold',
     
  },
  personItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  personName: {
    fontSize: 18,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});