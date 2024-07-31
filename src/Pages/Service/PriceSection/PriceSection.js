import "./PriceSection.css"
import React  from 'react';

const PriceSection =()=>{
    const plans =[
        {
            id:1,
            name:"使った分だけ",
            monthCount: "時々流伝するまで保存",
            salesPrice:"0%",
            monthPrice:"0/月",

        },
        {
            id:2,
            name:"AMPERACT ベーシック",
            monthCount: "月に5〜10回の流電するまで保存",
            salesPrice:"8%",
            monthPrice:"400/月",
            
        },
        {
            id:3,
            name:"AMPERACT Plus",
            monthCount: "月に10回以上の流電するまで保存",
            salesPrice:"20%",
            monthPrice:"900/月",
            
        }
    ]
    return(
        <main className="main-prsbtn">
        <div className="service-page">
            <h1 className="service-page-tittle">価値を発見する</h1>
            <p>サインして、ふらんを登録しましょう！！！</p>
            <div className="ipprice">
               {plans.map((plan, index) =>(
                <li key={index} >
                           <div className="priceBox">
                    <div className="planName">{plan.name}</div>
                    <h3>{plan.monthCount}</h3>
                    <p>月当たり</p>
                    <button>サインアップ</button>
                    <h2>{plan.name}購入</h2>
                    <h2>お得値段：-{plan.salesPrice}</h2>

                           </div>
                </li>
               )
                
                  
                
               )}
            </div>
        </div>
       
    </main>
    )
}
export default PriceSection