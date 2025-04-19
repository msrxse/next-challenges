"use client";

import SearchInput from "@/app/dashboard/data-table/searchInput";
import Table from "@/app/dashboard/data-table/table";

import React, { useEffect, useState } from "react";

export interface Data {
  id: number;
  date: string;
  type: string;
  description: string;
  amount: string;
  balance: string;
}

const DATA: Data[] = [
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

const fetchData = (query: string): Promise<Data[]> => {
  return new Promise((resolve) => {
    let result = DATA;
    if (query) {
      result = DATA.filter((tx) =>
        tx.description.toLowerCase().includes(query.toLowerCase())
      );
    }
    setTimeout(() => {
      resolve(result);
    }, 500);
  });
};

function Page() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    fetchData(query).then((d) => setData(d));
  }, [query]);

  return (
    <main className="bg-gray-100 h-full flex flex-col justify-center">
      <div className="relative overflow-x-auto border border-gray-400 shadow-md rounded-lg">
        <SearchInput query={query} setQuery={setQuery} />
        <Table data={data} />
      </div>
    </main>
  );
}

export default Page;
