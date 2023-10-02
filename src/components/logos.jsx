import { LangContext } from "@/pages/_app";
import { useContext } from "react";

export default function Logos() {
  const { lang } = useContext(LangContext);
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <h2 className="text-center text-3xl sm:text-4xl font-bold leading-8 text-yellow-900">
          {lang.name !== "Bahasa" ? (
            <>In collaboration with</>
          ) : (
            <>Bekerja sama dengan</>
          )}
        </h2>
        <div className="flex flex-col sm:grid mx-auto mt-10 max-w-lg grid-cols-3 justify-center items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <img
            className="col-span-2 max-h-28 w-full object-contain lg:col-span-1"
            src="pnup.png"
            alt="Transistor"
            width={158}
            height={100}
          />
          <img
            className="col-span-2 max-h-28 w-full object-contain lg:col-span-1"
            src="ydti.jpg"
            alt="Reform"
            width={158}
            height={100}
          />
          <img
            className="col-span-2 max-h-32 w-full object-contain lg:col-span-1"
            src="kitabisa.jpg"
            alt="Tuple"
            width={158}
            height={48}
          />
        </div>
      </div>
    </div>
  );
}
