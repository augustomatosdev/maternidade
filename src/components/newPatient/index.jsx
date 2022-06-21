import React, { useState } from "react";
import FormTabs from "./FormTabs";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { registerPatient } from "../../api/patients";
import { useNavigate } from "react-router-dom";

const initialState = {
  fName: "",
  lName: "",
  gender: "female",
  birthDate: "",
  idNum: "",
  nationality: "",
  email: "",
  phone: "",
  address: "",
  province: "Cuanza Sul",
  municipalty: "",
  emergencyPerson: "",
  emergencyPhone: "",
  maritalStatus: "married",
  job: "",
  smoker: "no",
  childrenNum: "",
  observations: "",
  background: "",
  treatments: "",
  surgeries: "",
};

function NewPatient() {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState(initialState);
  const navigate = useNavigate();

  const clearState = () => {
    setState(initialState);
    setLoading(false);
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (hasMore) => {
    setLoading(true);
    registerPatient(state)
      .then((id) => {
        if (hasMore) {
          clearState();
        } else {
          clearState();
          navigate(`/patients/${id}`);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const disabled = !state.idNum || !state.fName;

  console.log(state);
  return (
    <div>
      <h1 className="title has-text-centered">Cadastrar novo paciente</h1>
      <FormTabs state={state} handleChange={handleChange} />
      <br />
      <div className="columns">
        <div className="column is-6">
          <Stack
            spacing={2}
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
          >
            <Button
              onClick={() => handleSubmit(true)}
              disabled={disabled || loading}
              variant="contained"
            >
              Cadastrar e novo
            </Button>
            <div style={{ display: "flex" }}>
              <Button
                onClick={() => navigate("/")}
                sx={{ marginRight: 2 }}
                variant="outlined"
              >
                Cancelar
              </Button>
              <Button
                onClick={() => handleSubmit(false)}
                disabled={disabled || loading}
                variant="contained"
              >
                Cadastar
              </Button>
            </div>
          </Stack>
        </div>
        <div className="column is-6"></div>
      </div>
    </div>
  );
}

export default NewPatient;
