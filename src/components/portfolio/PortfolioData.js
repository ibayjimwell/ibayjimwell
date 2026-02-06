// Portfolio data - single source of truth
const portfolioData = {
  fullname: "Jimwell Bustos Ibay",
  name: "Jimwell Ibay",
  profession: "Fullstack Developer",
  linkedin: "https://www.linkedin.com/in/ibayjimwell/",
  github: "https://github.com/ibayjimwell",
  email: "ibayjimwell@gmail.com",
  cv: "/jimwell-ibay-cv.pdf",
  skills: [
    "Javascript", 
    "Typescript", 
    "Python", 
    "HTML",
    "CSS",
    "Tailwind",
    "React",
    "Next",
    "Express",
    "Django",
    "PostgreSQL",
    "MongoDB",
    "Git",
    "Docker"
  ],
  sections: [
    {
      title: "About Me",
      content: "I build modern, reliable, and scalable web applications that help businesses run better. I focus on clean components and reliable APIs."
    },
    {
      title: "Backend Development",
      content: "APIs and services with Express.js and Python (Django). I design RESTful endpoints, authentication, and efficient DB schemas."
    },
    {
      title: "Frontend Development",
      content: "Interactive, accessible frontends using React, and Tailwind CSS. I build component and reusable UI patterns suitable for corporate apps."
    },
    {
      title: "Databases & DevOps",
      content: "Production-ready data systems (PostgreSQL, MongoDB), containerization with Docker and deployment best practices."
    }
  ],
  experience: [
    {
      title: "Web Application Developer",
      company: "QuickRev Team",
      duration: "Nov 2025 — December 2025",
      description: "Lead feature development for QuickRev frontend components, backend APIs, and deployment."
    },
    {
      title: "System Developer",
      company: "ADC Hotel",
      duration: "May 2025 — Jun 2025",
      description: "Delivered a booking and check-in system."
    },
    {
      title: "Network Administrator Assistant",
      company: "ACLC College - Apalit",
      duration: "Feb 2023 — Mar 2023",
      description: "Supported network maintenance and troubleshooting."
    }
  ],
  projects: [
    {
      title: "ADC Hotel Management",
      slug: "Web App",
      description: "Enterprise-grade Hotel Management System for bookings and check-in.",
      link: "https://adc-hotel-app.vercel.app/",
      repo: "https://github.com/ibayjimwell/adc-hotel-app",
      icon: "https://raw.githubusercontent.com/ibayjimwell/adc-hotel-app/0f57355be8798a23fe0f5d612c82693b421bea84/public/placeholder.svg",
      tech: ["Typescript", "Javascript", "Next", "React", "Express", "PostgreSQL"],
      caseStudy: {
        problem: "Manual check-in and booking caused slow front-desk operations.",
        solution: "Built an integrated system with booking and check-in. Implemented efficient queries and UX to minimize steps.",
        impact: "Reduced average check-in time, improved staff productivity and reporting insights."
      }
    },
    {
      title: "QuickRev (AI Reviewer)",
      slug: "Web App",
      description: "AI-powered reviewer & flashcard generator that turns source material into study-ready content in one click.",
      link: "https://quickrev-app.vercel.app/",
      repo: "https://github.com/ibayjimwell/quickrev-app",
      icon: "https://raw.githubusercontent.com/ibayjimwell/quickrev-app/refs/heads/master/public/icon.png",
      tech: ["Javascript", "Python", "React", "FastAPI", "Appwrite", "Gemini LLM"],
      caseStudy: {
        problem: "Students spend hours creating study materials manually.",
        solution: "Built a one-click solution that generates flashcards and reviewer using an LLM, with share to other.",
        impact: "Significantly reduced study material creation time for students, clear UX for rapid iteration."
      }
    },
    {
      title: "Moviary",
      slug: "Web App",
      description: "Clean movie browsing app with search, trending, and accessible UI.",
      link: "https://moviary.vercel.app/",
      repo: "https://github.com/ibayjimwell/moviary",
      icon: "https://raw.githubusercontent.com/ibayjimwell/moviary/2c98f94c4ffea612f155ea358a11b937aadbcf41/public/logo.svg",
      tech: ["React", "Express", "MongoDB"],
      caseStudy: {
        problem: "Users want fast, accessible browsing of movies without clutter.",
        solution: "Built an optimized UI and efficient data fetching strategy.",
        impact: "Fast load times and accessible layout; easy to extend for new content sources."
      }
    }
  ]
};

export default portfolioData;