import { useEffect, useState } from "react";
import Backendless from "backendless";
import Navbar from "../../navbar";
import { useNavigate } from "react-router-dom";

type Catalog = {
  objectId: string;
  vehicle: string;
  vehimage: string;
  price: string;
  deskripsi: string;
  linkveh: string;
  kategoriveh: string;
};

export default function CatalogPage() {
  const [data, setData] = useState<Catalog[]>([]);
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  // 🔥 FETCH DATA
  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = {
          pageSize: 100,
          offset: 0,
        };

        const res = (await Backendless.Data.of("catalog").find(query)) as Catalog[];
        setData(res || []);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  // 🔥 CEK LOGIN
  useEffect(() => {
    const checkLogin = async () => {
      try {
        const valid = await Backendless.UserService.isValidLogin();
        setIsLogin(valid);
      } catch {
        setIsLogin(false);
      }
    };

    checkLogin();
  }, []);

  // 🔥 FILTER
  const matic = data.filter((item) => item.kategoriveh === "matic");
  const sport = data.filter((item) => item.kategoriveh === "sport");
  const offroad = data.filter((item) => item.kategoriveh === "offroad");

  // 🔥 COMPONENT CARD
  const renderSection = (title: string, items: Catalog[]) => (
    <div className="mb-16">
      <h3 className="text-2xl font-bold mb-6">{title}</h3>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
        {items.map((item) => (
          <div
            key={item.objectId}
            className="group text-center bg-white rounded-xl p-4 shadow-sm hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
          >
            <div className="overflow-hidden rounded-lg">
              <img
                src={item.vehimage}
                alt={item.vehicle}
                className="w-full h-50 object-contain mb-4 transition duration-500 group-hover:scale-110"
              />
            </div>

            <h3 className="font-bold text-lg mb-3 uppercase group-hover:text-blue-600 transition">
              {item.vehicle}
            </h3>

            <a
              href={item.linkveh}
              target="_blank"
              className="inline-block bg-gray-200 px-5 py-2 rounded-md shadow transition 
              group-hover:bg-blue-600 group-hover:text-white mb-4"
            >
              Mulai dari
            </a>

            <p className="font-bold text-lg">{item.price}</p>
            <p className="text-xs text-gray-500 mt-1">
              *Harga OTR (Estimasi)
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <Navbar />

      <section className="pt-24">
        <div className="max-w-7xl mx-auto px-6">

          {/* 🔥 HEADER + BUTTON */}
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">
              Our Products
            </h2>

            {/* ✅ BUTTON CREATE (HANYA JIKA LOGIN) */}
            {isLogin && (
              <button
                onClick={() => navigate("/createcatalog")}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                + Create Catalog
              </button>
            )}
          </div>

          {/* 🔥 PER KATEGORI */}
          {renderSection("Matic", matic)}
          {renderSection("Sport", sport)}
          {renderSection("Offroad", offroad)}

        </div>
      </section>
    </>
  );
}