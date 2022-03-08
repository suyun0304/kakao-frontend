import { ChangeEvent, useState } from "react";

const ConditionalText = () => {
  const [name, setName] = useState<string>("");

  const changeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };

  return (
    <>
      <input type="text" onChange={changeName} />
      {name.length > 5 && name}
    </>
  );
};

export default ConditionalText;
