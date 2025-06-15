
# TaskManager Pro - Week 3 React Assignment

A comprehensive React application demonstrating modern front-end development practices with component architecture, state management, API integration, and responsive design.

## 🚀 Features

### Task Management
- ✅ Add, complete, and delete tasks
- 🔍 Filter tasks (All, Active, Completed)
- 💾 Persistent storage using localStorage
- 🎯 Real-time task counters

### API Integration
- 📡 Fetch posts from JSONPlaceholder API
- 🔍 Search functionality for posts
- 📄 Pagination with 6 posts per page
- ⚡ Loading and error states

### UI/UX
- 🌙 Dark/Light theme switching
- 📱 Fully responsive design (mobile, tablet, desktop)
- ✨ Smooth animations and transitions
- 🎨 Modern card-based layout
- 🧭 Clean navigation with active states

## 🛠️ Technical Implementation

### Component Architecture
- **Reusable Components**: Button, Card, Navbar, Footer, Layout
- **Page Components**: Tasks, Posts, NotFound
- **Feature Components**: TaskManager, PostsList
- **Props-based customization** for flexibility

### State Management & Hooks
- **useState**: Component state management
- **useEffect**: Side effects and API calls
- **useContext**: Theme management (ThemeContext)
- **Custom Hooks**: 
  - `useLocalStorage`: Persistent task storage
  - `usePosts`: API data management with search and pagination

### Styling
- **Tailwind CSS**: Utility-first styling
- **Responsive Design**: Mobile-first approach
- **Dark Mode**: Context-based theme switching
- **Animations**: Custom fade-in animations for better UX

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.tsx       # Multi-variant button component
│   ├── Card.tsx         # Flexible card container
│   ├── Navbar.tsx       # Navigation with theme toggle
│   ├── Footer.tsx       # Footer with links
│   ├── Layout.tsx       # Page layout wrapper
│   ├── TaskManager.tsx  # Complete task management
│   └── PostsList.tsx    # API posts display
├── contexts/
│   └── ThemeContext.tsx # Theme state management
├── hooks/
│   ├── useLocalStorage.ts # Local storage hook
│   └── usePosts.ts      # Posts API hook
├── pages/
│   ├── Tasks.tsx        # Tasks page
│   ├── Posts.tsx        # Posts page
│   └── NotFound.tsx     # 404 page
└── lib/
    └── utils.ts         # Utility functions
```

## 🎯 Assignment Requirements Coverage

### ✅ Task 1: Project Setup
- React application with Vite
- Tailwind CSS configured
- Organized project structure
- React Router for navigation

### ✅ Task 2: Component Architecture
- Button component with variants (primary, secondary, danger)
- Card component for content display
- Navbar with navigation and theme toggle
- Footer with links and information
- Layout component wrapping pages
- Props-based customization throughout

### ✅ Task 3: State Management and Hooks
- TaskManager with full CRUD operations
- useState for component state
- useEffect for loading saved tasks
- useContext for theme management
- Custom useLocalStorage hook for persistence

### ✅ Task 4: API Integration
- JSONPlaceholder API integration
- Posts display in grid layout
- Loading and error states
- Pagination (6 posts per page)
- Search functionality for filtering

### ✅ Task 5: Styling with Tailwind CSS
- Fully responsive design
- Dark/light theme implementation
- Tailwind utility classes throughout
- Custom animations and transitions
- Modern, professional design

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd taskmanager-pro
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🌐 Live Demo

[Live Application URL] - Add your deployed URL here

## 📸 Screenshots

### Desktop View - Tasks Page
![Tasks Desktop](screenshots/tasks-desktop.png)

### Mobile View - Posts Page
![Posts Mobile](screenshots/posts-mobile.png)

### Dark Mode
![Dark Mode](screenshots/dark-mode.png)

## 🔧 Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Vite** - Build tool
- **Lucide React** - Icons
- **JSONPlaceholder** - API data

## 📝 Key Features Demonstrated

1. **Modern React Patterns**: Functional components, hooks, context
2. **Type Safety**: Full TypeScript implementation
3. **Performance**: Optimized renders and custom hooks
4. **Accessibility**: Semantic HTML and keyboard navigation
5. **User Experience**: Loading states, error handling, animations
6. **Code Organization**: Clean separation of concerns

## 👨‍💻 Development Notes

- Uses localStorage for task persistence
- Implements proper error boundaries
- Follows React best practices
- Mobile-first responsive design
- Accessible color contrast ratios
- Smooth theme transitions

---

**Assignment**: Week 3 - React.js, JSX, and Tailwind CSS  
**Student**: [Your Name]  
**Date**: [Current Date]
