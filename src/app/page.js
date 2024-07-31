import "@/styles/page.css";

import { Input } from "@/components/ui/input";
import { ButtonsContainer } from "@/components/ButtonsContainer/ButtonsContainer";

export default function Home() {
  return (
    <div className="container">
      <div className="calculator-container">
        <Input size="max"/>
        <ButtonsContainer/>
      </div>
    </div>
  );
}
