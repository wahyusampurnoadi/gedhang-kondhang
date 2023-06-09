import React, { useState } from "react";

const Mitra = () => {
  const [faqs] = useState([
    {
      question: "Apakah Gedhang Kondhang memiliki program kemitraan franchise?",
      answer:
        "Ya, Gedhang Kondhang sangat bersemangat untuk membuka peluang kemitraan franchise kepada individu yang berbakat dan bersemangat untuk berbisnis kuliner. Kami percaya bahwa kemitraan ini dapat memberikan kesempatan untuk sukses bersama dalam industri makanan yang berkembang pesat.",
    },
    {
      question: "Apa keuntungan menjadi mitra franchise Gedhang Kondhang?",
      answer:
        "Kami akan memberikan pelatihan mendalam tentang operasional dan manajemen usaha, sehingga Anda dapat menjalankan bisnis dengan lancar,Dan kami terus melakukan inovasi dalam menu dan menciptakan toping baru yang menarik untuk terus memanjakan pelanggan, serta kami akan memberikan bahan baku berkualitas tinggi untuk memastikan cita rasa yang konsisten dan kepuasan pelanggan yang tinggi.",
    },
    {
      question: "Berapa biaya investasi untuk menjadi mitra franchise Gedhang Kondhang?",
      answer:
        "Biaya investasi dapat bervariasi tergantung pada lokasi dan ukuran outlet yang Anda pilih. Kami akan memberikan detail lebih lanjut tentang biaya investasi, royalti, dan persyaratan lainnya dalam proses kualifikasi kemitraan.",
    },
    {
      question: "Bagaimana saya bisa menjadi mitra franchise Gedhang Kondhang?",
      answer: "Jika Anda tertarik untuk menjadi mitra franchise Gedhang Kondhang, silakan menghubungi kontak yang telah kami sediakan. Tim kami akan menghubungi Anda untuk membahas lebih lanjut.",
    },
    {
      question: "Apakah saya perlu memiliki pengalaman sebelumnya dalam industri makanan untuk menjadi mitra franchise Gedhang Kondhang?",
      answer:
        "Tidak, Anda tidak perlu memiliki pengalaman sebelumnya dalam industri makanan. Kami akan memberikan pelatihan dan dukungan yang diperlukan untuk membantu Anda dalam menjalankan bisnis ini. Yang Anda butuhkan adalah semangat dan komitmen untuk sukses.",
    },
  ]);

  return (
    <div className="container mx-auto pt-40 pb-14 px-8 bg-primary" id="mitra">
      <h2 className="text-3xl font-bold mb-10 uppercase text-center mx-auto max-w-xs text-red-500 border-b-4 border-orange-400">Kemitraan</h2>
      <div className="text-center text-lg pt-7">
        <h1>Selamat datang di halaman mitra kami! Kami mengundang Anda untuk bergabung dengan kemitraan franchise kami dalam penjualan gedhang kondhang kami yang terkenal dengan pisang goreng krispi kami yang lezat.</h1>
      </div>
      {/* FAQ COMPONENT */}
      <div>
        <div className="w-full mx-auto mt-20 space-y-2 lg:max-w-4xl">
          {faqs.map((faq, index) => (
            <details className="rounded-lg" key={index}>
              <summary className="font-semibold cursor-pointer bg-orange-400 p-4 rounded-lg select-none">{faq.question}</summary>
              <div className="mt-3 bg-lime-400 p-4 rounded-lg">
                <p className="text-sm leading-6 text-gray-600 select-none">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mitra;
