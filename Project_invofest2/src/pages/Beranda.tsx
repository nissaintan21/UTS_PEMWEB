import Button from "../components/Button";
import { Collapse } from "../components/Collapse";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Beranda() {
const cardItems = [
  {
    title: "IT Competition",
    description: "Kompetisi “From Creation to Innovation” mengajak generasi muda untuk mengembangkan inovasi dan kreativitas guna membentuk kelompok yang memiliki potensi luar biasa, yang mampu mewujudkan masa depan yang berkelanjutan.",
    path: "/competition",
  },
  {
    title: "IT Seminar",
    description: "Seminar nasional ini membahas “Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif” untuk mengembangkan potensi diri dan pengetahuan teknologi lebih dalam lagi.",
    path: "/seminar",
  },
  {
    title: "IT Workshop",
    description: "Workshop 'AI for a Sustainable Future: The Role of Z Generation in the Digital Era' membekali Gen Z dengan keterampilan praktis AI untuk menciptakan solusi berkelanjutan.",
    path: "/workshop",
  },
  {
    title: "IT Talkshow",
    description: "Talkshow “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan” membahas peran manusia dalam memanfaatkan AI untuk solusi berkelanjutan dan peningkatan teknologi.",
    path: "/talkshow",
  },
];

const eventItems = [
   {title: "IT Competition",
    description: "From Creation to Innovation adalah sebuah kompetisi IT yang dirancang untuk menjembatani jurang antara ide kreatif dan inovasi nyata. Ajang ini menantang para talenta digital untuk tidak hanya menciptakan sesuatu yang baru, tetapi juga mengembangkannya menjadi solusi yang berdampak, berkelanjutan, dan bernilai guna tinggi.",
    buttonText: "DAFTAR IT COMPETITION",
    path: "/competition",
    image: "https://www.invofest-harkatnegeri.com/assets/Maskot-Lomba.png",
  },
  {
    title: "IT Seminar",
    description: "Seminar Nasional Teknologi Informasi ini mengangkat tema \"Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif.\"Kami bertujuan untuk menggeser fokus dari ketakutan akan kompetisi menjadi eksplorasi peluang kolaborasi. Seminar ini akan mengupas tuntas bagaimana kita dapat merancang sistem, etika, dan lingkungan kerja di mana AI berfungsi sebagai mitra yang memperkuat kecerdasan, kreativitas, dan produktivitas manusia—bukan sebagai pengganti.",
    buttonText: "DAFTAR IT SEMINAR",
    path: "/seminar",
    image: "https://www.invofest-harkatnegeri.com/assets/Maskot-Seminar.png",
  },
  {
    title: "IT Workshop",
    description:"Workshop AI for a Sustainable Future: The Role of Z Generation in the Digital Era” ini menjembatani antara potensi Generasi Z dan kekuatan AI untuk menciptakan masa depan yang berkelanjutan. Peserta akan dibekali wawasan dan alat untuk mentransformasi ide-ide inovatif menjadi solusi lingkungan yang nyata dan terukur di era digital.",
    buttonText: "DAFTAR IT WORKSHOP",
    path: "/workshop",
    image: "https://www.invofest-harkatnegeri.com/assets/Maskot-Workshop.png",
  },
  {
    title: "IT Talkshow",
    description: "Talkshow berskala nasional: “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan.” Acara ini dirancang bukan untuk membahas teknologi sebagai entitas yang dingin dan terpisah, melainkan untuk menggali bagaimana kita dapat menanamkan nilai-nilai kemanusiaan—seperti empati, etika, dan kreativitas—ke dalam inti pengembangan AI. Kami akan mengupas tuntas visi masa depan di mana AI tidak menjadi pesaing, tetapi menjadi mitra kolaboratif yang memperkuat potensi unik manusia. Talkshow ini bertujuan untuk menginspirasi generasi muda dan para penggiat teknologi untuk tidak hanya menjadi pengguna, tetapi juga menjadi arsitek masa depan digital yang lebih manusiawi. Mari bergabung untuk meningkatkan pengetahuan, mengembangkan potensi diri, dan menjadi bagian dari dialog penting dalam membentuk era kolaborasi manusia dan AI.",
    buttonText: "DAFTAR IT TALKSHOW",
    path: "/talkshow",
    image: "https://www.invofest-harkatnegeri.com/assets/Maskot-Talkshow.png",
  },
];

  const collapseItems = [
    {
      title: "Apa itu Invofest?",
      description: "Invofest (Informatics Vocational Festival) adalah festival tahunan yang diakan oleh program studi sarjana terapan teknik informatika Universitas Harkat Negeri, yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital.",
    },
    {
      title: "Kapan dan di mana Invofest akan diselenggarakan?",
      description: "INVOFEST diselenggarakan mulai tanggal 21 Oktober 2025 sampai dengan tanggal 27 November 2025. Untuk acara workshop, seminar, talkshow diadakan secara Offline di kampus 1 Universitas Harkat Negeri dan kompetisi diadakan secara Online.",
    },
    {
      title: "Siapa saja yang dapat mengikuti Invofest?",
      description: "Invofest terbuka untuk semua kalangan, terutama mahasiswa, pelajar, profesional muda, dan siapa saja yang tertarik dengan teknologi.",
    },
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <main className="w-full pl-0 pr-6">

        <section id="hero" className="py-10 flex flex-col md:flex-row gap-10 justify-between items-center">
          
          <div className="w-full md:w-2/3 flex flex-col gap-6">
            <img
              src="https://www.invofest-harkatnegeri.com/assets/text-image.png"
              alt="Invofest Text"
              className="w-full max-w-sm"
            />
            <p className="text-gray-600 leading-relaxed text-lg">
              Invofest (Informatics Vocational Festival) adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital.
            </p>

            <div className="flex gap-3">
              <Button title="Info Selengkapnya" variant="primary" />
            </div>
          </div>

          <div className="w-full max-w-[350px] h-auto">
            <img
              src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png"
              alt="Mascot"
              className="w-full max-w-[300px] md:max-w-full h-auto"
            />
          </div>
        </section>

        <section className="bg-[#FFEDF3] py-20">
                <div className="max-w-7xl mx-auto px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-red-900 mb-6">
            Tentang INVOFEST
          </h1>
       </div>
    <p className="text-gray-700 text-lg leading-relaxed mb-12">
      Invofest 2025, yang diselenggarakan oleh sarjana terapan Teknik Informatika Universitas Harkat Negeri, adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital. Dengan mengusung tema “Beyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow ”. Invofest 2025 menghadirkan berbagai kegiatan menarik seperti kompetisi IT, workshop IT, dan seminar nasional & talkshow dengan para ahli teknologi.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {cardItems.map((item, index) => (
    <div
      key={index}
      className="bg-white rounded-xl p-6 shadow-md border-l-4 border-red-900 flex flex-col justify-between"
    >
      <div>
        <h3 className="text-xl font-bold text-red-900 mb-3">
          {item.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {item.description}
        </p>
      </div>
      <Link to={item.path}>
  <button className="bg-red-900 text-white px-4 py-2 rounded-lg w-fit">
    INFO SELENGKAPNYA
  </button>
      </Link>
    </div>
  ))}
</div>
</section>
{eventItems.map((item, index) => (
  <section
    key={index}
    className={`py-16 flex flex-col md:flex-row items-center gap-10 ${
      index % 2 === 1 ? "md:flex-row-reverse" : ""
    }`}
  >
    
    {/* TEXT */}
    <div className="w-full md:w-1/2 flex flex-col gap-4">
      <h2 className="text-3xl font-bold text-red-900">
        {item.title}
      </h2>

      <p className="text-gray-600">
        {item.description}
      </p>
    <Link to={item.path}>
            <button className="bg-red-900 text-white px-5 py-2 rounded-lg w-fit">
              {item.buttonText}
            </button>
          </Link>
    </div>

    {/* IMAGE */}
    <div className="w-full md:w-1/2 flex justify-center">
      <img src={item.image} className="max-w-[250px]" />
    </div>

  </section>
))}

        <section className="py-24 flex flex-col gap-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Punya Pertanyaan? Lihat Disini
          </h2>

          {collapseItems.map((item, index) => (
            <Collapse
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </section>

      </main>
        <Footer />
    </div>
  );
}