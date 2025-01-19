import React from "react";
import { Box, Typography, Grid, Card, CardContent, Icon } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MapIcon from "@mui/icons-material/Map";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

const HowItWorks = () => {
  const steps = [
    {
      icon: <SearchIcon fontSize="large" sx={{ color: "#0077b6" }} />,
      title: "Search Profiles",
      description: "Use filters to find specific profiles quickly and easily.",
    },
    {
      icon: <MapIcon fontSize="large" sx={{ color: "#0077b6" }} />,
      title: "Explore on Map",
      description: "Visualize precise locations for each profile on an interactive map.",
    },
    {
      icon: <ManageAccountsIcon fontSize="large" sx={{ color: "#0077b6" }} />,
      title: "Manage Profiles",
      description: "Admins can add, edit, or delete profiles effortlessly.",
    },
  ];

  return (
    <Box sx={{ padding: "4rem 2rem", backgroundColor: "#f9f9f9" }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "center", mb: 4 }}>
        How It Works
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {steps.map((step, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: 3,
                textAlign: "center",
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <CardContent>
                <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                  {step.icon}
                </Box>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                  {step.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {step.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HowItWorks;
