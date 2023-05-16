import './works.scss'
import {useState} from "react";

export default function Works() {

    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id: "1",
            icon: "src/assets/mobile.png",
            title: "Web Design",
            desc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            img:
                "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
        },
        {
            id: "2",
            icon: "src/assets/globe.png",
            title: "Mobile Application",
            desc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            img:
                "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
        },
        {
            id: "3",
            icon: "src/assets/writing.png",
            title: "Branding",
            desc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            img:
                "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
        },
    ]
    const handleClick = (way : string) => {
        way === 'left' ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) :
        setCurrentSlide(currentSlide < 2 ? currentSlide + 1 : 0)
    }
    return (
        <div className={"works"} id={"works"}>
            <div className="slider" style={{transform: `translateX(-${currentSlide*100}vw)`,
            transition: 'all 2s ease'}}>
                {data.map((d) => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt={d.title}/>
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>{d.desc}</p>
                                    <span>Projects</span>
                                </div>
                            </div>

                            <div className="right">
                                <img
                                    src={d.img}
                                    alt="mobile app"/>
                            </div>

                        </div>
                    </div>
                ))
                }

            </div>
            <img src="src/assets/arrow.png" className={"arrow left"} alt="" onClick={() => handleClick('left')}/>
            <img src="src/assets/arrow.png" className={"arrow right"} alt="" onClick={() => handleClick('right')}/>
        </div>
    );
}

