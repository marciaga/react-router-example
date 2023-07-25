import { useLoaderData, useParams } from "react-router-dom";

const Cat = () => {
  const { catName } = useParams();
  const cats = useLoaderData();
  const cat = cats.find((c) => c?.name?.toLowerCase() === catName);

  return (
    <>
      <h2>{catName}</h2>
      <h2>I am the {cat?.name}</h2>
      <p>My personality is: {cat?.personality}</p>
    </>
  );
};

export default Cat;
