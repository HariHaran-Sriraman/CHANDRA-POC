import React from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  MenuItem,
  TextField,
  Typography,
  Paper,
  Grid,
} from "@mui/material";
import axios from "axios";
import { useVaultStore } from "../store/VaultStore";

const VaultDetailsForm: React.FC = () => {
  const { formValues, setFormValues } = useVaultStore();

  const formik = useFormik({
    initialValues: formValues, // ✅ Zustand values populate here
    enableReinitialize: true,  // ensures Formik updates if Zustand changes
    onSubmit: async (values) => {
      try {
        await axios.post("/api/vault", values);
        alert("Form submitted successfully!");
        // Optionally sync back to Zustand
        setFormValues(values);
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Failed to submit form.");
      }
    },
  });

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 900, margin: "auto" }}>
      <Typography variant="h5" gutterBottom align="center">
        Vault Details
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          {/* Environment */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              select
              fullWidth
              id="environment"
              name="environment"
              label="Environment"
              value={formik.values.environment}
              onChange={formik.handleChange}
            >
              <MenuItem value="Development">Development</MenuItem>
              <MenuItem value="Staging">Staging</MenuItem>
              <MenuItem value="Production">Production</MenuItem>
            </TextField>
          </Grid>

          {/* Vault Address */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              select
              fullWidth
              id="vaultAddress"
              name="vaultAddress"
              label="Vault Address"
              value={formik.values.vaultAddress}
              onChange={formik.handleChange}
            >
              <MenuItem value="Address1">Address1</MenuItem>
              <MenuItem value="Address2">Address2</MenuItem>
              <MenuItem value="Address3">Address3</MenuItem>
            </TextField>
          </Grid>

          {/* Role Id */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              id="roleId"
              name="roleId"
              label="Role Id"
              value={formik.values.roleId}
              onChange={formik.handleChange}
            />
          </Grid>

          {/* Id Type */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              select
              fullWidth
              id="idType"
              name="idType"
              label="Id Type"
              value={formik.values.idType}
              onChange={formik.handleChange}
            >
              <MenuItem value="User">User</MenuItem>
              <MenuItem value="Service">Service</MenuItem>
              <MenuItem value="Admin">Admin</MenuItem>
            </TextField>
          </Grid>

          {/* Vault Id Path */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              id="vaultIdPath"
              name="vaultIdPath"
              label="Vault Id Path"
              value={formik.values.vaultIdPath}
              onChange={formik.handleChange}
            />
          </Grid>

          {/* Vault Id Renewal Interview */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              id="vaultIdRenewalInterview"
              name="vaultIdRenewalInterview"
              label="Vault Id Renewal Interview"
              value={formik.values.vaultIdRenewalInterview}
              onChange={formik.handleChange}
            />
          </Grid>

          {/* Password Rotation Threshold */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              id="passwordRotationThreshold"
              name="passwordRotationThreshold"
              label="Password Rotation Threshold"
              value={formik.values.passwordRotationThreshold}
              onChange={formik.handleChange}
            />
          </Grid>

          {/* Password Rotation Enabled */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              select
              fullWidth
              id="passwordRotationEnabled"
              name="passwordRotationEnabled"
              label="Password Rotation Enabled"
              value={formik.values.passwordRotationEnabled}
              onChange={formik.handleChange}
            >
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </TextField>
          </Grid>

          {/* Password Rotation Account */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              id="passwordRotationAccount"
              name="passwordRotationAccount"
              label="Password Rotation Account"
              value={formik.values.passwordRotationAccount}
              onChange={formik.handleChange}
            />
          </Grid>

          {/* AIT */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              id="ait"
              name="ait"
              label="AIT"
              value={formik.values.ait}
              onChange={formik.handleChange}
            />
          </Grid>

          {/* App Name */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              id="appName"
              name="appName"
              label="App Name"
              value={formik.values.appName}
              onChange={formik.handleChange}
            />
          </Grid>

          {/* Template Source Path */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              id="templateSourcePath"
              name="templateSourcePath"
              label="Template Source Path"
              value={formik.values.templateSourcePath}
              onChange={formik.handleChange}
            />
          </Grid>

          {/* Template Destination Path */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              id="templateDestinationPath"
              name="templateDestinationPath"
              label="Template Destination Path"
              value={formik.values.templateDestinationPath}
              onChange={formik.handleChange}
            />
          </Grid>
        </Grid>

        <Box textAlign="center" mt={3}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default VaultDetailsForm;