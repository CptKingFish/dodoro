import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

import { Dialog } from "@headlessui/react";
import { useState } from "react";
import Link from "next/link";
import LanguageToggle from "./language_toggle";

import { LangContext } from "@/pages/_app";
import { useContext } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const navigation = [
  { name: "Home", nameb: "Beranda", href: "/" },
  { name: "About", nameb: "Info", href: "/about" },
  { name: "Support", nameb: "Bantuan", href: "/support" },
  { name: "Volunteer", nameb: "Sukarelawan", href: "/volunteer" },
  { name: "Contact", nameb: "Kontak", href: "/contact" },
];

export default function Navbar() {
  const { lang } = useContext(LangContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl">
        <div className="px-6 pt-6 lg:max-w-2xl lg:pl-8 lg:pr-0">
          <nav
            className="flex items-center justify-between lg:justify-start"
            aria-label="Global"
          >
            <Link href="/">
              <span className="sr-only">Your Company</span>
              <img
                alt="Your Company"
                className="h-12 w-12 w-auto"
                src="/medium.jpg"
              />
            </Link>

            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 lg:hidden"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="hidden lg:ml-12 lg:flex lg:gap-x-14">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  {lang.name !== "Bahasa" ? (
                    <>{item.name}</>
                  ) : (
                    <>{item.nameb}</>
                  )}
                </Link>
              ))}
            </div>
            <div className="absolute right-10 hidden lg:block">
              <LanguageToggle />
            </div>
          </nav>
        </div>
      </div>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/">
              <span className="sr-only">Your Company</span>
              <img
                alt="Your Company"
                className="h-12 w-12 w-auto"
                src="/medium.jpg"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {lang.name !== "Bahasa" ? (
                      <>{item.name}</>
                    ) : (
                      <>{item.nameb}</>
                    )}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <div>
                  <LanguageToggle />
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
