import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Avatar,
} from "@mui/material";

const ProfileCard = ({ name, photo, description, onSummaryClick, onViewDetails }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: 3,
        boxShadow: 4,
        position: 'relative',
        mt: 6, // Add top margin to account for avatar overflow
        transition: "transform 0.3s",
        "&:hover": {
          transform: "scale(1.02)",
        },
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image="https://source.unsplash.com/random/300x200?nature"
        alt="Background"
      />
      <Box
        sx={{
          position: 'absolute',
          top: -40,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 80,
          height: 80,
        }}
      >
        <Avatar
          alt={name}
          src={photo}
          sx={{
            width: 80,
            height: 80,
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            border: '4px solid white',
          }}
        />
      </Box>
      <CardContent sx={{ textAlign: "center", pt: 6, px: 3, pb: 3 }}>
        <Typography 
          gutterBottom 
          variant="h6" 
          component="div" 
          sx={{ 
            fontWeight: "bold",
            mb: 1
          }}
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 2,
            minHeight: 60,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {description}
        </Typography>
        <Box 
          sx={{ 
            display: "flex", 
            justifyContent: "space-between",
            gap: 1 
          }}
        >
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={onSummaryClick}
            sx={{ flex: 1 }}
          >
            Show on Map
          </Button>
          <Button
            size="small"
            variant="outlined"
            color="secondary"
            onClick={onViewDetails}
            sx={{ flex: 1 }}
          >
            View Details
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;