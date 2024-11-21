import { createContext, useState, useEffect } from "react";

import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

//as the actual value you want you to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

//provider is allowing any of its child components to access the values inside of useState
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value ={ currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if(user){
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    })

    return unsubscribe
  }, [])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
