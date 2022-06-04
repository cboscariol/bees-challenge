import './style.css'
import Header from '../../components/Header'
import { useContext, useEffect } from 'react'
import { UserContext } from '../../store/userContext'
import { useNavigate } from "react-router-dom";


function Home() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext)

  useEffect(() => {
    if(!user?.fullName){
      navigate("/", {replace: true})
    }
  })

  if(!user?.fullName){
    return null
  }

  return (
    <>
      <Header/>
    </>
  )
}

export default Home
