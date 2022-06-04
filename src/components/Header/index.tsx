import './style.css'
import backIcon from './assets/backIcon.svg'
import { useContext } from 'react'
import { UserContext } from '../../store/userContext'
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext)

  const navigateBackHome = () => {
    navigate("/")
  }



  return (
    <header>
      <div>
        <button><img src={backIcon} alt="go-back-button" onClick={navigateBackHome} /></button>
        <span>Go back</span>
      </div>
        <span>{user?.fullName}</span>
    </header>
  )
}

export default Header
