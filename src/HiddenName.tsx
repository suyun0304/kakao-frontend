import { ChangeEvent, useState } from "react";

const HiddenName = () => {
  const [name, setName] = useState<string>("");

  const changeName = (event: ChangeEvent<HTMLInputElement>) => {
    const newname = event.currentTarget.value;

    if (newname.length >= 3) {
      const newname1 = newname.substring(0, 1);
      const newname2 = newname.substring(newname.length - 1);
      setName(newname1 + "*".repeat(newname.length - 2) + newname2);
    } else {
      setName(newname);
    }
  };

  return (
    <>
      <input type="text" onChange={changeName} />
      {name}
    </>
  );
};

export default HiddenName;
