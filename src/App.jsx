import HeroSlider from "./HeroSlider";
import { Menu } from "lucide-react";

function App() {
  const members = [
    {
      name: "Nzemechi Chioma Chinemerem",
      regNo: "20211277792",
      image: "/assets/speker10.jpeg",
    },
    {
      name: "Chukwudifu Ifeanyichukwu Golden",
      regNo: "20211258722",
      image: "/assets/speker10.jpeg",
    },
    {
      name: "Odu Lucky Chibuike",
      regNo: "20211275872",
      image: "/assets/speker10.jpeg",
    },
    {
      name: "Onyemauche Victor",
      regNo: "20211282432",
      image: "/assets/speker10.jpeg",
    },
    {
      name: "Offorbuike Ekene Collins",
      regNo: "20211290952",
      image: "/assets/speker10.jpeg",
    },
    {
      name: "Obilonu Ifeanyi",
      regNo: "20211282692",
      image: "/assets/speker10.jpeg",
    },
    {
      name: "Odu Praise Ebube",
      regNo: "20211287512",
      image: "/assets/speker10.jpeg",
    },
    {
      name: "Enemuor Chidubem (Leader)",
      regNo: "20211274812",
      image: "/assets/speker10.jpeg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <HeroSlider />
      <HeroSection />
      <MembersGrid members={members} />
      <Footer />
    </div>
  );
}

function NavBar() {
  return (
    <nav className="bg-green-600 shadow-md p-4">
      <div className="max-w-7xl flex justify-between items-center mx-7">
        <h1 className="text-xl font-bold text-black">FUTO2025-GROUP 3</h1>
        <Menu className="text-black w-6 h-6 text-end md:hidden" />
        <div className="hidden md:flex space-x-10 mr-10">
          <a href="#home" className="text-black hover:text-blue-200">
            Home
          </a>
          <a href="#about" className="text-black hover:text-blue-200">
            About
          </a>
          <a href="#contact" className="text-black hover:text-blue-200">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="bg-green-600 text-center py-10 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-white">
        Our Workshop Team
      </h2>
      <p className="text-lg md:text-xl text-black mt-2">
        Meet the amazing Group 3 members who participated in the Cisco Impact
        Summit
      </p>
    </section>
  );
}

function MembersGrid({ members }) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {members.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border-black border-2 shadow-lg overflow-hidden flex flex-col items-center p-4"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full object-cover border-4 border-green-500"
            />
            <h3 className="mt-4 text-lg text-center font-semibold text-gray-800">
              {member.name}
            </h3>
            <p className="text-sm text-center text-gray-900">{member.regNo}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="h-20 p-8 bg-green-600 text-center text-sm text-black">
      <p>@Cisco Impact Summit 2025</p>
    </footer>
  );
}

export default App;
