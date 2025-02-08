# UNSWMSA Website

This is the official website for the UNSW Muslim Students' Association (UNSWMSA). Built with React and Tailwind CSS, it features a modern, responsive design with smooth scroll-snap navigation.

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx       # Adaptive navigation bar
│   ├── Footer.jsx       # Site-wide footer
│   ├── EventCard.jsx    # Reusable event display component
│   └── Accordion.jsx    # Custom accordion for Get Involved page
├── pages/
│   ├── Home.jsx         # Landing page with key information
│   ├── About.jsx        # About us with team information
│   ├── Events.jsx       # Events listing and calendar
│   └── GetInvolved.jsx  # Membership and participation info
└── App.jsx              # Main application component
```

## Key Features

- **Responsive Design**: Fully responsive layout that works on all device sizes
- **Smooth Navigation**: Full-page scroll sections with snap points
- **Dynamic Components**: 
  - Reusable event cards
  - Custom accordion component
  - Adaptive navbar that changes based on current page
- **Modern Styling**: Built with Tailwind CSS for consistent design

## Design System

- **Colors**:
  - Primary Red: #CD4631
  - Secondary Orange: #F4A261
  - Background Cream: #EDE6DD
  - Text Colors: Various weights of black and white for contrast

- **Typography**:
  - Using system default fonts with Tailwind's font stack
  - Consistent text sizes and weights across components

## Pages

### Home
- Full-screen landing section with background image
- Services overview
- Event highlights
- Call-to-action sections

### About
- Interactive chat-bubble style information display
- Team member showcase
- Organization vision and mission

### Events
- Featured event showcase
- Upcoming events grid
- Past events archive

### Get Involved
- Membership information
- Interactive accordion menu
- Ways to participate

## Components

### Navbar
- Fixed position with adaptive coloring
- Responsive navigation links
- Social media integration

### Footer
- Contact information
- Quick links
- Organization details

### EventCard
- Reusable component for event display
- Supports featured and standard layouts
- Consistent styling across pages

## Development

- Built with Vite for fast development
- Uses React Router for navigation
- Implements modern React practices and hooks