import { createContext, useState, useEffect } from 'react';
import 'firebase/firestore';
import { db, auth } from './firebase/config'
import { Link, useHistory } from 'react-router-dom'


export const AuthContext = createContext("");

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const history = useHistory();

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: (email, password) => {
                    auth.signInWithEmailAndPassword(email, password)
                    history.push("/feed")
                },
                register: (fullName, email, password, confirmPassword) => {
                    if (password !== confirmPassword) {
                        alert("Error: Passwords don't match.")
                        return
                    } else {
                        auth.createUserWithEmailAndPassword(email, password)
                            .then((res) => {
                                const uid = res.user.uid
                                const data = {
                                    id: uid,
                                    email,
                                    fullName,
                                };
                                const usersRef = db.collection('users')
                                usersRef
                                    .doc(uid)
                                    .set(data)
                                    .then(() => history.push('/test'))
                                    .catch((err) => {
                                        alert(err)
                                    });
                            })
                            .catch((error) => {
                                alert(error)
                            })
                    }
                },
                logout: () => {
                    auth.signOut()
                    // .then(() => {
                    //     console.log('logged out')
                    // }).catch((error) => {
                    //     console.log(error.message)
                    // })
                },
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}