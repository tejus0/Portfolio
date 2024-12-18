import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import food from "../../Assets/Projects/YummieExpress.jpg";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">

<ProjectCard
  imgPath={food}
  title="Yummie Express"
  description="Yummie Express is an interactive food ordering web application with features like search, my cart, and order management. 
  It also implements secure login/signup with JWT password encryption in MongoDB."
  features={[
    "Interactive Food Ordering with Seamless User Experience",
    "Search Functionality to Find Food by Name, Category, or Cuisine",
    "Dynamic My Cart to Manage Items Before Ordering",
    "Order Tracking and Management for Past and Ongoing Orders",
    "Secure JWT Authentication with Password Encryption in MongoDB",
  ]}
  ghLink="https://github.com/tejus0/Food-Delivery-Project/tree/master/food-app"
  demoLink="https://github.com/tejus0/Food-Delivery-Project/assets/76488943/7e5a2225-4c14-4fc4-af0d-6ae8abb50dee"
/>

          </Col>
          <Col md={4} className="project-card">
          <ProjectCard
  imgPath="images/weather-toast.png"
  title="WeatherToast"
  description="WeatherToast is an intuitive web application that provides real-time, 
  accurate weather updates, location tracking, autocomplete search, and graphical weather mapping."
  features={[
    "Real-Time Weather Updates for Any Location",
    "Automatic Location Tracking for Instant Local Forecast",
    "Smart Autocomplete Search for Easy City/Region Lookup",
    "Graphical Visualization of Weather Trends and Forecasts",
    "Timely Weather Alerts and Notifications",
  ]}
  ghLink="https://github.com/yourusername/weather-toast"
  demoLink="https://weather-toast-demo.netlify.app"
/>

          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
  imgPath="images/nav-guide.png"
  title="NAV GUIDE"
  description="NAV GUIDE is an advanced desktop application designed for efficient route navigation using machine learning. 
  It offers text, audio, and map-based directions to help users find the best route from source to destination."
  features={[
    "Machine Learning Algorithm for Optimal Route Calculation",
    "Multi-Modal Directions: Text, Audio, and Maps",
    "Interactive Maps with Real-Time Route Visualization",
    "Continuous Route Updates Based on Traffic Conditions",
    "User-Friendly Interface for Seamless Navigation",
  ]}
  ghLink="https://github.com/yourusername/nav-guide"
  demoLink="https://nav-guide-demo.netlify.app"
/>

          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
  imgPath="images/moviecritique.png"
  title="Insightly"
  description="Insightly is a secure and scalable movie review platform developed using Spring Boot and MongoDB. 
  It allows users to explore, contribute reviews, and engage with a movie-loving community."
  features={[
    "Secure User Authentication with Encrypted Passwords",
    "Write, Read, and Share In-Depth Movie Reviews",
    "MongoDB Backend for Scalable Data Storage",
    "Advanced Search for Movies by Name, Genre, or Year",
    "Personalized User Profiles and Review Management",
    "Admin Panel for User and Review Moderation",
  ]}
  ghLink="https://github.com/tejus0/Movie-Reviews"
  demoLink="https://movie-critique-demo.netlify.app"
/>

          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
  imgPath="images/worksphere.png"
  title="WorkSphere"
  description="WorkSphere is a comprehensive HRM portal to streamline workplace operations, 
  manage tasks, track sales, and handle leave requests effectively."
  features={[
    "Role-Based Access for Admins and Employees",
    "Sales Management with Data Tracking",
    "Task Assignment and Progress Monitoring",
    "Leave Management System with Approval Workflow",
    "Employee Profiles and Grievance Recording",
  ]}
  ghLink="https://github.com/yourusername/worksphere"
  demoLink="https://ntechzy-hrm-portal-frontend.vercel.app/"
/>

          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
  imgPath="images/cinestream.png"
  title="CineStream"
  description="CineStream is an intuitive and feature-rich movie streaming platform that offers seamless browsing, searching, and streaming experiences for users."
  features={[
    "Personalized Movie Recommendations",
    "Responsive User Interface for All Devices",
    "Advanced Search and Filtering Options",
    "Watchlist Management to Track Favorites",
    "Secure High-Quality Streaming Experience",
  ]}
  ghLink="https://github.com/tejus0/netflix2.0"
  demoLink="https://netflix2-0-frontend.vercel.app/"
/>


          </Col>

          <Col>
          <ProjectCard
  imgPath="images/college-website.png"
  title="College Website"
  description="Developed a responsive college website using ReactJS and TailwindCSS. 
  The website includes sections like About Us, Glimpse, Advantages, Photo Gallery, Notice Board, Testimonials, Partners, FAQ, and Footer with quick links and college location."
  features={[
    "Responsive Design Built with ReactJS and TailwindCSS",
    "Sections Include About Us, Glimpse, Advantages, Photo Gallery, Notice Board, Testimonials, Partners, FAQ",
    "Dynamic Photo Gallery and Notice Board for Real-Time Updates",
    "User-Friendly Footer with Quick Links and College Location",
    "Fully Customizable UI for Easy Updates and Content Management",
  ]}
  ghLink="https://github.com/tejus0/Ntechzy-College-website/tree/main/college-website"
  demoLink="https://ntechzy-college-website.vercel.app/"
/>

          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
