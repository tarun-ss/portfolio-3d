import {hal} from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    git,
    python,
    C,
    keilArm,
    RStudio,
    github,
    html,
    javascript,
    linkedin,
    nextjs,
    nodejs,
    pricewise,
    react,
    snapgram,
    summiz,
    tailwindcss,
    threads,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: python,
        name: "Python",
        type: "Coding",
    },
    {
        imageUrl: C,
        name: "C",
        type: "Coding",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: RStudio,
        name: "Rstudio",
        type: "Data Analysis",
    },
    {
        imageUrl: keilArm,
        name: "keilArm",
        type: "Embeded",
    },
    
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
   
   
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
   
];

export const experiences = [
    {
        title: "R&D at HAL",
        company_name: "Hindustan Aeronautic Limited",
        icon: hal,
        iconBg: "#accbe1",
        date: "August 2023 - September 2023",
        points: [
            "Studied about the key systems of the Light Combat Aircraft (LCA Tejas) and prepared a report.",
        ],
    },
   
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/tarun-ss',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/tarun-s-192273223',
    }
];

export const projects = [
    {
       
        theme: 'btn-back-blue',
        name: 'Weather Analysis using RStudio',
        description: 'Conducted a comprehensive analysis of weather patterns.',
        tools: 'RStudio, R'
    },
    {
       
        theme: 'btn-back-red',
        name: 'Encryption and Decryption Model',
        description: 'Developed a basic encryption and decryption tool to ensure data security.',
        tools: 'Linux'
    },
    {
        
        theme: 'btn-back-green',
        name: 'Data Analysis of Lower Joint Movements',
        description: 'Analyzed human lower joint movements using kinematic data.',
        tools: 'IMU sensors, Python'
    },
    {
        
        theme: 'btn-back-yellow',
        name: 'Machine Learning for Microplastics Detection',
        description: 'Collected data and trained models to detect microplastics in soil samples (ongoing).',
        tools: 'Python, Scikit-Learn'
    },
    {
        
        theme: 'btn-back-purple',
        name: 'Image Tracking with OpenCV',
        description: 'Implemented projects for real-time image tracking and object detection.',
        tools: 'OpenCV, Python'
    },
    {
       
        theme: 'btn-back-gray',
        name: 'Scientific Calculator',
        description: 'Built a web-based calculator for basic mathematical operations.',
        tools: 'HTML, CSS, JavaScript'
    },
];