import { useState } from "react";
import {
  CheckIcon,
  QuestionMarkCircleIcon,
  StarIcon,
  UserIcon,
  UsersIcon,
} from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";
import VolunteerInfo from "@/components/volunteer_info";
import Footer from "@/components/footer";
import BlogCardsSm from "@/components/blog_cards_sm";

import { LangContext } from "@/pages/_app";
import { useContext } from "react";
import {
  CalendarDaysIcon,
  CreditCardIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";
import { ClockIcon, MapPinIcon } from "@heroicons/react/24/outline";
import YouTubePlayer from "@/components/YoutubePlayer";

const reviews = { average: 4, totalCount: 1624 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const product = {
  name: "Helping out at Tanete village",
  href: "#",
  price: "$220",
  description:
    "Don't compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.",
  imageSrc: "civil.jpg",
  imageAlt:
    "Model wearing light green backpack with black canvas straps and front zipper pouch.",
  breadcrumbs: [],
  sizes: [
    {
      name: "18L",
      description: "Perfect for a reasonable amount of snacks.",
    },
    {
      name: "20L",
      description: "Enough room for a serious amount of snacks.",
    },
  ],
};

export default function VolunteerCivil() {
  const { lang } = useContext(LangContext);

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-12 pt-24 sm:px-6 sm:py-18 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          {/* Product details */}
          <div className="lg:max-w-lg lg:self-start mt-4  ">
            <nav aria-label="Breadcrumb">
              <ol role="list" className="flex items-center space-x-2">
                {product.breadcrumbs.map((breadcrumb, breadcrumbIdx) => (
                  <li key={breadcrumb.id}>
                    <div className="flex items-center text-sm">
                      <a
                        href={breadcrumb.href}
                        className="font-medium text-gray-500 hover:text-gray-900"
                      >
                        {breadcrumb.name}
                      </a>
                      {breadcrumbIdx !== product.breadcrumbs.length - 1 ? (
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="ml-2 h-5 w-5 flex-shrink-0 text-gray-300"
                        >
                          <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                        </svg>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="mt-4">
              <h1 className="text-3xl font-bold tracking-tight text-yellow-900 sm:text-4xl">
                {lang.name !== "Bahasa" ? (
                  <>Creating a better environment for Dodol makers</>
                ) : (
                  <>
                    Menciptakan lingkungan yang lebih baik bagi para pembuat
                    dodol
                  </>
                )}
              </h1>
            </div>

            <section aria-labelledby="information-heading" className="mt-4">
              <h2 id="information-heading" className="sr-only">
                Product information
              </h2>

              <div className="mt-12 border-gray-200 ">
                <div className="lg:col-start-3 lg:row-end-1">
                  <h2 className="sr-only">Summary</h2>
                  <div className="rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5">
                    <dl className="flex flex-wrap">
                      <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                        <dt className="flex-none">
                          <span className="sr-only">Due date</span>
                          <CalendarDaysIcon
                            className="h-6 w-5  text-yellow-700"
                            aria-hidden="true"
                          />
                        </dt>
                        <dd className="leading-6 font-semibold">
                          <time dateTime="2023-01-31">
                            {lang.name !== "Bahasa" ? (
                              <>October 16, 2023</>
                            ) : (
                              <>16 Oktober 2023</>
                            )}
                          </time>
                        </dd>
                      </div>
                      <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                        <dt className="flex-none">
                          <span className="sr-only">Status</span>
                          <ClockIcon
                            className="h-6 w-5 text-yellow-700"
                            aria-hidden="true"
                          />
                        </dt>
                        <dd className="leading-6 font-semibold">
                          6:00AM - 6:00PM
                        </dd>
                      </div>
                      <div className="mt-4 mb-4 flex w-full flex-none gap-x-4 px-6">
                        <dt className="flex-none">
                          <span className="sr-only">Status</span>
                          <MapPinIcon
                            className="h-6 w-5 text-yellow-700"
                            aria-hidden="true"
                          />
                        </dt>
                        <dd className="leading-6 font-semibold">
                          PNUP, Makassar
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>

              {/* <div className="mt-4 space-y-6">
              <p className="text-base text-gray-500">{product.description}</p>
            </div> */}

              <div className="mt-10 border-t border-gray-200 pt-10 space-y-6">
                <h3 className="text-xl font-medium text-gray-900">
                  {lang.name !== "Bahasa" ? (
                    <>About this event</>
                  ) : (
                    <>Tentang acara ini</>
                  )}
                </h3>
                <p className="mt-4 text-lg text-gray-800">
                  {lang.name !== "Bahasa" ? (
                    <>
                      Calling all civil engineering and design students! Join us
                      at PNUP for a volunteering event that focuses on improving
                      the working environment for Dodol makers in Tanete
                      village. Your expertise will make a significant impact as
                      we work together to create safer and more comfortable
                      spaces for these local artisans. Help us empower the Dodol
                      makers and build a brighter future for Tanete village.
                    </>
                  ) : (
                    <>
                      Memanggil semua mahasiswa teknik sipil dan desain!
                      Bergabunglah dengan kami di PNUP untuk acara sukarela yang
                      berfokus pada peningkatan lingkungan kerja bagi para
                      pembuat dodol di desa Tanete. Keahlian Anda akan
                      memberikan dampak yang signifikan saat kita bekerja sama
                      untuk menciptakan ruang yang lebih aman dan nyaman bagi
                      para pengrajin lokal ini. Bantu kami memberdayakan para
                      pembuat dodol dan membangun masa depan yang lebih cerah
                      untuk desa Tanete.
                    </>
                  )}
                </p>
                <div className="mt-4 text-lg text-gray-800">
                  {lang.name !== "Bahasa" ? (
                    <>
                      <span className="font-semibold">How you can help</span>
                      <ul className="list-disc mt-2">
                        <li>
                          Evaluate and redesign workspaces for optimal safety
                          and efficiency for Dodol makers.
                        </li>
                        <li>
                          Apply civil engineering knowledge to enhance
                          structural integrity and functionality of artisan
                          spaces.
                        </li>
                        <li>
                          Collaborate with local artisans to understand their
                          specific needs and incorporate design solutions.
                        </li>
                        <li>
                          Implement design improvements to provide more
                          comfortable and ergonomic working conditions for the
                          Dodol makers.
                        </li>
                      </ul>
                    </>
                  ) : (
                    <>
                      <>
                        <span className="font-semibold">
                          Bagaimana Anda dapat membantu
                        </span>
                        <ul className="list-disc mt-2">
                          <li>
                            Mengevaluasi dan mendesain ulang ruang kerja untuk
                            keselamatan yang optimal dan efisiensi bagi pembuat
                            dodol.
                          </li>
                          <li>
                            Menerapkan pengetahuan teknik sipil untuk
                            meningkatkan integritas struktural dan
                            fungsionalitas pengrajin ruang.
                          </li>
                          <li>
                            Berkolaborasi dengan pengrajin lokal untuk memahami
                            kebutuhan spesifik mereka dan menggabungkan solusi
                            desain.
                          </li>
                          <li>
                            Menerapkan peningkatan desain untuk menyediakan
                            lebih banyak kondisi kerja yang lebih nyaman dan
                            ergonomis bagi para Pembuat dodol.
                          </li>
                        </ul>
                      </>
                    </>
                  )}
                </div>
              </div>
            </section>

            <div className="w-full mt-5 inline-flex items-center rounded-md bg-yellow-50 px-2 py-5 text-md font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
              <UsersIcon className="w-10 h-10 mr-5" />
              {lang.name !== "Bahasa" ? (
                <>16 volunteers have signed up.</>
              ) : (
                <>16 relawan telah mendaftar.</>
              )}
            </div>
            {/* <div className="mt-10 pt-10">
              <YouTubePlayer videoId={"fjM0wD3y9Bw"} />
            </div> */}
          </div>

          {/* Product image */}
          <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
              <img
                src={"/civil.jpg"}
                alt={product.imageAlt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="overflow-hidden rounded-lg mt-5">
              <img
                src={"/poster.jpg"}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="hidden lg:block mt-8">
              <BlogCardsSm />
            </div>
          </div>

          {/* Product form */}
          <div className="mt-10 sm:mt-12 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start lg:-mt-[400px]">
            <section aria-labelledby="options-heading">
              <h2 id="options-heading" className="sr-only">
                Product options
              </h2>

              <form>
                <div className="flex">
                  {/* Size selector */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-gray-700 mr-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                    />
                  </svg>
                  <span className="text-gray-700">
                    {lang.name !== "Bahasa" ? (
                      <>Sign up before 15 Oct 2023, 00:00 AM</>
                    ) : (
                      <>Daftar sebelum 15 Oct 2023, 00:00</>
                    )}
                  </span>
                </div>

                <div className="mt-10">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-yellow-800 px-8 py-3 text-base font-medium text-white hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                  >
                    {lang.name !== "Bahasa" ? (
                      <>Volunteer Now</>
                    ) : (
                      <>Relawan Sekarang</>
                    )}
                  </button>
                </div>
                <div className="block lg:hidden mt-8">
                  <BlogCardsSm />
                </div>
                <div className="mt-10 border-t border-gray-200 pt-10">
                  <h3 className="text-sm font-medium text-gray-900">Share</h3>
                  <ul role="list" className="mt-4 flex items-center space-x-6">
                    <li>
                      <a
                        href="#"
                        className="flex h-6 w-6 items-center justify-center text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">Share on Facebook</span>
                        <svg
                          className="h-5 w-5"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex h-6 w-6 items-center justify-center text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">Share on Instagram</span>
                        <svg
                          className="h-6 w-6"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex h-6 w-6 items-center justify-center text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">Share on Twitter</span>
                        <svg
                          className="h-5 w-5"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
