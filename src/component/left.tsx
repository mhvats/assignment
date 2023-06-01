import exo from './img/exo.png';
import vector from "./img/Vector.png";
import insta from "./img/insta.png";
import fb from "./img/fb.png";
export const Left: React.FC = () => {
  return (
    <div className="design-container mt-8 mx-auto">
      <div className="flex flex-col mx-4 mt-4">
        <div className="">
          <img src={exo} alt="exo" className="px-2"></img>
        </div>
        <div className="mt-32">
          <div>
            <p className=" white text-4xl">100% Uptime😎</p>
          </div>
          <div>
            <p className=" px-2 text-gray-500">Zero infrastructure</p>
          </div>
          <div>
            <p className=" px-2 text-gray-500">Management</p>
          </div>
        </div>
        {/* bottom */}
        <div className="flex mt-32">
          {/* aesthesia.com */}
          <div className="flex  w-40">
            <img src={vector} alt="web" className="bottom-web mt-2 px-1" />
            <p className="white">aesthesia.com</p>
          </div>
          {/* links */}
          <div className="flex mx-72 w-7 justify-between">
            <div>
              <img src={insta} alt="insta" className="bottom-web mt-2" />
            </div>
            <div>
              <img src={fb} alt="fb" className="bottom-web mt-2" />
            </div>
          </div>
        </div>
        {/* bottom-closed */}
      </div>
    </div>
  );
};
