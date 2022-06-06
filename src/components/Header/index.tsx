import "./style.css";
import backIcon from "./assets/backIcon.svg";
import { useContext } from "react";
import { UserContext } from "../../store/userContext";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const navigateBackHome = () => {
    navigate("/", {replace: true}); //replace true, so the user needs to login again
  };

  return (
    <header className="header">
      <button className="header-action-box" onClick={navigateBackHome}>
          <img src={backIcon} alt="go-back-button" />
        <span className="header-btn-text">Go back</span>
      </button>
      <span className="header-user-name">{user?.fullName}</span>
    </header>
  );
}

export default Header;
