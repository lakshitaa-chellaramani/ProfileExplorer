import React from "react";
import { Box, Grid, Typography, Card, CardContent, Icon } from "@mui/material";
import MapIcon from "@mui/icons-material/Map";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import SearchIcon from "@mui/icons-material/Search";

const FeaturesSection = () => {
  const features = [
    {
      icon: <MapIcon fontSize="large" sx={{ color: "#0077b6" }} />,
      title: "Interactive Mapping",
      description: "Visualize profiles on an interactive map for easy exploration.",
    },
    {
      icon: <ManageAccountsIcon fontSize="large" sx={{ color: "#0077b6" }} />,
      title: "Profile Management",
      description: "Admins can add, edit, or delete profiles effortlessly.",
    },
    {
      icon: <SearchIcon fontSize="large" sx={{ color: "#0077b6" }} />,
      title: "Search and Filter",
      description: "Find profiles quickly using search and filter functionality.",
    },
  ];

  return (
    <Box sx={{ padding: "4rem 2rem", textAlign: "center", backgroundColor: "#f9f9f9" }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
        Core Features
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: 3,
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <CardContent>
                <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                  {feature.icon}
                </Box>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturesSection;
