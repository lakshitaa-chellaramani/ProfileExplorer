import React, { useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

const AdminPanel = ({ initialProfiles = [] }) => {
  const [profiles, setProfiles] = useState(initialProfiles);
  const [openDialog, setOpenDialog] = useState(false);
  const [editingProfile, setEditingProfile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    photo: "",
    description: "",
    location: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOpenDialog = (profile = null) => {
    setEditingProfile(profile);
    if (profile) {
      setFormData({
        name: profile.name,
        photo: profile.photo,
        description: profile.description,
        location: profile.location,
      });
    } else {
      setFormData({
        name: "",
        photo: "",
        description: "",
        location: "",
      });
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setEditingProfile(null);
  };

  const handleSaveProfile = () => {
    if (editingProfile) {
      // Update existing profile
      setProfiles((prev) =>
        prev.map((profile) =>
          profile.id === editingProfile.id ? { ...profile, ...formData } : profile
        )
      );
    } else {
      // Add new profile
      setProfiles((prev) => [
        ...prev,
        { id: Date.now(), ...formData },
      ]);
    }
    handleCloseDialog();
  };

  const handleDeleteProfile = (id) => {
    setProfiles((prev) => prev.filter((profile) => profile.id !== id));
  };

  return (
    <Box sx={{ padding: "2rem" }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Admin Panel: Profile Management
      </Typography>

      <Button variant="contained" color="primary" onClick={() => handleOpenDialog(null)}>
        Add Profile
      </Button>

      <TableContainer component={Paper} sx={{ mt: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(profiles || []).map((profile) => (
              <TableRow key={profile.id}>
                <TableCell>{profile.name}</TableCell>
                <TableCell>{profile.description}</TableCell>
                <TableCell>{profile.location}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    onClick={() => handleOpenDialog(profile)}
                    sx={{ mr: 1 }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    onClick={() => handleDeleteProfile(profile.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>{editingProfile ? "Edit Profile" : "Add Profile"}</DialogTitle>
        <DialogContent>
          <TextField
            name="name"
            label="Name"
            fullWidth
            value={formData.name}
            onChange={handleInputChange}
            sx={{ mb: 2 }}
          />
          <TextField
            name="photo"
            label="Photo URL"
            fullWidth
            value={formData.photo}
            onChange={handleInputChange}
            sx={{ mb: 2 }}
          />
          <TextField
            name="description"
            label="Description"
            fullWidth
            value={formData.description}
            onChange={handleInputChange}
            sx={{ mb: 2 }}
          />
          <TextField
            name="location"
            label="Location"
            fullWidth
            value={formData.location}
            onChange={handleInputChange}
            sx={{ mb: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSaveProfile} variant="contained" color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AdminPanel;
