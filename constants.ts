
import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: "Md. Porag Arman Dhrubo",
  location: "Dhaka, Bangladesh",
  phone: "01518-974720",
  email: "poragarman058@gmail.com",
  objective: "Detail-oriented B.Sc. in Computer Science and Engineering student with hands-on experience in programming, digital system design, and computer vision projects. Seeking internships or entry-level roles to apply problem-solving skills, strengthen technical expertise, and contribute to real-world software and hardware solutions.",
  education: {
    school: "Daffodil Institute of IT",
    degree: "B.Sc. in Computer Science & Engineering (CSE)",
    period: "July 2023 – June 2027",
    grades: ["SSC: GPA 4.17", "HSC: GPA 4.00"]
  },
  skills: [
    {
      category: "Programming",
      items: ["C", "C++", "Python", "SQL", "HTML", "CSS"]
    },
    {
      category: "Digital Systems",
      items: ["Logic Gates", "ALU Design", "Combinational Circuits", "Robotics"]
    },
    {
      category: "Media & Design",
      items: ["Photoshop", "Illustrator", "Premiere Pro", "After Effects", "Filmora", "CapCut"]
    },
    {
      category: "Software Tools",
      items: ["MS Word", "Excel", "PowerPoint"]
    }
  ],
  projects: [
    {
      title: "Rock, Paper, Scissors Game",
      description: "Developed a real-time hand gesture recognition system using computer vision techniques and OpenCV for interactive gameplay.",
      technologies: ["Python", "OpenCV", "MediaPipe"],
      category: "ai",
      githubUrl: "https://github.com",
      liveUrl: "https://youtube.com",
      image: "https://images.unsplash.com/photo-1555255707-c07966488bc7?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Data Management System",
      description: "Designed a structured data handling system using hash tables and linked lists to optimize data retrieval efficiency.",
      technologies: ["C++", "Data Structures"],
      category: "software",
      githubUrl: "https://github.com",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Arithmetic Logic Unit (ALU)",
      description: "Designed and tested a functional 4-bit ALU to perform arithmetic and logical operations, verified using truth tables.",
      technologies: ["Digital Electronics", "Logic Gates"],
      category: "hardware",
      liveUrl: "https://imgur.com",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "BCD to 7-Segment Decoder",
      description: "Designed decoder logic to convert BCD input into displayable numeric output for 7-segment displays.",
      technologies: ["Logic Circuits"],
      category: "hardware",
      liveUrl: "https://imgur.com",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=800"
    }
  ],
  experience: [
    {
      role: "Customer Service Representative",
      company: "Amazon Automation",
      period: "2020 – 2022",
      points: [
        "Provided consistent customer support while resolving a wide range of service-related issues.",
        "Strengthened communication and analytical thinking through daily customer interactions.",
        "Adapted quickly to varied customer scenarios in a fast-paced environment."
      ]
    }
  ],
  achievements: [
    "Winner, Digital Circuit Design Competition",
    "Certification: Basic Machine Learning",
    "Certification: Python for Beginners",
    "Certification: Digital System Design"
  ],
  interests: [
    "Photography & Videography",
    "Visual Storytelling",
    "Music: Guitar and Cajon",
    "System-level Technologies"
  ]
};
