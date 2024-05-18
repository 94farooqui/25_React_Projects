import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsFillArrowLeftCircleFill as LeftArrow } from "react-icons/bs";
import { BsFillArrowRightCircleFill as RightArrow } from "react-icons/bs";

const ImageSlider = ({ url }) => {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState(null);
  const [error, setError] = useState(null);
  const [currentSlide,setcurrentSlide] = useState(0)

  const handlePrevious = () => {
    setcurrentSlide(currentSlide == 0 ? images.length -1 : currentSlide-1)
  }
  const handleNext = () => {
    setcurrentSlide(currentSlide == images.length -1 ? 0 : currentSlide+1)
  }

  const fetchImages = async (url) => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      const {data} = response
      if (data) {
        console.log(data)
        setLoading(false);
        setImages(data);
      }
    } catch (error) {
      setError(error.message);
      setLoading(false)
    }
  };

  useEffect(() => {
    if (url) {
      fetchImages(url);
    }
  }, [url]);

  if(loading) return <div>Loading...</div>

  if(error) return <div><h2>Something went wrong</h2></div>

  return <div className="relative" id="container">
    <h2 className="text-4xl text-slate-700 text-center font-bold p-4">Image Slider</h2>
    <LeftArrow size={40} className="absolute left-4 top-1/2 text-yellow-400" onClick={handlePrevious}/>
    {images && images.map((image,index) => (<img className={`${index==currentSlide ? "": "hidden"} w-full object-cover ease-in-out duration-300 transition-opacity`} src={image.download_url} />))}
    <RightArrow size={40} className="absolute right-4 top-1/2  text-yellow-400" onClick={handleNext}/>
    <div className="flex justify-center gap-4 w-full absolute bottom-4 ">
        {images && images.map((_,index) => <div onClick={()=>setcurrentSlide(index)} className={`w-4 h-4 rounded-full cursor-pointer ${index==currentSlide ? "bg-yellow-300 ":"bg-slate-300 "}`}></div>)}
    </div>
  </div>;
};

export default ImageSlider;
