// src/App.tsx (or App.jsx)
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from './pages/MainLayout'
import Home from './pages/Home'
import Resume from './pages/Resume'
import ProjectDetail from './components/portfolio/ProjectDetail'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",  element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },  
        { path: "resume", element: <Resume /> },
        { path: "/project/:id", element: <ProjectDetail /> },
      ]
    }
  ]);

  return <RouterProvider router={router} />
}

export default App;
