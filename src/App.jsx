import "./App.css";
import data from "./assets/movies_rnexgr.json";
import Section from "./assets/components/Section";

const netflix = data;
// console.log(netflix[0]);
// console.log(netflix[0].images);
function App() {
  return (
    <>
      <Section category={netflix[0].category} carrousel={netflix[0].images} />
      <Section category={netflix[1].category} carrousel={netflix[1].images} />
      <Section category={netflix[2].category} carrousel={netflix[2].images} />
      <Section category={netflix[3].category} carrousel={netflix[3].images} />
      <Section category={netflix[4].category} carrousel={netflix[4].images} />
      <Section category={netflix[5].category} carrousel={netflix[5].images} />
    </>
  );

  {
    /* {netflix.map((elem, index) => {
        // console.log(elem);
        return (
          <>
            <p key={index}>{elem.category}</p>
            {elem.images.map((elemimg, index) => {
              return <img keyimg={index} src={elemimg} alt="Icone contenu" />;
            })}
          </>
        );
      })} */
  }
}

export default App;
