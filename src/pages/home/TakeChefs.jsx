import React from 'react';
import birthdayImage from "../../../src/assets/lidya-nada-MD_ha01Bk7c-unsplash.jpg";
import weddingImage from "../../../src/assets/vitor-monthay-JL2n-GWXCJo-unsplash.jpg";
import reunionImage from "../../../src/assets/siavosh-hosseini-F5QBwO8X1KE-unsplash.jpg";

const TakeChefs = () => {
  return (
    <div>
      <section>
        <h1 className="text-5xl font-bold text-center mt-16">
          Take Our Chefs to Your Events
        </h1>
        <div className="my-container lg:flex gap-16">
          <div>
            <img
              className="rounded-2x h-[210px] w-[330px] mb-8"
              src={birthdayImage}
              alt=""
            />
            <h2 className="text-center text-3xl font-semibold mb-3">
              Birthdays
            </h2>
            <p className="text-center">
              Looking for a special touch to make your Birthday unforgettable?
              Look no further than "Take Our Chefs to Your Events"! Our chefs
              will work with you to design a menuthat perfectly suits your taste
              and budget.
            </p>
          </div>
          <div>
            <img
              className="rounded-2x h-[210px] w-[330px] mb-8"
              src={weddingImage}
              alt=""
            />
            <h2 className="text-center text-3xl font-semibold mb-3">
              Weddings
            </h2>
            <p className="text-center">
              Looking for a special touch to make your Wedding unforgettable?
              Look no further than "Take Our Chefs to Your Events"! Our chefs
              will work with you to design a menuthat perfectly suits your taste
              and budget.
            </p>
          </div>
          <div>
            <img
              className="rounded-2x h-[210px] w-[330px] mb-8"
              src={reunionImage}
              alt=""
            />
            <h2 className="text-center text-3xl font-semibold mb-3 ">
              Reunions
            </h2>
            <p className="text-center">
              Looking for a special touch to make your Reunion unforgettable?
              Look no further than "Take Our Chefs to Your Events"! Our chefs
              will work with you to design a menuthat perfectly suits your taste
              and budget.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TakeChefs;