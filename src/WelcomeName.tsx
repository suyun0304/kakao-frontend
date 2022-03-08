import { useState, ChangeEvent } from "react";

const WelcomeName = () => {
  const [name, setName] = useState<string>();

  const changeName = (event: ChangeEvent<HTMLInputElement>) => {
    const inputName = event.currentTarget.value;
    setName(inputName);
  };

  return (
    <>
      <input type="text" onChange={changeName} />
      안녕하세요 {name}님
    </>
  );
};

export default WelcomeName;
