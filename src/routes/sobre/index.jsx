
import Banner from "../../Components/banner"
import Footer from "../../Components/footer"
import Navbar from "../../Components/navbar"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import CardApi from "../../Components/cardApi"
import './sobre.css'


export default function Sobre() {

  const [data, setDate] = useState([])

  async function HandleFetch() {
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
      <div className="container sobre_area">
        {data.map((item) => {
          return (
            <CardApi 
              key={item.cell}
              foto={item.picture.medium}
              nome={item.name.first}
              idade={item.dob.age}
              email={item.email}
              sexo={item.gender}
            />
          )
        })}
      </div>
      <Footer />
    </div>
  )
}