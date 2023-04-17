import React from 'react'
import Nav from '../NavBar/Nav'
import Header from '../Header/Header'
import Features from '../Features/Features'
import { RiComputerLine } from "react-icons/ri";
import { FiUser } from "react-icons/fi"
import { BiRecycle } from "react-icons/bi"
import Award from '../Award/Award';
import Fotter from '../Footer/Fotter';
const Home = () => {


  let cardData = [
    {
      image:<RiComputerLine style={{
        width: "5vw",
        color:"white",
        height: "10vh",
        borderRadius: "50%",
        backgroundColor: "blue",
        padding:"1rem"
      }}/>,
      name: "Fully responseive",
      para: "jhsakdhksajdjasdaskjdkashkdjklasdhjsakldhkasjd",
      redmore: "RedMore"

    },
    {
      image: <FiUser style={{
        width: "5vw",
        color:"white",
        height: "10vh",
        borderRadius: "50%",
        backgroundColor: "blue",
        padding:"1rem"
      }} />,
      name:"Tuested Author",
      para: "jhsakdhksajdjasdaskjdkashkdjklasdhjsakldhkasjd",
      redmore: "RedMore"

    },
    {
      image: <BiRecycle style={{
        width: "5vw",
        color:"white",
        height: "10vh",
        borderRadius: "50%",
        backgroundColor: "blue",
        padding:"1rem"
      }}/>,
      name: "Reusable Elemnent",
      para: "jhsakdhksajdjasdaskjdkashkdjklasdhjsakldhkasjd",
      redmore: "RedMore"

    }
  ]


  return (
    <>
      <Nav />
      <Header />
      <Features Data={cardData} />
      <Award/>
      <Fotter/>
    </>
  )
}

export default Home