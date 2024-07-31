import { useState } from "react"
import React  from 'react';
import "./Slider.css"
const sliders= [
    {
        src : "../images/home1.png",
        title: "EV（電気自動車）の充電は、環境にやさしく、将来の持続可能な移動手段を提供します。",
        content : "AMPERACTは持続可能な未来へのコミットメントを示す一環として、革新的なEV充電ソリューションを提供しています。私たちは、環境に配慮した移動手段の普及を支援し、地球の健康と持続可能性を促進するために努力しています。  "
    },
    {
        src : "../images/home2.png",
        title: "AMPERACT 充電サービス",
        content :"AMPERACTへようこそ！革新的なEV充電ソリューションを利用して、清潔なエネルギー輸送の未来を体験しましょう。"
    }
 ]

const Slider =() => {
    const [currenImg, setCurrenImg] = useState(0)

    const handleNext= () =>{
        const nextIdx = (currenImg +1) % sliders.length
        setCurrenImg(nextIdx)
    }
    const handlePrevios= () =>{
        const previousIdx = (currenImg - 1 + sliders.length) % sliders.length
        setCurrenImg(previousIdx)
    }
    return(
        <div className="slidershow">
            <div className="sliderInner">

                <img className="sliderImg" src={sliders[currenImg].src} alt=""/>
                <div className="sliderContent">
                    <h2>{sliders[currenImg].title}</h2>
                    <p>{sliders[currenImg].content}</p>
                </div>
            </div>
            <div className="sliderControl">

                <button onClick={handlePrevios}>Previous</button>
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    )
}
export default Slider