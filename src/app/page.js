"use client";
import { useState } from "react";
import DataJson from "../utils/data.json";
import TeacherJson from "../utils/teacher.json";

// 🔹 Reusable Card Component
function Card({ children, color = "bg-white" }) {
  return (
    <div
      className={`rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-5 flex flex-col items-center border border-gray-200 ${color}`}
    >
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
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200 p-6 text-gray-900">
      {/* 🔍 Search */}
      <div className="flex flex-col sm:flex-row gap-3 mb-10 max-w-2xl mx-auto">
        <input
          type="text"
          placeholder="Search by name..."
          className="border border-gray-300 bg-white text-black p-3 w-full rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          onClick={() => setQuery(search)}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition font-semibold shadow-md"
        >
          Search
        </button>
      </div>

      {/* 🟢 Users */}
      <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-800">
        Users
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <Card key={index} color="bg-white">
              {/* Profile Image */}
              <img
                src={item.image}
                alt={item.firstname}
                className="w-28 h-28 object-cover rounded-full border-4 border-green-400 shadow-md mb-4"
              />

              {/* User Info */}
              <h2 className="font-bold text-2xl text-gray-900">
                {item.firstname}
              </h2>

              <p className="text-gray-700">{item.lastname}</p>

              <p className="text-sm text-gray-600 break-all text-center mt-1">
                {item.email}
              </p>

              <span className="mt-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                {item.job}
              </span>

              {/* Nested Items */}
              <div className="w-full mt-5">
                <h3 className="font-semibold text-gray-800 mb-3 text-center">
                  Items
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  {item.items.map((r, i) => (
                    <div
                      key={i}
                      className="bg-gray-100 rounded-xl p-2 text-center shadow-sm"
                    >
                      <img
                        src={r.image}
                        alt={r.name}
                        className="w-16 h-16 object-cover mx-auto rounded-lg mb-2"
                      />

                      <p className="text-sm font-medium text-gray-800">
                        {r.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Extra Info */}
              <div className="flex gap-4 mt-5 text-sm">
                <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                  Height: {item.height}
                </div>

                <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium">
                  Age: {item.age}
                </div>
              </div>

              {/* Button */}
              <button className="bg-red-500 text-white py-2 px-5 rounded-xl mt-6 hover:bg-red-600 transition shadow-md font-semibold">
                Delete
              </button>
            </Card>
          ))
        ) : (
          <p className="col-span-full text-center text-red-500 text-lg font-semibold">
            Medeelel oldsongui
          </p>
        )}
      </div>

      {/* 🔵 Teachers */}
      <h1 className="text-3xl font-extrabold mt-16 mb-6 text-center text-gray-800">
        Teachers
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
        {filteredTeachers.length > 0 ? (
          filteredTeachers.map((item, index) => (
            <Card key={index} color="bg-white">
              <div className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center text-white text-3xl font-bold shadow-lg mb-4">
                {item.name.charAt(0)}
              </div>

              <h2 className="font-bold text-2xl text-gray-900 text-center">
                {item.name}
              </h2>

              <span className="mt-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                {item.job}
              </span>

              <p className="text-sm text-gray-600 break-all text-center mt-3">
                {item.email}
              </p>

              <button className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition shadow-md font-semibold">
                View Profile
              </button>
            </Card>
          ))
        ) : (
          <p className="col-span-full text-center text-red-500 text-lg font-semibold">
            Bagsh oldsongui
          </p>
        )}
      </div>
    </div>
  );
}