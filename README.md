# Abhy Global - Business Website

A modern, professional, and trustworthy business website for **Abhy Global**, an Import-Export (EXIM) company specializing in premium textiles and Indian spices.

## 🌐 Overview

This website showcases Abhy Global's services as a leading import-export company, highlighting their expertise in:
- **Textiles**: T-shirts, woven cotton fabrics, kitchen napkins
- **Spices**: Premium quality Indian spices including turmeric, cumin, coriander, and garam masala blends

## 🎨 Design Features

- **Modern Material Design Principles**: Clean, professional UI following Google's Material Design guidelines
- **Premium Color Scheme**: 
  - Navy Blue (#1a365d) - Primary
  - Gold (#d4af37) - Accent
  - Silver (#c0c0c0) - Accent
  - Clean White backgrounds
- **Fully Responsive**: Mobile-first design that works seamlessly on all devices
- **Fast Loading**: Optimized for performance with minimal dependencies
- **Accessible**: Keyboard navigation and screen reader friendly

## 📁 Project Structure

```
abhyglobal_com/
├── index.html          # Main HTML file with all sections
├── styles.css          # Complete CSS with Material Design styling
├── script.js           # Interactive JavaScript functionality
├── logo.svg            # Abhy Global logo (SVG format)
└── README.md           # This file
```

## 🚀 Getting Started

### Prerequisites

No special prerequisites needed! This is a static website that works in any modern web browser.

### Quick Start - Testing the Website

#### **🎯 START HERE: Quick Menu (Recommended)**
**Double-click `START_HERE.bat`** - Interactive menu with all options!

#### **Method 1: Easiest (No Server Needed)**
1. Double-click `open-website.bat` - Opens the website directly in your browser
2. **OR** double-click `test-website-direct.bat` to test files first
3. **OR** simply double-click `index.html` file
4. Works immediately, no server setup required

#### **Method 2: Simple Server (Recommended for Full Testing)**
1. Double-click `simple-server.bat` - Starts server on port 8080 (avoids conflicts)
2. The website will open at `http://localhost:8080`
3. Keep the window open while testing
4. Press Ctrl+C to stop the server

#### **Method 3: Alternative Server (Port 8000)**
1. Double-click `test-website.bat` - Automatically starts a local server
2. The website will open at `http://localhost:8000` (or alternative port if 8000 is busy)
3. This method provides better testing experience (especially for forms and navigation)

#### **Method 4: Using Laragon (Advanced)**
1. **Easiest:** Double-click `setup-laragon.bat` - Automatically copies project to Laragon
2. **Manual:** Copy project folder to: `C:\laragon\www\abhyglobal_com\`
3. Start Laragon and ensure Apache is running
4. Access at: `http://localhost/abhyglobal_com/`

**Note:** If you get "Not Found" or "Connection Refused" errors, see `SOLUTION_SIMPLE.md` for simple alternatives

#### **Method 3: Manual Server Setup**

**Using Python (if installed):**
```bash
# Open PowerShell/CMD in the project folder
python -m http.server 8000
# Then visit http://localhost:8000
```

**Using Node.js (if installed):**
```bash
npx http-server -p 8000 -o
```

**Using PHP (if installed):**
```bash
php -S localhost:8000
```

### What to Test

1. ✅ **Navigation**: Click menu items, smooth scrolling should work
2. ✅ **Mobile Menu**: Resize browser window or use mobile device - hamburger menu should appear
3. ✅ **Responsive Design**: Test on different screen sizes (desktop, tablet, mobile)
4. ✅ **Contact Form**: Fill out and submit - success message should appear
5. ✅ **All Sections**: Scroll through all sections (Hero, About, Products, Why Choose Us, etc.)
6. ✅ **Logo**: Verify logo appears in header and hero section
7. ✅ **Colors**: Check navy blue, gold, and silver color scheme throughout
8. ✅ **Buttons**: Hover effects and click interactions
9. ✅ **Links**: All navigation links should work correctly

## 📄 Website Sections

1. **Hero Banner** - Eye-catching introduction with clear CTAs
2. **About Abhy Global** - Brand story, mission, and expertise
3. **Product Categories** - Detailed showcase of Textiles and Spices
4. **Why Choose Us** - Six key competitive advantages
5. **Global Reach** - International export capabilities
6. **Quality & Compliance** - Certifications and quality assurance
7. **Contact** - Contact form and business information

## 🔧 Customization

### Colors

Edit the CSS variables in `styles.css` to customize the color scheme:

```css
:root {
    --color-primary: #1a365d;        /* Navy Blue */
    --color-gold: #d4af37;            /* Gold */
    --color-silver: #c0c0c0;          /* Silver */
}
```

### Logo

Replace `logo.svg` with your custom logo. The logo should be in SVG format for best quality and scalability.

### Content

All content is in `index.html`. Simply edit the text within the HTML elements to update the website content.

### Contact Form

The contact form currently shows a success message when submitted. To make it functional:

1. Set up a backend endpoint to handle form submissions
2. Update the `handleFormSubmission` function in `script.js` to send data to your server
3. Uncomment and configure the fetch API call in the JavaScript file

Example backend integration:
```javascript
fetch('/api/contact', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => {
    console.log('Success:', data);
})
.catch((error) => {
    console.error('Error:', error);
});
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔍 SEO Optimization

The website is optimized for the following keywords:
- Import Export Company India
- Textile Exporter
- Spice Exporter
- B2B Export Services
- Wholesale T-shirt Export
- Kitchen Napkin Exporter
- Indian Spices Supplier
- Bulk Export
- EXIM Company India

### SEO Features Included:
- Semantic HTML5 structure
- Meta tags (description, keywords, Open Graph)
- Proper heading hierarchy (H1, H2, H3)
- Alt text for images
- Mobile-friendly design
- Fast loading times

## 📞 Contact Information

Update the contact information in the Contact section of `index.html`:

- **Email**: info@abhyglobal.com
- **Phone**: Update with actual phone numbers
- **Office Location**: Update with actual address

## 🎯 Key Features

- ✅ Mobile-first responsive design
- ✅ Smooth scrolling navigation
- ✅ Interactive mobile menu
- ✅ Form validation and handling
- ✅ Scroll-triggered animations
- ✅ SEO optimized
- ✅ Fast loading performance
- ✅ Accessible design
- ✅ Professional typography
- ✅ Material Design principles

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript (Vanilla)**: No frameworks, pure JavaScript for optimal performance
- **SVG**: Scalable vector graphics for logo

## 📝 License

This website is created for Abhy Global. All rights reserved.

## 🤝 Support

For questions or support regarding this website, please contact the development team.

---

**Abhy Global** - Your Trusted Partner in Global Trade Excellence

© 2024 Abhy Global. All rights reserved.
