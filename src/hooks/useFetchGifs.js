import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

  const [images, setImages] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const getImages = async() => {
    const newImages = await getGifs(category); // devuelve todos los gifs
    setImages(newImages);
    setisLoading(false);
  }
  
    useEffect(() => {
        getImages();
        getGifs(category);
    },[category]) 

  return {
    images,
    isLoading
  }
}
