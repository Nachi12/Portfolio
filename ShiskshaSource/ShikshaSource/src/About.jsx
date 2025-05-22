import React, { useEffect, useState } from "react";
import axios from "axios";

const About = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/team")
      .then((res) => setTeam(res.data))
      .catch((err) => console.error("Error fetching team data:", err));
  }, []);

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen px-6 py-12 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">
          About Us
        </h1>

        <p className="text-lg text-center mb-10 leading-relaxed">
          Welcome to our college project selling platform! We specialize in
          providing high-quality academic projects at{" "}
          <span className="text-blue-700 font-semibold">affordable prices</span>{" "}
          with a guarantee of
          <span className="text-green-700 font-semibold">
            {" "}
            on-time delivery
          </span>
          . Our mission is to help students succeed without breaking the bank.
        </p>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Our Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-blue-100 p-6 rounded-xl shadow-md hover:shadow-xl transition"
              >
                <h3 className="text-xl font-bold text-blue-900">
                  {member.name}
                </h3>
                <p className="text-gray-700 font-medium mb-2">{member.role}</p>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  {member.skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">
            Why Choose Us?
          </h3>
          <ul className="text-gray-700 space-y-2">
            <li>✅ Affordable pricing tailored for students</li>
            <li>✅ Timely project delivery guaranteed</li>
            <li>✅ 100% original, plagiarism-free academic projects</li>
            <li>
              ✅ Technical support & guidance for understanding your project
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
