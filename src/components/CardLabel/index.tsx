import { CardLabelProps } from './interface';

import "./style.css";

function CardLabel(props: CardLabelProps) {
  return (
    <div className="card-label" data-loading={props.loading}>
      <img src={props.icon} alt={props.title} />
      {props.title ? props.title : "No info available"}
    </div>
  );
}

export default CardLabel;
