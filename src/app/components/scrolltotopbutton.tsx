'use client'

import React, { useEffect, useState } from 'react';

type Props = {
  icon: string;
}

const ScrollToTopButton = ( props: Props ) => {

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {

    const scrolled = document.documentElement.scrollTop;
    console.log(scrolled);

    if (scrolled > 90)
      setVisible(true);
    else
      setVisible(false);
  
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
  }, []);

  const displayIcon = () => {
    if (visible)
      return (
        <div className="inline-block animate-slidein">
          {props.icon}
        </div>
      );
      return (
        <div className="inline-block animate-slideout">
          {props.icon}
        </div>
      );
      
  }

  return (
    <button className="right-5 bottom-5 duration-100 hover:-translate-y-3 fixed text-3xl"
            onClick={scrollToTop}>
      {displayIcon()}
    </button> 
  );
}

export default ScrollToTopButton;
