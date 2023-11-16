
import Spline from "@splinetool/react-spline";
import '../components/Robot.css'
import { useEffect, useState } from "react";

export default function Robo() {

    const [wordsIndex,setwordsIndex] = useState(0);

    const words = [
        "IETE",
        "Realm of AI/ML",
        "Tech of Web-Dev",
        "Blockchain",
    ];


    useEffect(() => {
        setTimeout(() => {
            if(wordsIndex == 3){
                setwordsIndex(0);
            }else{
                setwordsIndex(wordsIndex + 1)
            }
        }, 2000);
    } , [wordsIndex]);


    return (
        <div className="parent" >

            <div className="relative" >
                <div style={{ marginBottom: "80vh", color: "white" }} className="ani">
                    <h3 style={{ fontSize: "7vw", marginLeft: "4vh" ,marginTop:"20vh"}}>Welcome to <br /><div className="animatedWords">{words[wordsIndex]}</div> </h3>
                </div>
                
                <div style={{position:"absolute",zIndex:2,top:'40vh'}}>
                <button className="roboButton">Join Us</button>

                </div>
                <div className="robo">
                    <Spline scene="./src/components/scene.splinecode" />
                    
                </div>
                
            </div>


            {/* <div className="fakeMargin"></div> */}


        </div>
    );
}

