import "./style.css";
import backIcon from "./assets/backIcon.svg";
import { useContext } from "react";
import { UserContext } from "../../store/userContext";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const navigateBackHome = () => {
    navigate(-1);
  };

  return (
    <header className="header">
      <div className="header-action-box" onClick={navigateBackHome}>
        <button>
          <img src={backIcon} alt="go-back-button" />
        </button>
        <span>Go back</span>
      </div>
      <span className="header-user-name">{user?.fullName}</span>
    </header>
  );
}

export default Header;
