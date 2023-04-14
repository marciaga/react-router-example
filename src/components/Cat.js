import { useOutletContext, useParams } from "react-router-dom";

import { capitalizeWord } from "../utils";

const Cat = () => {
  const { catName } = useParams();
  const [cats] = useOutletContext();
  const cat = cats.find((c) => c.name === capitalizeWord(catName));

  return (
    <div>
      <h1>I am the {cat.name} cat</h1>
      <p>({cat.name} is {cat.personality})</p>
    </div>
  );
};

export default Cat;
