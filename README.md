# Ahmed Ragab - Portfolio Website

A modern, responsive personal portfolio website built with HTML5, CSS3, JavaScript (Vanilla JS), and Bootstrap 5.

![Portfolio Preview](images/preview.png)

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works seamlessly on mobile, tablet, and desktop
- **Modern UI**: Clean, minimal design with smooth animations and transitions
- **Dynamic Content**: Projects are dynamically rendered using JavaScript
- **Project Filtering**: Filter projects by technology (React, Node.js, Python, Full Stack)
- **Animated Skill Bars**: Progress bars animate when scrolled into view
- **Timeline Layout**: Experience and education displayed in an elegant timeline
- **Contact Form**: Form with real-time JavaScript validation
- **Smooth Scrolling**: Smooth navigation between sections
- **Back to Top Button**: Quick navigation button that appears on scroll
- **Typing Animation**: Dynamic typing effect in the hero section
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Accessibility**: ARIA labels and keyboard navigation support

## 📁 Project Structure

```
PF/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Custom styles
├── js/
│   └── main.js         # JavaScript functionality
├── images/             # Image assets (add your own)
│   ├── favicon.ico
│   ├── profile.jpg
│   └── projects/
└── README.md           # This file
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Custom properties, Flexbox, Grid, animations
- **JavaScript (ES6+)**: Vanilla JS with no dependencies
- **Bootstrap 5**: Grid system and components
- **Bootstrap Icons**: Icon library

## 📱 Sections

1. **Navbar**: Fixed, responsive navigation with smooth scroll
2. **Hero**: Name, title, professional summary, and CTA buttons
3. **About Me**: Bio, education, and technology overview
4. **Skills**: Grouped skills with animated progress bars
5. **Projects**: Dynamic project cards with filtering
6. **Experience & Education**: Timeline-style layout
7. **Contact**: Form with validation and social links
8. **Footer**: Simple and clean design

## 🎨 Customization

### Personal Information

Edit the following in `index.html`:

- Name and job title in the hero section
- About me content
- Education and experience details
- Contact information
- Social media links

### Projects

Edit the `projectsData` array in `js/main.js`:

```javascript
const projectsData = [
  {
    id: 1,
    title: "Project Name",
    description: "Project description...",
    image: "images/projects/project1.jpg",
    technologies: ["React", "Node.js"],
    category: ["react", "node", "fullstack"],
    github: "https://github.com/username/repo",
    demo: "https://demo-url.com",
  },
  // Add more projects...
];
```

### Skills

Edit the skill cards in `index.html` and update the `data-width` attributes for progress bars.

### Colors

Modify CSS custom properties in `css/style.css`:

```css
:root {
  --primary-color: #6366f1;
  --bg-dark: #0f0f1a;
  /* ... other variables */
}
```

## 🚀 Deployment

### GitHub Pages

1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select the main branch as source
4. Your site will be live at `https://username.github.io/repo-name`

### Netlify

1. Drag and drop the project folder to Netlify
2. Or connect your GitHub repository for automatic deployments

### Vercel

1. Import your repository on Vercel
2. Deploy with zero configuration

## 📧 Contact Form

The contact form currently simulates submission. To make it functional:

1. **Email Service**: Use EmailJS, Formspree, or similar services
2. **Backend API**: Create your own API endpoint

Example with EmailJS:

```javascript
// Replace simulateFormSubmission() with actual EmailJS code
emailjs.send("service_id", "template_id", {
  name: document.getElementById("name").value,
  email: document.getElementById("email").value,
  subject: document.getElementById("subject").value,
  message: document.getElementById("message").value,
});
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

Made with ❤️ by Ahmed Ragab
