import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/ui/Navbar";
import Home from "./components/home/Home";
import Profiles from "./components/profile/Profiles";
import ProfileDetail from "./components/profile/ProfileDetail";
import AdminPanel from "./components/admin/AdminPanel";
import Footer from "./components/ui/Footer";

const theme = createTheme({
  palette: {
    primary: {
      main: "#003049", 
    },
    secondary: {
      main: "#0077b6", 
    },
  },
});

const profiles = [
  {
    id: "1",
    name: "Sophia Carter",
    photo: "https://img.freepik.com/free-photo/close-up-shot-friendly-looking-elegant-young-african-american-female-with-straight-dark-straight-hair-having-happy-joyful-look-posing_344912-1016.jpg?uid=R97320384&ga=GA1.1.1258116457.1724954448&semt=ais_incoming",
    description: "A creative designer with a focus on user-centric experiences.",
    location: "New York",
    contact: "sophia@example.com",
    interests: ["Photography", "Traveling", "Cooking"],
  },
  {
    id: "2",
    name: "Liam Walker",
    photo: "https://img.freepik.com/free-photo/close-up-shot-handsome-curly-teenager-man-looks-pensively-upwards_176532-8172.jpg?uid=R97320384&ga=GA1.1.1258116457.1724954448&semt=ais_incoming",
    description: "A software engineer passionate about solving real-world problems.",
    location: "San Francisco",
    contact: "liam@example.com",
    interests: ["Coding", "Reading", "Hiking"],
  },
  {
    id: "3",
    name: "Emma Johnson",
    photo: "https://img.freepik.com/free-photo/young-girl-with-short-hair-wearing-white-polo-shirt-looking-aside-with-sad-expression-face_141793-46476.jpg?t=st=1737271041~exp=1737274641~hmac=1e2b80fe5ad3e35c7e064f8fee595846cb9561434596bf5961623a77deb126ea&w=740",
    description: "A data scientist who transforms data into meaningful insights.",
    location: "Chicago",
    contact: "emma@example.com",
    interests: ["Data Science", "Machine Learning", "Music"],
  },
];

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/profile/:id" element={<ProfileDetail profiles={profiles} />} />
        <Route path="/admin" element={<AdminPanel initialProfiles={profiles} />} />
      </Routes>
      <Footer />
      </ThemeProvider>
      
    </Router>
  );
}

export default App;
