import React from 'react';
import ContainerWithNav from './ContainerWithNav';

const navData = [
  {
    title: 'Components',
    items: [
      { title: 'Calendar' }
    ]
  }
];

function ComponentsContainer(props) {
  return (
    <ContainerWithNav navData={navData}>{props.children}</ContainerWithNav>
  );
}

export default ComponentsContainer;
