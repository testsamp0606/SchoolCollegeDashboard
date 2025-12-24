# NiceAdmin React Dashboard

## Project Overview
A modern, responsive admin dashboard built with React and Vite. Converted from the original NiceAdmin HTML template to a fully functional React application.

## Project Structure
```
src/
├── components/
│   ├── Sidebar.jsx           # Navigation sidebar
│   ├── Sidebar.css
│   ├── Header.jsx            # Top header with search, notifications
│   ├── Header.css
│   ├── StatCard.jsx          # Stats display cards
│   ├── StatCard.css
│   ├── ChartCard.jsx         # Chart containers
│   ├── ChartCard.css
│   ├── RecentActivity.jsx    # Activity feed
│   └── RecentActivity.css
├── pages/
│   ├── Dashboard.jsx         # Main dashboard page
│   └── Dashboard.css
├── App.jsx                   # Root component
├── App.css
├── main.jsx                  # React entry point
└── index.css                 # Global styles

public/
└── assets/                   # All original images and vendor files
```

## Features
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Sidebar Navigation** - Purple gradient sidebar with menu items
- **Header** - Search functionality, notifications, user profile
- **Stat Cards** - Key metrics with color-coded cards
- **Charts** - Sales and traffic analytics visualizations
- **Recent Activity** - Activity feed with timestamps
- **Modern Styling** - Clean, professional UI with hover effects

## Tech Stack
- React 18
- Vite 5
- CSS3 with Flexbox/Grid
- Bootstrap icons available in assets

## Dev Commands
- `npm run dev` - Start development server on port 5000
- `npm run build` - Build for production

## Component Customization
Each component is self-contained with its own styling. Modify colors, content, or layout in individual JSX files.

## Available Assets
All original NiceAdmin assets are in `public/assets/`:
- Images (product, profile, slides, etc.)
- Icons (Bootstrap Icons, Boxicons, Remix Icons)
- Vendor libraries (ApexCharts, Chart.js, Bootstrap, etc.)

## Next Steps
1. Add page routing with React Router
2. Integrate with a backend API
3. Add real data to stats and charts
4. Implement authentication
5. Create additional dashboard pages (Users, Reports, etc.)
