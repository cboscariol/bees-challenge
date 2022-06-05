import { TextRow } from 'react-placeholder/lib/placeholders';
import { LoadingPlaceholderProps } from './interface';

import "react-placeholder/lib/reactPlaceholder.css";

function LoadingPlaceholder(props: LoadingPlaceholderProps) {
  return props.loading ? <TextRow color='lightgray' style={{width: 100, height: 20, borderRadius: 10}}/> : props.children
}

export default LoadingPlaceholder
