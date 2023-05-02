import React from "react";
import bannerImage from "../../../src/assets/pexels-ella-wei-6549194.jpg";

const Home = () => {
  return (
    <div>
      <div class="relative py-60 mt-4">
        <div class="absolute inset-0 bg-black opacity-75"></div>
        <div class="container mx-auto px-4 relative z-10">
          <h1 class="text-white font-bold text-3xl mb-4">
            Your Banner Title Here
          </h1>
          <p class="text-white text-lg mb-8">
            Your banner description goes here.
          </p>
          <a
            href="#"
            class="bg-white text-gray-800 font-bold py-2 px-4 rounded hover:bg-gray-200"
          >
            Call to Action
          </a>
        </div>
        <img
          class="absolute inset-0 object-cover w-full h-full"
          src={bannerImage}
          alt="Banner Image"
        />
      </div>
    </div>
  );
};

export default Home;
