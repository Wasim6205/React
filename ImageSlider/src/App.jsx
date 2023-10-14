import { useState } from "react"
import slider1 from "./assets/image1.jpg"
import slider2 from "./assets/image2.jpg"
import slider3 from "./assets/image3.jpg"
import slider4 from "./assets/image4.jpg"
import {AiOutlineLeft} from "react-icons/ai"
import {AiOutlineRight} from "react-icons/ai"

function App() {

  const imageSlider = [
    {
      url:slider1,
      caption:"slider1",
    },
    {
      url:slider2,
      caption:"slider2",
    },
    {
      url:slider3,
      caption:"slider3",
    },
    {
      url:slider4,
      caption:"slider4",
    }
  ]

  let [index,setIndex] = useState(0)
  function leftShiftHandler() {
    if(index - 1 < 0) {
        setIndex(imageSlider.length - 1);
    }
    else {
        setIndex(index - 1);
    }
}

function rightShiftHandler() {
    if(index + 1 >=imageSlider.length) {
        setIndex(0);
    }
    else {
        setIndex(index+1);
    }

}

  return (
    <div>
      <img src={imageSlider[index].url} className=" h-[100vh] w-[100vw] bg-cover"/>
      <h2 className="absolute top-[50%] left-[50%] text-4xl bg-white">{imageSlider[index].caption}</h2>
      <div className="absolute top-[50%] flex justify-around gap-[1943px]">
        <AiOutlineLeft className="cursor-pointer" fontSize={50} color="white" onClick={leftShiftHandler}/>
        <AiOutlineRight className="cursor-pointer" fontSize={50} color="white" onClick={rightShiftHandler}/>
      </div>
    </div>
  )
}

export default App
