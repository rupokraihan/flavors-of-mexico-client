import React, { useEffect, useState } from "react";
import bannerImage from "../../../src/assets/pexels-ella-wei-6549194.jpg";
import TakeChefs from "../home/TakeChefs";
import About from "../home/About";
import { Link } from "react-router-dom";



const Home = () => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/alldata")
      .then((res) => res.json())
      .then((data) => setAllData(data))
      .catch((error) => console.error(error));
  },[])
  return (
    <div>
      <div className="relative py-60 mt-4">
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-white font-bold text-4xl mb-4">
            Crafting Exceptional Dishes with <br /> Passion and Precision
          </h1>
          <p className="text-white text-lg mb-8">
            The chef's expertise and mastery of the culinary arts, <br />
            emphasizing their commitment to creating exceptional dishes <br />
            with both passion and precision. It suggests that the chef has
            <br />
            honed their skills through extensive training and experience, <br />
            and is dedicated to delivering the highest quality cuisine to <br />
            their customers.
          </p>
          <a
            href="#"
            className="bg-white my-btn text-gray-800 font-bold py-2 px-4 rounded hover:bg-gray-200 "
          >
            Call us
          </a>
        </div>
        <img
          className="absolute inset-0 object-cover w-full h-full"
          src={bannerImage}
          alt="Banner Image"
        />
      </div>

      <h1 className="text-5xl font-bold text-center mt-16">
        Top Experienced Chefs
      </h1>
      <div className="my-container grid gap-8 lg:grid-cols-2 mt-10">
        {allData.map((data) => (
          <div key={data.id}>
            <div className="card card-side bg-base-100 shadow-xl h-96 ">
              <figure>
                <div>
                  <img
                    className="lg:h-[330px] w-[550px]"
                    src={data.image}
                    alt=""
                  />
                  <h2 className="card-title text-2xl font-extrabold mt-2 ml-8">
                    {data.name}
                  </h2>
                </div>
              </figure>
              <div className="card-body text-lg font-medium">
                <h3>
                  <span className="text-xl font-bold">
                    Years of experience:
                  </span>
                  {data.experience}
                </h3>
                <h3 className="mt-4">
                  <span className="text-xl font-bold">Numbers of recipes:</span>
                  {data.totalRecipes}
                </h3>
                <h3 className="mt-4">
                  <span className="text-xl font-bold">Likes: </span>
                  {data.likes}
                </h3>
                <div className="card-actions justify-end lg:mt-20">
                  <Link to={`alldata/${data.id}`}>
                    <button className="my-btn btn-primary">View Recipes</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section>
        <TakeChefs />
      </section>
      <section>
        <About />
      </section>
    </div>
  );
};

export default Home;
