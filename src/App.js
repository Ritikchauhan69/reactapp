import React, { useState } from "react";
import "./App.css";
import photo from "./indianflag.jpg";
import photo1 from "./china.webp";
import photo3 from "./japan.webp";
import photo2 from "./nepal.png";
import photo4 from "./vietnam.webp";

function App() {
  const [imageIndex, setImageIndex] = useState(0);
  const [name, setname] = useState(0);
  const imageUrls = [photo, photo1, photo2, photo3, photo4];
  const counrtyname = ["India", "China", "Nepal", "japan", "vietnam"];
  const language = [
    "hindi english",
    "mandarin",
    "Nepali",
    "japanese",
    "vietnamese",
  ];
  const population = [
    "1.4 billion",
    "1.3 billion",
    "30 million",
    "124 million",
    "97 million",
  ];
  const currency = ["rupee", "yuan", "Nepali rupee", "yen", "vietnamese dong"];
  const changeImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };
  const changecountrylanguage = () => {
    setname((prevIndex) => (prevIndex + 1) % counrtyname.length);
  };
  const changecountrypopulation = () => {
    setname((prevIndex) => (prevIndex + 1) % counrtyname.length);
  };
  const changecountrycurrency = () => {
    setname((prevIndex) => (prevIndex + 1) % counrtyname.length);
  };
  const changecountryname = () => {
    setname((prevIndex) => (prevIndex + 1) % counrtyname.length);
  };
  return (
    <>
      <nav className="navbar bg-primary">
        <div className=" container-fluid">
          <a className=" navbar-brand">
            <h1 className="text-start">Destination Generator</h1>
          </a>
        </div>
      </nav>
      <div className="main">
        <div className="images">
          <div className="duo1">
            <img
              className="images2"
              src={imageUrls[imageIndex]}
              alt="Displayed"
            />
          </div>

          <div className="data duo2">
            <p className="data1">Name: {counrtyname[name]}</p>
            <p className="data1">Language: {language[name]}</p>
            <p className="data1">Population: {population[name]}</p>
            <p className="data1">Currency: {currency[name]}</p>
          </div>
        </div>
        <div className="button">
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => {
              changeImage();
              changecountryname();
            }}
          >
            Change Image
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
