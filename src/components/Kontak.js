import React from "react";
import waLogo from "../assets/whatsapp.png";
import igLogo from "../assets/instagram.png";

const Kontak = () => {
  const phoneNumber = "+6285867613040"; // Nomor WhatsApp
  const instagramUsername = "gedhang_kondhang"; // Username Instagram

  return (
    <div className="container mx-auto py-20 px-8 bg-primary" id="kontak">
      <h2 className="text-3xl font-bold mb-10 uppercase text-center mx-auto max-w-xs text-red-500 border-b-4 border-orange-400">Kontak</h2>

      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
        <div className="lg:w-1/2 lg:pl-52 mb-5">
          <p className="text-xl mb-4">Hubungi kami melalui :</p>
          <div className="flex items-center mb-4">
            <img src={waLogo} alt="WhatsApp Logo" className="w-6 h-6 mr-2" />
            <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              {phoneNumber}
            </a>
          </div>
          <div className="flex items-center">
            <img src={igLogo} alt="Instagram Logo" className="w-6 h-6 mr-2" />
            <a href={`https://www.instagram.com/${instagramUsername}`} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              @{instagramUsername}
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 lg:pl-52 mt-5">
          <p className="text-lg">Alamat kami :</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253376.90657641017!2d110.13857307735053!3d-7.1243547773324165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708d7772229ac7%3A0xfc52b13033c54bf0!2sGedhang%20Kondhang!5e0!3m2!1sid!2sid!4v1686245333430!5m2!1sid!2sid"
            width="320"
            height="200"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Google Maps Gedhang Kondhang"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Kontak;
