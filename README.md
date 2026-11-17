# ☕ StarBucks Landing Page

A modern, responsive, and high-performance landing page for a coffee shop, built with React and Vite. Designed with a focus on clean component architecture, smooth interactive sliders, and mobile web optimization.

## ✨ Features

* **Data-Driven Modular Architecture:** Clean separation of data and UI components (`Header`, `MainSections`, `Footer`, `FooterItem`, `SwiperItem`, `EventsItem`) using `.map()` rendering for easy scalability.
* **Interactive Product & Event Sliders:** Powered by Swiper.js with responsive breakpoints and 3D Coverflow effects on desktop.
* **Interactive Video Player:** Custom video cover block with on-click YouTube embed playback and outside-click detection to pause/close.
* **Responsive Design:** Fully adaptive layout tailored for desktop, tablet, and mobile devices using `<picture>` art direction and flexible CSS/SCSS.
* **High Performance:** Optimized with next-gen WebP graphics, native lazy loading (`loading="lazy"`), and production bundle optimization (achieving **100/100** Desktop Performance and **84/100** Mobile Performance in Google Lighthouse).

## 🛠️ Tech Stack

* **Framework:** React
* **Build Tool:** Vite
* **Styling:** SCSS / CSS3 (BEM methodology)
* **Slider Library:** Swiper.js
* **Optimization:** WebP image format, Native Lazy Loading

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/StanLA21/StarBucks.git](https://github.com/StanLA21/StarBucks.git)
   cd StarBucks
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 📂 Project Structure

```text
StarBucks/
├── public/                 # Static assets (WebP images, icons, favicon)
├── src/
│   ├── assets/             # Project assets
│   ├── _settings.scss      # SCSS variables, mixins & reset settings
│   ├── App.jsx             # Root application component
│   ├── Footer.jsx          # Data-driven footer component
│   ├── Header.jsx          # Navigation header component
│   ├── Main-sections.jsx   # Main landing sections & sliders
│   ├── main.jsx            # Application entry point
│   └── style.scss          # Main stylesheet
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## 👨‍💻 Author

**Stanislav Aloshyn**  
*GitHub:* [@StanLA21](https://github.com/StanLA21)

*Project coded as a modern React portfolio showcase.*

> **Disclaimer:** This project is a non-commercial educational/portfolio template inspired by Starbucks branding.