interface Prpos {
  mainText: string;
  subText?: string;
}

function Title({ mainText, subText }: Prpos) {
  return (
    <h2 className="text-center my-3 display-3">
      {mainText} <br />
      <small className="text-muted">{subText} </small>
    </h2>
  );
}

export default Title;
