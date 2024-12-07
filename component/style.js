import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', 
    padding: 1,
  },
  headerBackground: {
    width: '100%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  titleContainer: {
    backgroundColor: '#3B9EC5',
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#080A4F',
    marginBottom: 20, 
  },
  personnelTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#3B9EC5',
    paddingVertical: 5,
    paddingHorizontal: 10,
    textAlign: 'left',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: '#3B9EC5',
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 30, 
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  Homebutton: {
    backgroundColor: '#3B9EC5',
    paddingVertical: 20, 
    paddingHorizontal: 30, 
    alignItems: 'center',
    justifyContent: 'center', 
  },
  HomebuttonText: {
    color: '#fff', 
    fontSize: 24, 
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 15,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  cancelButton: {
    backgroundColor: '#3B9EC5',
  },
  deleteButton: {
    backgroundColor: '#d9534f',
  },
  saveButton: {
    backgroundColor: '#243568',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scrollView: {
    maxHeight: 200,
    marginBottom: 20,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tableRowText: {
    fontSize: 16,
    flex: 1,
    textAlign: 'center',
    borderRightWidth: 1,
    borderRightColor: '#ddd',
  },
  tableRowTextLast: {
    borderRightWidth: 1,
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 5,
  },
  background: {
    flex: 1, 
  },
});

export default styles;
