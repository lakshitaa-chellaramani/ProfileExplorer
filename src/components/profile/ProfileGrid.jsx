import React, { useState } from "react";
import { Grid, Card, CardMedia, CardContent, Typography, Button, Box, Dialog, DialogContent } from "@mui/material";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const ProfileGrid = ({ profiles }) => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  // Handle the "Show on Map" button click
  const handleShowMap = (profile) => {
    setSelectedProfile(profile);
  };

  const handleCloseMap = () => {
    setSelectedProfile(null);
  };

  return (
    <Box sx={{ padding: "2rem" }}>
      <Grid container spacing={4}>
        {profiles.map((profile) => (
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
                    onClick={() => handleShowMap(profile)}
                  >
                    Show on Map
                  </Button>
                  <Link to={`/profile/${profile.id}`} style={{ textDecoration: "none" }}>
                    <Button variant="outlined" color="secondary" size="small">
                      View Details
                    </Button>
                  </Link>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Map Popup Dialog */}
      {selectedProfile && (
        <Dialog open={Boolean(selectedProfile)} onClose={handleCloseMap}>
          <DialogContent sx={{ padding: 0, width: 500, height: 400 }}>
            <MapContainer
              center={selectedProfile.coordinates}
              zoom={13}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={selectedProfile.coordinates}>
                <Popup>
                  <strong>{selectedProfile.name}</strong>
                  <br />
                  {selectedProfile.location}
                </Popup>
              </Marker>
            </MapContainer>
          </DialogContent>
        </Dialog>
      )}
    </Box>
  );
};

export default ProfileGrid;
