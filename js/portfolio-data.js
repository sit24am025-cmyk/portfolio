/**
 * =====================================================================
 * CHANDRU - PORTFOLIO CONFIGURATION DATA
 * =====================================================================
 * All personal details, links, projects, and chatbot knowledge base
 * are centralized in this file. You can easily update your links and
 * information here, and the entire portfolio updates automatically!
 */

const PORTFOLIO_DATA = {
  // Personal Info
  personal: {
    name: "Chandru",
    fullName: "Chandru",
    title: "B.E. AI & ML Student | Python & Java Developer | Full Stack Developer",
    degree: "B.E. Artificial Intelligence and Machine Learning (AI & ML)",
    college: "Sri Sairam Institute of Technology",
    location: "Chennai, Tamil Nadu, India",
    status: "Currently Pursuing",
    
    // Core summary as requested
    heroIntro: "I'm an Artificial Intelligence and Machine Learning student at Sri Sairam Institute of Technology, passionate about software development, AI-powered solutions, and building practical technology projects.",
    
    aboutMe: "Hi, I'm Chandru, a B.E. Artificial Intelligence and Machine Learning student at Sri Sairam Institute of Technology. I am interested in software development, artificial intelligence, machine learning, and full-stack development. I have a foundation in Python, Java, and Data Structures & Algorithms, and I enjoy building practical applications that solve real-world problems.",
    
    // Placeholders - replace these with your actual links anytime!
    links: {
      github: "https://github.com/sit24am025-cmyk",
      linkedin: "https://www.linkedin.com/in/chandru-s-549737329",
      email: "YOUR_EMAIL",             // e.g. chandruchandru904230@gmail.com
      resume: "./chandru_resume (4).pdf",
    },
    
    // Images
    images: {
      profile: "./profile.png",
      aiBrain: "./ai-brain.jpg",
      featuredProject: "./smart-medicine.jpg",
      resumePdf: "./chandru_resume (4).pdf"
    }
  },

  // Skills Categories (No fake percentages, high-tech badges)
  skills: [
    {
      category: "Programming",
      icon: "code",
      badgeColor: "cyan",
      items: [
        { name: "Python", desc: "Core language for AI, data handling, and automation" },
        { name: "Java", desc: "Object-oriented architecture & algorithmic development" }
      ]
    },
    {
      category: "Computer Science",
      icon: "cpu",
      badgeColor: "purple",
      items: [
        { name: "Data Structures & Algorithms", desc: "Efficient computational problem solving & complexity analysis" },
        { name: "Object-Oriented Programming", desc: "Modular, reusable, and maintainable software design" },
        { name: "Problem Solving", desc: "Analytical breakdown of complex technical challenges" }
      ]
    },
    {
      category: "Development",
      icon: "layers",
      badgeColor: "blue",
      items: [
        { name: "Full Stack Development", desc: "End-to-end web architecture from UI to server" },
        { name: "Frontend Development", desc: "Responsive, accessible, and intuitive user interfaces" },
        { name: "Backend Development", desc: "Server logic, data handling, and application services" },
        { name: "REST APIs", desc: "Standardized API integration and endpoint development" }
      ]
    },
    {
      category: "AI/ML",
      icon: "zap",
      badgeColor: "emerald",
      items: [
        { name: "Artificial Intelligence", desc: "Intelligent computational systems and heuristic problem solving" },
        { name: "Machine Learning", desc: "Supervised learning models, evaluation, and pipeline construction" },
        { name: "AI-based Application Development", desc: "Translating machine learning models into functional user applications" }
      ]
    }
  ],

  // Featured Project: In-depth breakdown
  featuredProject: {
    title: "AI-Powered Smart Medicine Verification System",
    subtitle: "Healthcare Intelligence & Verification Platform",
    tagline: "Applying artificial intelligence to improve medicine verification and healthcare data transparency.",
    description: "An AI-powered system designed to help verify medicines and provide useful information about them using intelligent technology. The project focuses on applying AI to improve medicine verification and make healthcare-related information easier to access.",
    image: "./smart-medicine.jpg",
    tags: ["Python", "Machine Learning", "Full Stack Development", "REST APIs", "Healthcare AI"],
    links: {
      github: "YOUR_PROJECT_GITHUB_LINK",
      demo: "YOUR_PROJECT_DEMO_LINK"
    },
    details: {
      problemStatement: "Counterfeit, mislabeled, and compromised medications present severe risks to patient health and global healthcare systems. Consumers and caregivers frequently lack fast, reliable, and accessible verification tools to confirm whether a medicine is genuine, identify dosage details, and comprehend vital precautions before consumption.",
      solution: "An intelligent, AI-assisted verification ecosystem that automates medicine inspection. By processing packaging attributes and medicine information through intelligent models, the system helps verify legitimacy, retrieves structured pharmaceutical data, and presents clear, accessible guidance to patients and medical workers.",
      keyFeatures: [
        "Intelligent Medicine & Packaging Verification",
        "Automated Extraction of Drug Information & Dosage Data",
        "Accessible Healthcare Guidance for Patients",
        "Real-Time Verification Feedback & Safety Alerts",
        "Responsive, User-Friendly Interface for Healthcare Access"
      ],
      technologiesUsed: [
        "Python (Core AI & Logic)",
        "Machine Learning Pipeline",
        "Full Stack Web Architecture",
        "RESTful API Integration",
        "Computer Vision / OCR (Placeholder for optical verification)"
      ],
      myRole: "AI & Software Developer — Conceptualized system design, developed backend logic and verification workflows, integrated machine learning modules, and built the interactive web interface.",
      futureImprovements: [
        "Mobile application with live camera scanning & barcode/strip verification",
        "Multi-language voice and text support for regional healthcare accessibility",
        "Direct synchronization with certified national pharmaceutical registries",
        "Automated drug interaction warnings and prescription validation"
      ]
    }
  },

  // Projects Showcase (Main project + explicit 'Project Coming Soon' placeholders)
  projects: [
    {
      id: "smart-medicine",
      title: "AI-Powered Smart Medicine Verification System",
      status: "Featured Project",
      isComingSoon: false,
      image: "./smart-medicine.jpg",
      description: "An AI-powered system designed to help verify medicines and provide useful information about them using intelligent technology. The project focuses on applying AI to improve medicine verification and make healthcare-related information easier to access.",
      tags: ["Python", "Machine Learning", "Full Stack", "REST APIs"],
      githubLink: "YOUR_PROJECT_GITHUB_LINK",
      demoLink: "YOUR_PROJECT_DEMO_LINK"
    },
    {
      id: "upcoming-1",
      title: "Project Coming Soon",
      status: "In Development",
      isComingSoon: true,
      image: null,
      description: "Next AI-powered project currently under architecture and development. Focusing on practical software engineering and machine learning solutions.",
      tags: ["AI / ML", "Python", "Full Stack"],
      githubLink: "#",
      demoLink: "#"
    },
    {
      id: "upcoming-2",
      title: "Project Coming Soon",
      status: "Upcoming Research",
      isComingSoon: true,
      image: null,
      description: "Upcoming engineering project exploring intelligent computational algorithms, system optimization, and real-world technology impact.",
      tags: ["Machine Learning", "Algorithms", "Software Dev"],
      githubLink: "#",
      demoLink: "#"
    }
  ],

  // Education Timeline
  education: [
    {
      degree: "B.E. Artificial Intelligence and Machine Learning",
      institution: "Sri Sairam Institute of Technology",
      status: "Currently Pursuing",
      period: "2024 — Present",
      location: "Chennai, Tamil Nadu",
      highlights: [
        "Focus on Artificial Intelligence, Machine Learning algorithms, and computational modeling.",
        "Deep foundation in Data Structures & Algorithms, Object-Oriented Programming, and Software Engineering.",
        "Hands-on project development bridging AI research with full stack practical applications."
      ]
    }
  ],

  // Chatbot Knowledge Base (Strictly grounded in provided facts)
  chatbotKnowledge: [
    {
      intent: "identity",
      keywords: ["who is chandru", "who are you", "tell me about chandru", "about chandru", "who is he", "introduction", "bio"],
      answer: "Chandru is a B.E. Artificial Intelligence and Machine Learning student at Sri Sairam Institute of Technology, passionate about software development, AI-powered solutions, and building practical technology projects."
    },
    {
      intent: "college",
      keywords: ["where does chandru study", "where do you study", "what college", "college name", "which college", "institute", "university", "sri sairam", "sairam"],
      answer: "Chandru is studying at Sri Sairam Institute of Technology in Chennai, Tamil Nadu."
    },
    {
      intent: "degree",
      keywords: ["what is chandru's degree", "what degree", "what course", "what is your degree", "what department", "what department is chandru studying", "department", "branch", "major"],
      answer: "Chandru is pursuing a Bachelor of Engineering (B.E.) degree in Artificial Intelligence and Machine Learning (AI & ML). He is currently pursuing this degree."
    },
    {
      intent: "skills",
      keywords: ["what are chandru's skills", "what skills", "skills", "tech stack", "technologies", "what do you know", "abilities", "technical skills"],
      answer: "Chandru's skills include Python, Java, Data Structures & Algorithms (DSA), and Full Stack Development (Frontend, Backend, and REST APIs), as well as Artificial Intelligence and Machine Learning."
    },
    {
      intent: "python",
      keywords: ["does chandru know python", "do you know python", "python", "chandru python", "know python"],
      answer: "Yes! Chandru knows Python. He uses it as one of his primary programming languages for AI, machine learning pipelines, and software development."
    },
    {
      intent: "java",
      keywords: ["does chandru know java", "do you know java", "java", "chandru java", "know java"],
      answer: "Yes! Chandru knows Java. He has a strong foundation in Java, Object-Oriented Programming (OOP), and algorithmic problem solving."
    },
    {
      intent: "fullstack",
      keywords: ["does chandru know full-stack development", "does chandru know full stack", "full-stack", "full stack", "frontend", "backend", "web development"],
      answer: "Yes! Chandru knows Full Stack Development, covering both Frontend Development, Backend Development, and REST APIs."
    },
    {
      intent: "dsa",
      keywords: ["dsa", "data structures", "algorithms", "problem solving"],
      answer: "Yes! Chandru has a solid foundation in Data Structures & Algorithms (DSA), Object-Oriented Programming, and technical problem solving."
    },
    {
      intent: "main_project",
      keywords: ["what is chandru's main project", "main project", "featured project", "best project", "primary project"],
      answer: "Chandru's main project is the **AI-Powered Smart Medicine Verification System**, an intelligent system designed to verify medicines and provide useful information about them using AI."
    },
    {
      intent: "smart_medicine_details",
      keywords: ["tell me about the smart medicine verification system", "smart medicine", "medicine verification", "medicine project", "how does the medicine system work"],
      answer: "The **AI-Powered Smart Medicine Verification System** is designed to help verify medicines and provide useful information about them using intelligent technology. It focuses on applying AI to improve medicine verification and make healthcare-related information easier and safer to access."
    },
    {
      intent: "github",
      keywords: ["where can i find chandru's github", "github link", "github profile", "github url", "source code", "github"],
      answer: "You can find Chandru's GitHub profile using the link: `https://github.com/sit24am025-cmyk` (accessible directly through the social cards and header on this website)."
    },
    {
      intent: "linkedin",
      keywords: ["where can i find chandru's linkedin", "linkedin link", "linkedin profile", "linkedin url", "connect on linkedin", "linkedin"],
      answer: "You can connect with Chandru professionally on LinkedIn using the link: `https://www.linkedin.com/in/chandru-s-549737329` (available in the header and social section)."
    },
    {
      intent: "resume",
      keywords: ["resume", "cv", "download resume", "where is resume", "curriculum vitae"],
      answer: "You can download Chandru's resume directly from the Resume section of this portfolio (use the Download Resume button)."
    },
    {
      intent: "contact",
      keywords: ["how to contact", "contact", "email", "reach out", "send message"],
      answer: "You can get in touch with Chandru using the Contact form on this website or reach him at: `YOUR_EMAIL`."
    }
  ],

  // Suggested prompts for users in the Chatbot
  suggestedQuestions: [
    "Who is Chandru?",
    "What are Chandru's skills?",
    "What is Chandru's main project?",
    "Where does Chandru study?",
    "Does Chandru know Python?",
    "Does Chandru know Java?",
    "Does Chandru know full-stack development?",
    "Tell me about the Smart Medicine Verification System",
    "Where can I find Chandru's GitHub?",
    "Where can I find Chandru's LinkedIn?"
  ]
};

// Make available globally
if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
