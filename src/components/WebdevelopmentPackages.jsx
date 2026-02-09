import { FaCheck, FaStar, FaCrown, FaGem } from "react-icons/fa";

export default function WebdevelopmentPackages() {
  const packages = [
    {
      name: "Basic",
      price: "25,000",
      desc: "Perfect for small businesses",
      icon: FaStar,
      img: "/basic.jpeg",
      features: [
        "Single Branch Focus",
        "Essential POS",
        "Real-time Stock Tracking",
        "Daily Sales Summary",
        "Low Entry Cost",
        "6 months support",
        "Digital Invoicing",
      ],
      btn: "Choose Basic",
      popular: false,
    },
    {
      name: "Professional",
      price: "50,000",
      desc: "Great for growing businesses",
      icon: FaCrown,
      img: "/profession.jpeg",
      features: [
        "Multi-Branch Sync",
        "Advanced Inventory",
        "Loyalty Engine",
        "Excel/CSV Exports",
        "Digital Invoicing",
        "Priority Response",
        "Google Analytics",
        "Live chat integration",
      ],
      btn: "Choose Professional",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "100,000",
      desc: "Best for large businesses",
      icon: FaGem,
      img: "/enterprise.jpeg",
      features: [
        "Unlimited Expansion",
        "Full White-Labeling",
        "Loyalty Engine",
        "Priority Response",
        "Daily Sales Summary",
        "Commission Management",
        "Live chat integration",
      ],
      btn: "Choose Enterprise",
      popular: false,
    },
  ];

  return (
    <section className="bg-white mb-4 px-4">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[#4C4480] mb-3">
          Chose Your Plan
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {packages.map((p, i) => (
          <div
            key={i}
            className={`relative rounded-[32px] p-8 border
              ${
                p.popular
                  ? "border-[#0FC8CA] shadow-2xl md:-mt-6"
                  : "border-gray-200 shadow-lg"
              }
              bg-white flex flex-col items-center text-center`}
          >
            {/* Popular badge */}
            {p.popular && (
              <span className="absolute top-4 right-4 bg-[#0FC8CA]/20 text-[#0FC8CA] text-xs font-bold px-4 py-1 rounded-full">
                MOST POPULAR
              </span>
            )}

            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <img src={p.img} alt="" />
              <p.icon className="text-[#0FC8CA] text-3xl" />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-[#4C4480] mb-2">{p.name}</h3>

            {/* Price */}
            <div className="flex items-baseline mb-1">
              <span className="text-sm mr-1 text-gray-500">PKR</span>
              <span className="text-4xl font-bold text-[#4C4480]">
                {p.price}
              </span>
            </div>

            <p className="text-gray-500 mb-6">{p.desc}</p>

            <div className="w-full h-[1.5px] bg-[#0FC8CA]/40 mb-6" />

            {/* Features */}

            <ul className="space-y-4 mb-8 w-full flex flex-col items-center">
              {p.features.map((f, idx) => (
                <li
                  key={idx}
                  className="grid grid-cols-[20px_1fr] gap-3 text-gray-600 items-start w-[210px]"
                >
                  {/* Check Image */}
                  <span className="w-6 flex justify-center mt-[2px]">
                    <FaCheck className="text-[#0FC8CA]" />
                  </span>

                  {/* Text */}
                  <span className="leading-snug text-left">{f}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <button
              className={`w-full py-3 rounded-xl font-semibold transition
                ${
                  p.popular
                    ? "bg-[#0FC8CA] text-white hover:bg-[#0bb1b3]"
                    : "bg-[#0FC8CA] text-white hover:bg-[#0bb1b3]"
                }`}
            >
              {p.btn}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
