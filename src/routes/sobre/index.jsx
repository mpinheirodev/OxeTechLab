
import Banner from "../../Components/banner"
import Footer from "../../Components/footer"
import Navbar from "../../Components/navbar"


export default function Sobre() {
    return(
        <div>
            <Navbar/>
            <Banner/>
            <div className="container">
                <h1>Sobre</h1>
            </div>
            <Footer/>
        </div>
    )
}