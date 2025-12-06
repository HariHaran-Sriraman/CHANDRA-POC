import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import FrontDeskTasks from "./pages/FrontDeskTasks";
import SettlementTasks from "./pages/SettlementTasks";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Breaks from "./pages/Breaks";
import CAT from "./pages/CAT";  
import Reports from "./pages/Reports";
import ReportImage from "./pages/ReportImage";

const App: React.FC = () => {
  return (
    <Router>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Navbar />
          <Box sx={{ padding: 2 }}>
          <Routes>
            <Route path="/frontdesktasks" element={<FrontDeskTasks />} />
            <Route path="/Settlementtasks" element={<SettlementTasks />} />
            <Route path="/teamtasks" element={<FrontDeskTasks />} />
            <Route path="/cases" element={<FrontDeskTasks />} />
            <Route path="/email" element={<FrontDeskTasks />} />
            <Route path="/breaks" element={<Breaks />} />
            <Route path="/CAT" element={<CAT />} />
            
            {/* Reports with Nested Subroutes */}
            <Route path="/reports" element={<Reports />}>
              <Route index element={<ReportImage />} /> {/* Default image */}
              <Route path="metrics" element={<ReportImage />} />
              <Route path="brokerage" element={<ReportImage />} />
              <Route path="cat-error-dashboard" element={<ReportImage />} />
              
              {/* Brokerage Subroutes */}
              <Route path="brokerage/open-brokerage" element={<ReportImage />} />
              <Route path="brokerage/resolved-brokerage" element={<ReportImage />} />
            </Route>

            <Route path="/" element={<FrontDeskTasks />} />
          </Routes>
          </Box>
        </Box>
      </Container>
    </Router>
  );
};

export default App;
