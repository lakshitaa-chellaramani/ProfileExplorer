import React from "react";
import { Link, useParams } from "react-router-dom";
import { Box, Typography, Button, Card, CardContent, CardMedia } from "@mui/material";

const ProfileDetail = ({ profiles }) => {
  const { id } = useParams(); // Get the profile ID from the URL
  const profile = profiles.find((profile) => profile.id === id);

  if (!profile) return <Typography variant="h6">Profile not found</Typography>;

  return (
    <Box sx={{ padding: "2rem" }}>
      <Card sx={{ maxWidth: 600, margin: "auto", boxShadow: 3 }}>
        <CardMedia component="img" height="300" image={profile.photo} alt={`${profile.name}'s photo`} />
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            {profile.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            {profile.description}
          </Typography>
          <Typography variant="body2" sx={{ mt: 2 }}>
            <strong>Contact:</strong> {profile.contact}
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            <strong>Interests:</strong> {profile.interests.join(", ")}
          </Typography>
          <Box sx={{ mt: 3, display: "flex", gap: 2, justifyContent: "center" }}>
            <Button variant="contained" color="primary" href={`mailto:${profile.contact}`}>
              Contact
            </Button>
            <Link to="/profiles" style={{ textDecoration: "none" }}>
            <Button variant="outlined" color="secondary">
              Back to Profiles
            </Button>
            </Link>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProfileDetail;
