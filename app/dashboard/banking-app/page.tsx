import React from 'react'

interface History {
  id: string
  action: string
  amount: string
  remaining: string
}

interface Data {
  balance: string
  history: History[]
}

const DATA: Data = {
  balance: '£23.546,00',
  history: [
    { id: '1', action: 'withdraw', amount: '£23,54', remaining: '£23.522,46' },
    { id: '2', action: 'withdraw', amount: '£23,54', remaining: '£23.500,02' },
    { id: '3', action: 'withdraw', amount: '£23,54', remaining: '£23.480,22' },
  ],
}

function Page() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-gray-100">
      <h1 className="mb-4 text-2xl text-gray-800">
        Banking app with timed withdrawals
      </h1>
      <p className="mb-4 w-[80%] text-sm text-gray-800">
        Build an application for a bank app. See how credits are used and time
        the deposits and withdrawals. Set up a timed withdrawal
      </p>
      <div className="mb-2 w-[80%] border border-gray-300 p-4">
        <div className="flex justify-end">
          <p>{`Balance: ${DATA.balance}`}</p>
        </div>
      </div>
      <div className="mb-2 w-[80%] border border-gray-300 p-4">
        <div className="flex flex-col items-end">
          <p className="text-md w-full border-b border-gray-500 text-right font-bold text-gray-800">
            History of transactions
          </p>
          <ul className="w-full divide-y divide-gray-500">
            {DATA.history.map((transaction) => (
              <li
                className="justify- flex justify-between space-y-2 pt-2"
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
      <div className="w-[80%] border border-gray-300 p-4">
        <p className="text-md w-full border-b border-gray-500 text-right font-bold text-gray-800">
          WithDrawal Form
        </p>
        <div className="pb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="withdrawal"
          ></label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="withdrawal"
            type="text"
            placeholder="Amount to withdrawal"
          />
        </div>
      </div>
    </main>
  )
}

export default Page
