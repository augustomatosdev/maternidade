import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchPatients } from "../../api/patients";
import PatientsTable from "./PatientsTable";

function Patients() {
  const patients = useSelector((state) => state.patients);
  useEffect(() => {
    fetchPatients()
      .then(() => {
        console.log("Patients fetched");
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(patients);
  return (
    <div>
      <div className="title has-text-centered">Pacientes</div>
      <PatientsTable />
    </div>
  );
}

export default Patients;
