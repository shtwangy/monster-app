"use client";
import { useState } from "react";
import Image from "next/image";
import { Background } from "./components/background";

type Monster = {
  id: string;
  name: string;
};

export default function Home() {
  const [monsters, setMonsters] = useState<Monster[]>([]);

  return (
    <main className={"min-h-dvh relative"}>
      <Background />
      <div className={"absolute bottom-0 flex items-end gap-2 inset-x-10 h-40"}>
        {monsters.map((monster, i) => (
          <div key={i}>
            <Image src={`/monster-${monster.id}.svg`} width={80} height={160} />
          </div>
        ))}
      </div>
    </main>
  );
}
