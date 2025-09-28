"use client";

import { usePathname } from 'next/navigation';

const buttonStyle: React.CSSProperties = {
  border: "1px solid white",
  padding: "5px 10px",
  borderRadius: "5px",
  background: "transparent",
  color: "white",
  cursor: "pointer",
};

export default function Navigation() {
  const pathname = usePathname();

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <button style={buttonStyle}>Contatti</button>
      <button style={buttonStyle}>Cambia Lingua</button>
      {pathname !== '/' && (
        <button 
          style={buttonStyle} 
          onClick={() => window.location.href = '/curiosita'}
        >
          Curiosita
        </button>
      )}
    </div>
  );
}
