# Depesche Design

The **Depesche Design** is a fully responsive and component-driven frontend framework built to support multiple brand experiences such as **TOPModel**, **Miss Melody**, **Dino World**, and more. It delivers a consistent, visually rich, and mobile-friendly interface for users browsing products, exploring themed content collections, and interacting with company information.

---

## 🔗 Live Preview

[View Live Website](https://depesche-design.netlify.app)

---

## 🎯 Purpose and Scope

This system is built to:

- Showcase **brand presentation pages**
- Display a **product catalog** with filtering by age, price, gender, and category
- Present **theme-based content collections**
- Provide access to **company and customer service information**
- Deliver interactive **UI components** such as navigation, dropdowns, accordions, and carousels

> For deeper technical details, refer to:
>
> - **Site Structure and Navigation**
> - **Asset Organization**

---

## 🧱 System Architecture

The frontend is organized into layered components and follows a structured, modular architecture.

### 🔹 Core Layers

- **HTML5**: Semantic structure across pages
- **CSS3**: Styling system with mobile-first responsive design
- **JavaScript/jQuery**: Interactive logic
- **Bootstrap Reboot**: CSS normalization
- **Font Awesome**: Icon library
- **Owl Carousel**: Responsive content carousels
- **Slick Carousel**: Product galleries and sliders

---

## 🗂️ Repository Structure

```base
Depesche-Design-System/
├── index.html # Home page
├── styles/
│ ├── main.css # Base styles (mobile-first)
│ └── main.res.css # Responsive styles for larger screens
├── scripts/
│ ├── navbar.js # Navigation and scroll behavior
│ ├── dropdown-accordion.js # Accordion logic
│ ├── owl-carousel.js # Brand/content carousels
│ └── slick-carousel.js # Product galleries
├── assets/ # Images, SVGs, icons
├── pages/
│ ├── products/ # Product catalog pages
│ ├── brands/ # Brand presentation
│ ├── theme-worlds/ # Themed content sections
│ ├── about-us/ # Company info
│ └── service/ # Customer service info
└── registration/ # Login and registration pages
```

---

## 🧭 Navigation System

A robust navigation framework supports both desktop and mobile devices:

- **Navbar** with brand links and dropdown menus
- **Accordion menu** for mobile navigation
- **Search functionality** with `search-form` and `search-container`
- **Responsive dropdowns** with JS-controlled visibility
- **Scroll-triggered collapse** behavior for smaller screens

> Relevant Files:
>
> - `navbar.js`
> - `dropdown-accordion.js`
> - `styles/main.css` (lines 232–457)

---

## 📱 Responsive Design System

Designed with **mobile-first principles**, the layout progressively enhances for tablets and desktops.

### Breakpoints:

- Mobile: default
- Small (≥576px)
- Medium (≥768px)
- Large (≥992px)
- X-Large (≥1200px)
- XX-Large (≥1440px)

### Component Variants:

- Mobile: stacked layout, simplified UI
- Tablet: multi-column support begins
- Desktop: full navigation and enhanced layout

---

## 🛍️ Product Catalog System

The catalog enables:

- **Filtering** by brand, theme, category, age, gender, and price
- **Sorting options** by relevance or price
- **Product grid** with carousels
- **Product detail views**

---

## 🧩 Interactive Components

### Accordion / Dropdown System

- Uses `.accordionBtn`, `.panel`, and `.dd-chevron`
- Toggle `.active` classes and display on click
- Reused across mobile navigation and product filters

### Carousel System

- **Owl Carousel**: brands, categories, news
- **Slick Carousel**: product galleries
- Fully responsive with touch navigation

---

## 🎨 Design System & CSS Architecture

### Design Principles

- **Mobile-first responsive design**
- **Component-based layout**
- **Consistent visual identity** with custom CSS variables
- **Brand theming** for TOPModel, Dino World, etc.
- **Accessible and semantic HTML**

### CSS Variables

````css
:root {
  --dp-text: hsl(210, 10.81%, 14.51%);
  --dp-orange: hsl(20.29, 92.05%, 70.39%);
  --dp-gray: hsl(0, 0%, 72.16%);
  --dp-blue: hsl(202.22, 29.67%, 82.16%);
}
```

### ⚙️ Installation & Setup

This is a static HTML/CSS/JS project and does not require a build system.

### Run locally:

```bash
# Clone the repository
git clone https://github.com/your-username/depesche-design-system.git
cd depesche-design-system

# Open in browser
open index.html  # or manually open index.html in your browser
````
