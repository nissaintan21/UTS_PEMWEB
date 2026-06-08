import SpeakerCard from "../components/SpeakerCard";
import Button from "../components/Button";
import Footer from "../components/Footer";
import { Code, Smartphone, Shield, CalendarDays, Clock, MapPin } from "lucide-react";

const Workshop = () => {

  const speakers = [
    {
      name: "Lhuqita Fazry",
      role: "Mobile Development",
      description: "Developer, Founder Rumah Coding Indonesia",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20mobile.png",
    },
    {
      name: "M. Dendi Purwanto",
      role: "Artificial Intelligence",
      description: "Software Engineer, PT. Mayar Kernel Supernova",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20AI.png",
    },
    {
      name: "Danang Avan M",
      role: "Cyber Security",
      description: "Security Analyst, Founder | Contributor TegalSec",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/workshop/talkshow%20cyber.png",
    },
  ];

  const workshopItems = [
    {
      title: "Mobile Development",
      date: "Selasa, 25 November 2025",
      time: "08.00 WIB - 16.30 WIB",
      location: "Lab Kom D.1",
      icon: "code",
    },
    {
      title: "Artificial Intelligence",
      date: "Selasa, 25 November 2025",
      time: "08.00 WIB - 16.30 WIB",
      location: "Lab Kom D.2",
      icon: "mobile",
    },
    {
      title: "Cyber Security",
      date: "Rabu, 26 November 2025",
      time: "08.00 WIB - 16.30 WIB",
      location: "Lab Kom D.1",
      icon: "shield",
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "code":
        return <Code size={28} />;
      case "mobile":
        return <Smartphone size={28} />;
      case "shield":
        return <Shield size={28} />;
      default:
        return null;
    }
  };

  return (
    
    <div className="min-h-screen w-full overflow-x-hidden bg-white">

      {/* MAIN */}
      <main className="w-full pl-0 pr-6">

        {/* HERO */}
        <section className="py-10 flex flex-col md:flex-row gap-10 justify-between items-center pl-4 md:pl-10">

          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <h1 className="text-4xl md:text-6xl font-bold text-red-900">
              IT Workshop
            </h1>

            <h2 className="text-xl md:text-2xl font-semibold text-red-800">
              “AI for a Sustainable Future: The Role of Z Generation in the Digital Era”
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg">
              IT Workshop ini menjembatani antara potensi Generasi Z dan kekuatan AI untuk menciptakan masa depan yang berkelanjutan. Peserta akan dibekali wawasan dan alat untuk mentransformasi ide-ide inovatif menjadi solusi lingkungan yang nyata dan terukur di era digital.
            </p>
               <div className="flex gap-3">
                 <Button title="DAFTAR IT WORKSHOP" variant="primary" />
               </div>
          </div>

          {/* IMAGE */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img
              src="https://www.invofest-harkatnegeri.com/assets/Maskot-Workshop.png"
              className="w-full max-w-[600px] object-contain"
            />
          </div>

        </section>

        
        {/* TENTANG */}
        <section className="bg-[#FFEDF3] py-20">
                <div className="max-w-7xl mx-auto px-8">

            <h1 className="text-4xl md:text-5xl font-bold text-red-900 mb-6">
              Tentang IT Workshop
            </h1>

            <p className="text-gray-700 text-lg leading-relaxed mb-12">
              Workshop “AI for a Sustainable Future: The Role of Z Generation in the Digital Era” ini didesain khusus untuk Generasi Z, para digital natives yang berada di persimpangan antara inovasi teknologi dan tantangan keberlanjutan global. Peserta akan diajak untuk menyelami bagaimana Kecerdasan Buatan (AI) bukan hanya sekadar teknologi canggih, tetapi juga alat yang ampuh untuk menciptakan solusi nyata bagi isu-isu lingkungan. Melalui sesi inspiratif, pengenalan konsep, dan praktik langsung (hands-on), workshop ini bertujuan memberdayakan Gen Z untuk menjadi agen perubahan di era digital, menggunakan keahlian mereka untuk masa depan bumi yang lebih baik.
            </p>

          </div>
        </section>


      </main>
      {/* SPEAKER */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Temui Pembicara Khusus Kami
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {speakers.map((item, index) => (
            <SpeakerCard key={index} {...item} />
          ))}
        </div>
      </section>
      
      <section className="py-16 mt-10">

        <h1 className="text-4xl md:text-5xl font-bold text-red-900 mb-12 text-center">
          Pelaksanaan IT Workshop
        </h1>

        <div className="grid md:grid-cols-2 gap-10 px-6 md:px-20">

          {workshopItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 flex items-center gap-6 border-r-4 border-red-900 shadow-[5px_5px_0px_rgba(128,0,32,0.5)]"
            >

              {/* ICON */}
              <div className="bg-red-900 text-white p-6 rounded-xl">
                {getIcon(item.icon)}
              </div>

              {/* TEXT */}
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  {item.title}
                </h3>

                <div className="text-gray-600 mt-2 space-y-1 text-sm">

                  <div className="flex items-center gap-2">
                    <CalendarDays size={16} /> {item.date}
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock size={16} /> {item.time}
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin size={16} /> {item.location}
                  </div>

                </div>
              </div>

            </div>
          ))}

        </div>

      </section>


      <Footer />
    </div>
  );
};

export default Workshop;