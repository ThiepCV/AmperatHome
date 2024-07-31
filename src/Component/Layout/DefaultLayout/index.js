import Header from "./Header";
import Footer  from "./Footer";

const DefaultLayout =({children})=>{
    return(
        <div>
            <Header />
            <div className="Content">
                {children}
            </div>
            <Footer />
        </div>
    )
}
export default DefaultLayout