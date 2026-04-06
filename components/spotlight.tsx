"use client";
import { useState, useEffect } from "react";

export default function SpotLight() {
   const [mouseposition, setMousePosition] = useState({ x: 0, y: 0 });

   useEffect(() => {
      const updateMousePosition = (ev: MouseEvent) => {
         setMousePosition({ x: ev.clientX, y: ev.clientY })
      };
      window.addEventListener('mousemove', updateMousePosition);

      return () => {
         window.removeEventListener('mousemove', updateMousePosition);
      }
   }, []);

   return (
      <div className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
         style={{
            background: `radial-gradient(50px at ${mouseposition.x}px ${mouseposition.y}px, rgba(45, 212, 191, 0.15), transparent 80%)`
         }} />
   )
}