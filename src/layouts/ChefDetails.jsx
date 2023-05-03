import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ChefDetails = () => {
  const { id } = useParams();
  const [chefData, setChefData] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/alldata")
      .then((res) => res.json())
      .then((data) => {
        const chef = data.filter((item) => item.id === id)[0];
        setChefData(chef);
      });
  }, [id]);

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
            <th className="text-2xl">
              More information about {chefData.name}:
            </th>
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
        <button className="my-btn">Favorite </button>
      </div>
    </div>
  );
};

export default ChefDetails;
