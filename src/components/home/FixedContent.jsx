import React from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

function FixedContent() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Box>
          <Typography
            fontWeight="bold"
            sx={{ paddingTop: 2 }}
            variant="subtitle1"
          >
            {"Destaques".toUpperCase()}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box>
          <Typography
            fontWeight="bold"
            sx={{ paddingTop: 2 }}
            variant="subtitle1"
          >
            {"Documentos recentes".toUpperCase()}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default FixedContent;
