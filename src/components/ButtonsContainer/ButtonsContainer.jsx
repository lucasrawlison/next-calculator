import { useEffect } from "react";
import { NumberButton } from "../ui/NumberButton";
import { OperatorButton } from "@/components/ui/OperatorButton";
import { DelButton } from "@/components/ui/DelButton";
import { AcButton } from "@/components/ui/AcButton";
import { ResultButton } from "@/components/ui/ResultButton";
import { DotButton } from "../ui/DotButton";
import { NegativeButton } from "../ui/NegativeButton";

export const ButtonsContainer = (props) => {
    
    return(
        <div className="buttons-container">
          <AcButton props={props} variant="default" size="max">AC</AcButton>
          <NegativeButton props={props} variant="secondary" size="max">+/-</NegativeButton>
          <OperatorButton operator="%" props={props} variant="secondary" size="max">%</OperatorButton>
          <OperatorButton operator="/" props={props} variant="secondary" size="max">/</OperatorButton>

          
          <NumberButton number="7" props={props} variant="outline" size="max">7</NumberButton>
          <NumberButton number="8" props={props} variant="outline" size="max">8</NumberButton>
          <NumberButton number="9" props={props} variant="outline" size="max">9</NumberButton>
          

          <OperatorButton operator="*" props={props} variant="secondary" size="max">X</OperatorButton>

          <NumberButton number="4" props={props} variant="outline" size="max">4</NumberButton>
          <NumberButton number="5" props={props} variant="outline" size="max">5</NumberButton>
          <NumberButton number="6" props={props} variant="outline" size="max">6</NumberButton>
          
          <OperatorButton operator="-" props={props} variant="secondary" size="max">-</OperatorButton>

          <NumberButton number="1" props={props} variant="outline" size="max">1</NumberButton>
          <NumberButton number="2" props={props} variant="outline" size="max">2</NumberButton>
          <NumberButton number="3" props={props} variant="outline" size="max">3</NumberButton>
          
          <OperatorButton operator="+" props={props} variant="secondary" size="max">+</OperatorButton>
          <DelButton props={props} variant="destructive" size="max">del</DelButton>

          <NumberButton number="0" props={props} variant="outline" size="max">0</NumberButton>

          <DotButton operator="." props={props} variant="secondary" size="max">.</DotButton>
          <ResultButton props={props} variant="default" size="max">=</ResultButton>
          
        </div>
    );
}