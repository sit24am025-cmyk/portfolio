/**
 * =====================================================================
 * ASK CHANDRU AI 🤖 - PORTFOLIO CHATBOT
 * =====================================================================
 * Grounded AI assistant answering questions about Chandru strictly based
 * on his portfolio details. If a question asks for unknown details, it
 * answers: "I don't have that information about Chandru yet."
 */

class AskChandruAI {
  constructor() {
    this.data = window.PORTFOLIO_DATA;
    this.isOpen = false;
    this.isTyping = false;
    this.messages = [];

    this.cacheDOMElements();
    this.bindEvents();
    this.initSuggestedQuestions();
    this.addWelcomeMessage();
  }

  cacheDOMElements() {
    this.widget = document.getElementById("ai-chatbot-widget");
    this.toggleBtn = document.getElementById("chatbot-toggle-btn");
    this.closeBtn = document.getElementById("chatbot-close-btn");
    this.clearBtn = document.getElementById("chatbot-clear-btn");
    this.chatBody = document.getElementById("chatbot-messages");
    this.inputForm = document.getElementById("chatbot-input-form");
    this.inputField = document.getElementById("chatbot-input");
    this.suggestionsContainer = document.getElementById("chatbot-suggestions");
    this.badgeNotification = document.getElementById("chatbot-badge-notification");
  }

  bindEvents() {
    if (this.toggleBtn) {
      this.toggleBtn.addEventListener("click", () => this.toggleChat());
    }
    if (this.closeBtn) {
      this.closeBtn.addEventListener("click", () => this.closeChat());
    }
    if (this.clearBtn) {
      this.clearBtn.addEventListener("click", () => this.clearChat());
    }
    if (this.inputForm) {
      this.inputForm.addEventListener("submit", (e) => {
        e.preventDefault();
        this.handleUserSubmit();
      });
    }

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.isOpen) {
        this.closeChat();
      }
    });

    // Also support external buttons opening the chatbot (e.g. hero or navbar "Chat with AI" buttons)
    document.querySelectorAll("[data-open-chatbot]").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        this.openChat();
      });
    });
  }

  toggleChat() {
    if (this.isOpen) {
      this.closeChat();
    } else {
      this.openChat();
    }
  }

  openChat() {
    this.isOpen = true;
    this.widget.classList.add("is-active");
    this.toggleBtn.classList.add("is-hidden");
    if (this.badgeNotification) {
      this.badgeNotification.style.display = "none";
    }
    this.scrollToBottom();
    setTimeout(() => {
      if (this.inputField && window.innerWidth > 768) {
        this.inputField.focus();
      }
    }, 250);
  }

  closeChat() {
    this.isOpen = false;
    this.widget.classList.remove("is-active");
    this.toggleBtn.classList.remove("is-hidden");
  }

  clearChat() {
    this.chatBody.innerHTML = "";
    this.messages = [];
    this.addWelcomeMessage();
  }

  initSuggestedQuestions() {
    if (!this.suggestionsContainer || !this.data || !this.data.suggestedQuestions) return;

    this.suggestionsContainer.innerHTML = "";
    this.data.suggestedQuestions.forEach((q) => {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "suggestion-chip";
      chip.textContent = q;
      chip.addEventListener("click", () => {
        if (this.isTyping) return;
        this.processQuery(q);
      });
      this.suggestionsContainer.appendChild(chip);
    });
  }

  addWelcomeMessage() {
    const welcomeText = `Hi there! 👋 I am **Ask Chandru AI 🤖**.<br><br>I'm Chandru's interactive portfolio assistant. Ask me anything about his B.E. AI & ML degree at Sri Sairam Institute of Technology, his programming skills (Python, Java, DSA, Full Stack), or his **AI-Powered Smart Medicine Verification System**!`;
    this.appendBotMessage(welcomeText, false);
  }

  handleUserSubmit() {
    const text = this.inputField.value.trim();
    if (!text || this.isTyping) return;

    this.inputField.value = "";
    this.processQuery(text);
  }

  processQuery(query) {
    this.appendUserMessage(query);
    this.showTypingIndicator();

    // Natural bot response delay
    const delay = Math.min(800, Math.max(400, query.length * 20));

    setTimeout(() => {
      const response = this.computeAnswer(query);
      this.hideTypingIndicator();
      this.appendBotMessage(response, true);
    }, delay);
  }

  /**
   * Intelligently evaluates user prompt against strictly verified knowledge base.
   * Uses intent token matching, synonym expansion, and strict fallback.
   */
  computeAnswer(rawQuery) {
    const cleanQuery = rawQuery.toLowerCase().trim();
    const tokens = cleanQuery.replace(/[?.,!/\\;:'"()]/g, " ").split(/\s+/).filter(Boolean);

    // Specific example questions from user prompt
    if (
      cleanQuery.includes("who is chandru") ||
      cleanQuery === "who are you" ||
      cleanQuery.includes("tell me about chandru") ||
      cleanQuery.includes("about chandru") ||
      cleanQuery.includes("introduce chandru") ||
      cleanQuery.includes("who is he")
    ) {
      return "Chandru is a B.E. Artificial Intelligence and Machine Learning student at Sri Sairam Institute of Technology, passionate about software development, AI-powered solutions, and building practical technology projects.";
    }

    if (
      cleanQuery.includes("where does chandru study") ||
      cleanQuery.includes("where do you study") ||
      cleanQuery.includes("where he study") ||
      cleanQuery.includes("which college") ||
      cleanQuery.includes("what college") ||
      cleanQuery.includes("sairam") ||
      cleanQuery.includes("institute")
    ) {
      return "Chandru studies at **Sri Sairam Institute of Technology** in Chennai, Tamil Nadu, pursuing his B.E. in Artificial Intelligence and Machine Learning.";
    }

    if (
      cleanQuery.includes("what is chandru's degree") ||
      cleanQuery.includes("what degree") ||
      cleanQuery.includes("what is his degree") ||
      cleanQuery.includes("what course") ||
      cleanQuery.includes("degree") ||
      cleanQuery.includes("education")
    ) {
      return "Chandru is pursuing a **B.E. (Bachelor of Engineering) in Artificial Intelligence and Machine Learning (AI & ML)** at Sri Sairam Institute of Technology (Currently Pursuing).";
    }

    if (
      cleanQuery.includes("what department") ||
      cleanQuery.includes("which department") ||
      cleanQuery.includes("what branch")
    ) {
      return "Chandru is studying in the department of **Artificial Intelligence and Machine Learning (AI & ML)** at Sri Sairam Institute of Technology.";
    }

    // Specific language checks: Python
    if (
      cleanQuery.includes("does chandru know python") ||
      cleanQuery.includes("know python") ||
      (cleanQuery.includes("python") && (cleanQuery.includes("know") || cleanQuery.includes("use") || cleanQuery.includes("experience") || cleanQuery === "python"))
    ) {
      return "Yes! Chandru knows Python. Python is one of his core programming languages, utilized for artificial intelligence, machine learning pipelines, and software development.";
    }

    // Specific language checks: Java
    if (
      cleanQuery.includes("does chandru know java") ||
      cleanQuery.includes("know java") ||
      (cleanQuery.includes("java") && (cleanQuery.includes("know") || cleanQuery.includes("use") || cleanQuery.includes("experience") || cleanQuery === "java"))
    ) {
      return "Yes! Chandru knows Java. He has strong expertise in Java, Object-Oriented Programming (OOP), and algorithmic problem solving.";
    }

    // Specific skill checks: Full Stack Development
    if (
      cleanQuery.includes("does chandru know full-stack") ||
      cleanQuery.includes("does chandru know full stack") ||
      cleanQuery.includes("know full stack") ||
      cleanQuery.includes("full-stack") ||
      cleanQuery.includes("full stack") ||
      cleanQuery.includes("frontend") ||
      cleanQuery.includes("backend")
    ) {
      return "Yes! Chandru knows Full Stack Development, including Frontend Development, Backend Development, and REST APIs.";
    }

    // Specific skill checks: DSA / Algorithms
    if (
      cleanQuery.includes("dsa") ||
      cleanQuery.includes("data structures") ||
      cleanQuery.includes("algorithms") ||
      cleanQuery.includes("problem solving")
    ) {
      return "Chandru has a strong foundation in **Data Structures & Algorithms (DSA)**, Object-Oriented Programming, and analytical problem solving.";
    }

    // What programming languages does Chandru know?
    if (
      cleanQuery.includes("what programming languages") ||
      cleanQuery.includes("programming language") ||
      cleanQuery.includes("languages does chandru know") ||
      cleanQuery.includes("coding language")
    ) {
      return "Chandru knows **Python** and **Java** as his core programming languages.";
    }

    // General skills question (format aligned with prompt specification)
    if (
      cleanQuery.includes("what are chandru's skills") ||
      cleanQuery.includes("chandru's skills") ||
      cleanQuery.includes("what skills") ||
      cleanQuery.includes("skills") ||
      cleanQuery.includes("tech stack") ||
      cleanQuery.includes("technologies")
    ) {
      return "Chandru is a B.E. AI & ML student at Sri Sairam Institute of Technology. His current skills include **Python**, **Java**, **Data Structures & Algorithms**, and **Full Stack Development** (Frontend, Backend, REST APIs), alongside **Artificial Intelligence** and **Machine Learning**.";
    }

    // Main project / Smart Medicine Verification System
    if (
      cleanQuery.includes("what is chandru's main project") ||
      cleanQuery.includes("main project") ||
      cleanQuery.includes("primary project") ||
      cleanQuery.includes("featured project") ||
      cleanQuery.includes("best project")
    ) {
      return "Chandru's main project is the **AI-Powered Smart Medicine Verification System** — an intelligent system designed to help verify medicines and provide useful information about them using AI.";
    }

    if (
      cleanQuery.includes("smart medicine") ||
      cleanQuery.includes("tell me about the smart medicine verification system") ||
      cleanQuery.includes("medicine verification") ||
      cleanQuery.includes("medicine project") ||
      cleanQuery.includes("medicine system")
    ) {
      return "The **AI-Powered Smart Medicine Verification System** is an AI-powered system designed to help verify medicines and provide useful information about them using intelligent technology. The project focuses on applying AI to improve medicine verification and make healthcare-related information easier to access.";
    }

    if (cleanQuery.includes("projects") || cleanQuery.includes("other projects")) {
      return "Chandru's primary featured project is the **AI-Powered Smart Medicine Verification System**. Additional projects are currently in development and labeled as **'Project Coming Soon'** in the showcase.";
    }

    // GitHub link
    if (
      cleanQuery.includes("where can i find chandru's github") ||
      cleanQuery.includes("chandru's github") ||
      cleanQuery.includes("github link") ||
      cleanQuery.includes("github profile") ||
      cleanQuery.includes("find github") ||
      cleanQuery.includes("github")
    ) {
      return `You can find Chandru's GitHub at: \`${this.data.personal.links.github}\`. Interactive buttons to visit his repository are available in the Hero and Social sections!`;
    }

    // LinkedIn link
    if (
      cleanQuery.includes("where can i find chandru's linkedin") ||
      cleanQuery.includes("chandru's linkedin") ||
      cleanQuery.includes("linkedin link") ||
      cleanQuery.includes("linkedin profile") ||
      cleanQuery.includes("find linkedin") ||
      cleanQuery.includes("linkedin")
    ) {
      return `You can connect with Chandru professionally on LinkedIn at: \`${this.data.personal.links.linkedin}\`.`;
    }

    // Resume
    if (
      cleanQuery.includes("resume") ||
      cleanQuery.includes("cv") ||
      cleanQuery.includes("download resume")
    ) {
      return `You can download Chandru's resume directly from the Resume section of this website using the link: \`${this.data.personal.links.resume}\` (or the Download Resume button).`;
    }

    // Contact / Email
    if (
      cleanQuery.includes("email") ||
      cleanQuery.includes("contact") ||
      cleanQuery.includes("reach out") ||
      cleanQuery.includes("message")
    ) {
      return `You can contact Chandru directly using the Contact form on this portfolio or via email at: \`${this.data.personal.links.email}\`.`;
    }

    // Location
    if (cleanQuery.includes("where is chandru from") || cleanQuery.includes("location") || cleanQuery.includes("city")) {
      return "Chandru is based in Chennai, Tamil Nadu, India, where he studies at Sri Sairam Institute of Technology.";
    }

    // Strict Grounding Rule: If the user asks something that is NOT available in the portfolio
    // Return EXACTLY: "I don't have that information about Chandru yet."
    return "I don't have that information about Chandru yet.";
  }

  appendUserMessage(text) {
    const bubble = document.createElement("div");
    bubble.className = "chat-msg chat-msg-user";
    bubble.innerHTML = `
      <div class="msg-content">
        <p>${this.escapeHTML(text)}</p>
      </div>
      <div class="msg-avatar">You</div>
    `;
    this.chatBody.appendChild(bubble);
    this.scrollToBottom();
  }

  appendBotMessage(text, animate = true) {
    const bubble = document.createElement("div");
    bubble.className = "chat-msg chat-msg-bot";
    
    // Convert basic markdown formatting like **bold** and `code`
    let formattedText = text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/`(.*?)`/g, '<code>$1</code>');

    bubble.innerHTML = `
      <div class="msg-avatar">🤖</div>
      <div class="msg-content">
        <div class="msg-sender">Ask Chandru AI</div>
        <div class="msg-text">${formattedText}</div>
      </div>
    `;
    this.chatBody.appendChild(bubble);
    this.scrollToBottom();
  }

  showTypingIndicator() {
    this.isTyping = true;
    const indicator = document.createElement("div");
    indicator.id = "chat-typing-indicator";
    indicator.className = "chat-msg chat-msg-bot typing";
    indicator.innerHTML = `
      <div class="msg-avatar">🤖</div>
      <div class="msg-content">
        <div class="typing-dots">
          <span></span><span></span><span></span>
        </div>
      </div>
    `;
    this.chatBody.appendChild(indicator);
    this.scrollToBottom();
  }

  hideTypingIndicator() {
    this.isTyping = false;
    const indicator = document.getElementById("chat-typing-indicator");
    if (indicator) {
      indicator.remove();
    }
  }

  scrollToBottom() {
    setTimeout(() => {
      this.chatBody.scrollTop = this.chatBody.scrollHeight;
    }, 50);
  }

  escapeHTML(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
}

// Expose class globally and initialize on DOM load
if (typeof window !== "undefined") {
  window.AskChandruAI = AskChandruAI;
}

document.addEventListener("DOMContentLoaded", () => {
  if (typeof window !== "undefined") {
    window.askChandruAIInstance = new AskChandruAI();
  }
});
