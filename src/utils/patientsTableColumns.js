import { Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export const patientsTableColumns = (navigate) => [
  {
    name: "name",
    label: "Nome",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "age",
    label: "Idade",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "lastVisit",
    label: "Ultimo ingresso",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "address",
    label: "Residencia",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "phone",
    label: "Contacto",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "id",
    label: "Acção",
    options: {
      sort: false,
      filter: false,
      customBodyRender: (value) => {
        return (
          <div>
            <IconButton
              onClick={() => navigate("/patients/" + value)}
              color="warning"
              aria-label="delete"
              size="large"
            >
              <Edit />
            </IconButton>
          </div>
        );
      },
    },
  },
];

export const archiveTableColumns = (navigate) => [
  {
    name: "regType",
    label: "Tipo de registro",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "docType",
    label: "Tipo de documento",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "docRef",
    label: "Referencia",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "abr",
    label: "Instituicao (Abr)",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "office",
    label: "Instituicao",
    options: {
      filter: true,
      sort: false,
      display: false,
    },
  },
  {
    name: "subject",
    label: "Assunto",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "date",
    label: "Data do documento",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "createdAt",
    label: "Data de recebimento",
    options: {
      filter: true,
      sort: false,
      display: false,
    },
  },
  {
    name: "id",
    label: "Acção",
    options: {
      sort: false,
      filter: false,
      customBodyRender: (value) => {
        return (
          <div>
            <IconButton
              onClick={() => navigate("/documents/" + value)}
              color="warning"
              aria-label="delete"
              size="large"
            >
              <Edit />
            </IconButton>
          </div>
        );
      },
    },
  },
];
