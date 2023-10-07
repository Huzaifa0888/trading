"use client";
import React from "react";
import { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { database } from "@/components/utils/firebaseConfig";
const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataRef = ref(database, "/");
    onValue(dataRef, (snapshot) => {
      const dataFromFirebase = snapshot.val();
      setData(dataFromFirebase);
      console.log("dataFromFirebase", dataFromFirebase);
    });
  }, []);
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Sr.No
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Values
            </th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((data: any, index: number) => {
              const date = new Date(data.DateTime).toLocaleString();
              return (
                <tr key={index}>
                  <td  className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {index + 1}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                    {date}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {data.predicted_values}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
