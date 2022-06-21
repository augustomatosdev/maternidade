import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { setPatients } from "../redux/actions/patients";
import store from "../redux/store";
import { db } from "../utils/firebase";

export const registerPatient = async (regData) => {
  const data = {
    ...regData,
    idNum: regData.idNum.toUpperCase(),
    createdAt: new Date().toISOString(),
  };

  const idNumber = regData.idNum.toUpperCase();

  const isRegistered = await getDocs(
    query(collection(db, "patients"), where("idNum", "==", idNumber), limit(1))
  );

  if (!isRegistered.empty) {
    alert("Atenção! Este paciente ja foi cadastrado.");
    return isRegistered.docs[0].id;
  }

  const docRef = await addDoc(collection(db, "patients"), data);

  alert("Paciente cadastrado com sucesso!");

  return docRef.id;
};

export const fetchPatients = async () => {
  const existingPatients = store.getState().patients;
  if (existingPatients.length > 0) return;

  const res = await getDocs(
    query(collection(db, "patients"), orderBy("createdAt", "desc"), limit(100))
  );
  const patients = [];
  res.forEach((doc) => patients.push({ ...doc.data(), id: doc.id }));
  store.dispatch(setPatients(patients));

  return true;
};

export const fetchPatientDetails = async (userId) => {
  let user = {};

  const userExists = store
    .getState()
    .patients?.patients.filter((el) => el.id === userId);
  if (userExists.length > 0) {
    user.credentials = userExists[0];
  } else {
    const userRes = await getDoc(doc(db, "patients", userId));
    user.credentials = userRes.data();
  }

  return user;
};

export const fetchPatientRegs = async (userId) => {
  const regs = [];
  const response = await getDocs(
    query(collection(db, "patientsRegs"), where("patientId", "==", userId))
  );
  response.forEach((doc) => regs.push(doc.data()));
  return regs;
};

export const addPatientRegistry = async (data) => {
  const docRef = await addDoc(collection(db, "patientsRegs"), data);

  return { id: docRef.id, ...data };
};
