import trashIcon from "./assets/trashIcon.svg";
import dashboardIcon from "./assets/dashboardIcon.svg";
import locationIcon from "./assets/locationIcon.svg";
import phoneIcon from "./assets/phoneIcon.svg";
import addIcon from "./assets/addIcon.svg";
import CardLabel from "../CardLabel";

import "./style.css";

function BreweryCard(props: any) {
  return (
    <div className="brewery-card">
      <button>
        <img src={trashIcon} alt="delete" onClick={props.onDelete} />
      </button>
      <h1>{props.name}</h1>
      <p>s{props.street}</p>
      <p>
        {props.city}, {props.state} - {props.country}{" "}
      </p>
      <div className="brewery-card-labels">
        <CardLabel title={props.breweryType} icon={dashboardIcon} />
        <CardLabel title={props.postalCode} icon={locationIcon} />
        <CardLabel title={props.phone} icon={phoneIcon} />
        <CardLabel title="add more" icon={addIcon} />
      </div>
    </div>
  );
}

export default BreweryCard;
