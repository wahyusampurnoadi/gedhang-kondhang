import React from "react";
import grandOpeningImage from "../assets/grand-opening2.jpg";

const Beranda = () => {
  const marqueeText = "- harga promo 13k all varian ".repeat(100);

  return (
    <section className="bg-primary pt-36 pb-5 px-8" id="beranda">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="fixed top-20 left-0 bg-lime-300 p-2 uppercase font-bold z-50">
            <marquee behavior="scroll" direction="">
              {marqueeText}
            </marquee>
          </div>
          <h2 className="text-4xl md:text-8xl font-bold mb-4 font-serif text-red-500">Grand Opening</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="mb-8 md:mb-0">
            <img src={grandOpeningImage} alt="Grand Opening" className="w-3/4 rounded-lg shadow-xl" />
          </div>
          <div>
            <p className="text-lg md:text-2xl text-gray-800 leading-relaxed">
              <span className="font-semibold">Yeeaaayy!!!</span> Gedhang Kondhang telah resmi dibuka pada tanggal 9 Juni 2023. Gedhang Kondhang adalah tempat di mana ada makanan ringan berupa pisang goreng krispi yang ditambah berbagai
              macam toping.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beranda;
