import Intro from "../intro/Intro.tsx";
import Portfolio from "../portfolio/Portfolio.tsx";
import Works from "../works/Works.tsx";
import Testimonials from "../testimonials/Testimonials.tsx";
import Contact from "../contact/Contact.tsx";
import '../../App.scss'
import {useState} from "react";
export const MainPage = () => {
    const [portfolioOpen, setPortfolioOpen] = useState(false);

    return (
        <div className={"app"}>
            <div className="sections">
                <Intro/>
                <Portfolio portfolioOpen={portfolioOpen} setPortfolioOpen={setPortfolioOpen}/>
                <Works/>
                <Testimonials/>
                <Contact/>
            </div>
        </div>
    );
};
