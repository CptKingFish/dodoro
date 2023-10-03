import { useContext, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { LangContext } from "@/pages/_app";

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang } = useContext(LangContext);

  return (
    <div className="bg-white">
      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <svg
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <h1 className="text-4xl font-bold tracking-tight text-yellow-900 sm:text-6xl mb-3">
                  Middle,
                </h1>
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  {lang.name !== "Bahasa" ? (
                    <>
                      Connecting <span className="text-yellow-600">Dreams</span>
                      , Building{" "}
                      <span className="text-yellow-600">Futures</span>.
                    </>
                  ) : (
                    <>
                      Menghubungkan{" "}
                      <span className="text-yellow-600">Mimpi</span>, Membangun{" "}
                      <span className="text-yellow-600">Masa Depan</span>.
                    </>
                  )}
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  {lang.name !== "Bahasa" ? (
                    <>
                      Find out how we are working with local institutions and
                      NGOs to make livelihoods easier.
                    </>
                  ) : (
                    <>
                      Cari tahu bagaimana kami bekerja sama dengan institusi
                      lokal dan LSM untuk membuat kehidupan lebih mudah.
                    </>
                  )}
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-yellow-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
                  >
                    {lang.name !== "Bahasa" ? (
                      <>Watch video</>
                    ) : (
                      <>Tonton video</>
                    )}
                  </a>
                  <Link
                    href="/about"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    {lang.name !== "Bahasa" ? (
                      <>Learn more</>
                    ) : (
                      <>Pelajari lagi</>
                    )}
                    <span aria-hidden="true"> →</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src="ibu.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
