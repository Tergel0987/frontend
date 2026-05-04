"use client";
import { useState } from "react";
import DataJson from "../utils/data.json";
import TeacherJson from "../utils/teacher.json";

// 🔹 Reusable Card Component
function Card({ children, color = "bg-gray-100" }) {
  return (
    <div className={`border rounded-xl p-4 flex flex-col items-center ${color}`}>
      {children}
    </div>
  );
}

export default function Home() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  // 🔹 Filter logic
  const filteredData = DataJson.filter((item) =>
    item.firstname.toLowerCase().includes(query.toLowerCase())
  );

  const filteredTeachers = TeacherJson.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* 🔍 Search */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Search by name..."
          className="border p-2 w-full rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={() => setQuery(search)}
          className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </div>

      {/* 🟢 Users */}
      <h1 className="text-xl font-bold mb-2">Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <Card key={index} color="bg-green-100">
              <h2 className="font-bold text-lg">{item.firstname}</h2>
              <p>{item.lastname}</p>
              <p>{item.email}</p>
              <p>{item.job}</p>

              <img
                src={item.image}
                alt={item.firstname}
                className="w-24 h-24 object-cover rounded-full my-2"
              />

              {/* Nested items */}
              <div className="w-full">
                {item.items.map((r, i) => (
                  <div key={i} className="text-center mt-2">
                    <p>{r.name}</p>
                    <img
                      src={r.image}
                      alt={r.name}
                      className="w-16 h-16 object-cover mx-auto rounded"
                    />
                  </div>
                ))}
              </div>

              <p>Height: {item.height}</p>
              <p>Age: {item.age}</p>

              <button className="bg-red-500 text-white py-1 px-3 rounded mt-3 hover:bg-red-600">
                Delete
              </button>
            </Card>
          ))
        ) : (
          <p className="col-span-full text-center text-red-500">
            Medeelel oldsongui
          </p>
        )}
      </div>

      {/* 🔵 Teachers */}
      <h1 className="text-xl font-bold mt-10 mb-2">Teachers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredTeachers.length > 0 ? (
          filteredTeachers.map((item, index) => (
            <Card key={index} color="bg-blue-100">
              <h2 className="font-bold text-lg">{item.name}</h2>
              <p>{item.job}</p>
              <p>{item.email}</p>
            </Card>
          ))
        ) : (
          <p className="col-span-full text-center text-red-500">
            Bagsh oldsongui
          </p>
        )}
      </div>
    </div>
  );
}