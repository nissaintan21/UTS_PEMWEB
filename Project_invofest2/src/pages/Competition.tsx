import Button from "../components/Button";
import Footer from "../components/Footer";

export default function Competition() {
  const competitions = [
    {
      title: "Poster Design Competition",
      description: "Poster Design Competition ini adalah kompetisi untuk menciptakan suatu karya dalam bentuk poster digital yang komunikatif dan inspiratif, guna menyuarakan gagasan atau solusi visual terhadap permasalahan yang ada sekarang ini.",
      imageUrl: "https://www.invofest-harkatnegeri.com/assets/competition-card/software_dev.png"
    },
    {
      title: "UI/UX Design Competition",
      description: "UI/UX Design Competition ini adalah kompetisi untuk menciptakan dan merancang inovasi sebuah produk digital yang dapat berupa website maupun mobile apps serta dapat membuat nyaman calon pengguna.",
      imageUrl: "https://www.invofest-harkatnegeri.com/assets/competition-card/ui_ux.png",
    },
    {
      title: "Web Design Competition",
      description: "Web Design Competition ini adalah kompetisi untuk menciptakan suatu perangkat lunak berbasis website yang menggunakan desain menarik, unik, dan responsive pada semua device serta sesuai dengan tema kompetisi.",
      imageUrl: "https://www.invofest-harkatnegeri.com/assets/competition-card/web_design.png",
    },
  ];
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">

      <main className="w-full">

        {/* HERO */}
        <section className="py-10 flex flex-col md:flex-row gap-10 justify-between items-center pl-4 pr-6 md:pl-10 md:pr-20">

          {/* TEXT */}
          <div className="w-full md:w-2/3 flex flex-col gap-6">
            <h1 className="text-4xl md:text-6xl font-bold text-red-900">
              IT Competition
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-red-800">
              “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan”
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg">
              Kompetisi dalam INVOFEST ini mengusung tema 
              <span className="font-semibold"> “From Creation to Innovation”</span>, 
              mengajak generasi muda untuk mengembangkan inovasi dan kreativitas. Tema ini bertujuan mengajak generasi muda untuk mengembangkan inovasi dan kreativitas guna membentuk kelompok yang memiliki potensi luar biasa, yang mampu mewujudkan masa depan yang berkelanjutan.
            </p>

            <div className="flex gap-3">
              <Button title="DAFTAR IT COMPETITION" variant="primary" />
            </div>
          </div>

          {/* IMAGE */}
          <div className="w-full max-w-[350px] h-auto">
            <img
              src="https://www.invofest-harkatnegeri.com/assets/Maskot-Lomba.png"
              className="w-full max-w-[300px] md:max-w-full h-auto"
              alt="Maskot Lomba"
            />
          </div>
        </section>
        
        {/* TENTANG */}
        <section className="bg-[#FFEDF3] py-20">
          <div className="max-w-7xl mx-auto px-8">

            <h1 className="text-4xl md:text-5xl font-bold text-red-900 mb-6">
              DESKRIPSI KOMPETISI
            </h1>

            <p className="text-gray-700 text-lg leading-relaxed mb-12">
              Kompetisi atau perlombaan yang ada dalam kegiatan <span className="font-semibold">INVOFEST (Infomatics Vocational Festival) 2025</span> adalah diantaranya National Poster Design Competition, UI UX Design Competition, dan juga UI/UX Design Competition. Kompetisi dalam INVOFEST ini mengusung tema <span className="font-semibold">“From Creation to Innovation”</span>, Tema ini bertujuan mengajak generasi muda untuk mengembangkan inovasi dan kreativitas guna membentuk kelompok yang memiliki potensi luar biasa, yang mampu mewujudkan masa depan yang berkelanjutan.
            </p>

          </div>
        </section>


        {/* DESKRIPSI & LIST LOMBA  */}
        <section className="py-16 mt-10">
          <div className="max-w-full px-6 md:px-20">
            <h1 className="text-4xl md:text-5xl font-bold text-red-900 mb-6 justify-center flex">
              CABANG KOMPETISI
            </h1>

            <p className="text-gray-700 text-lg leading-relaxed mb-12 max-w-4xl justify-center ">
              Pilih cabang kompetisi yang sesuai dengan minat dan bakatmu. Tunjukkan kreativitasmu dalam skala nasional bersama <span className="font-semibold text-red-900">INVOFEST 2025</span>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {competitions.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
                  {/* Image Area */}
                  <div className="aspect-square w-full bg-gray-100 overflow-hidden">
                    <img 
                      src={item.imageUrl} 
                      alt={item.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Content Area */}
                  <div className="p-6 flex flex-col flex-grow gap-3">
                    <h3 className="text-xl font-bold text-red-900">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                      {item.description}
                    </p>
                    <div className="mt-4">
                      <Button title="Detail Lomba" variant="secondary" className="w-full py-2" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}
