
import { createContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import PropTypes from 'prop-types';
import axios from 'axios';
import auth from "../../firebase.config";










export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {


    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const [reals, setReals] = useState([]);
   
   
  

  


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
       
    }
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    const logOut = () => {
        return signOut(auth)
    }

     
    

  useEffect(() => {
    axios.get('https://real-project-server-rnpz6w2mp-maliksakin53gmailcom.vercel.app/project')
      .then((response) => {
        setReals(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);






    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, userId => {
            setUser(userId)
            console.log('observing current user', userId)
            setLoading(false)
        });
        return () => {
            unSubscribe()
        }
    }, [])

    const authInfo = {
        user,
        reals,
        loading,
        createUser,
        logOut,
        signInUser,
      
    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthProvider;
AuthProvider.propTypes = {
    children:PropTypes.node
}