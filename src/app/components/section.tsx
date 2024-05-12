import React from 'react';

type Props = {
  name: string,
}

const Section = (props: React.PropsWithChildren<Props>) => {
  return (
    <div className="flex-auto flex flex-row m-auto mt-20 mb-20">
      <div className="flex-auto w-[40%] text-right text-lg font-bold text-blue-400">
        {props.name}
      </div>
      <div className="flex-auto w-[900px] px-20 text-base">
        {props.children}
      </div>
    </div>
  );  
}

export default Section;
