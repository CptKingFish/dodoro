import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  CheckIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Footer from "@/components/footer";
import Link from "next/link";

import { LangContext } from "@/pages/_app";
import { useContext } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Support() {
  const { lang } = useContext(LangContext);

  return (
    <>
      <div className="bg-white mt-10">
        <main className="pb-14 pt-16 sm:px-6 sm:pb-20 sm:pt-24 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="px-4 sm:px-0">
              <h1 className="text-2xl font-bold tracking-tight text-yellow-900 sm:text-3xl">
                {lang.name !== "Bahasa" ? (
                  <>Be a Supporter</>
                ) : (
                  <>Jadilah Pendukung</>
                )}
              </h1>
              <p className="mt-2 text-sm text-gray-500">
                {lang.name !== "Bahasa" ? (
                  <>
                    Support us by donating to a cause you are passionate about.
                  </>
                ) : (
                  <>Dukung kami dengan berdonasi.</>
                )}
              </p>
            </div>

            <section aria-labelledby="recent-heading" className="mt-16 ">
              <h2 id="recent-heading" className="sr-only">
                {lang.name !== "Bahasa" ? (
                  <>Recent orders</>
                ) : (
                  <>Pesanan terbaru</>
                )}
              </h2>

              <div className="space-y-16 sm:space-y-24">
                <div>
                  <div className="mt-6 flow-root px-4 sm:mt-10 sm:px-0">
                    <div className="-my-6 divide-y divide-gray-200 sm:-my-10">
                      <div className="flex py-6 sm:py-10">
                        <div className="min-w-0 flex-1 lg:flex lg:flex-col">
                          <div className="lg:flex-1">
                            <div className="sm:flex">
                              <div>
                                <h4 className="font-medium text-yellow-900">
                                  {lang.name !== "Bahasa" ? (
                                    <>Support Dodol makers</>
                                  ) : (
                                    <>Dukung pembuat Dodol</>
                                  )}
                                </h4>
                                <p className="mt-2 hidden text-sm text-gray-500 sm:block">
                                  {lang.name !== "Bahasa" ? (
                                    <>
                                      Stand with us in supporting dodol makers.
                                      Your contribution goes a long way in
                                      enhancing their working conditions,
                                      empowering skilled artisans, and
                                      preserving cherished traditions. Join us
                                      today and be a part of this heartwarming
                                      journey to make a sweet and lasting
                                      change.
                                    </>
                                  ) : (
                                    <>
                                      Mari bersama kami mendukung para pembuat
                                      dodol. Kontribusimu sangat membantu dalam
                                      meningkatkan kondisi kerja mereka,
                                      memberdayakan keterampilian pengrajin, dan
                                      melestarikan tradisi. Bergabunglah dengan
                                      kami hari ini dan jadilah bagian dari
                                      perjalanan ini untuk membuat perubahan.
                                    </>
                                  )}
                                </p>
                              </div>
                            </div>
                            <div className="mt-5 flex text-sm font-medium sm:mt-4">
                              <span className="text-yellow-800 ">
                                {lang.name !== "Bahasa" ? (
                                  <>$3621 raised from 47 donors</>
                                ) : (
                                  <>Rp41,032,026 dikumpulkan dari 47 orang</>
                                )}
                              </span>
                              <div className="ml-4 border-l border-gray-200 pl-4 sm:ml-6 sm:pl-6">
                                <span className="text-yellow-800">
                                  {lang.name !== "Bahasa" ? (
                                    <>21 more days</>
                                  ) : (
                                    <>21 hari lagi</>
                                  )}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="mt-6 font-medium">
                            <Link
                              href="/support/dodol"
                              className="text-yellow-950 hover:text-yellow-600"
                            >
                              {lang.name !== "Bahasa" ? (
                                <>Learn More</>
                              ) : (
                                <>Selengkapnya</>
                              )}{" "}
                              →
                            </Link>
                          </div>
                        </div>
                        <div className="ml-4 flex-shrink-0 sm:order-first sm:m-0 sm:mr-6">
                          <img
                            src={"ibu.png"}
                            className="col-start-2 col-end-3 h-20 w-20 rounded-lg object-cover object-center sm:col-start-1 sm:row-span-2 sm:row-start-1 sm:h-40 sm:w-40 lg:h-52 lg:w-52"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative mt-5">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-300" />
                </div>
              </div>
              <div className="space-y-16 sm:space-y-24 mt-10 sm:mt-0">
                <div>
                  <div className="mt-6 flow-root px-4 sm:mt-10 sm:px-0 ">
                    <div className="-my-6 divide-y divide-gray-200 sm:-my-10">
                      <div className="flex py-6 sm:py-10">
                        <div className="min-w-0 flex-1 lg:flex lg:flex-col">
                          <div className="lg:flex-1">
                            <div className="sm:flex">
                              <div>
                                <h4 className="font-medium text-yellow-900">
                                  {lang.name !== "Bahasa" ? (
                                    <>Support rice farmers</>
                                  ) : (
                                    <>Dukung petani</>
                                  )}
                                </h4>
                                <p className="mt-2 hidden text-sm text-gray-500 sm:block">
                                  {lang.name !== "Bahasa" ? (
                                    <>
                                      {" "}
                                      Stand with us in supporting rice farmers.
                                      Your contribution goes a long way in
                                      enhancing their working conditions, and
                                      preserving cherished traditions. Join us
                                      today and be a part of this heartwarming
                                      journey to make a sweet and lasting
                                      change.
                                    </>
                                  ) : (
                                    <>
                                      Mari bersama kami dalam mendukung petani
                                      padi. Bagimu kontribusi sangat membantu
                                      dalam meningkatkan kondisi kerja mereka,
                                      dan pelestarian tradisi yang dijunjung
                                      tinggi. Bergabunglah dengan kami hari ini
                                      dan jadilah bagian dari perjalanan yang
                                      mengharukan ini untuk membuat perubahan.
                                    </>
                                  )}
                                </p>
                              </div>
                            </div>
                            <div className="mt-5 flex text-sm font-medium sm:mt-4">
                              <span className="text-yellow-800 ">
                                {lang.name !== "Bahasa" ? (
                                  <>$1231 raised from 12 donors</>
                                ) : (
                                  <>Rp13,949,097 dikumpulkan dari 12 orang</>
                                )}
                              </span>
                              <div className="ml-4 border-l border-gray-200 pl-4 sm:ml-6 sm:pl-6">
                                <span className="text-yellow-800 ">-</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex space-x-2 mt-5 lg:mt-0">
                            <CheckIcon
                              className="h-6 w-6 flex-none text-green-500"
                              aria-hidden="true"
                            />
                            <p>
                              {lang.name !== "Bahasa" ? (
                                <>Finished</>
                              ) : (
                                <>Selesai pada</>
                              )}

                              <span className="hidden sm:inline">
                                {" "}
                                {lang.name !== "Bahasa" ? (
                                  <>on January 22, 2021 with</>
                                ) : (
                                  <>22 Januari 2021 dengan pengumpulan</>
                                )}{" "}
                                <span className="text-yellow-900 font-bold">
                                  {lang.name !== "Bahasa" ? (
                                    <>$1231</>
                                  ) : (
                                    <>Rp13,949,097.</>
                                  )}
                                </span>{" "}
                                {lang.name !== "Bahasa" ? <> raised.</> : <></>}
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="ml-4 flex-shrink-0 sm:order-first sm:m-0 sm:mr-6">
                          <img
                            src={"rice.jpg"}
                            className="col-start-2 col-end-3 h-20 w-20 rounded-lg object-cover object-center sm:col-start-1 sm:row-span-2 sm:row-start-1 sm:h-40 sm:w-40 lg:h-52 lg:w-52"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
