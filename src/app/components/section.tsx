'use client'

import React, { useRef, useEffect, useState } from 'react';

type Props = {
  name: string,
}

const Section = (props: React.PropsWithChildren<Props>) => {
  return (
    <div className="flex-auto flex flex-col lg:flex-row m-auto mt-20 mb-20 w-full m-auto">
      <div className="flex-auto"/>
      <div className="flex-auto p-3 lg:p-0 lg:w-1/5 lg:text-right text-lg font-bold text-blue-400">
        {props.name}
      </div>
      <div className="flex-auto lg:w-1/3 p-3 lg:pl-20 text-base">
        {props.children}
      </div>
      <div className="flex-auto"/>
      <div className="flex-auto"/>
      <div className="flex-auto"/>
      <div className="flex-auto"/>
    </div>
  );  
}

export default Section;
