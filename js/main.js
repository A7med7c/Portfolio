/**
 * ==========================================
 * PORTFOLIO WEBSITE - MAIN JAVASCRIPT
 * Author: Ahmed Ragab Ali
 * Version: 2.0 - Dynamic CV Data
 * ==========================================
 * 
 * This file contains all CV data in a single object
 * and dynamically renders content to the HTML page.
 */

'use strict';

// ==================== CV DATA OBJECT ====================
/**
 * Complete CV data stored in a single JavaScript object
 * All personal information, skills, experience, education, and projects
 */
const cvData = {
    // ========== PERSONAL INFORMATION ==========
    personal: {
        name: "Ahmed Ragab Ali",
        firstName: "Ahmed",
        jobTitle: "Software Engineer",
        email: "ahmed.ragab.ali.07@gmail.com",
        phone: "01148361969",
        location: "El Mansoura, Egypt",
        availability: "Open for Opportunities",
        github: "https://github.com/A7med7c",
        linkedin: "https://www.linkedin.com/in/a7med-ragab",
        // Typing effect titles
        typingTexts: [
            "Software Engineer",
            "Backend Developer",
            ".NET Developer",
            "Problem Solver",
            "Clean Code Advocate"
        ]
    },

    // ========== PROFESSIONAL SUMMARY ==========
    summary: `Motivated and detail-oriented backend developer with experience in C#, ASP.NET, and SQL. 
Skilled in building and optimizing web applications using clean architecture, RESTful APIs, and JWT authentication. 
Strong problem-solving skills and collaborative mindset.`,

    // ========== ABOUT SECTION ==========
    about: {
        headline: "Backend Developer based in Egypt 🇪🇬",
        paragraphs: [
            `I'm a motivated and detail-oriented backend developer with hands-on experience in C#, ASP.NET, and SQL Server. 
I specialize in building and optimizing web applications using clean architecture, RESTful APIs, and JWT authentication.`,
            `I believe in writing clean, maintainable code and following SOLID principles. 
My approach combines technical expertise with strong problem-solving skills and a collaborative mindset 
to deliver high-quality software solutions.`
        ],
        experienceYears: "1+",
        experienceLabel: "Year of<br>Experience"
    },

    // ========== EDUCATION ==========
    education: {
        degree: "Bachelor's Degree in Computer and Communication Engineering",
        university: "Faculty of Engineering, Mansoura University",
        period: "2020 – 2025",
        gpa: "3.76 (Excellent)",
        highlights: ["Excellent Grade", "Engineering"]
    },

    // ========== SKILLS ==========
    skills: {
        // Programming Languages with proficiency levels
        languages: [
            { name: "C#", level: 90 },
            { name: "C++", level: 80 },
            { name: "JavaScript", level: 75 }
        ],
        // Backend & Frameworks
        backend: [
            { name: "ASP.NET Core", level: 90 },
            { name: "ASP.NET MVC", level: 85 },
            { name: "RESTful APIs", level: 90 },
            { name: "JWT Authentication", level: 85 }
        ],
        // Database & Tools
        database: [
            { name: "SQL Server", level: 88 },
            { name: "Entity Framework Core", level: 85 },
            { name: "LINQ", level: 85 },
            { name: "Git & GitHub", level: 90 }
        ],
        // Additional skills as tags
        additionalSkills: [
            "OOP",
            "Data Structures & Algorithms",
            "SOLID Principles",
            "Clean Architecture",
            "Repository Pattern",
            "Unit of Work",
            "HTML",
            "CSS",
            "Bootstrap"
        ]
    },

    // ========== WORK EXPERIENCE ==========
    // Ordered from most recent to oldest
    experience: [
        {
            id: 1,
            title: "Full Stack .NET Developer (Trainee)",
            company: "Information Technology Institute (ITI)",
            type: "Full-time | Hybrid",
            location: "Cairo, Egypt",
            period: "October 2025 – Present",
            description: `Trainee in the 9-Month Professional Development & BI-infused CRM Track. 
Gaining practical experience in .NET development and SQL Server with exposure to Business Intelligence and CRM systems. 
Working on real-world projects with strong focus on teamwork and collaboration.`,
            skills: ["C#", ".NET", "SQL Server", "BI", "CRM"]
        },
        {
            id: 2,
            title: "Backend Trainee",
            company: "Digital Egypt Pioneers Initiative (DEPI)",
            type: "Training Program",
            location: "Egypt",
            period: "April 2024 – October 2024",
            description: `Completed 6-month Digital Egypt Pioneers Initiative program specialized in .NET web development. 
Built backend features using C# and ASP.NET Core, gaining solid foundation in enterprise-level development.`,
            skills: ["C#", "ASP.NET Core", ".NET", "Backend"]
        },
        {
            id: 3,
            title: "Summer Training",
            company: "Information Technology Institute (ITI)",
            type: "Training",
            location: "Egypt",
            period: "July 2024 – September 2024",
            description: `Hands-on experience with .NET framework. Developed and tested ASP.NET applications 
while applying debugging and software development best practices.`,
            skills: [".NET", "ASP.NET", "Debugging", "Testing"]
        }
    ],

    // ========== PROJECTS ==========
    projects: [
        {
            id: 1,
            title: "Talabat Clone API",
            description: `A RESTful Web API for food ordering and restaurant management. 
Features include JWT authentication, clean architecture implementation, and comprehensive error handling with logging.`,
            image: null,
            technologies: ["ASP.NET Core", "JWT", "Entity Framework Core", "Clean Architecture"],
            category: ["aspnet", "api", "fullstack"],
            github: "https://github.com/A7med7c/Talabat-Clone-API",
            demo: null
        },
        {
            id: 2,
            title: "E-BookStore & Management System",
            description: `A web application for online bookstore management using ASP.NET Core MVC. 
Includes authentication, role-based authorization, and CRUD operations with Repository & Unit of Work patterns.`,
            image: null,
            technologies: ["ASP.NET Core MVC", "SQL Server", "Entity Framework", "Repository Pattern"],
            category: ["aspnet", "mvc", "fullstack"],
            github: "https://github.com/A7med7c/E-BookStore",
            demo: null
        }
    ],

    // ========== PROJECT FILTER CATEGORIES ==========
    projectFilters: [
        { id: "all", label: "All" },
        { id: "aspnet", label: "ASP.NET" },
        { id: "api", label: "APIs" },
        { id: "mvc", label: "MVC" },
        { id: "fullstack", label: "Full Stack" }
    ]
};

// ==================== DOM ELEMENTS ====================
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const backToTopBtn = document.getElementById('back-to-top');
const projectsContainer = document.getElementById('projects-container');
const filterBtnsContainer = document.querySelector('.project-filters');
const contactForm = document.getElementById('contact-form');
const typedTextElement = document.querySelector('.typed-text');

// ==================== INITIALIZATION ====================
/**
 * Initialize all components when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', () => {
    // Render dynamic content first
    renderHeroSection();
    renderAboutSection();
    renderSkillsSection();
    renderExperienceTimeline();
    renderEducationTimeline();
    renderProjectFilters();
    renderProjects('all');
    renderContactSection();
    renderFooter();

    // Initialize interactive features
    initNavbar();
    initTypingEffect();
    initProjectFilters();
    initContactForm();
    initScrollAnimations();
    initBackToTop();
    initSmoothScroll();
    updateCurrentYear();
    initSkillBars();
});

// ==================== RENDER HERO SECTION ====================
/**
 * Dynamically render hero section with personal data
 */
function renderHeroSection() {
    const { personal, summary } = cvData;

    // Update name
    const heroName = document.getElementById('hero-name');
    if (heroName) heroName.textContent = personal.firstName;

    // Update summary
    const heroSummary = document.getElementById('hero-summary');
    if (heroSummary) heroSummary.textContent = summary;

    // Update social links
    const heroSocialLinks = document.getElementById('hero-social-links');
    if (heroSocialLinks) {
        heroSocialLinks.innerHTML = `
            <a href="${personal.github}" target="_blank" rel="noopener noreferrer" 
               class="social-link" aria-label="GitHub Profile">
                <i class="bi bi-github"></i>
            </a>
            <a href="${personal.linkedin}" target="_blank" rel="noopener noreferrer" 
               class="social-link" aria-label="LinkedIn Profile">
                <i class="bi bi-linkedin"></i>
            </a>
            <a href="mailto:${personal.email}" class="social-link" aria-label="Email">
                <i class="bi bi-envelope"></i>
            </a>
            <a href="tel:${personal.phone}" class="social-link" aria-label="Phone">
                <i class="bi bi-telephone"></i>
            </a>
        `;
    }

    // Update code window
    const codeContent = document.getElementById('code-content');
    if (codeContent) {
        codeContent.innerHTML = `<span class="keyword">const</span> <span class="variable">developer</span> = {
    <span class="property">name</span>: <span class="string">"${personal.name}"</span>,
    <span class="property">title</span>: <span class="string">"${personal.jobTitle}"</span>,
    <span class="property">skills</span>: [<span class="string">"C#"</span>, <span class="string">"ASP.NET"</span>, 
             <span class="string">"SQL Server"</span>, <span class="string">"REST APIs"</span>],
    <span class="property">passion</span>: <span class="string">"Building robust backends"</span>,
    <span class="property">available</span>: <span class="boolean">true</span>
};

<span class="keyword">while</span>(<span class="variable">developer</span>.<span class="property">available</span>) {
    <span class="variable">developer</span>.<span class="method">code</span>();
    <span class="variable">developer</span>.<span class="method">learn</span>();
    <span class="variable">developer</span>.<span class="method">grow</span>();
}`;
    }
}

// ==================== RENDER ABOUT SECTION ====================
/**
 * Dynamically render about section with bio and education
 */
function renderAboutSection() {
    const { about, education, personal } = cvData;

    // Update headline
    const aboutHeadline = document.getElementById('about-headline');
    if (aboutHeadline) aboutHeadline.textContent = about.headline;

    // Update bio paragraphs
    const aboutBio = document.getElementById('about-bio');
    if (aboutBio) {
        aboutBio.innerHTML = about.paragraphs.map(p => `<p class="text-muted mb-4">${p}</p>`).join('');
    }

    // Update experience badge
    const expNumber = document.getElementById('exp-number');
    const expLabel = document.getElementById('exp-label');
    if (expNumber) expNumber.textContent = about.experienceYears;
    if (expLabel) expLabel.innerHTML = about.experienceLabel;

    // Update education card
    const eduContent = document.getElementById('edu-content');
    if (eduContent) {
        eduContent.innerHTML = `${education.degree.split(' in ')[0]}<br>
            <small>${education.university.split(',')[0]}, ${education.period.split(' – ')[1]}</small>`;
    }

    // Update location card
    const locContent = document.getElementById('loc-content');
    if (locContent) {
        locContent.innerHTML = `${personal.location}<br>
            <small>${personal.availability}</small>`;
    }

    // Update tech stack
    const techStack = document.getElementById('tech-stack');
    if (techStack) {
        const allTechs = [
            "C#", "ASP.NET Core", "SQL Server", "Entity Framework",
            "RESTful APIs", "JWT", "Git", "Clean Architecture"
        ];
        techStack.innerHTML = allTechs.map(tech =>
            `<span class="tech-badge">${tech}</span>`
        ).join('');
    }
}

// ==================== RENDER SKILLS SECTION ====================
/**
 * Dynamically render skills section with progress bars
 */
function renderSkillsSection() {
    const { skills } = cvData;

    // Render Languages
    const langContainer = document.getElementById('skills-languages');
    if (langContainer) {
        langContainer.innerHTML = skills.languages.map(skill => createSkillItem(skill)).join('');
    }

    // Render Backend
    const backendContainer = document.getElementById('skills-backend');
    if (backendContainer) {
        backendContainer.innerHTML = skills.backend.map(skill => createSkillItem(skill)).join('');
    }

    // Render Database & Tools
    const dbContainer = document.getElementById('skills-database');
    if (dbContainer) {
        dbContainer.innerHTML = skills.database.map(skill => createSkillItem(skill)).join('');
    }

    // Render additional skills tags
    const additionalSkills = document.getElementById('additional-skills');
    if (additionalSkills) {
        additionalSkills.innerHTML = skills.additionalSkills.map(skill =>
            `<span class="skill-tag">${skill}</span>`
        ).join('');
    }
}

/**
 * Create HTML for a single skill item with progress bar
 * @param {Object} skill - Skill object with name and level
 * @returns {string} HTML string for skill item
 */
function createSkillItem(skill) {
    return `
        <div class="skill-item">
            <div class="skill-info">
                <span>${skill.name}</span>
                <span>${skill.level}%</span>
            </div>
            <div class="progress">
                <div class="progress-bar" data-width="${skill.level}"></div>
            </div>
        </div>
    `;
}

// ==================== RENDER EXPERIENCE TIMELINE ====================
/**
 * Dynamically render work experience timeline
 */
function renderExperienceTimeline() {
    const { experience } = cvData;
    const container = document.getElementById('experience-timeline');

    if (!container) return;

    container.innerHTML = experience.map((exp, index) => `
        <div class="timeline-item" data-aos="fade-right" data-aos-delay="${index * 100}">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <span class="timeline-date">${exp.period}</span>
                <h5>${exp.title}</h5>
                <p class="company"><i class="bi bi-building me-2"></i>${exp.company}</p>
                <p class="text-muted small mb-2"><i class="bi bi-geo-alt me-1"></i>${exp.location} | ${exp.type}</p>
                <p class="text-muted">${exp.description}</p>
                <div class="timeline-tags">
                    ${exp.skills.map(skill => `<span>${skill}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// ==================== RENDER EDUCATION TIMELINE ====================
/**
 * Dynamically render education timeline
 */
function renderEducationTimeline() {
    const { education } = cvData;
    const container = document.getElementById('education-timeline');

    if (!container) return;

    container.innerHTML = `
        <div class="timeline-item" data-aos="fade-left">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <span class="timeline-date">${education.period}</span>
                <h5>${education.degree}</h5>
                <p class="company"><i class="bi bi-building me-2"></i>${education.university}</p>
                <p class="text-muted">
                    Graduated with excellent grade. Focused on software engineering, 
                    data structures, algorithms, and computer networks.
                </p>
                <div class="timeline-tags">
                    <span>GPA: ${education.gpa}</span>
                    ${education.highlights.map(h => `<span>${h}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
}

// ==================== RENDER PROJECT FILTERS ====================
/**
 * Dynamically render project filter buttons
 */
function renderProjectFilters() {
    const { projectFilters } = cvData;

    if (!filterBtnsContainer) return;

    filterBtnsContainer.innerHTML = projectFilters.map((filter, index) => `
        <button class="filter-btn ${index === 0 ? 'active' : ''}" data-filter="${filter.id}">
            ${filter.label}
        </button>
    `).join('');
}

// ==================== RENDER PROJECTS ====================
/**
 * Render project cards based on filter
 * @param {string} filter - Category filter ('all' or specific category)
 */
function renderProjects(filter = 'all') {
    const { projects } = cvData;

    if (!projectsContainer) return;

    // Clear container
    projectsContainer.innerHTML = '';

    // Filter projects
    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.category.includes(filter));

    // Generate and append project cards
    filteredProjects.forEach((project, index) => {
        const projectCard = createProjectCard(project, index);
        projectsContainer.innerHTML += projectCard;
    });

    // Re-initialize animations for new elements
    setTimeout(() => {
        document.querySelectorAll('.project-card').forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
            card.classList.add('fade-in-up', 'visible');
        });
    }, 100);
}

/**
 * Create HTML for a single project card
 * @param {Object} project - Project data object
 * @param {number} index - Project index for animation delay
 * @returns {string} HTML string for project card
 */
function createProjectCard(project, index) {
    const { id, title, description, image, technologies, github, demo } = project;

    // Create technology badges
    const techBadges = technologies.map(tech => `<span>${tech}</span>`).join('');

    // Create image or placeholder
    const imageContent = image
        ? `<img src="${image}" alt="${title}" loading="lazy">`
        : `<div class="project-placeholder"><i class="bi bi-code-square"></i></div>`;

    // Create demo link if available
    const demoLink = demo
        ? `<a href="${demo}" target="_blank" rel="noopener noreferrer" class="project-link" title="Live Demo">
               <i class="bi bi-box-arrow-up-right"></i>
           </a>`
        : '';

    return `
        <div class="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="${index * 100}">
            <article class="project-card" data-project-id="${id}">
                <div class="project-image">
                    ${imageContent}
                    <div class="project-overlay">
                        <a href="${github}" target="_blank" rel="noopener noreferrer" 
                           class="project-link" title="View Code">
                            <i class="bi bi-github"></i>
                        </a>
                        ${demoLink}
                    </div>
                </div>
                <div class="project-content">
                    <h4>${title}</h4>
                    <p>${description}</p>
                    <div class="project-tech">
                        ${techBadges}
                    </div>
                </div>
            </article>
        </div>
    `;
}

// ==================== RENDER CONTACT SECTION ====================
/**
 * Dynamically render contact information
 */
function renderContactSection() {
    const { personal } = cvData;

    // Update email
    const contactEmail = document.getElementById('contact-email');
    if (contactEmail) {
        contactEmail.innerHTML = `<a href="mailto:${personal.email}">${personal.email}</a>`;
    }

    // Update phone
    const contactPhone = document.getElementById('contact-phone');
    if (contactPhone) {
        contactPhone.innerHTML = `<a href="tel:${personal.phone}">${personal.phone}</a>`;
    }

    // Update location
    const contactLocation = document.getElementById('contact-location');
    if (contactLocation) {
        contactLocation.innerHTML = `<p>${personal.location}</p>`;
    }

    // Update social buttons
    const contactSocial = document.getElementById('contact-social-btns');
    if (contactSocial) {
        contactSocial.innerHTML = `
            <a href="${personal.github}" target="_blank" rel="noopener noreferrer" 
               class="social-btn" aria-label="GitHub">
                <i class="bi bi-github"></i>
            </a>
            <a href="${personal.linkedin}" target="_blank" rel="noopener noreferrer" 
               class="social-btn" aria-label="LinkedIn">
                <i class="bi bi-linkedin"></i>
            </a>
            <a href="mailto:${personal.email}" class="social-btn" aria-label="Email">
                <i class="bi bi-envelope"></i>
            </a>
            <a href="tel:${personal.phone}" class="social-btn" aria-label="Phone">
                <i class="bi bi-telephone"></i>
            </a>
        `;
    }
}

// ==================== RENDER FOOTER ====================
/**
 * Dynamically render footer with social links
 */
function renderFooter() {
    const { personal } = cvData;

    // Update footer name
    const footerName = document.getElementById('footer-name');
    if (footerName) {
        footerName.textContent = personal.name;
    }

    // Update footer social links
    const footerSocial = document.getElementById('footer-social');
    if (footerSocial) {
        footerSocial.innerHTML = `
            <a href="${personal.github}" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i class="bi bi-github"></i>
            </a>
            <a href="${personal.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i class="bi bi-linkedin"></i>
            </a>
            <a href="mailto:${personal.email}" aria-label="Email">
                <i class="bi bi-envelope"></i>
            </a>
        `;
    }

    // Update GitHub button in projects section
    const githubBtn = document.getElementById('github-profile-btn');
    if (githubBtn) {
        githubBtn.href = personal.github;
    }
}

// ==================== NAVBAR FUNCTIONALITY ====================
/**
 * Initialize navbar scroll effects and active link highlighting
 */
function initNavbar() {
    // Add scrolled class on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Update active nav link based on scroll position
        updateActiveNavLink();
    });

    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                new bootstrap.Collapse(navbarCollapse).hide();
            }
        });
    });
}

/**
 * Update active navigation link based on current scroll position
 */
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 150;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ==================== TYPING EFFECT ====================
/**
 * Initialize typing animation for hero section
 */
function initTypingEffect() {
    const texts = cvData.personal.typingTexts;

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentText = texts[textIndex];

        if (isDeleting) {
            // Remove character
            typedTextElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            // Add character
            typedTextElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        // Check if word is complete
        if (!isDeleting && charIndex === currentText.length) {
            // Pause at end of word
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            // Move to next word
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 500;
        }

        setTimeout(type, typingSpeed);
    }

    // Start typing effect
    if (typedTextElement) {
        type();
    }
}

/**
 * Initialize project filter buttons (uses dynamically rendered buttons)
 */
function initProjectFilters() {
    // Use event delegation since buttons are dynamically rendered
    if (filterBtnsContainer) {
        filterBtnsContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('filter-btn')) {
                // Update active button
                filterBtnsContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');

                // Filter and render projects
                const filter = e.target.getAttribute('data-filter');
                renderProjects(filter);
            }
        });
    }
}

// ==================== CONTACT FORM FUNCTIONALITY ====================
/**
 * Initialize contact form validation and submission
 */
function initContactForm() {
    if (!contactForm) return;

    const submitBtn = document.getElementById('submit-btn');
    const formSuccess = document.getElementById('form-success');
    const formError = document.getElementById('form-error');

    // Real-time validation
    const inputs = contactForm.querySelectorAll('.form-control');
    inputs.forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => {
            if (input.classList.contains('is-invalid')) {
                validateField(input);
            }
        });
    });

    // Form submission
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Validate all fields
        let isValid = true;
        inputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });

        if (!isValid) return;

        // Show loading state
        submitBtn.disabled = true;
        submitBtn.querySelector('.btn-text').classList.add('d-none');
        submitBtn.querySelector('.btn-loading').classList.remove('d-none');

        // Simulate form submission (replace with actual API call)
        try {
            await simulateFormSubmission();

            // Show success message
            contactForm.classList.add('d-none');
            formSuccess.classList.remove('d-none');

            // Reset form
            contactForm.reset();
            inputs.forEach(input => {
                input.classList.remove('is-valid', 'is-invalid');
            });

        } catch (error) {
            // Show error message
            formError.classList.remove('d-none');

            // Hide error after 5 seconds
            setTimeout(() => {
                formError.classList.add('d-none');
            }, 5000);

        } finally {
            // Reset button state
            submitBtn.disabled = false;
            submitBtn.querySelector('.btn-text').classList.remove('d-none');
            submitBtn.querySelector('.btn-loading').classList.add('d-none');
        }
    });
}

/**
 * Validate a single form field
 * @param {HTMLElement} field - Form field to validate
 * @returns {boolean} Whether the field is valid
 */
function validateField(field) {
    const value = field.value.trim();
    const fieldType = field.type;
    const minLength = field.getAttribute('minlength');
    let isValid = true;

    // Check required
    if (field.required && !value) {
        isValid = false;
    }

    // Check min length
    if (minLength && value.length < parseInt(minLength)) {
        isValid = false;
    }

    // Check email format
    if (fieldType === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
        }
    }

    // Update field classes
    if (isValid) {
        field.classList.remove('is-invalid');
        field.classList.add('is-valid');
    } else {
        field.classList.remove('is-valid');
        field.classList.add('is-invalid');
    }

    return isValid;
}

/**
 * Simulate form submission with delay
 * @returns {Promise} Resolves after simulated delay
 */
function simulateFormSubmission() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate 90% success rate
            if (Math.random() > 0.1) {
                resolve();
            } else {
                reject(new Error('Submission failed'));
            }
        }, 2000);
    });
}

// ==================== SCROLL ANIMATIONS ====================
/**
 * Initialize scroll-triggered animations using Intersection Observer
 */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll(
        '.skill-card, .timeline-item, .info-card, .about-content, .about-image-wrapper, ' +
        '.contact-info, .contact-form-wrapper, .section-header'
    );

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up', 'visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(element => {
        element.classList.add('fade-in-up');
        observer.observe(element);
    });
}

// ==================== SKILL BARS ANIMATION ====================
/**
 * Initialize skill progress bars animation
 */
function initSkillBars() {
    const skillBars = document.querySelectorAll('.progress-bar');

    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.getAttribute('data-width');
                progressBar.style.width = `${width}%`;
                observer.unobserve(progressBar);
            }
        });
    }, observerOptions);

    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}

// ==================== BACK TO TOP BUTTON ====================
/**
 * Initialize back to top button functionality
 */
function initBackToTop() {
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    // Scroll to top on click
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ==================== SMOOTH SCROLL ====================
/**
 * Initialize smooth scrolling for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==================== UTILITY FUNCTIONS ====================
/**
 * Update the current year in footer
 */
function updateCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

/**
 * Debounce function for performance optimization
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
function debounce(func, wait = 100) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

/**
 * Throttle function for performance optimization
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} Throttled function
 */
function throttle(func, limit = 100) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ==================== ERROR HANDLING ====================
/**
 * Global error handler
 */
window.addEventListener('error', (event) => {
    console.error('An error occurred:', event.error);
});

// ==================== PERFORMANCE OPTIMIZATION ====================
/**
 * Lazy load images when they enter viewport
 */
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
initLazyLoading();

// ==================== ACCESSIBILITY ====================
/**
 * Handle keyboard navigation for interactive elements
 */
document.addEventListener('keydown', (e) => {
    // Close mobile menu on Escape
    if (e.key === 'Escape') {
        const navbarCollapse = document.querySelector('.navbar-collapse.show');
        if (navbarCollapse) {
            new bootstrap.Collapse(navbarCollapse).hide();
        }
    }
});

// ==================== CONSOLE MESSAGE ====================
console.log(
    '%c👋 Hello Developer! %c\n\nInterested in how this portfolio was built?\nCheck out the source code on GitHub!\n\n',
    'font-size: 20px; font-weight: bold; color: #6366f1;',
    'font-size: 14px; color: #a1a1aa;'
);
