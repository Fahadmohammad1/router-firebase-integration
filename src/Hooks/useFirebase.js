// import { useEffect, useState } from "react";
// import {
//   getAuth,
//   GoogleAuthProvider,
//   onAuthStateChanged,
//   signInWithPopup,
//   signOut,
// } from "firebase/auth";
// import app from "./../firebase.init";

// const useFirebase = () => {
//   const auth = getAuth(app);
//   const googleProvider = new GoogleAuthProvider();
//   const [user, setUser] = useState({});

//   const handleSignIn = () => {
//     signInWithPopup(auth, googleProvider)
//       .then((result) => {
//         const user = result.user;
//         setUser(user);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };
//   const handleSignOut = () => {
//     signOut(auth).then(() => {});
//   };
//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       setUser(user);
//     });
//   }, []);
//   return { user, setUser, handleSignIn, handleSignOut };
// };

// export default useFirebase;
