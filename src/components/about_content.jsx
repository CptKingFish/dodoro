import {
  CloudArrowUpIcon,
  FireIcon,
  HandRaisedIcon,
  LockClosedIcon,
  MoonIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

import { LangContext } from "@/pages/_app";
import { useContext } from "react";

export default function AboutContent() {
  const { lang } = useContext(LangContext);
  return (
    <div className="relative bg-white mt-24">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <img
              className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
              src="all.png "
              alt=""
            />
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
            <p className="text-base font-semibold leading-7 text-yellow-400">
              {lang.name !== "Bahasa" ? <>About us</> : <>Tentang kami</>}
            </p>
            <span className="mt-2 text-3xl font-bold tracking-tight text-yellow-900">
              {lang.name !== "Bahasa" ? <>Who are we?</> : <>Siapa kita?</>}
            </span>
            <p className="mt-6 text-lg leading-8 text-gray-700">
              {lang.name !== "Bahasa" ? (
                <>
                  We are a tight-knit team of five with a heartfelt mission: to
                  uplift and empower vulnerable small home-based businesses.
                  Through the support of dedicated volunteers, strategic
                  collaborations with companies, and fundraising efforts, we aim
                  to provide these business owners with the resources and
                  opportunities they need to lead better lives.
                </>
              ) : (
                <>
                  Kami adalah tim erat beranggotakan lima orang dengan misi
                  sepenuh hati: untuk mengangkat dan memberdayakan usaha kecil
                  berbasis rumahan yang rentan. Melalui dukungan relawan yang
                  berdedikasi, kolaborasi strategis dengan perusahaan, dan upaya
                  penggalangan dana, kami bertujuan untuk menyediakannya pemilik
                  bisnis dengan sumber daya dan peluang yang mereka perlukan
                  untuk menjalani kehidupan yang lebih baik.
                </>
              )}
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-700">
              {lang.name !== "Bahasa" ? (
                <>
                  Join us in making a positive impact on the backbone of our
                  communities
                </>
              ) : (
                <>
                  Bergabunglah bersama kami dalam memberikan dampak positif pada
                  tulang punggung komunitas kami
                </>
              )}
            </p>
            <div className="mt-10 max-w-xl leading-7 text-gray-700 lg:max-w-none text-lg">
              <h2 className="mt-16 text-3xl font-bold tracking-tight text-yellow-900">
                {lang.name !== "Bahasa" ? <>Our Mission</> : <>Misi kita</>}
              </h2>
              <p className="mt-6">
                {lang.name !== "Bahasa" ? (
                  <>
                    Our mission is to be a beacon of hope and support for
                    vulnerable small home-based businesses. We are dedicated to
                    fostering their growth, resilience, and prosperity by
                    mobilizing volunteers, forging strategic partnerships with
                    companies, and raising funds.
                  </>
                ) : (
                  <>
                    Misi kami adalah menjadi mercusuar harapan dan dukungan bagi
                    kelompok rentan usaha kecil berbasis rumahan. Kami
                    berdedikasi untuk membina mereka pertumbuhan, ketahanan, dan
                    kesejahteraan dengan memobilisasi sukarelawan, menjalin
                    kemitraan strategis dengan perusahaan, dan meningkatkan
                    dana.
                  </>
                )}
              </p>
              <p className="mt-6">
                {lang.name !== "Bahasa" ? (
                  <>
                    Through our collective efforts, we aspire to create a
                    brighter and more sustainable future for these
                    entrepreneurs, enabling them to lead fulfilling lives while
                    enriching their communities.
                  </>
                ) : (
                  <>
                    Melalui upaya kolektif kami, kami bercita-cita untuk
                    menciptakan masa depan yang lebih cerah dan lebih
                    berkelanjutan untuk hal ini wirausahawan, memungkinkan
                    mereka menjalani kehidupan yang memuaskan sekaligus
                    memperkaya komunitas mereka.
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
