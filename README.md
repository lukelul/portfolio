# Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript.

## Features

- 🎨 **Modern Design** - Clean, professional design with smooth animations
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
- ⚡ **Fast & Lightweight** - No heavy frameworks, pure vanilla JavaScript
- 🎯 **Smooth Scrolling** - Beautiful scroll animations and transitions
- 🌈 **Beautiful UI** - Gradient backgrounds, floating cards, and interactive elements

## Sections

1. **Hero Section** - Eye-catching landing area with call-to-action buttons
2. **About** - Personal introduction and statistics
3. **Projects** - Showcase of featured projects with hover effects
4. **Skills** - Interactive skill bars and technology tags
5. **Contact** - Contact form and social links

## Getting Started

### Option 1: Open Directly

Simply open `index.html` in your web browser.

### Option 2: Use a Local Server

For best experience, use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if you have http-server installed)
npx http-server
```

Then navigate to `http://localhost:8000` in your browser.

## Customization

### Personal Information

1. **Hero Section** (`index.html`):
   - Update the name in the hero title
   - Change the subtitle and description

2. **About Section**:
   - Modify the about text to match your story
   - Update the statistics (projects, experience, etc.)

3. **Projects**:
   - Replace project cards with your actual projects
   - Update project titles, descriptions, and tags
   - Add real project links

4. **Skills**:
   - Adjust skill bars percentages
   - Add/remove skills as needed
   - Update skill categories

5. **Contact**:
   - Replace email, LinkedIn, and GitHub links with your actual profiles
   - Connect the form to a backend service (optional)

### Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #6366f1;    /* Main brand color */
    --secondary-color: #8b5cf6;  /* Secondary accent */
    --text-primary: #1f2937;      /* Main text color */
    /* ... more variables */
}
```

### Images

To add project images, replace the gradient backgrounds in `.project-image` with actual images:

```css
.project-image {
    background-image: url('path/to/image.jpg');
    background-size: cover;
    background-position: center;
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## File Structure

```
portfolio/
├── index.html      # Main HTML file
├── styles.css      # All styles and responsive design
├── script.js       # JavaScript for interactivity
└── README.md       # This file
```

## Form Submission

The contact form currently shows an alert on submission. To make it functional:

1. **Option 1**: Use a form service like Formspree
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

2. **Option 2**: Set up a backend endpoint and update the form submission handler in `script.js`

## Performance Tips

- Optimize images before adding them
- Consider lazy loading for project images
- Minify CSS and JavaScript for production
- Use a CDN for fonts if hosting externally

## License

Feel free to use this portfolio template for your personal website!

## Credits

- Fonts: [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)
- Design inspiration: Modern portfolio trends

---

**Enjoy your new portfolio website!** 🚀
