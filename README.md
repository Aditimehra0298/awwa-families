# Awwa Dashboard - Modern React Dashboard

A modern, responsive dashboard built with Next.js 14, React 18, TypeScript, and Tailwind CSS. Features a clean design with your Awwa brand colors and serif typography.

## 🚀 Features

- **Modern React Architecture**: Built with Next.js 14 and React 18
- **TypeScript**: Full type safety and better developer experience
- **Responsive Design**: Works perfectly on all device sizes
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Framer Motion**: Smooth animations and transitions
- **Brand Integration**: Uses your Awwa logo and color scheme
- **Serif Typography**: Professional Times New Roman font throughout
- **Interactive Components**: Hover effects, animations, and smooth transitions

## 🎨 Design System

### Colors
- **Primary**: #ff7a00 (Awwa Orange)
- **Primary 600**: #e86d00 (Darker Orange)
- **Dark**: #21252b (Deep Charcoal)
- **Darker**: #2e3440 (Dark Accent)
- **Surface**: #ffffff (White)
- **Background**: #f5f6fa (Light Gray)

### Typography
- **Primary Font**: Times New Roman (Serif)
- **Subtitle Font**: Ams Vedant (Devanagari support)
- **Weight**: Bold throughout

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Times New Roman (Serif)

## 📦 Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main dashboard page
├── components/
│   ├── Header.tsx           # Top navigation header
│   ├── Sidebar.tsx          # Left navigation sidebar
│   ├── DashboardCard.tsx    # Reusable dashboard card component
│   ├── WeatherWidget.tsx    # Weather display widget
│   ├── AnnouncementsCard.tsx # Announcements section
│   └── StatsCard.tsx        # Statistics display card
├── public/
│   └── Awwa2-logo.png       # Your logo file
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## 🎯 Key Components

### Header
- Responsive navigation with logo
- Search functionality
- User profile section
- Mobile-friendly hamburger menu

### Sidebar
- Slide-out navigation
- Menu items with icons
- Mobile overlay support
- Smooth animations

### Dashboard Cards
- Interactive cards with hover effects
- Customizable icons and colors
- Button actions
- Responsive grid layout

### Stats Cards
- Animated statistics display
- Trend indicators
- Gradient accents
- Hover animations

## 📱 Responsive Design

- **Desktop**: Full layout with sidebar and all features
- **Tablet**: Collapsible sidebar, adjusted grid layouts
- **Mobile**: Hamburger menu, single column layout

## 🎨 Customization

### Colors
Update colors in `tailwind.config.js`:
```javascript
colors: {
  brand: {
    primary: '#ff7a00',
    'primary-600': '#e86d00',
    // ... other colors
  }
}
```

### Fonts
Modify font families in `tailwind.config.js`:
```javascript
fontFamily: {
  serif: ['Times New Roman', 'Times', 'serif'],
  'ams-vedant': ['Ams Vedant', 'serif']
}
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
```bash
npm run build
npm start
```

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Components
1. Create component in `components/` directory
2. Import and use in `app/page.tsx`
3. Style with Tailwind CSS classes

## 📄 License

This project is private and proprietary to Awwa.

## 🤝 Contributing

This is a private project. For internal development, please follow the established patterns and use TypeScript for all new components.

---

Built with ❤️ using Next.js, React, and Tailwind CSS
