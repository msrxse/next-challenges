import React from "react";

interface History {
  id: string;
  action: string;
  amount: string;
  remaining: string;
}

interface Data {
  balance: string;
  history: History[];
}

const DATA: Data = {
  balance: "£23.546,00",
  history: [
    { id: "1", action: "withdraw", amount: "£23,54", remaining: "£23.522,46" },
    { id: "2", action: "withdraw", amount: "£23,54", remaining: "£23.500,02" },
    { id: "3", action: "withdraw", amount: "£23,54", remaining: "£23.480,22" },
  ],
};

function Page() {
  return (
    <main className="bg-gray-100 h-full flex flex-col justify-center items-center">
      <h1 className="text-2xl text-gray-800 mb-4">
        Banking app with timed withdrawals
      </h1>
      <p className="text-sm text-gray-800 w-[80%] mb-4">
        Build an application for a bank app. See how credits are used and time
        the deposits and withdrawals. Set up a timed withdrawal
      </p>
      <div className="border border-gray-300 w-[80%] p-4 mb-2">
        <div className="flex justify-end">
          <p>{`Balance: ${DATA.balance}`}</p>
        </div>
      </div>
      <div className="border border-gray-300 w-[80%] p-4 mb-2">
        <div className="flex flex-col items-end">
          <p className="text-md font-bold text-gray-800 border-b border-gray-500 w-full text-right">
            History of transactions
          </p>
          <ul className="w-full divide-y divide-gray-500">
            {DATA.history.map((transaction) => (
              <li
                className="flex justify- space-y-2 pt-2 justify-between"
                key={transaction.id}
              >
                <p>
                  <span className="pr-2 text-xs text-gray-500">Remaining</span>
                  {transaction.remaining}
                </p>
                <p>{transaction.action}</p>
                <p>
                  <span className="pr-2 text-xs text-gray-500">Amount</span>
                  {transaction.amount}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border border-gray-300 w-[80%] p-4">
        <p className="text-md font-bold text-gray-800 border-b border-gray-500 w-full text-right">
          WithDrawal Form
        </p>
        <div className="pb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="withdrawal"
          ></label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="withdrawal"
            type="text"
            placeholder="Amount to withdrawal"
          />
        </div>
      </div>
    </main>
  );
}

export default Page;
