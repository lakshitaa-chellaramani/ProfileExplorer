import React from 'react'
import FeaturesSection from './FeaturesSection'
import HeroSection from './HeroSection'
import ProfileShowcase from '../profile/ProfileShowcase'
import HowItWorks from './HowItWorks'
import Testimonials from './Testimonials'
import CallToAction from './CallToAction'
import ProfileGrid from '../profile/ProfileGrid'
import { useState } from 'react'


const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
    const [filters, setFilters] = useState({ location: "" });

  const sampleProfiles = [
    {
      id: 1,
      name: "Sophia Carter",
      photo: "https://img.freepik.com/free-photo/close-up-shot-friendly-looking-elegant-young-african-american-female-with-straight-dark-straight-hair-having-happy-joyful-look-posing_344912-1016.jpg?uid=R97320384&ga=GA1.1.1258116457.1724954448&semt=ais_incoming",
      description: "Creative designer with a passion for user-centric experiences.",
      location: "New York",
      coordinates: [40.7128, -74.0060], // New York
    },
    {
      id: 2,
      name: "Liam Walker",
      photo: "https://img.freepik.com/free-photo/close-up-shot-handsome-curly-teenager-man-looks-pensively-upwards_176532-8172.jpg?uid=R97320384&ga=GA1.1.1258116457.1724954448&semt=ais_incoming",
      description: "Software engineer who loves solving complex problems.",
      location: "San Francisco",
      coordinates: [37.7749, -122.4194], // San Francisco
    },
    {
      id: 3,
      name: "Emma Johnson",
      photo: "https://img.freepik.com/free-photo/young-girl-with-short-hair-wearing-white-polo-shirt-looking-aside-with-sad-expression-face_141793-46476.jpg?t=st=1737271041~exp=1737274641~hmac=1e2b80fe5ad3e35c7e064f8fee595846cb9561434596bf5961623a77deb126ea&w=740",
      description: "Data scientist turning data into insights.",
      location: "Chicago",
      coordinates: [41.8781, -87.6298], // Chicago
    },
  ];

  const handleSearchChange = (value) => setSearchTerm(value);
  const handleFilterChange = (key, value) => setFilters({ ...filters, [key]: value });

  const filteredProfiles = sampleProfiles.filter((profile) =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filters.location === "" || profile.location === filters.location)
  );
  return (
    <div>
        <HeroSection />
        <FeaturesSection />
        <ProfileShowcase />
        <ProfileGrid profiles={filteredProfiles} />
        <HowItWorks/>
        <Testimonials/>
        <CallToAction/>
        
    </div>
  )
}

export default Home