import { CardLabelProps } from './interface';

import "./style.css";

function CardLabel(props: CardLabelProps) {
  return (
    <div className="card-label">
      <img src={props.icon} alt={props.title} />
      {props.title}
    </div>
  );
}

export default CardLabel;
