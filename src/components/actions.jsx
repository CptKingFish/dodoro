import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const secondaryFeatures = [
  {
    name: "Donate",
    description:
      "Donate to our monthly fundraiser to donate to a cause you are passionate about.",
    href: "/donate",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Volunteer",
    description:
      "Dream big, get creative and become involved. Join our regular volunteering events.",
    href: "/volunteer",
    icon: LockClosedIcon,
  },
  {
    name: "Contact",
    description:
      "Have any more questions or want to donate materials? Contact us here.",
    href: "/contact",
    icon: ArrowPathIcon,
  },
];

export default function Actions() {
  return (
    <>
      {/* Feature section */}
      <div className="mx-auto mt-12 max-w-7xl px-6 sm:mt-36 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Deploy faster
          </h2> */}
          <p className="mt-2 text-3xl font-bold tracking-tight text-yellow-900 sm:text-4xl">
            Create a sizeable impact
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
            Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
            In mi viverra elit nunc.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {secondaryFeatures.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon
                    className="h-5 w-5 flex-none text-yellow-600"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a
                      href={feature.href}
                      className="text-sm font-semibold leading-6 text-yellow-600"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  );
}
