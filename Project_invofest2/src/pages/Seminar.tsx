import { Calendar, Clock, MapPin, Building2 } from "lucide-react";
import Button from "../components/Button";
import Footer from "../components/Footer";
import SpeakerCard from "../components/SpeakerCard";

export default function Seminar() {
  const speakerItems = [
    {
      name: "Dery Agung Triyadi",
      role: "AWS Indonesia",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/seminar/Seminar%20Dery.png",
    },
    {
      name: "Sowam Habibi",
      role: "Google Indonesia",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/seminar/seminar%20sowam.png",
    },
  ];

  const jadwalItems = [
    { icon: <Calendar size={24} />, text: "Kamis, 27 November 2025" },
    { icon: <Clock size={24} />, text: "08.00 WIB - 12.00 WIB" },
    { icon: <MapPin size={24} />, text: "Aula Gedung C" },
    {
      icon: <Building2 size={24} />,
      text: "Kampus 1 (Mataram) Universitas Harkat Negeri",
    },
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <main className="w-full pl-0 pr-6">

        {/* HERO */}
        <section className="py-10 flex flex-col md:flex-row gap-10 justify-between items-center pl-4 md:pl-10">
          <div className="w-full md:w-2/3 flex flex-col gap-6">
            <h1 className="text-4xl md:text-6xl font-bold text-red-900">
              IT Seminar
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-red-800">
              “Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif”
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg">
              Seminar nasional yang membahas strategi dan arsitektur teknologi untuk menciptakan sistem di mana manusia dan AI bekerja sebagai mitra yang sinergis.Yang bertujuan mengubah paradigma dari persaingan menjadi kolaborasi, serta meningkatkan pengetahuan peserta dalam merancang teknologi AI yang berpusat pada manusia.
            </p>

            <div className="flex gap-3">
              <Button title="DAFTAR IT SEMINAR" variant="primary" />
            </div>
          </div>

          <div className="w-full max-w-[350px]">
            <img
              src="https://www.invofest-harkatnegeri.com/assets/Maskot-Seminar.png"
              alt="Mascot"
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* TENTANG */}
        <section className="bg-[#FFEDF3] py-20">
                <div className="max-w-7xl mx-auto px-8">

            <h1 className="text-4xl md:text-5xl font-bold text-red-900 mb-6">
              Tentang IT Seminar
            </h1>

            <p className="text-gray-700 text-lg leading-relaxed mb-12">
              Seminar bertajuk “Human-AI Integration: Merancang Arsitektur Kolaboratif, Di tengah pesatnya kemajuan kecerdasan buatan (AI), narasi yang sering muncul adalah tentang persaingan antara manusia dan mesin. Kekhawatiran akan penggantian peran manusia oleh teknologi cerdas menjadi diskusi utama di berbagai sektor. Namun, bagaimana jika kita mengubah paradigma tersebut? Seminar Nasional Teknologi Informasi ini hadir untuk menjawab tantangan itu dengan mengangkat tema "Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif.” Kami bertujuan untuk menggeser fokus dari ketakutan akan kompetisi menjadi eksplorasi peluang kolaborasi. Seminar ini akan mengupas tuntas bagaimana kita dapat merancang sistem, etika, dan lingkungan kerja di mana AI berfungsi sebagai mitra yang memperkuat kecerdasan, kreativitas, dan produktivitas manusia—bukan sebagai pengganti. 
            </p>

          </div>
        </section>

        {/* SPEAKER */}
        <section id="speaker" className="py-24 pl-4 md:pl-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-red-900">
            Temui Pembicara Khusus Kami
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {speakerItems.map((item, index) => (
              <SpeakerCard
                key={index}
                name={item.name}
                role={item.role}
                imageUrl={item.imageUrl}
              />
            ))}
          </div>
        </section>

        {/* PELAKSANAAN */}
        <section className="bg-[#FFEDF3] py-20">
                <div className="max-w-7xl mx-auto px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-red-900 mb-10 text-center">
              Pelaksanaan IT Seminar
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {jadwalItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md flex items-center gap-4 border-r-8 border-red-900"
                >
                  <div className="bg-red-900 p-3 rounded-lg text-white">
                    {item.icon}
                  </div>

                  <p className="text-gray-700 font-medium">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}