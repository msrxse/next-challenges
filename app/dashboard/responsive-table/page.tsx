import React from 'react'

const data = [
  {
    'order number': 3000,
    'purchase date': 'May 9, 2024',
    customer: 'Leslie Alexander',
    amount: 'US$80.00',
  },
  {
    'order number': 3001,
    'purchase date': 'May 5, 2024',
    customer: 'Michael Foster',
    amount: 'US$299.00',
  },
  {
    'order number': 3002,
    'purchase date': 'Apr 28, 2024',
    customer: 'Dries Vincent',
    amount: 'US$150.00',
  },
  {
    'order number': 3003,
    'purchase date': 'Apr 23, 2024',
    customer: 'Lindsay Walton',
    amount: '	US$80.00',
  },
  {
    'order number': 3004,
    'purchase date': 'Apr 18, 2024',
    customer: 'Courtney Henry',
    amount: 'US$114.99',
  },
  {
    'order number': 3005,
    'purchase date': 'Apr 14, 2024',
    customer: 'Tom Cook',
    amount: 'US$299.00',
  },
  {
    'order number': 3006,
    'purchase date': 'Apr 10, 2024',
    customer: 'Whitney Francis',
    amount: 'US$150.00',
  },
  {
    'order number': 3007,
    'purchase date': 'Apr 6, 2024',
    customer: 'Leonard Krasner',
    amount: 'US$80.00',
  },
  {
    'order number': 3008,
    'purchase date': 'Apr 3, 2024',
    customer: 'Floyd Miles',
    amount: '	US$80.00',
  },
  {
    'order number': 3009,
    'purchase date': 'Mar 29, 2024',
    customer: 'Emily Selman',
    amount: 'US$114.99',
  },
  {
    'order number': 3010,
    'purchase date': 'Mar 25, 2024',
    customer: 'Kristin Watson',
    amount: 'US$299.00',
  },
  {
    'order number': 3011,
    'purchase date': 'Mar 21, 2024',
    customer: 'Emma Dorsey',
    amount: 'US$80.00',
  },
  {
    'order number': 3012,
    'purchase date': 'Mar 16, 2024',
    customer: 'Alicia Bell',
    amount: 'US$150.00',
  },
  {
    'order number': 3013,
    'purchase date': 'Mar 12, 2024',
    customer: 'Jenny Wilson',
    amount: 'US$299.00',
  },
  {
    'order number': 3014,
    'purchase date': 'Mar 8, 2024',
    customer: 'Anna Roberts',
    amount: 'US$150.00',
  },
  {
    'order number': 3015,
    'purchase date': 'Mar 4, 2024',
    customer: 'Benjamin Russel',
    amount: 'US$150.00',
  },
  {
    'order number': 3016,
    'purchase date': 'Feb 28, 2024',
    customer: 'Jeffrey Webb',
    amount: 'US$80.00',
  },
  {
    'order number': 3017,
    'purchase date': 'Feb 23, 2024',
    customer: 'Kathryn Murphy',
    amount: '	US$80.00',
  },
  {
    'order number': 3018,
    'purchase date': 'Feb 19, 2024',
    customer: 'Lawrence Hunter',
    amount: 'US$114.99',
  },
  {
    'order number': 3019,
    'purchase date': 'Feb 15, 2024',
    customer: 'Yvette Armstrong',
    amount: 'US$114.99',
  },
  {
    'order number': 3020,
    'purchase date': 'Feb 10, 2024',
    customer: 'Angela Fisher',
    amount: 'US$299.00',
  },
  {
    'order number': 3021,
    'purchase date': 'Feb 5, 2024',
    customer: 'Blake Reid',
    amount: 'US$80.00',
  },
  {
    'order number': 3022,
    'purchase date': 'Feb 1, 2024',
    customer: 'Hector Gibbons',
    amount: 'US$114.99',
  },
  {
    'order number': 3023,
    'purchase date': 'Jan 27, 2024',
    customer: 'Fabricio Mendes',
    amount: 'US$114.99',
  },
  {
    'order number': 3024,
    'purchase date': 'Jan 22, 2024',
    customer: 'Jillian Steward',
    amount: 'US$114.99',
  },
  {
    'order number': 3025,
    'purchase date': 'Jan 18, 2024',
    customer: 'Chelsea Hagon',
    amount: 'US$114.99',
  },
]

function Page() {
  return (
    <main className="flex flex-col items-center justify-between bg-gray-100">
      <div className="grid bg-amber-100 lg:grid-cols-6">
        <p className="w-full pl-2 lg:col-start-2">Notes:</p>
        <ul className="list-disc space-y-4 pl-6 lg:col-span-3">
          <li className="text-xs text-gray-900">
            overflow-x-auto allows table to be scrollable horizontally on very
            small devices.
          </li>
          <li className="text-xs text-gray-900">
            But if you want the user to use all the available space horizontally
            to be able to view content right to the edge of the device. Then use
            negative margin to remove the page padding, on that same wrapper
            div.
          </li>
          <li className="text-xs text-gray-900">
            Now initially we still want to see the padding so the table aligns
            with the rest of the page&apos;s content, up to until the user
            scrolls when that padding is used by the table. For that we need
            another div wrapper. Here we ad the needed padding.
          </li>
          <li className="text-xs text-gray-900">
            Note that the padding given to this wrapper div wont wont for the
            right padding, that is a quirk of browsers though, and to fix it you
            need to top most wrapper to be &apos;flex&apos;. Then use
            &apos;grow&apos; on the second wrapper div so it uses all available
            space on bigger screens.
          </li>
          <li className="text-xs text-gray-900">
            Lastly we use a css variable to link it all together, but here
            happens that the main padding was given on some other file, so I can
            link it to that setting. Maybe padding are not supposed to be given
            on layouts at all?
          </li>
        </ul>
      </div>
      <div className="w-full py-16">
        <h1 className="text-2xl/8 font-semibold text-zinc-950 sm:text-xl/8">
          Orders
        </h1>
        <div className="-mx-(--page-padding) mt-6 flex overflow-x-auto [--page-padding:--spacing(6)]">
          <div className="grow px-(--page-padding)">
            <table className="min-w-full bg-gray-100 text-left text-sm/6 whitespace-nowrap text-zinc-950">
              <thead className="text-zinc-500">
                <tr>
                  <td className="border-b border-zinc-950/10 px-4 py-2 font-medium first:pl-1 last:pr-1">
                    Order Number
                  </td>
                  <td className="border-b border-zinc-950/10 px-2 py-1 font-medium first:pl-1 last:pr-1">
                    Purchase Data
                  </td>
                  <td className="border-b border-zinc-950/10 px-2 py-1 font-medium first:pl-1 last:pr-1">
                    Customer
                  </td>
                  <td className="ast:pr-1 border-b border-zinc-950/10 px-2 py-1 text-right font-medium first:pl-1">
                    Amount
                  </td>
                </tr>
              </thead>
              <tbody>
                {data.map((customer) => (
                  <tr key={customer['order number']}>
                    <td className="border-b border-zinc-950/5 px-4 py-4 font-medium first:pl-1 last:pr-1">
                      {customer['order number']}
                    </td>
                    <td className="border-b border-zinc-950/5 px-4 py-4 font-medium text-zinc-500 first:pl-1 last:pr-1">
                      {customer['purchase date']}
                    </td>
                    <td className="border-b border-zinc-950/5 px-4 py-4 font-medium first:pl-1 last:pr-1">
                      {customer.customer}
                    </td>
                    <td className="border-b border-zinc-950/5 px-4 py-4 text-right font-medium first:pl-1 last:pr-1">
                      {customer.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Page
