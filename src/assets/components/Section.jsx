const Section = (props) => {
  //console.log(data);
  return (
    <>
      <p>{props.category}</p>
      {props.carrousel.map((elem, index) => {
        return <img key={index} src={elem} alt="image contenu" />;
      })}
    </>
  );
};

export default Section;
