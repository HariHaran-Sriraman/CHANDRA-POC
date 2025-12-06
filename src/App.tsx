import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Container from "./components/Container";
import VaultDetailsForm from "./pages/VaultDetailsForm";

const App: React.FC = () => {
  return (
    <Router>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
           <VaultDetailsForm />           
        </Box>
      </Container>
    </Router>
  );
};

export default App;
