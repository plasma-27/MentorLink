const axios = require('axios');

// Array of mentor sign-up details
const mentors = [
    {
      "name": "Grace Williams",
      "email": "grace.williams@example.com",
      "password": "password303",
      "role": "mentor",
      "bio": "Senior DevOps engineer with a focus on automation and cloud infrastructure.",
      "skills": ["AWS", "Terraform", "Kubernetes"],
      "mentorDetails": {
        "expertise": ["cloud engineering", "CI/CD pipelines"],
        "pastDomains": ["technology", "retail"]
      },
      "availability": true,
      "education": {
        "degree": "Bachelor's in Information Systems",
        "institution": "University of Michigan",
        "yearOfCompletion": 2014
      }
    },
    {
      "name": "Henry Davis",
      "email": "henry.davis@example.com",
      "password": "password404",
      "role": "mentor",
      "bio": "Blockchain developer with experience in creating decentralized applications.",
      "skills": ["Solidity", "Ethereum", "Smart Contracts"],
      "mentorDetails": {
        "expertise": ["blockchain development", "cryptocurrency"],
        "pastDomains": ["finance", "technology"]
      },
      "availability": true,
      "education": {
        "degree": "Master's in Cryptography",
        "institution": "University College London",
        "yearOfCompletion": 2019
      }
    },
    {
      "name": "Ivy Green",
      "email": "ivy.green@example.com",
      "password": "password505",
      "role": "mentor",
      "bio": "Product manager with a track record of leading cross-functional teams to deliver innovative products.",
      "skills": ["Product Management", "Agile", "UX Design"],
      "mentorDetails": {
        "expertise": ["product strategy", "user experience"],
        "pastDomains": ["tech startups", "healthcare"]
      },
      "availability": false,
      "education": {
        "degree": "Bachelor's in Business Administration",
        "institution": "Harvard Business School",
        "yearOfCompletion": 2011
      }
    },
    {
      "name": "Jake Turner",
      "email": "jake.turner@example.com",
      "password": "password606",
      "role": "mentor",
      "bio": "Experienced front-end developer specializing in creating interactive and responsive web applications.",
      "skills": ["JavaScript", "Vue.js", "HTML/CSS"],
      "mentorDetails": {
        "expertise": ["front-end development", "responsive design"],
        "pastDomains": ["e-commerce", "media"]
      },
      "availability": true,
      "education": {
        "degree": "Bachelor's in Web Design",
        "institution": "University of California, Los Angeles",
        "yearOfCompletion": 2016
      }
    },
    {
      "name": "Laura King",
      "email": "laura.king@example.com",
      "password": "password707",
      "role": "mentor",
      "bio": "AI researcher with a focus on deep learning and neural networks.",
      "skills": ["Python", "Keras", "TensorFlow"],
      "mentorDetails": {
        "expertise": ["artificial intelligence", "machine learning"],
        "pastDomains": ["technology", "research"]
      },
      "availability": false,
      "education": {
        "degree": "PhD in Artificial Intelligence",
        "institution": "Carnegie Mellon University",
        "yearOfCompletion": 2021
      }
    },
    {
      "name": "Michael Scott",
      "email": "michael.scott@example.com",
      "password": "password808",
      "role": "mentor",
      "bio": "IT consultant with extensive experience in systems integration and enterprise solutions.",
      "skills": ["Systems Integration", "Enterprise Architecture", "IT Consulting"],
      "mentorDetails": {
        "expertise": ["enterprise solutions", "systems integration"],
        "pastDomains": ["consulting", "technology"]
      },
      "availability": true,
      "education": {
        "degree": "Bachelor's in Computer Engineering",
        "institution": "University of Texas at Austin",
        "yearOfCompletion": 2008
      }
    }
  ];
  

// Function to send POST request to sign up endpoint
async function signUpMentors() {
  for (const mentor of mentors) {
    try {
      const response = await axios.post('http://localhost:8000/api/auth/signup', mentor);
      console.log(`Successfully signed up: ${mentor.email}`, response.data);
    } catch (error) {
      console.error(`Error signing up ${mentor.email}:`, error.response ? error.response.data : error.message);
    }
  }
}

// Execute the function
signUpMentors();
