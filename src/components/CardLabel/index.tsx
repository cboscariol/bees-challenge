import "./style.css";
import dashboardIcon from "./dashboardIcon.svg";

function CardLabel(props: any) {
  return (
    <div className="card-label">
      <img src={props.icon} alt={props.title} />
      {props.title}
    </div>
  );
}

export default CardLabel;
