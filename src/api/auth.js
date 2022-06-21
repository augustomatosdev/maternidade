import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, doc, getDoc, getDocs, where } from "firebase/firestore";
import { setAuthenticated, setCredentials } from "../redux/actions/auth";
import store from "../redux/store";
import { auth, db } from "../utils/firebase";

export const login = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);

  store.dispatch(setAuthenticated(true));

  return true;
};

export const fetchCredentials = async (userId) => {
  store.dispatch(setAuthenticated(true));
  const credentials = await getDoc(doc(db, "users", userId));

  if (credentials.exists()) store.dispatch(setCredentials(credentials.data()));

  return true;
};
