import ReactPlaceholder from 'react-placeholder';
import { LoadingPlaceholderProps } from './interface';

import "react-placeholder/lib/reactPlaceholder.css";

function LoadingPlaceholder(props: LoadingPlaceholderProps) {
  return (
    <ReactPlaceholder type='text' rows={1} ready={!props.loading}>
      {props.children}
    </ReactPlaceholder>
  )
}

export default LoadingPlaceholder
