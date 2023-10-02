import {
  UserIcon,
  UsersIcon,
  CurrencyDollarIcon,
  FlagIcon,
} from "@heroicons/react/20/solid";

const stats = [
  {
    id: 1,
    name: "People making a difference",
    value: "8,000+",
    icon: UserIcon,
  },
  {
    id: 2,
    name: "Total funds raised",
    value: "30M IDR",
    icon: CurrencyDollarIcon,
  },
  { id: 3, name: "Volunteer signups", value: "3,000+", icon: UsersIcon },
  {
    id: 4,
    name: "Volunteer events held",
    value: "123",
    icon: FlagIcon,
  },
];

export default function Stats() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        src="making_dark.png"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className="absolute -bottom-8 -left-96 -z-10 transform-gpu blur-3xl sm:-bottom-64 sm:-left-40 lg:-bottom-32 lg:left-8 xl:-left-10"
          aria-hidden="true"
        >
          <div
            className="aspect-[1266/975] w-[79.125rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
          <h2 className="text-base font-semibold leading-8 text-yellow-400">
            Our track record
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Making a difference, one step at a time
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Join us and many other individuals in spreading kindness and making
            the world a better place for Dodol makers.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col gap-y-3 border-l border-white/10 pl-6"
            >
              <dt className="text-md leading-6">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight flex flex-row items-center">
                {<stat.icon className="w-10 h-10" />}
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg> */}
                <span className="ms-5">{stat.value}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
