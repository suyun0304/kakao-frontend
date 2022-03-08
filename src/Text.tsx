type textType = {
  text: string;
  type: string;
};

const Text = (props: textType) => {
  const { text, type } = props;
  return (
    <>
      {type === "header" && <h1>{text}</h1>}
      {type === "bold" && <strong>{text}</strong>}
    </>
  );
};

export default Text;
