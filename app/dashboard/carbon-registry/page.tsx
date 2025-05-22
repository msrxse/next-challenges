import React from 'react'

const data = {
  company: {
    name: 'GreenCycle Carbon',
    founded: '2019',
    headquarters: {
      city: 'San Francisco',
      country: 'USA',
    },
    contact: {
      email: 'info@greencyclecarbon.com',
      website: 'https://www.greencyclecarbon.com',
    },
    projects: [
      {
        id: 'proj-001',
        name: 'Reforestation in the Amazon',
        type: 'reforestation',
        status: 'active',
        start_date: '2020-05-01',
        region: {
          continent: 'South America',
          country: 'Brazil',
          coordinates: {
            latitude: '-3.4653',
            longitude: '-62.2159',
          },
        },
        methodology: {
          standard: 'Verra VCS',
          methodology_id: 'VM001',
          description: 'Afforestation, Reforestation, and Revegetation (ARR)',
        },
        carbon_credits: [
          {
            year: '2022',
            issued: '150000',
            retired: '40000',
            serial_numbers: ['VCS-12345-001-2022', 'VCS-12345-002-2022'],
          },
          {
            year: '2023',
            issued: '180000',
            retired: '90000',
            serial_numbers: ['VCS-12345-001-2023', 'VCS-12345-002-2023'],
          },
        ],
      },
      {
        id: 'proj-002',
        name: 'Direct Air Capture Plant in Iceland',
        type: 'direct_air_capture',
        status: 'in_development',
        start_date: '2023-07-01',
        region: {
          continent: 'Europe',
          country: 'Iceland',
          coordinates: {
            latitude: '64.9631',
            longitude: '-19.0208',
          },
        },
        methodology: {
          standard: 'Puro.earth',
          methodology_id: 'DAC01',
          description: 'Direct Air Capture and Storage (DACS)',
        },
        carbon_credits: [],
      },
    ],
    partners: [
      {
        name: 'ClimateTech Ventures',
        type: 'investor',
        website: 'https://www.climatetechventures.com',
      },
      {
        name: 'Carbon Registry Inc.',
        type: 'verification partner',
        website: 'https://www.carbonregistry.com',
      },
    ],
  },
}

function Page() {
  return (
    <main className="flex flex-col items-center justify-between bg-gray-100">
      <div className="grid bg-amber-100 lg:grid-cols-6">
        <p className="w-full pl-2 lg:col-start-2">Notes:</p>
        <ul className="list-disc space-y-4 pl-6 lg:col-span-3">
          <li className="text-xs text-gray-900">
            Gravida quam mi erat tortor neque molestie. Auctor aliquet at
            porttitor a enim nunc suscipit tincidunt nunc.
          </li>
          <li className="text-xs text-gray-900">
            Gravida quam mi erat tortor neque molestie. Auctor aliquet at
            porttitor a enim nunc suscipit tincidunt nunc. Et non lorem tortor
            posuere. Nunc eu scelerisque interdum eget tellus non nibh
            scelerisque bibendum.
          </li>
          <li className="text-xs text-gray-900">
            Gravida quam mi erat tortor neque molestie. Auctor aliquet at
            porttitor a enim nunc suscipit tincidunt nunc.
          </li>
          <li className="text-xs text-gray-900">
            Gravida quam mi erat tortor neque molestie. Auctor aliquet at
            porttitor a enim nunc suscipit tincidunt nunc. Et non lorem tortor
            posuere. Nunc eu scelerisque interdum eget tellus non nibh
            scelerisque bibendum.
          </li>
        </ul>
      </div>
      <div className="w-full py-16">
        <div className="mx-auto flex max-w-md flex-col gap-y-10">
          <h1 className="text-2xl text-gray-900">Carbon Registry (WIP)</h1>
          <p className="text-sm text-gray-900">
            Gravida quam mi erat tortor neque molestie. Auctor aliquet at
            porttitor a enim nunc suscipit tincidunt nunc. Et non lorem tortor
            posuere. Nunc eu scelerisque interdum eget tellus non nibh
            scelerisque bibendum.
          </p>
        </div>
      </div>
    </main>
  )
}

export default Page
