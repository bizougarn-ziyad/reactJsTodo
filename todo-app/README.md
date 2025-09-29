# React Todo App

A modern, responsive Todo application built with React and Vite. This app allows users to manage their daily tasks with features like adding, completing, and filtering todos.

## Features

- ✅ Add new tasks
- ✅ Mark tasks as complete/incomplete
- ✅ Filter tasks by status (All, Active, Completed)
- ✅ Delete tasks
- ✅ Local storage persistence
- ✅ Responsive design
- ✅ Modern React with hooks

## Tech Stack

- **React 19.1.1** - Frontend framework
- **Vite** - Build tool and development server
- **ESLint** - Code linting and formatting
- **CSS** - Styling

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine.

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd todo-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Project Structure

```
src/
├── components/
│   ├── Header.jsx       # App header component
│   ├── Tabs.jsx         # Filter tabs component
│   ├── TodoCard.jsx     # Individual todo item
│   ├── TodoInput.jsx    # Input form for new todos
│   └── TodoList.jsx     # List of todos
├── App.jsx              # Main app component
├── main.jsx             # App entry point
└── *.css               # Styling files
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).
