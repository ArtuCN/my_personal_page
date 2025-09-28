'use client'
import Image from "next/image";
import Description from "@/components/description";
import Card from "@/components/sectionCard";
import type { SectionCardProps } from "@/components/sectionCard";

export default function Home() {
  const cards: SectionCardProps[] = [
    { title: "Curiosita", link: "/curiosita", description: "Curiosita" },
    { title: "progetti", link: "/progetti", description: "Progetti" }
  ];
  return (
    <div
      style={{
        width: "100%",
        color: "white",
        textAlign: "center",
        padding: "10px",
      }}
    >
      <h1
        style={{
          fontSize: "40px",
          fontWeight: "bold",
          fontFamily: "-moz-initial",
          margin: 0,
        }}
      >
        Arturo Conti
      </h1>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", padding: '30px'}}>
        {
          cards.map((card, index) => (
            <Card key={index} {...card} />
          ))
        }
      </div>
      <Description />
    </div>
  );
}
