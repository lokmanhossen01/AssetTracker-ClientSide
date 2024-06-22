import {
    GithubAuthProvider,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateEmail,
    updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import useAxiosEmployee from "../../Hooks/useAxiosEmployee";
import { auth } from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {

  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const axiosEmployee = useAxiosEmployee();

  const [verifiedUser, setVerifiedUser] = useState(null);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfile = (fullName, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: fullName,
      photoURL: photo,
    });
  };
  const updateUserEmail = (email) => {
    setLoading(true);
    return updateEmail(auth.currentUser, {
      email: email,
    });
  };
  const googleLoginWithUser = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const gitHubLoginUser = () => {
    setLoading(true);
    return signInWithPopup(auth, gitHubProvider);
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("current user", currentUser);
      if (currentUser) {
        const userInfo = { email: currentUser.email };
        axiosEmployee.post("/jwt", userInfo).then((res) => {
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
          }
        });
      } else {
        localStorage.removeItem("access-token");
      }
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);
  const authInfo = {
    user,
    createUser,
    signIn,
    loading,
    logOut,
    updateUserProfile,
    googleLoginWithUser,
    gitHubLoginUser,
    updateUserEmail,
    verifiedUser,
    setVerifiedUser,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
