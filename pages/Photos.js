import React, { useContext } from "react";
import { CartContext } from "../CartContext";

import Image from "../components/Image";
import { getClass } from "../utils";

function Photos() {
  const { allPhotos } = useContext(CartContext);

  const images = allPhotos.map((img, i) => (
    <Image key={img.id} img={img} className={getClass(i)} />
  ));

  return <main className="photos">{images}</main>;
}

export default Photos;
