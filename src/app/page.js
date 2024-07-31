"use client"

import "@/styles/page.css";

import { Input } from "@/components/ui/input";
import { ButtonsContainer } from "@/components/ButtonsContainer/ButtonsContainer";
import { useState } from "react";

export default function Home() {
  const [currentValue, setCurrentValue] = useState(0)
  const [result, setResult] = useState(false)

  return (
    <div className="container">
      <div className="calculator-container">
        <Input currentvalue={currentValue} size="max"/>
        <ButtonsContainer
        currentvalue={currentValue}
        result={result}
        setCurrentValue={setCurrentValue}
        setResult={setResult}
        />
      </div>
    </div>
  );
}
