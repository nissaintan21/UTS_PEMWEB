import { Calendar, Clock, MapPin, Building2 } from "lucide-react";
import Button from "../components/Button";
import Footer from "../components/Footer";
import SpeakerCard from "../components/SpeakerCard";

export default function Talkshow() {

  const speakerItems = [
    {
      name: "Moh. Ichsan Maulana",
      role: "HCIS, PT. Garuda Daya Pratama Sejahtera",
      imageUrl: "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20ichsan.png",
    },
    {
      name: "M. Zaim Zamzami",
      role: "Programmer, PT. Pertamina Drilling",
      imageUrl: "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20zaim%20zamzami.png",
    },
    {
      name: "Daffa Zuhdan Muhtar",
      role: "Android Developer, PT. Astra",
      imageUrl: "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20daffa.png",
    },
    {
      name: "Bayu Adi Prasetiyo",
      role: "Software Engineer, Kompas",
      imageUrl: "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20bayu.png",
    },
  ];

  const jadwalItems = [
    { icon: <Calendar size={24} />, text: "Senin, 24 November 2025" },
    { icon: <Clock size={24} />, text: "08.00 WIB - 12.00 WIB" },
    { icon: <MapPin size={24} />, text: "Aula Gedung C" },
    {
      icon: <Building2 size={24} />,
      text: "Kampus 1 (Mataram) Universitas Harkat Negeri",
    },
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">

      {/* MAIN */}
      <main className="w-full pl-0 pr-6">

        {/* HERO */}
        <section className="py-10 flex flex-col md:flex-row gap-10 justify-between items-center pl-4 md:pl-10">

          <div className="w-full md:w-2/3 flex flex-col gap-6">
            <h1 className="text-4xl md:text-6xl font-bold text-red-900">
              IT Talkshow
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-red-800">
              “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan”
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg">
                Talkshow “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan” Sebuah diskusi interaktif yang mengeksplorasi cara mengintegrasikan nilai-nilai kemanusiaan seperti etika, empati, dan kreativitas ke dalam pengembangan kecerdasan buatan. yang bertujuan menginspirasi audiens untuk membangun dan memanfaatkan AI sebagai alat kolaboratif yang memperkuat potensi unik manusia, bukan sebagai penggantinya.
            </p>
            
              <div className="flex gap-3">
                 <Button title="DAFTAR IT TALKSHOW" variant="primary" />
             </div>
          </div>

          <div className="w-full max-w-[350px]">
            <img
              src="https://www.invofest-harkatnegeri.com/assets/Maskot-Talkshow.png"
              className="w-full h-auto"
            />
          </div>

        </section>

        
        {/* TENTANG */}
        <section className="bg-[#FFEDF3] py-20">
                <div className="max-w-7xl mx-auto px-8">

            <h1 className="text-4xl md:text-5xl font-bold text-red-900 mb-6">
              Tentang IT Talkshow
            </h1>

            <p className="text-gray-700 text-lg leading-relaxed mb-12">
              Seiring teknologi, khususnya kecerdasan buatan (AI), yang semakin meresap ke dalam setiap aspek kehidupan kita, muncul sebuah pertanyaan fundamental: Apakah kita sedang menciptakan teknologi yang melayani manusia, atau justru sebaliknya? Untuk menjawab pertanyaan tersebut, kami mempersembahkan talkshow berskala nasional: “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan.” Acara ini dirancang bukan untuk membahas teknologi sebagai entitas yang dingin dan terpisah, melainkan untuk menggali bagaimana kita dapat menanamkan nilai-nilai kemanusiaan—seperti empati, etika, dan kreativitas—ke dalam inti pengembangan AI. Kami akan mengupas tuntas visi masa depan di mana AI tidak menjadi pesaing, tetapi menjadi mitra kolaboratif yang memperkuat potensi unik manusia.
            </p>

          </div>
        </section>


        <section className="py-24 pl-4 md:pl-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-red-900">
            Temui Pembicara Khusus Kami
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
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

        <section className="bg-[#FFEDF3] py-20">
          <div className="max-w-7xl mx-auto px-8">

            <h1 className="text-4xl md:text-5xl font-bold text-red-900 mb-10 text-center">
              Pelaksanaan IT Talkshow
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