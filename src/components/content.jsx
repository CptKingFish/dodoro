import { LangContext } from "@/pages/_app";
import { useContext } from "react";

export default function Content() {
  const { lang } = useContext(LangContext);
  return (
    <div className="mt-32 overflow-hidden sm:mt-40 mb-10">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-3xl font-bold tracking-tight text-yellow-600 sm:text-4xl">
              {lang.name !== "Bahasa" ? (
                <>What are we doing?</>
              ) : (
                <>Apa yang kita lakukan?</>
              )}
            </h2>
            <p className="mt-6 leading-8 text-gray-600">
              {lang.name !== "Bahasa" ? (
                <>
                  We are a tight-knit team of five with a heartfelt mission: to
                  uplift and empower vulnerable small home-based businesses.
                </>
              ) : (
                <>
                  Kami adalah tim erat beranggotakan lima orang dengan misi
                  sepenuh hati: untuk mengangkat dan memberdayakan usaha kecil
                  berbasis rumahan yang rentan.
                </>
              )}
            </p>
            <p className="mt-6 leading-7 text-gray-600">
              {lang.name !== "Bahasa" ? (
                <>
                  Through the support of dedicated volunteers, strategic
                  collaborations with companies, and fundraising efforts, we aim
                  to provide these business owners with the resources and
                  opportunities they need to lead better lives. Join us in
                  making a positive impact on the backbone of our communities.
                </>
              ) : (
                <>
                  Melalui dukungan relawan yang berdedikasi, kolaborasi
                  strategis dengan perusahaan, dan upaya penggalangan dana, kami
                  bertujuan untuk menyediakan sumber daya dan peluang yang
                  dibutuhkan para pemilik bisnis ini untuk menjalani kehidupan
                  yang lebih baik. Bergabunglah bersama kami dalam memberikan
                  dampak positif pada tulang punggung komunitas kami.
                </>
              )}
            </p>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <img
                src="us_1.jpg"
                alt=""
                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
              />
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <img
                  src="us_2.jpg"
                  alt=""
                  className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <img
                  src="us_3.jpg"
                  alt=""
                  className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <img
                  src="us_4.jpg"
                  alt=""
                  className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
