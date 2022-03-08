import { useState, ChangeEvent } from "react";

const Adder = () => {
  const [number1, setnumber1] = useState(0);
  const [number2, setnumber2] = useState(0);

  const changeNumber1 = (event: ChangeEvent<HTMLInputElement>) => {
    const number = event.currentTarget.value;
    if (number.length === 0) {
      setnumber1(0);
    } else {
      setnumber1(Number.parseInt(number));
    }
  };

  const changeNumber2 = (event: ChangeEvent<HTMLInputElement>) => {
    const number = event.currentTarget.value;
    if (number.length === 0) {
      setnumber2(0);
    } else {
      setnumber2(Number.parseInt(number));
    }
  };

  return (
    <section>
      <input type="text" onChange={changeNumber1} />
      +
      <input type="text" onChange={changeNumber2} />
      result : {number1 + number2}
    </section>
  );
};

export default Adder;
