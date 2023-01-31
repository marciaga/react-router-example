import { useOutletContext, useParams } from "react-router-dom";

import { capitalizeWord } from "../utils";

const Cat = () => {
  const { catName } = useParams();

  const [cats] = useOutletContext();

  const cat = cats.find((cat) => cat.name === capitalizeWord(catName));

  return (
    <div>
      <h1>I am the cat {cat.name}</h1>
     <p>{cat.name} is {cat.personality}</p>
    </div>
  );
};

export default Cat;
