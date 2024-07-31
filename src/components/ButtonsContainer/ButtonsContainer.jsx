import { useEffect } from "react";
import { NumberButton } from "../ui/NumberButton";
import { Button } from "../ui/Button";

export const ButtonsContainer = (props) => {
    
    return(
        <div className="buttons-container">
          <Button variant="destructive" size="max">AC</Button>
          <Button variant="secondary" size="max">+/-</Button>
          <Button variant="secondary" size="max">%</Button>
          <Button variant="secondary" size="max">/</Button>

          
          <NumberButton number="7" props={props} variant="outline" size="max">7</NumberButton>
          <NumberButton number="8" props={props} variant="outline" size="max">8</NumberButton>
          <NumberButton number="9" props={props} variant="outline" size="max">9</NumberButton>
          

          <Button variant="secondary" size="max">X</Button>

          <NumberButton number="4" props={props} variant="outline" size="max">4</NumberButton>
          <NumberButton number="5" props={props} variant="outline" size="max">5</NumberButton>
          <NumberButton number="6" props={props} variant="outline" size="max">6</NumberButton>
          
          <Button variant="secondary" size="max">-</Button>

          <NumberButton number="1" props={props} variant="outline" size="max">1</NumberButton>
          <NumberButton number="2" props={props} variant="outline" size="max">2</NumberButton>
          <NumberButton number="3" props={props} variant="outline" size="max">3</NumberButton>
          
          <Button variant="secondary" size="max">+</Button>
          <Button variant="destructive" size="max">del</Button>

          <NumberButton number="0" props={props} variant="outline" size="max">0</NumberButton>

          <Button variant="secondary" size="max">.</Button>
          <Button variant="secondary" size="max">=</Button>
          
        </div>
    );
}