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

export default function Volunteer() {
  const [open, setOpen] = useState(false);
  const { lang } = useContext(LangContext);

  return (
    <>
      <div className="bg-white mt-10">
        <main className="pb-14 pt-16 sm:px-6 sm:pb-20 sm:pt-24 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="px-4 sm:px-0">
              <h1 className="text-2xl font-bold tracking-tight text-yellow-900 sm:text-3xl">
                {lang.name !== "Bahasa" ? (
                  <>Be a Volunteer</>
                ) : (
                  <>Jadilah Relawan</>
                )}
              </h1>
              <p className="mt-2 text-sm text-gray-500">
                {lang.name !== "Bahasa" ? (
                  <>
                    Join a volunteering activity with us and help the community!
                  </>
                ) : (
                  <>
                    Bergabunglah dengan kegiatan sukarela bersama kami dan bantu
                    komunitas!
                  </>
                )}
              </p>
            </div>

            <section aria-labelledby="recent-heading" className="mt-16 ">
              <h2 id="recent-heading" className="sr-only">
                Recent orders
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
                                    <>Helping out at Tanete village</>
                                  ) : (
                                    <>Membantu di desa Tanete</>
                                  )}
                                </h4>
                                <p className="mt-2 hidden text-sm text-gray-500 sm:block">
                                  {lang.name !== "Bahasa" ? (
                                    <>
                                      Join us in the beautiful Tanete Village
                                      for a heartwarming volunteering event.
                                      Together, we&apos;ll partner with local
                                      dodol makers, sharing our skills and
                                      resources to help them enhance their craft
                                      and improve their livelihoods. Your
                                      contribution will make a meaningful,
                                      lasting impact on this close-knit
                                      community.
                                    </>
                                  ) : (
                                    <>
                                      Bergabunglah dengan kami di Desa Tanete
                                      yang indah untuk acara sukarelawan yang
                                      mengharukan. Bersama-sama, kami akan
                                      bermitra dengan pembuat dodol lagi,
                                      berbagi keahlian dan sumber daya untuk
                                      membantu mereka meningkatkan keterampilan
                                      mereka dan meningkatkan penghidupan
                                      mereka. Kontribusimu akan memberikan arti
                                      dan dampak jangka panjang.
                                    </>
                                  )}
                                </p>
                              </div>
                            </div>
                            <div className="mt-5 flex text-sm font-medium sm:mt-4">
                              <span className="text-yellow-800 ">
                                {lang.name !== "Bahasa" ? (
                                  <>Thu, 31 Dec 2023</>
                                ) : (
                                  <>Kam, 31 Des 2023</>
                                )}
                              </span>
                              <div className="ml-4 border-l border-gray-200 pl-4 sm:ml-6 sm:pl-6">
                                <span className="text-yellow-800">
                                  7:30AM - 8:00PM
                                </span>
                              </div>
                              <div className="ml-4 border-l border-gray-200 pl-4 sm:ml-6 sm:pl-6">
                                <span className="text-yellow-800">
                                  Tanete, Maros
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="mt-6 font-medium">
                            <Link
                              href="/volunteer/tanete"
                              className="text-yellow-950 hover:text-yellow-600"
                            >
                              {lang.name !== "Bahasa" ? (
                                <>Learn More</>
                              ) : (
                                <>Lihad slengkapnya</>
                              )}{" "}
                              →
                            </Link>
                          </div>
                        </div>
                        <div className="ml-4 flex-shrink-0 sm:order-first sm:m-0 sm:mr-6">
                          <img
                            src={"us_5.jpg"}
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
                                    <>Clearing trash at Maros Baru</>
                                  ) : (
                                    <>Membersihkan sampah di Maros Baru</>
                                  )}
                                </h4>
                                <p className="mt-2 hidden text-sm text-gray-500 sm:block">
                                  {lang.name !== "Bahasa" ? (
                                    <>
                                      {" "}
                                      Join our volunteer event in picturesque
                                      Maros Baru, where we&apos;ll not only
                                      clear trash but also support local dodol
                                      makers. Let&apos;s preserve the
                                      environment while helping these artisans
                                      create their sweet treats in a cleaner,
                                      more sustainable space. Your participation
                                      makes a meaningful difference.
                                    </>
                                  ) : (
                                    <>
                                      Bergabunglah degan acara sukarelawan kami
                                      di Maros yang indah, tempat kami tidak
                                      hanya membersihkan sampah namun juga
                                      mendukung pembuat dodol lokal. Mari
                                      lestarikan lingkungan selagi membantu para
                                      pengrajin ini membuat dodol mereka di
                                      tempat yang lebih bersih dan ramah
                                      lingkungan. Partisipasi Anda sangat
                                      berarti.
                                    </>
                                  )}
                                </p>
                              </div>
                            </div>
                            <div className="mt-5 flex text-sm font-medium sm:mt-4">
                              <span className="text-yellow-800 ">
                                {lang.name !== "Bahasa" ? (
                                  <>Fri, 22 Jan 2021</>
                                ) : (
                                  <>Jum, 22 Jan 2021</>
                                )}
                              </span>
                              <div className="ml-4 border-l border-gray-200 pl-4 sm:ml-6 sm:pl-6">
                                <span className="text-yellow-800 ">
                                  2:30AM - 5:00PM
                                </span>
                              </div>
                              <div className="ml-4 border-l border-gray-200 pl-4 sm:ml-6 sm:pl-6">
                                <span href="#" className="text-yellow-800">
                                  Malino, Maros
                                </span>
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
                                <>Finished on January 22, 2021</>
                              ) : (
                                <>Selesai pada 22 Januari 2021</>
                              )}
                            </p>
                          </div>
                        </div>
                        <div className="ml-4 flex-shrink-0 sm:order-first sm:m-0 sm:mr-6">
                          <img
                            src={"trash.jpg"}
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
