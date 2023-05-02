import React from "react";

const About = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold text-center mt-16">About Us</h1>
      <div className="my-container flex justify-between">
        <div>
          <h2 className="text-center text-2xl font-semibold mb-5">
            Our Office Address
          </h2>
          <h5 className="text-xl font-semibold mb-2">Main Office:</h5>
          <p>
            Paseo de la Reforma 296, Juárez, Cuauhtémoc, <br /> 06600 Ciudad de
            México, CDMX, Mexico.
          </p>
          <h5 className="text-xl font-semibold mb-2">Second Office </h5>
          <p>
            Paseo de la Reforma 505, Cuauhtémoc, <br /> 06500 Ciudad de México,
            CDMX, Mexico.
          </p>
        </div>
        <div>
          <h2 className="text-center text-2xl font-semibold mb-5">
            Opening Hours{" "}
          </h2>
          <h5 className="text-xl font-semibold mb-2">Monday - Saturday </h5>
          <p>12pm - 10:30pm</p>

          <h5 className="text-xl font-semibold mb-2">Sunday </h5>
          <p>12pm - 9pm</p>
        </div>
        <div>
          <h2 className="text-center text-2xl font-semibold mb-5">
            Contact Numbers
          </h2>
          <h5 className="text-xl font-semibold mb-2">telephone:</h5>
          <p>
            +52 55 1234 5678, <br />
            +52 81 2345 6789
          </p>
          <h5 className="text-xl font-semibold mb-2">Mobile No:</h5>
          <p>
            888 492 3882, <br />
            888 705 0198
          </p>
          <h5 className="text-xl font-semibold mb-2">Hotline:</h5>
          445566
        </div>
      </div>
    </div>
  );
};

export default About;
