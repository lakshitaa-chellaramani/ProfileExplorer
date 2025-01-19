import React from "react";
import { Box, Typography, TextField, MenuItem, Grid } from "@mui/material";

const PageHeader = ({ onSearchChange, onFilterChange, filters }) => {
  return (
    <Box
      sx={{
        textAlign: "center",
        padding: "4rem 2rem",
        background: "linear-gradient(to right, #0d1321, #003049)",
        color: "#fff",
        borderRadius: "0 0 20px 20px",
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
        Explore Profiles
      </Typography>
      <Typography variant="h6" sx={{ maxWidth: "600px", margin: "0 auto", mb: 4 }}>
        Discover profiles of professionals, visualize their locations, and connect
        with them easily.
      </Typography>

      {/* Search and Filter */}
      <Grid container spacing={2} justifyContent="center">
        {/* Search Input */}
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search by name..."
            onChange={(e) => onSearchChange(e.target.value)}
            sx={{
              background: "#fff",
              borderRadius: "5px",
            }}
          />
        </Grid>

        {/* Filter Dropdown */}
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            select
            variant="outlined"
            placeholder="Search by location"
            value={filters.location}
            onChange={(e) => onFilterChange("location", e.target.value)}
            sx={{
              background: "#fff",
              borderRadius: "5px",
            }}
          >
            <MenuItem value="">All Locations</MenuItem>
            <MenuItem value="New York">New York</MenuItem>
            <MenuItem value="San Francisco">San Francisco</MenuItem>
            <MenuItem value="Chicago">Chicago</MenuItem>
          </TextField>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PageHeader;
