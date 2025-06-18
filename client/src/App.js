import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Secure from "./components/Secure";
import UserDashboard from "./pages/userDashboard";
import CVTemplate1 from "./CVTamplates/CVTemplate1";


function App() {
  const data = {
  personal: {
    fullName: "John Smith",
    jobTitle: "Graphic Designer",
    address: "Your contact address here",
    phone: "+000000000000",
    email: "mailaddresshere@mail.com",
    maritalStatus: "Married",
    dob: "1-1-2000",
    religion: "Hindu",
    photo: "https://via.placeholder.com/100x120",
  },
  aboutMe: "Full Stack Web Developer with 1 year of experience, specializing in JavaScript, Node.js, React.js, MySQL, and Express.js. Passionate about creating efficient web applications that enhance business operations. Co-founder of srtechcreators.com, a freelancing initiative delivering high-quality client solutions. Strong problem-solving skills with a keen interest in software development and team collaboration. Currently leading a team at Bee Data Technologies, ensuring smooth workflow and high-quality project delivery.",
  experience: [
    "Lorem ipsum is simply dummy text of typeset",
    "Lorem ipsum is simply dummy text of typeset",
  ],
  certifications: [
    "Lorem ipsum is simply dummy text of typeset",
    "Lorem ipsum is simply dummy text of typeset",
  ],
  skills: ["UX/UI", "Motion Graphics"],
  education: [
    {
      degree: "Bachelor of Science in Computer",
      institution: "Sri Gayatri Degree College, Bobbili",
      startDate: "2016",
      endDate: "2020",
    },
    {
      degree: "Board of Intermediate Education",
      institution: "Rangumudri Junior College, Balijipeta",
      startDate: "2014",
      endDate: "2016",
    },
    {
      degree: "State Board of Secondary Education",
      institution: "RDM High School",
      startDate: "2013",
      endDate: "2014",
    },
  ],
};

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/template" element={<CVTemplate1 data={data} />} />
        <Route element={<Secure />}>
          <Route path="/dashboard/*" element={<UserDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
