"use client";

export interface SectionCardProps {
  title: string;
  description: string;
  link: string;
}

export default function Card({ title, description, link }: SectionCardProps) {
  return (
    <div style={{ minWidth: '200px', padding: '10px',  textAlign: "center", border: '1px solid white', marginTop: 16, background: 'rgba(255, 255, 255, 0.1)' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>{title}</h2>
      <p style={{ fontSize: '16px', color: 'white' }}>{description}</p>
      <button style={{ background: 'purple', border: '1px solid white', color: 'white', padding: '8px 16px', cursor: 'pointer' }} onClick={() => window.open(link, '_blank')}>
        Apri
      </button>
    </div>
  )
}