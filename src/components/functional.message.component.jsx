import React from 'react';

export function MessageAsFunction(props) {
  //we don't have this.props because are not referring to class instance we use props only
  return <h2>{props.msg}</h2>;
}
