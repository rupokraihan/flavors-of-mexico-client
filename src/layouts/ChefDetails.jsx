import React, { useEffect, useState } from "react";
import { useNavigation, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import LoadingSpinner from "../components/LoadingSpinner";

const ChefDetails = () => {


  const { id } = useParams();
  const [chefData, setChefData] = useState({});
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://mexican-chef-recipe-hunter-server-rupokraihan.vercel.app/alldata"
    )
      .then((res) => res.json())
      .then((data) => {
        const chef = data.filter((item) => item.id === id)[0];
        setChefData(chef);
        setIsLoading(false);
      });
  }, [id]);

  const handleFavorite = () => {
    setIsFavorite(true); // set the button disabled status to true
    // Your favorite logic here
    toast.success("Successfully added to favorites!");
  };
   if (isLoading) {
     return <LoadingSpinner />;
   }

  return (
    <div className="my-container">
      <img
        className="h-[420px] w-[350px] mx-auto rounded-2xl"
        src={chefData.image}
        alt=""
      />

      <div className="text-center">
        <h2 className="text-4xl font-extrabold mt-4 mb-6">{chefData.name}</h2>
        <p className="w-[500px] mx-auto">
          <span className="text-xl font-bold ">Bio:</span> {chefData.bio}
        </p>
        <p className="mt-4">
          <span className="text-xl font-bold">Likes: </span>
          {chefData.likes}
        </p>
        <p className="mt-4 mb-4">
          <span className="text-xl font-bold">Numbers of recipes:</span>
          {chefData.totalRecipes}
        </p>
        <p>
          <span className="text-xl font-bold">Years of experience:</span>
          {chefData.experience}
        </p>
      </div>

      {/* table */}
      <div className="overflow-x-auto mt-16 border-2 padding-8">
        <table className="table table-zebra w-full">
          {/* head */}

          <tbody>
            <tr>
              <th className="text-2xl">
                More information about {chefData.name}:
              </th>
            </tr>
            {/* row 1 */}

            <tr>
              <td> recipe name</td>
              <td>{chefData.recipeName}</td>
            </tr>
            <tr>
              <td> ingredients</td>
              <td>{chefData.ingredients}</td>
            </tr>
            {/* row 2 */}
            <tr>
              <td> cooking method</td>
              <td>{chefData.cookingMethod}</td>
            </tr>
            {/* row 3 */}
            <tr>
              <td>rating</td>
              <td>{chefData.rating}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="text-center mt-8">
        <button
          className="my-btn"
          onClick={handleFavorite}
          disabled={isFavorite}
        >
          {isFavorite ? "Favorited" : "Favorite"}
        </button>
      </div>
    </div>
  );
};

export default ChefDetails;
