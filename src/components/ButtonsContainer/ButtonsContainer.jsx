import { Button } from "../ui/button";

export const ButtonsContainer = () => {
    return(
        <div className="buttons-container">
          <Button variant="destructive" size="max">AC</Button>
          <Button variant="secondary" size="max">+/-</Button>
          <Button variant="secondary" size="max">%</Button>
          <Button variant="secondary" size="max">/</Button>
          <Button variant="outline" size="max">7</Button>
          <Button variant="outline" size="max">8</Button>
          <Button variant="outline" size="max">9</Button>
          <Button variant="secondary" size="max">X</Button>
          <Button variant="outline" size="max">4</Button>
          <Button variant="outline" size="max">5</Button>
          <Button variant="outline" size="max">6</Button>
          <Button variant="secondary" size="max">-</Button>
          <Button variant="outline" size="max">1</Button>
          <Button variant="outline" size="max">2</Button>
          <Button variant="outline" size="max">3</Button>
          <Button variant="secondary" size="max">+</Button>
          <Button variant="destructive" size="max">del</Button>
          <Button variant="outline" size="max">0</Button>
          <Button variant="secondary" size="max">.</Button>
          <Button variant="secondary" size="max">=</Button>
          
        </div>
    );
}