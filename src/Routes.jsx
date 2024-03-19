import { BrowserRouter as Routes, Route , Router} from "react-router-dom";
import Resume from './pages/Resume.jsx';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import { createBrowserRouter } from "react-router-dom";


function Routes() {
    return(
        <>
        <Router>
            <Routes>
                <Route path="/" element ={<Home/>} />
                <Route path="/projects" element ={<Projects/>} />
                <Route path="/resume" element ={<Resume/>} />
            </Routes>
        </Router>
        </>
    )
}
export default Routes;
