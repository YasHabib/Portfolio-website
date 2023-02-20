import Home from "./pages/Home";
import About from "./pages/About";
import Experiences from "./pages/Experiences";
import NetCoreProjects from "./pages/NetCoreProjects";
import ReactProjects from "./pages/ReactProjects";
import Contact from "./pages/Contact";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const route = createBrowserRouter([
  { path: '/', element: <Home/> },
  { path: '/about',element: <About/> },
  { path: '/projects',element: <Experiences/> },
  { path: '/.netcore',element: <NetCoreProjects/> },
  { path: '/contact',element: <Contact/> },
  {path:'/reactjs',element: <ReactProjects/>}
  ])


function App() {
  return (
    <RouterProvider router={route} />
  );
}

export default App;
