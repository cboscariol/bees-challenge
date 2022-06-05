import "./style.css";
import dashboardIcon from "./dashboardIcon.svg";

function CardLabel(props: any) {
  return (
    <div className="label">
      <img src={dashboardIcon} alt="label-type" />
      {props.title}
    </div>
  );
}

export default CardLabel;
