# Chandru — Personal AI/ML Portfolio Website

A modern, responsive, high-performance personal portfolio built for **Chandru**, an Artificial Intelligence and Machine Learning engineering student at **Sri Sairam Institute of Technology**.

---

## 🚀 Live Local Preview

The website is currently hosted and running on your local machine:
- **Local URL:** [http://localhost:3000](http://localhost:3000)

To launch or relaunch anytime:
```bash
# Using Python:
python -m http.server 3000

# Or using Node:
npx serve .
```
You can also double-click `index.html` in Windows Explorer to open it directly in Google Chrome, Microsoft Edge, or Firefox.

---

## 🎨 Design & Features

- **Dark Futuristic AI Aesthetics:** Obsidian space theme (`#06080d`) with electric cyan (`#00f5d4`), cyber violet (`#8a2be2`), and neon gradients.
- **Interactive Neural Background Canvas:** Real-time AI synapse and constellation particle network that dynamically connects nodes and reacts to mouse movements.
- **Hero Section:** High-impact landing with Chandru's photo framed in a rotating cybernetic orbit, animated badges, and direct call-to-actions.
- **About Me:** Core background text with Sri Sairam Institute of Technology details and holographic AI brain visualization.
- **Interactive Skills Section:** Category tabs (`All`, `Programming`, `Computer Science`, `Development`, `AI/ML`) with clean technology badges (no arbitrary percentage bars).
- **Featured Flagship Project:** Large interactive card for the **AI-Powered Smart Medicine Verification System**, complete with deep-dive tabs for:
  - Problem Statement
  - Solution
  - Key Features
  - Technologies Used
  - My Role
  - Future Improvements
- **Project Showcase:** Pipeline featuring the main project and stylish radar-scanned **"Project Coming Soon"** placeholder cards.
- **Education Timeline:** Modern chronological node displaying B.E. AI & ML at Sri Sairam Institute of Technology (Currently Pursuing).
- **Resume Section:** Dedicated download area linking to `resume.pdf` and `YOUR_RESUME_LINK`.
- **Social Cards:** High-impact interactive cards for **GitHub** and **LinkedIn**.
- **Contact Form:** Clean, validated contact form with real-time feedback toast notifications.
- **"Ask Chandru AI 🤖" Floating Chatbot:**
  - Grounded strictly in Chandru's portfolio knowledge.
  - Answers questions regarding identity, college, degree, skills (Python, Java, DSA, Full Stack), projects, and links.
  - Strict fallback for unknown inquiries: *"I don't have that information about Chandru yet."*
  - Includes suggested question chips, animated typing indicator, clear chat, and responsive mobile layout.

---

## ⚙️ Updating Your Personal Links (Easy 1-Step Config)

All personal links and placeholders are centralized in a single file:  
📁 [js/portfolio-data.js](file:///c:/Users/sarav/OneDrive/Microsoft%20Copilot%20Chat%20Files/Desktop/chandru%20project/js/portfolio-data.js)

Open `js/portfolio-data.js` to replace any of the following with your actual links anytime:

```javascript
links: {
  github: "YOUR_GITHUB_LINK",      // e.g., https://github.com/chandru
  linkedin: "YOUR_LINKEDIN_LINK",  // e.g., https://linkedin.com/in/chandru-s-549737329
  email: "YOUR_EMAIL",             // e.g., chandruchandru904230@gmail.com
  resume: "YOUR_RESUME_LINK",      // e.g., ./resume.pdf or a Google Drive link
}
```

Updating this single file automatically updates all buttons, cards, social links, and the AI Chatbot responses across the entire website!

---

## 📁 Project Structure

```
chandru project/
├── index.html              # Main semantic HTML structure
├── css/
│   └── style.css           # Vanilla CSS design system & responsive styling
├── js/
│   ├── portfolio-data.js   # Single central configuration & knowledge base
│   ├── neural-canvas.js    # Interactive AI particles & synapses background
│   ├── chatbot.js          # "Ask Chandru AI 🤖" grounded chatbot engine
│   └── main.js             # UI controls, tabs, skills filter, animations
├── profile.png             # Chandru's profile photograph
├── smart-medicine.jpg      # AI Medicine Verification project visualization
├── ai-brain.jpg            # Neural AI holographic brain visualization
├── resume.pdf              # Official resume document
└── README.md               # Documentation & setup guide
```
