import React, { useEffect } from "react";
import { AppBar, Toolbar, Tabs, Tab, Box, Typography } from "@mui/material";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import StatusSummary from "./StatusSummary";

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Define main tab paths and sub-tab paths
  const routes = [
    "/frontdesktasks",
    "/Settlementtasks",
    "/teamtasks",
    "/cases",
    "/email",
    "/CAT",
    "/reports",
    "/breaks",
  ];
  const subTabRoutes = ["/reports/metrics", "/reports/brokerage", "/reports/cat-error-dashboard"];
  const brokerageSubTabs = ["/reports/brokerage/open-brokerage", "/reports/brokerage/resolved-brokerage"];

  useEffect(() => {
    // Redirect to metrics sub-tab when landing on Reports
    if (location.pathname === "/reports") {
      navigate("/reports/metrics", { replace: true });
    }
    // Redirect to first sub-tab when landing on Brokerage
    if (location.pathname === "/reports/brokerage") {
      navigate("/reports/brokerage/open-brokerage", { replace: true });
    }
  }, [location.pathname, navigate]);

  // Determine active tab index
  const currentTab = location.pathname.startsWith("/reports")
    ? 6 // Index of Reports tab
    : routes.indexOf(location.pathname);

  const currentSubTab = subTabRoutes.indexOf(location.pathname);
  const currentBrokerageSubTab = brokerageSubTabs.indexOf(location.pathname);

  return (
    <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
      <Toolbar>
        {/* Main Tabs */}
        <Tabs value={currentTab} textColor="inherit" indicatorColor="secondary">
          {location.pathname === "/Settlementtasks" || location.pathname === "/breaks" ? (
            <Tab label="My tasks" component={NavLink} to="/Settlementtasks" value={1} />
          ) : (
            <Tab label="My tasks" component={NavLink} to="/frontdesktasks" value={0} />
          )}
          <Tab label="Team Tasks" component={NavLink} to="/teamtasks" value={2} />
          <Tab label="Cases" component={NavLink} to="/cases" value={3} />
          <Tab label="Email" component={NavLink} to="/email" value={4} />
          {location.pathname !== "/Settlementtasks" && location.pathname !== "/breaks" && (
            <Tab label="CAT" component={NavLink} to="/CAT" value={5} />
          )}
          {location.pathname !== "/Settlementtasks" && location.pathname !== "/breaks" && (
            <Tab label="Reports" component={NavLink} to="/reports" value={6} />
          )}
          {location.pathname === "/Settlementtasks" || location.pathname === "/breaks" ? (
            <Tab label="Break" component={NavLink} to="/breaks" value={7} />
          ) : null}
        </Tabs>

        {/* Status Summary & Welcome Message */}
        <Box flexGrow={1} />
        <Box ml={4} mr={4}>
          {location.pathname !== "/breaks" && location.pathname !== "/CAT" && location.pathname !== "/reports" && (
            <StatusSummary />
          )}
        </Box>
        <Typography variant="h6" sx={{ marginRight: 2 }}>
          Welcome, User
        </Typography>
      </Toolbar>

      {/* Sub Tabs for Reports */}
      {location.pathname.startsWith("/reports") && (
        <Box sx={{ backgroundColor: "#f4f4f4", padding: 1, borderRadius: 1 }}>
          <Tabs
            value={currentSubTab}
            onChange={(event, newValue) => navigate(subTabRoutes[newValue])}
            indicatorColor="secondary"
            textColor="secondary"
            variant="scrollable"
          >
            <Tab label="Metrics" component={NavLink} to="/reports/metrics" />
            <Tab label="Brokerage" component={NavLink} to="/reports/brokerage" />
            <Tab label="CAT Error Management Dashboard" component={NavLink} to="/reports/cat-error-dashboard" />
          </Tabs>
        </Box>
      )}

      {/* Sub Tabs for Brokerage */}
      {location.pathname.startsWith("/reports/brokerage") && (
        <Box sx={{ backgroundColor: "#e0e0e0", padding: 1, borderRadius: 1, marginTop: 1 }}>
          <Tabs
            value={currentBrokerageSubTab}
            onChange={(event, newValue) => navigate(brokerageSubTabs[newValue])}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
          >
            <Tab label="Open Brokerage Breaks" component={NavLink} to="/reports/brokerage/open-brokerage" />
            <Tab label="Resolved Brokerage Breaks" component={NavLink} to="/reports/brokerage/resolved-brokerage" />
          </Tabs>
        </Box>
      )}
    </AppBar>
  );
};

export default Navbar;