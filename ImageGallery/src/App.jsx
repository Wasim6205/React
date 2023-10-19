import { useState } from "react";
import "./App.css";
import { AiOutlineClose } from "react-icons/ai";
import img1 from "./assets/Grid_Gallery_Img/img1.jpg";
import img2 from "./assets/Grid_Gallery_Img/img2.jpg";
import img3 from "./assets/Grid_Gallery_Img/img3.jpg";
import img4 from "./assets/Grid_Gallery_Img/img4.jpg";
import img5 from "./assets/Grid_Gallery_Img/img5.jpg";
import img6 from "./assets/Grid_Gallery_Img/img6.jpg";
import img7 from "./assets/Grid_Gallery_Img/img7.jpg";
import img8 from "./assets/Grid_Gallery_Img/img8.jpg";

function App() {
  const imageGallery = [
    {
      id: 1,
      imgSrc: img1,
    },
    {
      id: 2,
      imgSrc: img2,
    },
    {
      id: 3,
      imgSrc: img3,
    },
    {
      id: 4,
      imgSrc: img4,
    },
    {
      id: 5,
      imgSrc: img5,
    },
    {
      id: 6,
      imgSrc: img6,
    },
    {
      id: 7,
      imgSrc: img7,
    },
    {
      id: 8,
      imgSrc: img8,
    },
  ];

  const [clickedImage, setClickedImage] = useState(false);
  const [tempimgSrc, setTempimgSrc] = useState("");
  const getImg = (imgSrc) => {
    setTempimgSrc(imgSrc);
    setClickedImage(true);
  }; 

  return (
    <>
      <h1 className="text-center font-bold text-2xl py-2">Image Gallery</h1>
      <div className={clickedImage ? "model open" : "model"}>
        <img src={tempimgSrc} />
        <AiOutlineClose onClick={() => setClickedImage(false)} />
      </div>
      <div className="gallery">
        {imageGallery.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img src={item.imgSrc} style={{ width: "100%" }} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
