'use client'

import React, { useRef, useEffect, useState } from 'react';

type Props = {
  name: string,
}

const Section = (props: React.PropsWithChildren<Props>) => {
  return (
    <div className="flex-auto flex flex-row m-auto mt-20 mb-20 w-full m-auto">
      <div className="flex-auto w-[10%] text-right text-lg font-bold text-blue-400">
        {props.name}
      </div>
      <div className="flex-auto w-[700px] pl-20 pr-[30%] text-base">
        {props.children}
      </div>
    </div>
  );  
}

export default Section;
