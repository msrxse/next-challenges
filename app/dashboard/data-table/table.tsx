import { Data } from "@/app/dashboard/data-table/page";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import React from "react";

function Table({ data }: { data: Data[] }) {
  const page = 1;
  const total = data.length;

  return (
    <table
      id="ex1-grid"
      role="grid"
      className="w-full text-sm text-left text-gray-500"
    >
      <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white">
        Data table
        <p className="mt-1 text-sm font-normal text-gray-500">
          Transactions January 1 through January 6
        </p>
      </caption>
      <thead className="text-xs text-gray-700 uppercase bg-gray-200">
        <tr>
          <th scope="col" tabIndex={0} className="flex px-6 py-3">
            Date
            <ChevronUpDownIcon className="w-4" />
          </th>
          <th scope="col" className="px-6 py-3">
            Type
          </th>
          <th scope="col" className="px-6 py-3">
            Description
          </th>
          <th scope="col" className="px-6 py-3">
            Amount
          </th>
          <th scope="col" className="px-6 py-3">
            Balance
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((each) => (
          <tr
            key={each.id}
            className="odd:bg-white even:bg-gray-50 border-b border-gray-200 hover:bg-blue-50"
          >
            <td
              scope="col"
              className="px-6 py-3 whitespace-nowrap"
              tabIndex={0}
            >
              {each.date}
            </td>
            <td
              scope="col"
              className="px-6 py-3 whitespace-nowrap"
              tabIndex={0}
            >
              {each.type}
            </td>
            <td scope="col">
              <a className="px-6 py-3 whitespace-nowrap" href="#" tabIndex={0}>
                {each.description}
              </a>
            </td>
            <td
              scope="col"
              className="px-6 py-3 whitespace-nowrap text-right"
              tabIndex={0}
            >
              {each.amount}
            </td>
            <td
              scope="col"
              className="px-6 py-3 whitespace-nowrap text-right"
              tabIndex={0}
            >
              {each.balance}
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td
            colSpan={5}
            className="px-6 py-3 text-left font-semibold text-gray-900"
          >
            <span className="flex whitespace-nowrap">
              <button className="flex pr-2 cursor-pointer hover:underline">
                <ChevronLeftIcon className="w-4" />
                Previous
              </button>
              <span className="text-sm font-normal text-gray-500 mb-0 inline w-auto space-x-1">
                <span>Showing</span>
                <span className="font-semibold text-gray-900">
                  {page} - {total}
                </span>
                <span>of</span>
                <span className="font-semibold text-gray-900">1000</span>
              </span>
              <button className="flex pl-2 cursor-pointer hover:underline">
                Next
                <ChevronRightIcon className="w-4" />
              </button>
            </span>
          </td>
        </tr>
      </tfoot>
    </table>
  );
}

export default Table;
