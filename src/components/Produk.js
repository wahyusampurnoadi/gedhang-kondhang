import React, { useState } from "react";
import originalImage from "../assets/original.jpg";
import coklatImage from "../assets/coklat.jpg";
import greentealImage from "../assets/greentea.jpg";
import oreoImage from "../assets/oreo.jpg";
import eyeIcon from "../assets/eye-icon.png";

const Produk = () => {
  const products = [
    {
      name: "Rasa Original",
      description: "Pisang gpreng krispi rasa original berisikan potongan pisang krispi yang digoreng tepung.",
      price: "Rp 13.000",
      image: originalImage,
    },
    {
      name: "Rasa Coklat",
      description: "Pisang goreng krispi dengan toping coklat yang melengkapi cita rasa manisnya. Tekstur renyah dan lelehan coklat yang memikat selera.",
      price: "Rp 13.000",
      image: coklatImage,
    },
    {
      name: "Rasa Greentea",
      description: "Pisang matang yang digoreng dengan adonan krispi yang diberi tambahan toping berupa saus atau bubuk matcha (teh hijau).",
      price: "Rp 13.000",
      image: greentealImage,
    },
    {
      name: "Rasa Oreo",
      description: "Pisang goreng krispi dengan toping oreo dihiasi dengan remahan atau potongan Oreo yang memberikan sentuhan manis dan renyah.",
      price: "Rp 13.000",
      image: oreoImage,
    },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseClick = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto py-8 px-8 bg-primary" id="produk">
      <h2 className="text-3xl font-bold mb-20 uppercase text-center mt-24 text-red-500 border-b-4 border-orange-400 max-w-xs mx-auto">Produk</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div className="bg-white shadow-md rounded-lg p-4" key={index}>
            <div className="relative z-10">
              <img src={product.image} alt={product.name} className="rounded-lg mb-4" />
              <img src={eyeIcon} alt="view" className="absolute w-2/4 my-auto inset-0 mx-auto opacity-0 hover:opacity-60 transition-opacity duration-500 cursor-pointer" onClick={() => handleImageClick(product.image)} />
            </div>
            <h3 className="text-xl font-bold mb-2">{product.name}</h3>
            <p className="text-gray-500 h-32 overflow-hidden">{product.description}</p>
            <div className="flex items-center justify-between">
              <p className="text-lime-500 font-bold">Harga :</p>
              <p className="text-lime-500 font-bold ml-2">{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={handleCloseClick}>
          <div className="max-w-2xl max-h-2xl">
            <img src={selectedImage} alt="Selected Product" className="w-full h-full" />
            <button className="absolute lg:top-24 lg:right-80 top-52 right-0 mt-4 mr-4 text-white bg-red-500 px-2 py-1 rounded" onClick={handleCloseClick}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Produk;
