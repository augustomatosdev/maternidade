import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { setCurrentArchive } from "../redux/actions/documents";
import store from "../redux/store";
import { db } from "../utils/firebase";

export const registerDoc = async (regData) => {
  const data = {
    ...regData,
    createdAt: new Date().toISOString(),
  };
  const docRef = await addDoc(collection(db, "archive"), data);

  return {
    ...data,
    id: docRef.id,
  };
};

export const getCurrentDocs = async () => {
  const archive = [];

  const response = await getDocs(
    query(collection(db, "archive"), where("needAnswer", "==", "yes"))
  );

  response.forEach((doc) => archive.push(doc.data()));

  store.dispatch(setCurrentArchive(archive));

  return archive;
};
