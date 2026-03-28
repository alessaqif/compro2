import { useEffect, useState } from "react"
import Navbar from "../../navbar"

type User = {
  name: { first: string; last: string }
  picture: { large: string }
}

export default function AboutPage() {
  const [team, setTeam] = useState<User[]>([])

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then(res => res.json())
      .then(data => setTeam(data.results))
  }, [])

  const roles = [
    "CEO",
    "Operations Manager",
    "Tech Manager",
    "Design Lead",
    "Marketing Lead",
    "Frontend Lead",
    "Backend Lead",
    "UI Developer",
    "API Developer",
    "QA Engineer"
  ]

  if (team.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-lg">
        Loading team...
      </div>
    )
  }

  return (
    <>
    <Navbar/>
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="text-center py-20 px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">
          About Our Company
        </h1>
        <p className="text-gray-400 leading-relaxed">
          Perusahaan multinasional asal Jepang yang bergerak di bidang manufaktur kendaraan bermotor,
          khususnya sepeda motor, serta berbagai solusi mobilitas modern. Dengan fokus pada inovasi,
          performa, dan desain, Yamaha terus menghadirkan pengalaman berkendara yang luar biasa
          bagi pelanggan di seluruh dunia.
        </p>
      </section>

      {/* COMPANY STORY */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-semibold mb-6">Our Journey</h2>
        <p className="text-gray-400 leading-relaxed">
          Sejak berdiri pada tahun 1955 di Jepang, Yamaha Motor telah berkembang menjadi salah satu
          produsen sepeda motor terbesar di dunia. Dengan berbagai lini produk mulai dari matic,
          sport hingga off-road, Yamaha dikenal akan kualitas, performa, serta desain yang modern.
          <br /><br />
          Kami terus mengembangkan teknologi terbaru untuk meningkatkan kenyamanan, keamanan,
          dan efisiensi kendaraan, serta berkomitmen menghadirkan solusi mobilitas yang
          ramah lingkungan untuk masa depan.
        </p>
      </section>

      {/* TEAM */}
      {/* TEAM TREE */}
<section className="bg-gray-950 py-20 px-6">
  <h2 className="text-3xl font-bold text-center mb-16">
    Organization Structure
  </h2>

  <div className="flex flex-col items-center gap-16">

    {/* CEO */}
    <div className="flex flex-col items-center">
      <img
        src={team[0].picture.large}
        className="w-24 h-24 rounded-full border-4 border-blue-500 mb-3"
      />
      <p className="font-semibold">
        {team[0].name.first} {team[0].name.last}
      </p>
      <p className="text-blue-400 text-sm">{roles[0]}</p>
    </div>

    {/* Managers */}
    <div className="flex flex-col md:flex-row gap-16 items-center">
      {[1, 2].map((i) => (
        <div key={i} className="flex flex-col items-center">
          <img
            src={team[i].picture.large}
            className="w-20 h-20 rounded-full border-2 border-white/20 mb-2"
          />
          <p className="text-sm font-medium">
            {team[i].name.first} {team[i].name.last}
          </p>
          <p className="text-xs text-blue-400">{roles[i]}</p>
        </div>
      ))}
    </div>

    {/* Leads */}
    <div className="flex flex-wrap justify-center gap-12">
      {[3, 4, 5, 6].map((i) => (
        <div key={i} className="flex flex-col items-center">
          <img
            src={team[i].picture.large}
            className="w-16 h-16 rounded-full border border-white/20 mb-2"
          />
          <p className="text-sm">
            {team[i].name.first} {team[i].name.last}
          </p>
          <p className="text-xs text-blue-400">{roles[i]}</p>
        </div>
      ))}
    </div>

    {/* Developers */}
    <div className="flex flex-wrap justify-center gap-10">
      {[7, 8, 9].map((i) => (
        <div key={i} className="flex flex-col items-center">
          <img
            src={team[i].picture.large}
            className="w-14 h-14 rounded-full border border-white/20 mb-2"
          />
          <p className="text-xs">
            {team[i].name.first}
          </p>
          <p className="text-[10px] text-blue-400">{roles[i]}</p>
        </div>
      ))}
    </div>

  </div>
</section>

      {/* CULTURE */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-6">Our Culture</h2>
        <p className="text-gray-400 leading-relaxed">
          Budaya perusahaan Yamaha berlandaskan filosofi Jepang yang disebut <span className="text-blue-400 font-semibold">Kando</span>,
          yaitu menciptakan pengalaman yang mendalam dan berkesan bagi setiap pelanggan.
          <br /><br />
          Kami percaya bahwa inovasi lahir dari kolaborasi, kreativitas, dan keberanian untuk
          mencoba hal baru. Setiap tim bekerja dengan profesionalisme tinggi, integritas,
          dan tanggung jawab penuh terhadap kualitas produk.
          <br /><br />
          Selain itu, Yamaha juga berkomitmen terhadap keberlanjutan lingkungan dengan terus
          mengembangkan teknologi yang efisien dan ramah lingkungan.
        </p>
      </section>

    </main>
    </>
  )
}