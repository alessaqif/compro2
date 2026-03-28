import Navbar from "../navbar";

export default function HomePage() {
  return (
    <main className="font-sans text-white">

      <Navbar/>

      {/* Hero Section */}
<section className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden">
  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover z-0"
  >
    <source src="/bgimage2.webm" type="video/webm" />
    Your browser does not support the video tag.
  </video>

  {/* Dark Overlay agar teks terbaca */}
<div className="absolute inset-0 bg-black/60 z-10"></div>

{/* Content */}
<div className="relative z-20 max-w-3xl text-white">
  <h2 className="text-5xl text-white font-bold leading-tight mb-6">
    Yamaha Motorcycles
  </h2>

  <p className="text-lg mb-8">
 Mengungkapkan keinginan Yamaha untuk membawa KANDO kepada pelanggan dan “menggeber hati mereka” melalui banyak produk inovatif dan KANDO Creating yang kita lakukan
  </p>
</div>
</section>

      {/* Company Overview */}
      <section className="py-24 px-10 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-black">Company Overview</h2>
            <p className="text-black leading-relaxed">
              Perusahaan global yang bergerak di bidang manufaktur sepeda motor dan produk mobilitas.
              Dikenal dengan inovasi teknologi, kualitas tinggi, dan desain yang dinamis,
              Yamaha terus menghadirkan produk yang memberikan pengalaman berkendara
              yang andal dan menyenangkan bagi masyarakat di seluruh dunia.
            </p>
          </div>
          <div className="relative h-64 rounded-3xl overflow-hidden shadow-xl">
            <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover z-0"
  >
    <source src="/bgimage3.webm" type="video/webm" />
    Your browser does not support the video tag.
  </video>
            <img
              src="/company1.webp"
              alt="Team Meeting"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Products */}
        <section className="bg-gray-200 py-10">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Title */}
        <h2 className="text-lg font-bold uppercase mb-6 relative text-black">
          KENAPA HARUS YAMAHA?
          <span className="block w-10 h-1 bg-red-600 mt-2"></span>
        </h2>
        {/* Item 1 */}
        <div className="flex gap-6 mb-8 items-start">
           <video
    autoPlay
    loop
    muted
    playsInline
    className="w-64 h-40 object-cover"
  >
    <source src="/bgimage4.webm" type="video/webm" />
    Your browser does not support the video tag.
  </video>
          <div>
            <h3 className="text-gray-800 text-xl font-semibold leading-snug hover:text-red-600 cursor-pointer">
              Service dan perawatan maksimal dari bengkel resmi
            </h3>
            <p className="text-red-500 text-sm mt-2"></p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex gap-6 mb-8 items-start">
                     <video
    autoPlay
    loop
    muted
    playsInline
    className="w-64 h-40 object-cover"
  >
    <source src="/bgimage5.webm" type="video/webm" />
    Your browser does not support the video tag.
  </video>
          <div>
            <h3 className="text-gray-800 text-xl font-semibold leading-snug hover:text-red-600 cursor-pointer">
              Pengechekan dengan rutin dari ahli agar tidak terjadinya error
            </h3>
            <p className="text-red-500 text-sm mt-2"></p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex gap-6 mb-8 items-start">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="w-64 h-40 object-cover"
  >
    <source src="/bgimage6.webm" type="video/webm" />
    Your browser does not support the video tag.
  </video>
          <div>
            <h3 className="text-gray-800 text-xl font-semibold leading-snug hover:text-red-600 cursor-pointer">
              Menyediakan beberapa type jenis motor yang khas
            </h3>
            <p className="text-red-500 text-sm mt-2"></p>
          </div>
        </div>

      
      <div className="flex gap-6 mb-8 items-start">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="w-64 h-40 object-cover"
  >
    <source src="/bgimage7.webm" type="video/webm" />
    Your browser does not support the video tag.
  </video>
          <div>
            <h3 className="text-gray-800 text-xl font-semibold leading-snug hover:text-red-600 cursor-pointer">
              Terpercaya sejak 70 tahun yang lalu
            </h3>
            <p className="text-red-500 text-sm mt-2"></p>
          </div>
        </div>
</div>
    </section>
      {/* Testimonials */}
      <section className="py-24 px-10 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center !text-black">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray/5 p-8 rounded-2xl border border-black">
            <p className="text-gray-300 text-sm">
              1. ⭐⭐⭐⭐⭐<br />
              Motor dari Yamaha Motor memiliki performa mesin kuat dan desain sporty.
            </p>
          </div>
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <p className="text-gray-300 text-sm">
              2. ⭐⭐⭐⭐☆<br />
              Sangat puas dengan konsumsi bahan bakar irit dan fitur lengkap.
            </p>
          </div>
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <p className="text-gray-300 text-sm">
              3. ⭐⭐⭐⭐⭐<br />
              Pengalaman berkendara nyaman, handling stabil, perawatan mudah.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 text-center py-8 text-gray-400 text-sm">
        "SEMAKIN DI DEPAN"
      </footer>

    </main>
  );
}