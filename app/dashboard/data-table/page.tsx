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
    <main className="bg-gray-100 h-full flex flex-col justify-center items-center">
      <h1 className="text-2xl fond-bold text-gray-800">Data table</h1>
      <h4 id="grid1Label" className="mb-4">
        Transactions January 1 through January 6
      </h4>
      <div className="border border-gray-400">
        <div className="relative overflow-x-auto">
          <table
            id="ex1-grid"
            role="grid"
            aria-labelledby="grid1Label"
            className="w-full text-sm text-left text-gray-500"
          >
            <thead className="text-xs text-gray-700 uppercase bg-gray-200">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Date
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
                <tr key={each.id} className="bg-white border-b border-gray-200">
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
                    className="px-6 py-3 whitespace-nowrap"
                    tabIndex={-1}
                  >
                    {each.amount}
                  </td>
                  <td
                    scope="col"
                    className="px-6 py-3 whitespace-nowrap"
                    tabIndex={-1}
                  >
                    {each.balance}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

export default Page;
