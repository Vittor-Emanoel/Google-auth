
import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey: 'AIzaSyCOUNS5VxV55LhU1rv0jjSrI8lbrq6Cau4',
  authDomain: 'auth-36514.firebaseapp.com',
  projectId: 'auth-36514',
  storageBucket: 'auth-36514.appspot.com',
  messagingSenderId: '602666057072',
  appId: '1:602666057072:web:547556dc029bc3a943e3b5'
};


const app = initializeApp(firebaseConfig);//inicializa a conexeção da aplicação com o firebase

export const auth = getAuth(app); //obter os parametros de autenticação dessa aplicação.