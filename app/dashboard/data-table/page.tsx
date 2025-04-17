import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const DATA = [
  {
    id: 1,
    date: "01-Jan-16",
    type: "Deposit",
    description: "Cash Deposit",
    amount: "$1,000,000.00",
    balance: "$1,000,000.00",
  },
  {
    id: 2,
    date: "02-Jan-16",
    type: "Debit",
    description: "Down Town Grocery",
    amount: "$250.00",
    balance: "$999,750.00",
  },
  {
    id: 3,
    date: "03-Jan-16",
    type: "Debit",
    description: "Hot Coffee",
    amount: "$9.00",
    balance: "$999,741.00",
  },
  {
    id: 4,
    date: "04-Jan-16",
    type: "Debit",
    description: "The Filling Station",
    amount: "$88.00",
    balance: "$999,653.00",
  },
  {
    id: 5,
    date: "05-Jan-16",
    type: "Debit",
    description: "Tinker's Hardware",
    amount: "$3,421.00",
    balance: "$996,232.00",
  },
  {
    id: 6,
    date: "06-Jan-16",
    type: "Debit",
    description: "Cutey's Salon",
    amount: "$700.00",
    balance: "$995,532.00",
  },
];
function Page() {
  return (
    <main className="bg-gray-100 h-full flex flex-col justify-center">
      <div className="relative overflow-x-auto border border-gray-400 shadow-md rounded-lg">
        <div className="px-4 py-2 bg-gray-100 border-b-1 border-gray-300">
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <input
            type="text"
            id="table-search"
            className="block p-1 tex-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search for items"
          ></input>
        </div>
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
              <th scope="col" className="flex px-6 py-3">
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
            {DATA.map((each) => (
              <tr
                key={each.id}
                className="odd:bg-white even:bg-gray-50 border-b border-gray-200 hover:bg-blue-50"
              >
                <td
                  scope="col"
                  className="px-6 py-3 whitespace-nowrap"
                  tabIndex={-1}
                >
                  {each.date}
                </td>
                <td
                  scope="col"
                  className="px-6 py-3 whitespace-nowrap"
                  tabIndex={-1}
                >
                  {each.type}
                </td>
                <td scope="col">
                  <a
                    className="px-6 py-3 whitespace-nowrap"
                    tabIndex={-1}
                    href="#"
                  >
                    {each.description}
                  </a>
                </td>
                <td
                  scope="col"
                  className="px-6 py-3 whitespace-nowrap text-right"
                  tabIndex={-1}
                >
                  {each.amount}
                </td>
                <td
                  scope="col"
                  className="px-6 py-3 whitespace-nowrap text-right"
                  tabIndex={-1}
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
                className="flex flex-nowrap px-6 py-3 text-left font-semibold text-gray-900"
              >
                <button className="flex pr-2">
                  <ChevronLeftIcon className="w-4" />
                  Previous
                </button>
                <span className="text-sm font-normal text-gray-500 mb-0 inline w-auto space-x-1 whitespace-nowrap">
                  <span>Showing</span>
                  <span className="font-semibold text-gray-900">1-6</span>
                  <span>of</span>
                  <span className="font-semibold text-gray-900">1000</span>
                </span>
                <button className="flex pl-2">
                  Next
                  <ChevronRightIcon className="w-4" />
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </main>
  );
}

export default Page;
