type TitleType = {
  title: string;
  subTitle?: string;
};

const Title = (props: TitleType) => {
  const { title, subTitle } = props;
  return (
    <>
      <h1>{title}</h1>
      <hr />
      {subTitle && <h3>{subTitle}</h3>}
    </>
  );
};
export default Title;
