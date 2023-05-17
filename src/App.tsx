import './App.scss'
import Topbar from "./components/topbar/Topbar.tsx";
import Menu from "./components/menu/Menu.tsx";
import Intro from "./components/intro/Intro.tsx";
import Portfolio from "./components/portfolio/Portfolio.tsx";
import Works from "./components/works/Works.tsx";
import Testimonials from "./components/testimonials/Testimonials.tsx";
import Contact from "./components/contact/Contact.tsx";
import {useState} from "react";
import {observer} from "mobx-react";


const App: React.FC = observer(() => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [portfolioOpen, setPortfolioOpen] = useState(false);

    return (
        <div className={"app"}>
            <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <div className="sections">
                <Intro/>
                <Portfolio portfolioOpen={portfolioOpen} setPortfolioOpen={setPortfolioOpen}/>
                <Works/>
                <Testimonials/>
                <Contact/>
            </div>
        </div>
    )
})

export default App;
