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

const navigation = {
  categories: [
    {
      id: "women",
      name: "Women",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", href: "#" },
            { name: "Dresses", href: "#" },
            { name: "Pants", href: "#" },
            { name: "Denim", href: "#" },
            { name: "Sweaters", href: "#" },
            { name: "T-Shirts", href: "#" },
            { name: "Jackets", href: "#" },
            { name: "Activewear", href: "#" },
            { name: "Browse All", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", href: "#" },
            { name: "Wallets", href: "#" },
            { name: "Bags", href: "#" },
            { name: "Sunglasses", href: "#" },
            { name: "Hats", href: "#" },
            { name: "Belts", href: "#" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Full Nelson", href: "#" },
            { name: "My Way", href: "#" },
            { name: "Re-Arranged", href: "#" },
            { name: "Counterfeit", href: "#" },
            { name: "Significant Other", href: "#" },
          ],
        },
      ],
    },
    {
      id: "men",
      name: "Men",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Artwork Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", href: "#" },
            { name: "Pants", href: "#" },
            { name: "Sweaters", href: "#" },
            { name: "T-Shirts", href: "#" },
            { name: "Jackets", href: "#" },
            { name: "Activewear", href: "#" },
            { name: "Browse All", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", href: "#" },
            { name: "Wallets", href: "#" },
            { name: "Bags", href: "#" },
            { name: "Sunglasses", href: "#" },
            { name: "Hats", href: "#" },
            { name: "Belts", href: "#" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Re-Arranged", href: "#" },
            { name: "Counterfeit", href: "#" },
            { name: "Full Nelson", href: "#" },
            { name: "My Way", href: "#" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "Company", href: "#" },
    { name: "Stores", href: "#" },
  ],
};
const orders = [
  {
    number: "WU88191111",
    date: "January 22, 2021",
    datetime: "2021-01-22",
    href: "#",
    invoiceHref: "#",
    total: "$302.00",
    products: [
      {
        id: 1,
        name: "Nomad Tumbler",
        description:
          "This durable double-walled insulated tumbler keeps your beverages at the perfect temperature all day long. Hot, cold, or even lukewarm if you're weird like that, this bottle is ready for your next adventure.",
        href: "#",
        price: "$35.00",
        status: "out-for-delivery",
        date: "January 5, 2021",
        datetime: "2021-01-05",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/order-history-page-06-product-01.jpg",
        imageAlt:
          "Olive drab green insulated bottle with flared screw lid and flat top.",
      },
      // More products...
    ],
  },
  // More orders...
];
const footerNavigation = {
  products: [
    { name: "Bags", href: "#" },
    { name: "Tees", href: "#" },
    { name: "Objects", href: "#" },
    { name: "Home Goods", href: "#" },
    { name: "Accessories", href: "#" },
  ],
  company: [
    { name: "Who we are", href: "#" },
    { name: "Sustainability", href: "#" },
    { name: "Press", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy", href: "#" },
  ],
  customerService: [
    { name: "Contact", href: "#" },
    { name: "Shipping", href: "#" },
    { name: "Returns", href: "#" },
    { name: "Warranty", href: "#" },
    { name: "Secure Payments", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Find a store", href: "#" },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Support() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-white mt-10">
        <main className="pb-14 pt-16 sm:px-6 sm:pb-20 sm:pt-24 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="px-4 sm:px-0">
              <h1 className="text-2xl font-bold tracking-tight text-yellow-900 sm:text-3xl">
                Be a Supporter
              </h1>
              <p className="mt-2 text-sm text-gray-500">
                Support us by donating to a cause you are passionate about.
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
                                  {"Support Dodol makers"}
                                </h4>
                                <p className="mt-2 hidden text-sm text-gray-500 sm:block">
                                  Stand with us in supporting dodol makers. Your
                                  contribution goes a long way in enhancing
                                  their working conditions, empowering skilled
                                  artisans, and preserving cherished traditions.
                                  Join us today and be a part of this
                                  heartwarming journey to make a sweet and
                                  lasting change.
                                </p>
                              </div>
                              {/* <p className="mt-1 font-medium text-gray-900 sm:ml-2 sm:mt-0">
                                  {"16 openings"}
                                </p> */}
                            </div>
                            <div className="mt-5 flex text-sm font-medium sm:mt-4">
                              <span className="text-yellow-800 ">
                                $3621 raised from 47 donors
                              </span>
                              <div className="ml-4 border-l border-gray-200 pl-4 sm:ml-6 sm:pl-6">
                                <span className="text-yellow-800">
                                  21 more days
                                </span>
                              </div>
                              {/* <div className="ml-4 border-l border-gray-200 pl-4 sm:ml-6 sm:pl-6">
                                <span className="text-yellow-800">
                                  Tanete, Maros
                                </span>
                              </div> */}
                            </div>
                          </div>
                          <div className="mt-6 font-medium">
                            <Link
                              href="/support/dodol"
                              className="text-yellow-950 hover:text-yellow-600"
                            >
                              Learn More →
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
                                  {"Support rice farmers"}
                                </h4>
                                <p className="mt-2 hidden text-sm text-gray-500 sm:block">
                                  Stand with us in supporting rice farmers. Your
                                  contribution goes a long way in enhancing
                                  their working conditions, and preserving
                                  cherished traditions. Join us today and be a
                                  part of this heartwarming journey to make a
                                  sweet and lasting change.
                                </p>
                              </div>
                              {/* <p className="mt-1 font-medium text-gray-900 sm:ml-2 sm:mt-0">
                                  {"16 openings"}
                                </p> */}
                            </div>
                            <div className="mt-5 flex text-sm font-medium sm:mt-4">
                              <span className="text-yellow-800 ">
                                $1231 raised from 12 donors
                              </span>
                              <div className="ml-4 border-l border-gray-200 pl-4 sm:ml-6 sm:pl-6">
                                <span className="text-yellow-800 ">-</span>
                              </div>
                              {/* <div className="ml-4 border-l border-gray-200 pl-4 sm:ml-6 sm:pl-6">
                                <span href="#" className="text-yellow-800">
                                  Malino, Maros
                                </span>
                              </div> */}
                            </div>
                          </div>
                          <div className="flex space-x-2 mt-5 lg:mt-0">
                            <CheckIcon
                              className="h-6 w-6 flex-none text-green-500"
                              aria-hidden="true"
                            />
                            <p>
                              Finished on
                              <span className="hidden sm:inline">
                                {" "}
                                on <time>{"January 22, 2021"}</time> with{" "}
                                <span className="text-yellow-900 font-bold">
                                  $1231
                                </span>{" "}
                                raised.
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
