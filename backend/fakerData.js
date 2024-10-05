const axios = require('axios');

// Sample data arrays
const names = ["John Doe", "Jane Smith", "Michael Johnson", "Emily Davis", "David Wilson", "Grace Williams", "Sophia Brown", "Ethan Miller", "Liam Garcia", "Ava Martinez"];
const bios = [
  "Senior DevOps engineer with a focus on automation and cloud infrastructure.",
  "Full-stack developer with expertise in web and mobile applications.",
  "Data scientist with experience in machine learning and AI.",
  "Cybersecurity expert with a focus on ethical hacking and network security.",
  "Cloud architect specializing in AWS and Azure deployments.",
  "Backend developer with proficiency in Node.js and Python.",
  "Frontend engineer focusing on React and Vue.js frameworks.",
  "Database administrator with knowledge in SQL and NoSQL technologies.",
  "AI specialist working on deep learning projects.",
  "Blockchain developer with a passion for decentralized applications."
];
const skillsList = [
  ["AWS", "Terraform", "Kubernetes"],
  ["React", "Node.js", "MongoDB"],
  ["Python", "TensorFlow", "Scikit-Learn"],
  ["Linux", "Bash", "Network Security"],
  ["AWS", "Azure", "GCP"],
  ["Node.js", "Express", "PostgreSQL"],
  ["React", "Vue.js", "JavaScript"],
  ["SQL", "MongoDB", "Cassandra"],
  ["Python", "Keras", "Deep Learning"],
  ["Ethereum", "Solidity", "Smart Contracts"]
];
const expertiseList = [
  ["cloud engineering", "CI/CD pipelines"],
  ["web development", "mobile apps"],
  ["machine learning", "AI"],
  ["cybersecurity", "network security"],
  ["cloud computing", "infrastructure"],
  ["backend development", "APIs"],
  ["frontend development", "UI/UX"],
  ["databases", "data storage"],
  ["artificial intelligence", "data science"],
  ["blockchain", "smart contracts"]
];
const pastDomainsList = [
  ["technology", "retail"],
  ["education", "finance"],
  ["healthcare", "real estate"],
  ["defense", "government"],
  ["e-commerce", "startups"],
  ["media", "automotive"],
  ["fintech", "education"],
  ["sports", "entertainment"],
  ["biotechnology", "robotics"],
  ["cryptocurrency", "gaming"]
];
const institutions = ["MIT", "Harvard", "Stanford", "University of Michigan", "Caltech"];
const years = [2014, 2015, 2016, 2017, 2018];

// Function to generate random number
const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Function to generate mentor data
const generateMentorData = () => {
  return {
    name: getRandomItem(names),
    email: `${getRandomItem(names).toLowerCase().replace(" ", ".")}@example.com`,
    password: "password123",
    role: "mentor",
    bio: getRandomItem(bios),
    skills: getRandomItem(skillsList)
  };
};


// const generateMentorData = () => {
//   return {
//     name: getRandomItem(names),
//     email: `${getRandomItem(names).toLowerCase().replace(" ", ".")}@example.com`,
//     password: "password123",
//     role: "mentor",
//     bio: getRandomItem(bios),
//     skills: getRandomItem(skillsList),
//     mentorDetails: {
//       expertise: getRandomItem(expertiseList),
//       pastDomains: getRandomItem(pastDomainsList),
//     },
//     availability: true,
//     education: {
//       degree: "Bachelor's in Computer Science",
//       institution: getRandomItem(institutions),
//       yearOfCompletion: getRandomItem(years),
//     }
//   };
// };

// Function to send POST request
const sendSignUpRequest = async (mentorData) => {
  try {
    const response = await axios.post('http://localhost:8000/api/auth/signup', mentorData);
    console.log(`Mentor ${mentorData.name} signed up successfully`, response.data);
  } catch (error) {
    console.error(`Error signing up mentor ${mentorData.name}:`, error.response ? error.response.data : error.message);
  }
};

// Generate and send requests for 50 mentors
for (let i = 0; i < 50; i++) {
  const mentorData = generateMentorData();
  sendSignUpRequest(mentorData);
  // console.log(mentorData);
}
