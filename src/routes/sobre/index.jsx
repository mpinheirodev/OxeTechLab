
import Banner from "../../Components/banner"
import Footer from "../../Components/footer"
import Navbar from "../../Components/navbar"
import { useContext, useEffect, useState } from "react"
import axios from "axios"


export default function Sobre() {

  const [data, setDate] = useState([])

  async function HandleFetch(){
    await axios.get("https://randomuser.me/api/?results=20")

    .then((response) => {
      setDate(response.data.results)
    })
    .catch((error) => {
      alert(error)
    })
  }

  useEffect(() => {
    HandleFetch()
  }, [])


  return (
    <div>
      <Navbar />
      <Banner />
      <div className="container">
        {data.map((item) => {
          return(
            <div key={item.cell}>
              <p>{item.gender}</p>
              <p>{item.name.first}</p>
            </div>
          )
        })}
      </div>
      <Footer />
    </div>
  )
}