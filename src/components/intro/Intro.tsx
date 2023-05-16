import './intro.scss'
import {useEffect, useRef} from "react";
import {init} from "ityped";
export default function Intro() {
    const textRef = useRef();
    useEffect(()=>{
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        init(textRef.current,
            {
                backDelay: 1500,
                backSpeed: 60,
                showCursor: true,
                strings: ["Developer", "Junior"]
            });
    },[]);
    return (
        <div className={'intro'} id={"intro"}>
            <div className="left">
                <div className="imgContainer">
                    <img src="src/assets/man.png" alt=""/>
                </div>
            </div>

            <div className="right">
                <div className="imgContainer">
                    <div className="wrapper">
                        <h2>Hi There, I'm</h2>
                        <h1>Valela</h1>
                        <h3>Java Backend <span ref={textRef} /></h3>
                    </div>
                    <a href="#portfolio">
                        <img src="src/assets/down.png" alt=""/>
                    </a>
                </div>
            </div>

        </div>
    );
}
