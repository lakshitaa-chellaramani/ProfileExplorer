import React from "react";
import { Box, Grid, Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProfileShowcase = () => {
  const navigate = useNavigate();

  const sampleProfiles = [
    {
      id: 1,
      name: "Sophia Carter",
      photo: "https://img.freepik.com/free-photo/close-up-shot-friendly-looking-elegant-young-african-american-female-with-straight-dark-straight-hair-having-happy-joyful-look-posing_344912-1016.jpg?uid=R97320384&ga=GA1.1.1258116457.1724954448&semt=ais_incoming",
      description: "A creative designer with a focus on user-centric experiences.",
      location: "New York, USA", // Example location for the map
    },
    {
      id: 2,
      name: "Liam Walker",
      photo: "https://img.freepik.com/free-photo/close-up-shot-handsome-curly-teenager-man-looks-pensively-upwards_176532-8172.jpg?uid=R97320384&ga=GA1.1.1258116457.1724954448&semt=ais_incoming",
      description: "A software engineer passionate about solving real-world problems.",
      location: "San Francisco, USA", // Example location for the map
    },
    {
      id: 3,
      name: "Emma Johnson",
      photo: "https://img.freepik.com/free-photo/young-girl-with-short-hair-wearing-white-polo-shirt-looking-aside-with-sad-expression-face_141793-46476.jpg?t=st=1737271041~exp=1737274641~hmac=1e2b80fe5ad3e35c7e064f8fee595846cb9561434596bf5961623a77deb126ea&w=740",
      description: "A data scientist who transforms data into meaningful insights.",
      location: "Chicago, USA", // Example location for the map
    },
  ];

  const handleShowOnMap = (profile) => {
    alert(`Showing ${profile.name}'s location on the map: ${profile.location}`);
    // Replace this with a function that displays the profile's location on a map
  };

  const handleViewDetails = (profile) => {
    navigate(`/profile/${profile.id}`, { state: { profile } });
    // Replace this with navigation to a detailed profile page
  };

  return (
    <Box sx={{ padding: "2rem 2rem", backgroundColor: "#fff" }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "center", mb: 1 }}>
        Featured Profiles
      </Typography>
      {/* <Grid container spacing={4} justifyContent="center">
        {sampleProfiles.map((profile) => (
          <Grid item xs={12} sm={6} md={4} key={profile.id}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: 3,
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <CardMedia
                component="img"
                height="150"
                image={profile.photo}
                alt={`${profile.name}'s photo`}
                sx={{ borderRadius: "12px 12px 0 0" }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {profile.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    mt: 1,
                    height: "50px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {profile.description}
                </Typography>
                <Box sx={{ mt: 2, display: "flex", gap: 2, justifyContent: "center" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={() => handleShowOnMap(profile)}
                  >
                    Show on Map
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    size="small"
                    onClick={() => handleViewDetails(profile)}
                  >
                    View Details
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid> */}
    </Box>
  );
};

export default ProfileShowcase;
