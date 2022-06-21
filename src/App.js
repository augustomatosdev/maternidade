import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Layout from "./layout";
import Settings from "./components/settings";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchAllSettings } from "./api/settings";
import Loading from "./components/ui/Loading";
import Auth from "./components/auth";
import { onAuthStateChanged } from "firebase/auth";
import { fetchCredentials } from "./api/auth";
import { auth } from "./utils/firebase";
import { setAuthenticated } from "./redux/actions/auth";
import Patients from "./components/patients";
import NewPatient from "./components/newPatient";
import Patient from "./components/patient";
import CurrentArchive from "./components/currentArchive";

function App() {
  const [loading, setLoading] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchCredentials(user.uid);
      } else {
        console.log("No user");
      }
    });
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      setLoading(true);
      fetchAllSettings()
        .then(() => {
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, [isAuthenticated]);

  // <Loading />
  return (
    <BrowserRouter>
      {isAuthenticated ? (
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/patients/create" element={<NewPatient />} />
            <Route path="/patients/:userId" element={<Patient />} />
            <Route path="/archive/current" element={<CurrentArchive />} />
          </Routes>
        </Layout>
      ) : (
        <Routes>
          <Route path="/" element={<Auth />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
