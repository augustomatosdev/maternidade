import {
  CardContent,
  Divider,
  Button,
  Box,
  Card,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import RegNumModal from "./RegNumModal";
import RegTypeModal from "./RegTypeModal";
import DocTypeModal from "./DocTypeModal";
import NewOfficeModal from "./NewOfficeModal";
import NewTagModal from "./NewTagModal";

const settings = [
  {
    title: "Tipos de Registros",
    modal: "regType",
  },
  {
    title: "Configurar Numeração",
    modal: "regNum",
  },
  {
    title: "Tipos de Documentos",
    modal: "docType",
  },
  {
    title: "Configurar Gabinetes",
    modal: "newOffice",
  },
  {
    title: "Configurar Etiquetas",
    modal: "newTag",
  },
  {
    title: "Utilizadores",
  },
  {
    title: "Classificador",
  },
  {
    title: "Pastas",
  },
];

function Settings() {
  const [selectedModal, setSelectedModal] = useState("");
  const handleClose = () => setSelectedModal("");

  return (
    <Box>
      {/* modals */}
      <RegTypeModal selectedDialog={selectedModal} handleClose={handleClose} />
      <RegNumModal selectedDialog={selectedModal} handleClose={handleClose} />
      <DocTypeModal selectedDialog={selectedModal} handleClose={handleClose} />
      <NewOfficeModal
        selectedDialog={selectedModal}
        handleClose={handleClose}
      />
      <NewTagModal selectedDialog={selectedModal} handleClose={handleClose} />

      {/* End of modals */}
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
        Configurações do sistema
      </Typography>
      <Grid container spacing={2}>
        {settings.map((el, index) => (
          <Grid key={index} item xs={6} md={3}>
            <Card>
              <Box
                height={38}
                bgcolor="primary.light"
                display="flex"
                justifyContent="center"
                alignItems="center"
                color="white"
              >
                {el.title}
              </Box>
              <Divider />
              <CardContent>
                <Box display="flex" flexDirection="column">
                  <Button
                    variant="contained"
                    sx={{ margin: 1, bgcolor: "GrayText" }}
                    size="small"
                    onClick={() => setSelectedModal(el.modal)}
                  >
                    Cadastrar
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ margin: 1, bgcolor: "GrayText" }}
                    size="small"
                  >
                    Ver todos
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Settings;
