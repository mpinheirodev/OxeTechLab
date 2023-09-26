
import Banner from "../../Components/banner"
import Footer from "../../Components/footer"
import Navbar from "../../Components/navbar"


export default function Sobre() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
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