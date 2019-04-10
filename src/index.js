import React from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components'

const Index = () => {
  const Component = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  line-height: 2;
  font-size: 13px;
  font-weight: 600;
  color: ${true ? 'grey' : ''};
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    color: pink;
  }

  ${props =>
    props.active
      ? `
      background-color: ${true ? 'red' : ''};
      color: ${true ? 'yellow' : ''};
    `
      : ''};
  ${props =>
    props.flex
      ? 'flex: 1;'
      : `
        min-width: 200px;
        padding: 0 14px;
      `};
    `;

  return <Component active={true}>Hello React!</Component>;
};

ReactDOM.render(<Index/>, document.getElementById("index"));