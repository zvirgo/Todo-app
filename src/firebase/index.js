import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCAefyA5o8c_cBGYUBwWip8MwhH2TVOcXU",
    authDomain: "todo-react-app-5df2a.firebaseapp.com",
    projectId: "todo-react-app-5df2a",
    storageBucket: "todo-react-app-5df2a.appspot.com",
    messagingSenderId: "20648455723",
    appId: "1:20648455723:web:da12879f210f8d478b046e"
}

firebase.initializeApp(firebaseConfig)

export default firebase