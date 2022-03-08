import React, {
  ChangeEvent,
  ChangeEventHandler,
  KeyboardEvent,
  useEffect,
} from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./Button";
import Title from "./Title";
import Adult from "./Adult";
import Text from "./Text";
import Photo from "./Photo";
import Counter from "./Counter";
import Adder from "./Adder";
import WelcomeName from "./WelcomeName";
import ConditionalText from "./ConditionalText";
import HiddenName from "./HiddenName";
import ToDoList from "./ToDoList";

const App = (): JSX.Element => {
  useEffect(() => {
    alert("hello");
  }, []);

  // const names = ["a", "b", "c"];

  return (
    <>
      {/* <Counter defaultCount={1} />
      <Adder />
      <WelcomeName />
      <ConditionalText />
      <HiddenName />
      {names.map((name, index) => {
        return <h1 key={index}>{name}</h1>;
      })} */}
      <ToDoList />
    </>
  );
};

export default App;
