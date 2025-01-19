import React from "react";
import { Box, Typography, Grid, Card, CardContent, Avatar } from "@mui/material";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sophia Carter",
      role: "UI/UX Designer",
      photo: "https://img.freepik.com/free-photo/cropped-shot-gorgeous-young-mixed-race-female-with-long-dark-hair-smiling-happily-while-rejoicing-good-news-attractive-african-female-good-mood-expressing-joy-positive-emotions_344912-1018.jpg?uid=R97320384&ga=GA1.1.1258116457.1724954448&semt=ais_incoming",
      feedback:
        "Profile Explorer made it so easy to visualize profiles and their locations. The map feature is just amazing!",
    },
    {
      id: 2,
      name: "Liam Walker",
      role: "Software Engineer",
      photo: "https://img.freepik.com/free-photo/positive-male-youngster-with-curly-hair_176532-8174.jpg?t=st=1737271132~exp=1737274732~hmac=f3cf2e3f2e63f9e168195265baa2a72a35005787ff6fa6c0aa03008860e164f0&w=740",
      feedback:
        "The admin panel is incredibly intuitive. Managing profiles has never been this simple and efficient!",
    },
    {
      id: 3,
      name: "Emma Johnson",
      role: "Data Scientist",
      photo: "https://img.freepik.com/free-photo/young-girl-with-short-hair-wearing-white-polo-shirt-looking-camera-surprised-amazed_141793-46482.jpg?t=st=1737271122~exp=1737274722~hmac=d11fd796b50c4f5040a67fb374f350ef875119484e3ad2d2c240a88e99fc586c&w=740",
      feedback:
        "I love the clean interface and the seamless experience across devices. Highly recommended!",
    },
  ];

  return (
    <Box sx={{ padding: "4rem 2rem", backgroundColor: "#fff" }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "center", mb: 4 }}>
        What Our Users Say
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {testimonials.map((testimonial) => (
          <Grid item xs={12} sm={6} md={4} key={testimonial.id}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: 3,
                textAlign: "center",
                padding: "2rem",
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <Avatar
                alt={testimonial.name}
                src={testimonial.photo}
                sx={{
                  width: 80,
                  height: 80,
                  margin: "0 auto 1rem auto",
                  boxShadow: 2,
                }}
              />
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {testimonial.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {testimonial.role}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  fontStyle: "italic",
                  height: "80px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                }}
              >
                "{testimonial.feedback}"
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonials;
