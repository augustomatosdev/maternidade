import { Box, Typography } from "@mui/material";
import React from "react";
import ActionButtons from "./ActionButtons";
import FixedContent from "./FixedContent";
import Options from "./Options";

function Home() {
  return (
    <Box>
      <Options />
      <Typography fontWeight="bold" sx={{ paddingTop: 2 }} variant="subtitle1">
        {"Acesso rápido".toUpperCase()}
      </Typography>
      <ActionButtons />
      <FixedContent />
    </Box>
  );
}

export default Home;
