import React from 'react';

type Props = {
  name: string,
}

const Section = (props: React.PropsWithChildren<Props>) => {
  return (
    <div>
      {props.name}
      {props.children}
    </div>
  );  
}

export default Section;
