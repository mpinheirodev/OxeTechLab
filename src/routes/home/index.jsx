
import { useState } from 'react'
import Banner from '../../Components/banner';
import Form from '../../Components/form';
import Team from '../../Components/Team';
import Footer from '../../Components/footer';
import './home.css'
import Navbar from '../../Components/navbar';


export default function Home() {

  const [colaboradores, setColaboradores] = useState([])

  const AddColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  const teams = [
    {
      name: 'Programação',
      colorBg: '#D9F7E9',
      colorCard: '#57C278',
    },
    {
      name: 'Front-End',
      colorBg: '#E8F8FF',
      colorCard: '#82CFFA',
    },
    {
      name: 'Data Science',
      colorBg: '#F0F8E2',
      colorCard: '#A6D157',
    },
    {
      name: 'DevOps',
      colorBg: '#FDE7E8',
      colorCard: '#E06B69',
    },
    {
      name: 'Ux e Design',
      colorBg: '#FAE9F5',
      colorCard: '#DB6EBF',
    },
    {
      name: 'Mobile',
      colorBg: '#FFF5D9',
      colorCard: '#FFBA05',
    },
    {
      name: 'Inovação e Gestão',
      colorBg: '#FFEEDF',
      colorCard: '#FF8A29',
    }

  ]


  return (
    <div className='main'>
      <Navbar />
      <Banner />

      <div className='container'>
        <Form teams={teams.map(team => team.name)}
          novoColaborador={colaborador => AddColaborador(colaborador)}
        />
        {teams.map(team =>
          <Team
            key={team.name}
            name={team.name}
            colorBg={team.colorBg}
            colorCard={team.colorCard}
            colaboradores={colaboradores.filter(colaborador => colaborador.team === team.name)} />)}
      </div>

      <Footer />
    </div>
  )
}