"use client";
import { useTypewriter, Cursor } from 'react-simple-typewriter';

export default function TypewriterText() {
   const [text] = useTypewriter({
      words: ['hi, kaze here.'],
      loop: 1,
      typeSpeed: 100,
      deleteSpeed: 50,
   });

   // This logic splits the string so we can style "kaze" specifically
   const parts = text.split(/(kaze)/g);

   return (
      <h1 className="text-5xl font-bold font-rounded text-white">
         {parts.map((part, i) =>
            part === 'kaze'
               ? <span key={i} className="text-cyan-300">{part}</span>
               : part
         )}
         <span className="inline-block animate-smooth-cursor">
            <Cursor
               cursorColor="#67e8f9"
               cursorStyle="|"
               cursorBlinking={false}
            />
         </span>
      </h1>
   );
}