import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";

import { LangContext } from "@/pages/_app";
import { useContext } from "react";

const projects = [
  {
    name: "25,000IDR can feed a Dodol maker for a day.",
    nameB: "25,000IDR bisa memberi makan pembuat Dodol sehari.",
    initials: "25,000",
    currency: "IDR",
    href: "#",
    members: 16,
    bgColor: "bg-pink-600",
  },
  {
    name: "50,000IDR can feed a Dodol maker's family for a day.",
    nameB: "50,000IDR bisa memberi makan keluarga pembuat Dodol sehari.",
    initials: "50,000",
    currency: "IDR",
    href: "#",
    members: 12,
    bgColor: "bg-purple-600",
  },
  {
    name: "100,000IDR can buy medical supplies for the Dodol makers.",
    nameB:
      "100,000IDR dapat membeli perbekalan kesehatan bagi para pembuat Dodol.",
    initials: "100,000",
    currency: "IDR",
    href: "#",
    members: 16,
    bgColor: "bg-yellow-500",
  },
  {
    name: "200,000IDR can purchase a health insurance plan for a Dodol maker.",
    nameB:
      "200,000IDR dapat membeli paket asuransi kesehatan untuk pembuat Dodol.",
    initials: "200,000",
    currency: "IDR",
    href: "#",
    members: 8,
    bgColor: "bg-green-500",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DonationCards() {
  const { lang } = useContext(LangContext);
  return (
    <div>
      <h2 className="text-sm font-medium text-gray-500 mb-5">
        {lang.name !== "Bahasa" ? (
          <>How your support makes a difference.</>
        ) : (
          <>Bagaimana dukungan Anda membuat perbedaan.</>
        )}
      </h2>
      <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:gap-6">
        {projects.map((project) => (
          <li
            key={project.name}
            className="col-span-1 flex rounded-md shadow-sm h-24"
          >
            <div
              className={classNames(
                project.bgColor,
                "flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white"
              )}
            >
              <span className="flex flex-col justify-center items-center">
                <span>{project.initials}</span>
                <span>{project.currency}</span>
              </span>
            </div>
            <div className="flex flex-1 items-center justify-between rounded-r-md border-b border-r border-t border-gray-200 bg-white">
              <div className="flex-1 px-4 py-2 text-sm">
                <span className="font-semibold text-gray-900 hover:text-gray-600">
                  {lang.name !== "Bahasa" ? (
                    <>{project.name}</>
                  ) : (
                    <>{project.nameB}</>
                  )}
                </span>
              </div>
              <div className="flex-shrink-0 pr-2">
                <button
                  type="button"
                  className="rounded bg-yellow-50 px-2 py-1 text-sm font-semibold text-yellow-600 shadow-sm hover:bg-yellow-100"
                >
                  {lang.name !== "Bahasa" ? <>Support</> : <>Mendukung</>}
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
