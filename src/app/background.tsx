'use client'

import React, { useRef, useEffect, useState } from 'react';

const Background = () => {
  //const c = document.getElementById('mycanvas');
  
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  const [mousePos, setMousePos] = useState({
    x: -10,
    y: -10,
  });

  const updateWindowSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  let updateMousePos = (x: number, y: number) => {
    setMousePos({
      x: x,
      y: y,
    });
  }

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {

    const canvas = canvasRef.current;

    if (canvas !== null) {

      const context = canvas.getContext('2d');

      window.addEventListener("mousemove", (event) => {
        const rect = canvas.getBoundingClientRect();
        updateMousePos(event.clientX - rect.left, event.clientY -rect.top);
      });

      window.addEventListener('resize', updateWindowSize);
      updateWindowSize();


      context.clearRect(0, 0, canvas.width, canvas.height);

      context.fillStyle = '#8FEED0';
      context.strokeStyle = '#8FEED0';

      context.moveTo(0, 0);
      context.lineTo(windowSize.width, windowSize.height);

      context.beginPath();
      context.arc(mousePos.x, mousePos.y, 5, 0, 2*3.1415);
      context.fill();
      context.stroke();

    }

  }, [windowSize.width, windowSize.height, mousePos.x, mousePos.y]);


  return (
    <canvas className="absolute z-[0]" ref={canvasRef} width={windowSize.width} height={windowSize.height}></canvas>
  );
}

export default Background;
