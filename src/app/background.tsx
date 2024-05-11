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

  const updateMousePos = (x: number, y: number) => {
    setMousePos({
      x: x,
      y: y,
    });
  }

  const line = (
    context: CanvasRenderingContext2D, 
    x1: number, y1: number,
    x2: number, y2: number,
    color: string) => {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.strokeStyle = color;
    context.stroke()
  }

  const circle = (
    context: CanvasRenderingContext2D, 
    x: number, y: number,
    radius: number,
    color: string) => {
    context.beginPath();
    context.arc(x, y, radius, 0, 2*3.1416);
    context.fillStyle = color;
    context.strokeStyle = color;
    context.fill();
    context.stroke();
  }

  // which will correspond with width*rand and height*rand
  //let objects: Array<Array<number>> = [];
  
  const [objects, setObjects] = useState([])

  useEffect(() => {

    interface Point {
      x: number;
      y: number;
    }

    let tmp: Array<> = []

    for (let i = 0; i < 10; i++) {
      tmp.push({
        x: Math.random(), 
        y: Math.random(),
      });
    }

    setObjects(() => {return tmp});

  }, []);

  
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {

    const canvas = canvasRef.current;
    if (canvas === null) 
      return;

    const context = canvas.getContext('2d') as unknown as CanvasRenderingContext2D;
    if (context === null)
      return;

    window.addEventListener("mousemove", (event) => {
      const rect = canvas.getBoundingClientRect();
      updateMousePos(event.clientX - rect.left, event.clientY - rect.top);
    });

    window.addEventListener('resize', updateWindowSize);
    updateWindowSize();

    context.clearRect(0, 0, canvas.width, canvas.height);

    objects.forEach((elem1) => {
      circle(context, canvas.width * elem1.x, canvas.height * elem1.y, 3, '#0');
      objects.forEach((elem2) => {
        line(context, canvas.width * elem1.x, canvas.height * elem1.y,
          canvas.width * elem2.x, canvas.height * elem2.y, '#0')
      })
    })

    

  }, [windowSize.width, windowSize.height, mousePos.x, mousePos.y, objects]);


  return (
    <canvas className="absolute z-[0]" ref={canvasRef} width={windowSize.width} height={windowSize.height}></canvas>
  );
}

export default Background;
