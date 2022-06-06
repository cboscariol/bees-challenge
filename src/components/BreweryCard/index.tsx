import trashIcon from "./assets/trashIcon.svg";
import dashboardIcon from "./assets/dashboardIcon.svg";
import locationIcon from "./assets/locationIcon.svg";
import phoneIcon from "./assets/phoneIcon.svg";
import addIcon from "./assets/addIcon.svg";
import LoadingPlaceholder from "../LoadingPlaceholder";
import CardLabel from "../CardLabel";
import { BreweryCardProps } from './interface'

import "./style.css";

function BreweryCard(props: BreweryCardProps) {
  return (
    <div className="brewery-card">
      <button>
        <img src={trashIcon} alt="delete" onClick={props.onDelete} />
      </button>
      <h1>
        <LoadingPlaceholder loading={props.loading}>
          {props.name}
        </LoadingPlaceholder>
      </h1>
      <p>
        <LoadingPlaceholder loading={props.loading}>
          {props.street}
        </LoadingPlaceholder>
      </p>
      <p>
        <LoadingPlaceholder loading={props.loading}>
          {props.city}, {props.state} - {props.country}
        </LoadingPlaceholder>
      </p>
      <div className="brewery-card-labels">
        <CardLabel title={props.breweryType} icon={dashboardIcon} loading={props.loading} key={props.id}/>
        <CardLabel title={props.postalCode} icon={locationIcon} loading={props.loading} key={props.id}/>
        <CardLabel title={props.phone} icon={phoneIcon} loading={props.loading} key={props.id}/>
      </div>
    </div>
  );
}

export default BreweryCard;
