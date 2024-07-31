import React from "react";
import "./ServiceSection.css";

const ServiceSection = () => {
    return (
        <div className="serviceSection">
            <h1>AMPERACT SERVICE</h1>
            <div className="serviceCont">
                <div className="ServiceImg">
                    <img alt="" src="../images/about-img.png" />
                </div>
                <div className="serviceDetails">
                    <div>
                        <h3>EV 流電ソリューションを検索します</h3>
                        <p>ご近所のEV流電ステーションを見つけるために地図を表示し、リアルタイムの利用可能状況を確認します。</p>
                    </div>
                    <div>
                        <h3>AMPERATを獲得しましょう。</h3>
                        <p>EVを流電することでポイントを獲得され、流電クレジットと交換できます。</p>
                    </div>
                    <div>
                        <h3>オートチャージ</h3>
                        <p>タップもカードもありません、差し込んでするだけです。</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceSection;
