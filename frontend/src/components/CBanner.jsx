import logo from "../assets/Logo.png";
import banner from "../assets/banner (1).jpg";
import "../styles/c1.css";
export default function Home() {

{/* OUTER MAIN FRAME */}
      <div className="w-full flex justify-center mt-6 px-6">
        <div className="w-full max-w-6xl border-8 border-gray-800 rounded-2xl shadow-2xl overflow-hidden bg-white">

          {/* INNER FLEX CONTAINER */}
          <div className="flex flex-row w-full h-[450px]">

            {/* LEFT CONTAINER - smaller */}
            <div className="left-section">
              <div className="left-gradient">          {/* gradient wrapper */}
                <img src={logo} alt="Seva Sai Logo" className="logo-img" />
              </div>
            </div>

            {/* RIGHT CONTAINER - larger */}
            <div className="w-[65%] flex justify-center items-center bg-white">
              <img
                src={banner}
                alt="Seva Sai Banner"
                className="banner-img"
              />
            </div>

          </div>
        </div>
      </div>
}