import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPatientDetails, fetchPatientRegs } from "../../api/patients";
import ActionButtons from "./ActionButtons";
import InfoCard from "./InfoCard";
import Paper from "@mui/material/Paper";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Box } from "@mui/material";
import dayjs from "dayjs";

function Patient() {
  const [state, setState] = useState({});
  const [regs, setRegs] = useState([]);
  const params = useParams();
  const userId = params.userId;
  useEffect(() => {
    fetchPatientDetails(userId).then((data) => {
      setState({ ...state, ...data });
    });

    fetchPatientRegs(userId).then((data) => {
      setRegs(data);
    });
  }, [userId]);

  return (
    <div className="columns is-centered">
      <div className="column is-3">
        <ActionButtons patientId={userId} />
      </div>
      <div className="column is-8">
        <InfoCard state={state} />
        {regs.length > 0 ? (
          regs.map((el, index) => {
            return (
              <Paper key={index} sx={{ mt: 2, mb: 2, p: 2 }}>
                <Box display="flex" justifyContent="space-between">
                  <Box display="flex">
                    <ListItemIcon>
                      <div class="icon-text">
                        <span class="icon">
                          <i class="fas fa-file"></i>
                        </span>
                      </div>
                    </ListItemIcon>
                    <div>
                      <h1 className="has-text-info subtitle mb-0 has-text-weight-bold">
                        {el.subject}
                      </h1>
                      <p className="has-text-weight-bold help">
                        {dayjs(el.createdAt).format("DD-MMM-YYYY")}
                      </p>
                      <p>{el.description}</p>
                      <br />
                      <a href={el.file} className="button is-info">
                        Visualizar ficheiro
                      </a>
                    </div>
                  </Box>
                </Box>
              </Paper>
            );
          })
        ) : (
          <>Este paciente não possui registros.</>
        )}
      </div>
    </div>
  );
}

export default Patient;
