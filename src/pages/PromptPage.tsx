// PromptPage.tsx
import React, { useState } from "react";
import { TextField, Paper, Typography, Box, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";


const PromptPage: React.FC = () => {
  const [prompt1, setPrompt1] = useState("Enter your first sample prompt here...");
  const [prompt2, setPrompt2] = useState("Enter your second sample prompt here...");

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 800, margin: "auto" }}>
      <Typography variant="h5" gutterBottom align="center">
        Sample Prompts
      </Typography>

      <Box display="flex" flexDirection="column" gap={3}>
        {/* Prompt 1 */}
        <Grid container spacing={2} alignItems="center">
          <Grid size={{ xs: 9, sm: 9 }}>
            <TextField
              fullWidth
              multiline
              rows={5}
              label="Prompt 1"
              value={prompt1}
              onChange={(e) => setPrompt1(e.target.value)}
            />
          </Grid>
          <Grid size={{ xs: 3, sm: 3 }}>
            <Button
              fullWidth
              variant="contained" // ✅ filled button
              color="primary"
              onClick={() => copyToClipboard(prompt1)}
              sx={{ height: "100%" }} // make button stretch vertically
            >
              Copy
            </Button>
          </Grid>
        </Grid>

        {/* Prompt 2 */}
        <Grid container spacing={2} alignItems="center">
          <Grid size={{ xs: 9, sm: 9 }}>
            <TextField
              fullWidth
              multiline
              rows={5}
              label="Prompt 2"
              value={prompt2}
              onChange={(e) => setPrompt2(e.target.value)}
            />
          </Grid>
          <Grid size={{ xs: 3, sm: 3 }}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => copyToClipboard(prompt2)}
              sx={{ height: "100%" }}
            >
              Copy
            </Button>
          </Grid>
        </Grid>
      </Box>
      {/* Return Link at the bottom */}
      <Box mt={4} textAlign="start">
        <Link to="/" style={{ textDecoration: "none", color: "#1976d2", fontWeight: "bold" }}>
          ← Return to previous page
        </Link>
      </Box>
    </Paper>
  );
};

export default PromptPage;