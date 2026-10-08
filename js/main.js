/**
 * =====================================================================
 * MAIN APPLICATION LOGIC
 * =====================================================================
 * Handles UI interactions, skills filtering, project tabs, scroll spy,
 * responsive mobile navigation, scroll reveal animations, and form validation.
 */

document.addEventListener("DOMContentLoaded", () => {
  const data = window.PORTFOLIO_DATA;
  if (!data) {
    console.error("PORTFOLIO_DATA not found.");
    return;
  }

  // 1. Populate Dynamic Links from Config
  populateLinks(data);

  // 2. Render Skills & Category Filters
  renderSkillsSection(data.skills);

  // 3. Setup Featured Project Tabs
  setupProjectTabs(data.featuredProject);

  // 4. Render Project Showcase Cards
  renderProjectCards(data.projects);

  // 5. Setup Sticky Nav & Mobile Drawer
  setupNavigation();

  // 6. Setup Scroll Reveal Animations
  setupScrollReveal();

  // 7. Setup Contact Form Validation & Toast
  setupContactForm(data);

  // 8. Setup Smooth Scroll Anchors
  setupSmoothScroll();
});

/**
 * Injects configuration links into HTML placeholders
 */
function populateLinks(data) {
  // GitHub links
  document.querySelectorAll(".link-github").forEach(el => {
    el.setAttribute("href", data.personal.links.github);
  });

  // LinkedIn links
  document.querySelectorAll(".link-linkedin").forEach(el => {
    el.setAttribute("href", data.personal.links.linkedin);
  });

  // Resume links
  document.querySelectorAll(".link-resume").forEach(el => {
    // If user has local resume.pdf, provide direct link with fallback
    el.setAttribute("href", data.personal.images.resumePdf || data.personal.links.resume);
  });

  // Email placeholders
  document.querySelectorAll(".placeholder-email").forEach(el => {
    el.textContent = data.personal.links.email;
  });

  // Project links
  document.querySelectorAll(".link-project-github").forEach(el => {
    el.setAttribute("href", data.featuredProject.links.github);
  });

  document.querySelectorAll(".link-project-demo").forEach(el => {
    el.setAttribute("href", data.featuredProject.links.demo);
  });
}

/**
 * Renders Skills cards and interactive filtering
 */
function renderSkillsSection(categories) {
  const container = document.getElementById("skills-grid-container");
  const filterButtons = document.querySelectorAll(".skill-filter-btn");
  if (!container) return;

  function renderCategoryItems(activeFilter = "all") {
    container.innerHTML = "";

    categories.forEach(cat => {
      const match = activeFilter === "all" || cat.category.toLowerCase().replace(/\s+/g, "-").replace(/\//g, "-") === activeFilter.toLowerCase();
      if (!match) return;

      const groupCard = document.createElement("div");
      groupCard.className = `skill-category-card border-glow-${cat.badgeColor}`;
      groupCard.setAttribute("data-category", cat.category);

      let itemsHtml = "";
      cat.items.forEach(item => {
        itemsHtml += `
          <div class="skill-item-badge">
            <div class="skill-item-head">
              <span class="skill-dot skill-dot-${cat.badgeColor}"></span>
              <h4 class="skill-name">${item.name}</h4>
            </div>
            <p class="skill-desc">${item.desc}</p>
          </div>
        `;
      });

      groupCard.innerHTML = `
        <div class="category-header">
          <div class="category-title-wrap">
            <span class="category-icon-chip icon-${cat.badgeColor}">
              ${getCategoryIcon(cat.icon)}
            </span>
            <div>
              <span class="category-tag">CATEGORY</span>
              <h3 class="category-title">${cat.category}</h3>
            </div>
          </div>
          <span class="badge-count">${cat.items.length} Skills</span>
        </div>
        <div class="category-skills-list">
          ${itemsHtml}
        </div>
      `;

      container.appendChild(groupCard);
    });
  }

  // Filter click events
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-filter");
      renderCategoryItems(filter);
    });
  });

  // Initial render
  renderCategoryItems("all");
}

function getCategoryIcon(type) {
  switch (type) {
    case "code":
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`;
    case "cpu":
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`;
    case "layers":
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`;
    case "zap":
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`;
    default:
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle></svg>`;
  }
}

/**
 * Handles tab clicks in the Featured Project Section
 */
function setupProjectTabs(project) {
  const tabBtns = document.querySelectorAll(".project-tab-btn");
  const tabPanels = document.querySelectorAll(".project-tab-panel");

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tabBtns.forEach(b => b.classList.remove("active"));
      tabPanels.forEach(p => p.classList.remove("active"));

      btn.classList.add("active");
      const targetId = btn.getAttribute("data-tab");
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add("active");
      }
    });
  });
}

/**
 * Renders project showcase grid cards
 */
function renderProjectCards(projects) {
  const container = document.getElementById("projects-showcase-grid");
  if (!container) return;

  container.innerHTML = "";

  projects.forEach((proj, idx) => {
    const card = document.createElement("div");
    card.className = `project-showcase-card ${proj.isComingSoon ? "card-coming-soon" : "card-featured"}`;

    if (!proj.isComingSoon) {
      // Main project card
      card.innerHTML = `
        <div class="project-card-image-wrap">
          <img src="${proj.image}" alt="${proj.title}" class="project-card-img" loading="lazy">
          <div class="project-card-badge featured-badge">
            <span class="live-dot"></span> ${proj.status}
          </div>
        </div>
        <div class="project-card-body">
          <div class="project-tags">
            ${proj.tags.map(t => `<span class="tech-pill">${t}</span>`).join("")}
          </div>
          <h3 class="project-card-title">${proj.title}</h3>
          <p class="project-card-desc">${proj.description}</p>
          <div class="project-card-actions">
            <a href="${proj.githubLink}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              <span>GitHub</span>
            </a>
            <a href="${proj.demoLink}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      `;
    } else {
      // Coming soon placeholder cards
      card.innerHTML = `
        <div class="project-coming-soon-graphic">
          <div class="cyber-radar">
            <div class="radar-circle circle-1"></div>
            <div class="radar-circle circle-2"></div>
            <div class="radar-circle circle-3"></div>
            <div class="radar-scan"></div>
            <div class="radar-center-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
            </div>
          </div>
          <div class="project-card-badge upcoming-badge">
            <span class="pulsing-amber-dot"></span> ${proj.status}
          </div>
        </div>
        <div class="project-card-body">
          <div class="project-tags">
            ${proj.tags.map(t => `<span class="tech-pill pill-subtle">${t}</span>`).join("")}
          </div>
          <h3 class="project-card-title coming-soon-title">Project Coming Soon</h3>
          <p class="project-card-desc">${proj.description}</p>
          <div class="project-card-actions">
            <button class="btn btn-disabled btn-sm" disabled>
              <span>🔒 In Development</span>
            </button>
          </div>
        </div>
      `;
    }

    container.appendChild(card);
  });
}

/**
 * Sticky Navbar, Active Link Spy & Hamburger Drawer
 */
function setupNavigation() {
  const header = document.getElementById("main-header");
  const toggleBtn = document.getElementById("nav-toggle-btn");
  const navDrawer = document.getElementById("nav-drawer");
  const navLinks = document.querySelectorAll(".nav-link");

  // Sticky header background transition
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled");
    }
  });

  // Mobile menu toggle
  if (toggleBtn && navDrawer) {
    toggleBtn.addEventListener("click", () => {
      const isOpen = navDrawer.classList.contains("open");
      if (isOpen) {
        navDrawer.classList.remove("open");
        toggleBtn.classList.remove("active");
        document.body.style.overflow = "";
      } else {
        navDrawer.classList.add("open");
        toggleBtn.classList.add("active");
        document.body.style.overflow = "hidden";
      }
    });

    // Close when clicking nav link inside mobile drawer
    navDrawer.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        navDrawer.classList.remove("open");
        toggleBtn.classList.remove("active");
        document.body.style.overflow = "";
      });
    });
  }

  // Scroll Spy for active section highlight
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    let current = "";
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = sectionId;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  }, { passive: true });
}

/**
 * Scroll Reveal Animations via IntersectionObserver
 */
function setupScrollReveal() {
  const reveals = document.querySelectorAll(".reveal-on-scroll");
  if (!("IntersectionObserver" in window)) {
    reveals.forEach(el => el.classList.add("revealed"));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        obs.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px"
  });

  reveals.forEach(el => observer.observe(el));
}

/**
 * Contact Form validation and notification feedback
 */
function setupContactForm(data) {
  const form = document.getElementById("portfolio-contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.elements["name"].value.trim();
    const email = form.elements["email"].value.trim();
    const message = form.elements["message"].value.trim();

    if (!name || !email || !message) {
      showToast("Please fill in all required fields.", "warning");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast("Please provide a valid email address.", "warning");
      return;
    }

    // Submit Simulation
    const submitBtn = form.querySelector("button[type='submit']");
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="spin-animation" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10" stroke-dasharray="32" stroke-dashoffset="16"></circle></svg>
      <span>Sending message...</span>
    `;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      form.reset();

      showToast(`Thank you, ${name}! Your message has been received. Chandru will reply shortly.`, "success");
    }, 1000);
  });
}

/**
 * Toast Notification Popup
 */
function showToast(message, type = "info") {
  let toastContainer = document.getElementById("toast-container");
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.id = "toast-container";
    toastContainer.className = "toast-container";
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement("div");
  toast.className = `cyber-toast toast-${type}`;
  toast.innerHTML = `
    <div class="toast-indicator"></div>
    <div class="toast-body">
      <span class="toast-title">${type === "success" ? "Transmission Sent" : type === "warning" ? "Input Notice" : "Information"}</span>
      <p class="toast-text">${message}</p>
    </div>
    <button type="button" class="toast-close" onclick="this.parentElement.remove()">&times;</button>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("toast-fade-out");
    setTimeout(() => toast.remove(), 400);
  }, 4500);
}

/**
 * Smooth scrolling for anchor links
 */
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const targetElem = document.querySelector(targetId);
      if (targetElem) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetElem.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  });
}
