import "./intro.scss";
import { init } from 'ityped';
import { useEffect, useRef } from "react";

export default function Intro() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { 
            showCursor: true, 
            backDelay:  1500,
            backSpeed: 60,
            strings: ['Developer', 'Designer','Desk Support'],
         });
    }, []);

    return (
        <div className="intro" id="intro">
            <div className="left">
               <div className="imagecontainer">
                  <img src="assets/man.png" alt="" /> 
               </div>            
            </div>
            <div className="right">
                <div className="wrapper">
                   <h2>Hi There, I'm</h2>
                   <h1>Jaimin Prajapati</h1>
                   <h3>Business Analyst <span ref={textRef}></span></h3> 
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
            
        </div>
    )
}
