import {
  CalendarDaysIcon,
  CreditCardIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";
import { ClockIcon, MapPinIcon } from "@heroicons/react/24/outline";

export default function VolunteerInfo() {
  return (
    <div className="lg:col-start-3 lg:row-end-1">
      <h2 className="sr-only">Summary</h2>
      <div className="rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5">
        <dl className="flex flex-wrap">
          {/* <div className="flex-auto pl-6 pt-6">
            <dt className="text-sm font-semibold leading-6 text-gray-900">
              Amount
            </dt>
            <dd className="mt-1 text-base font-semibold leading-6 text-gray-900">
              $10,560.00
            </dd>
          </div>
          <div className="flex-none self-end px-6 pt-4">
            <dt className="sr-only">Status</dt>
            <dd className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
              Paid
            </dd>
          </div> */}

          <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
            <dt className="flex-none">
              <span className="sr-only">Due date</span>
              <CalendarDaysIcon
                className="h-6 w-5  text-gray-400"
                aria-hidden="true"
              />
            </dt>
            <dd className="leading-6 ">
              <time dateTime="2023-01-31">January 31, 2023</time>
            </dd>
          </div>
          <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
            <dt className="flex-none">
              <span className="sr-only">Status</span>
              <ClockIcon className="h-6 w-5 text-gray-400" aria-hidden="true" />
            </dt>
            <dd className="leading-6 ">7:30AM - 8:00PM</dd>
          </div>
          <div className="mt-4 mb-4 flex w-full flex-none gap-x-4 px-6">
            <dt className="flex-none">
              <span className="sr-only">Status</span>
              <MapPinIcon
                className="h-6 w-5 text-gray-400"
                aria-hidden="true"
              />
            </dt>
            <dd className="leading-6 ">Tanete, Maros</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
