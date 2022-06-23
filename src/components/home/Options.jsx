import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Card, Typography } from "@mui/material";
import PostAddIcon from "@mui/icons-material/PostAdd";

const options = [
  {
    title: "Pacientes",
    icon: (
      <h1
        style={{ fontSize: 60 }}
        className="has-text-info has-text-weight-bold"
      >
        80
      </h1>
    ),
  },
  {
    title: "Documentos",
    icon: (
      <h1
        style={{ fontSize: 60 }}
        className="has-text-info has-text-weight-bold"
      >
        140
      </h1>
    ),
  },
  {
    title: "Partos",
    icon: (
      <h1
        style={{ fontSize: 60 }}
        className="has-text-info has-text-weight-bold"
      >
        30
      </h1>
    ),
  },
  {
    title: "Utilizadores",
    icon: (
      <h1
        style={{ fontSize: 60 }}
        className="has-text-info has-text-weight-bold"
      >
        5
      </h1>
    ),
  },
];

export default function Options() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {options.map((el, index) => (
          <Grid key={index} item xs={12} md={3}>
            <Card>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                padding={2}
              >
                <Typography variant="h5">{el.title}</Typography>
                {el.icon}
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
