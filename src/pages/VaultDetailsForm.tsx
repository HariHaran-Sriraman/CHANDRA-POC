import React from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  Grid,
  MenuItem,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import axios from "axios";

// Define form value types
interface VaultFormValues {
  environment: string;
  vaultAddress: string;
  roleId: string;
  idType: string;
  vaultIdPath: string;
  vaultIdRenewalInterview: string;
  passwordRotationThreshold: string;
  passwordRotationEnabled: string;
  passwordRotationAccount: string;
  ait: string;
  appName: string;
  templateSourcePath: string;
  templateDestinationPath: string;
}

const VaultDetailsForm: React.FC = () => {
  const formik = useFormik<VaultFormValues>({
    initialValues: {
      environment: "",
      vaultAddress: "",
      roleId: "",
      idType: "",
      vaultIdPath: "",
      vaultIdRenewalInterview: "",
      passwordRotationThreshold: "",
      passwordRotationEnabled: "",
      passwordRotationAccount: "",
      ait: "",
      appName: "",
      templateSourcePath: "",
      templateDestinationPath: "",
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.post("/api/vault", values);
        console.log("API Response:", response.data);
        alert("Form submitted successfully!");
        resetForm();
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Failed to submit form.");
      }
    },
  });

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 1000, margin: "auto" }}>
      <Typography variant="h5" gutterBottom align="center">
        Vault Details
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          {/* Environment Dropdown */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              select
              fullWidth
              id="environment"
              name="environment"
              label="Environment"
              value={formik.values.environment}
              onChange={formik.handleChange}
              margin="normal"
            >
              <MenuItem value="Development">Development</MenuItem>
              <MenuItem value="Staging">Staging</MenuItem>
              <MenuItem value="Production">Production</MenuItem>
            </TextField>
          </Grid>

          {/* Vault Address Dropdown */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              select
              fullWidth
              id="vaultAddress"
              name="vaultAddress"
              label="Vault Address"
              value={formik.values.vaultAddress}
              onChange={formik.handleChange}
              margin="normal"
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
              margin="normal"
            />
          </Grid>

          {/* Id Type Dropdown */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              select
              fullWidth
              id="idType"
              name="idType"
              label="Id Type"
              value={formik.values.idType}
              onChange={formik.handleChange}
              margin="normal"
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
              margin="normal"
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
              margin="normal"
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
              margin="normal"
            />
          </Grid>

          {/* Password Rotation Enabled Dropdown */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              select
              fullWidth
              id="passwordRotationEnabled"
              name="passwordRotationEnabled"
              label="Password Rotation Enabled"
              value={formik.values.passwordRotationEnabled}
              onChange={formik.handleChange}
              margin="normal"
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
              margin="normal"
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
              margin="normal"
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
              margin="normal"
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
              margin="normal"
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
              margin="normal"
            />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Box textAlign="center" mt={2}>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default VaultDetailsForm;