import React from "react";
import Image2 from "./speaker.png";
import Image1 from "./gaming.png";
import Image3 from "./smartwatch2-removebg-preview.png";
import Button from "../Shared/Button";
const Category2 = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="py-10 pl-5 bg-gradient-to-br from-brandTeal to-brandTeal/90 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                  SPEAKER
                </p>
                <Button
                  text="Browse"
                  bgcolor={"bg-brandYellow"}
                  textColor={"text-black"}
                />
              </div>
            </div>
            <img src={Image2}
            alt=""
            className="absolute top-2 right-0 w-[200px] h-[200px] object-contain"
            
            />
          </div>

          <div className="py-10 pl-5 bg-gradient-to-br from-brandBlue to-brandBlue/90 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  SmartWatch
                </p>
                <Button
                  text={"Browse"}
                  bgcolor={"bg-white"}
                  textColor={"text-brandYellow"}
                />
              </div>
            </div>
            <img
              src={Image3}
              alt=""
              className="absolute top-0 right-0 w-[180px] h-[200px] object-contain"
            />
          </div>
          
          <div>
          <div className="col-span-2 py-10 pl-5 bg-gradient-to-br from-brandGreen to-brandGreen/90 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="space-y-3 mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  CONSOLE
                </p>
                <Button
                 text={"Browse"}
                  bgcolor={"bg-white"}
                  textColor={"text-primary"}>
                 
                </Button>
              </div>
            </div>
            <img
              src={Image1}
              alt=""
              className=" absolute top-2  right-0 w-[170px] object-contain"
            ></img>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Category2;
