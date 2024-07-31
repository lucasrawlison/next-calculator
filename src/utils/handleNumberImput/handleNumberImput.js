export const handleNumberImput = (number, result, setResult, setCurrentValue, currentValue) =>{
    if(!result){
      setCurrentValue((currentValue)=> (currentValue == '0' ? number : currentValue + number));

    }else{
      setCurrentValue(number);
      setResult(false);
    }
  }