import {
  addDoc,
  collection,
  getDocs,
  limit,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { setSettings } from "../redux/actions/settings";
import store from "../redux/store";
import { db } from "../utils/firebase";

//Create Settings
export const createRegType = async ({ name, description }) => {
  const data = {
    name,
    description,
    createdAt: new Date().toISOString(),
  };
  const docRef = await addDoc(collection(db, "setRegTypes"), data);

  return {
    ...data,
    id: docRef.id,
  };
};

export const createRegNum = async ({ description, startNum, year }) => {
  const hasActive = await getDocs(
    collection(db, "setRegNums"),
    where("isActive", "==", true),
    limit(1)
  );

  if (!hasActive.empty) {
    await updateDoc(hasActive.docs[0].ref, {
      isActive: false,
    });
  }

  const data = {
    description,
    startNum: Number(startNum),
    year,
    counter: Number(startNum),
    isActive: true,
    createdAt: new Date().toISOString(),
  };

  const docRef = await addDoc(collection(db, "setRegNums"), data);

  return {
    ...data,
    id: docRef.id,
  };
};

export const createDocType = async ({ name, description }) => {
  const data = {
    name,
    description,
    createdAt: new Date().toISOString(),
  };
  const docRef = await addDoc(collection(db, "setDocTypes"), data);

  return {
    ...data,
    id: docRef.id,
  };
};

export const createNewTag = async ({ abr, description }) => {
  const data = {
    abr: abr.toUpperCase(),
    description,
    createdAt: new Date().toISOString(),
  };
  const docRef = await addDoc(collection(db, "setTags"), data);

  return {
    ...data,
    id: docRef.id,
  };
};

export const createOffice = async ({
  name,
  abr,
  phone,
  manager,
  email,
  location,
}) => {
  const data = {
    name,
    abr: abr.toUpperCase(),
    phone,
    manager,
    email,
    location,
    createdAt: new Date().toISOString(),
  };

  const docRef = await addDoc(collection(db, "setOffices"), data);

  return {
    ...data,
    id: docRef.id,
  };
};

//Fetch settings
export const fetchAllSettings = async () => {
  let settings = {
    docTypes: [],
    offices: [],
    regNum: {},
    regTypes: [],
    tags: [],
  };
  const docTypesQ = await getDocs(query(collection(db, "setDocTypes")));
  const officesQ = await getDocs(query(collection(db, "setOffices")));
  const regNumsQ = await getDocs(
    query(collection(db, "setRegNums"), where("isActive", "==", true), limit(1))
  );
  const regTypesQ = await getDocs(query(collection(db, "setRegTypes")));
  const tagsQ = await getDocs(query(collection(db, "setTags")));

  docTypesQ.forEach((doc) =>
    settings.docTypes.push({ ...doc.data(), id: doc.id })
  );
  officesQ.forEach((doc) =>
    settings.offices.push({ ...doc.data(), id: doc.id })
  );
  regTypesQ.forEach((doc) =>
    settings.regTypes.push({ ...doc.data(), id: doc.id })
  );
  tagsQ.forEach((doc) => settings.tags.push({ ...doc.data(), id: doc.id }));
  settings.regNum = regNumsQ.docs[0].data();

  store.dispatch(setSettings(settings));

  return true;
};
