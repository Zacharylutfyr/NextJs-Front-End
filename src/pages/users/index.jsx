/* eslint-disable react/jsx-no-undef */
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import DeleteUsers from "../deleteUsers";

const Home = () => {
  // State
  const [users, setUsers] = useState([]);

  // did mount
  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <>
      <div className="py-10 px-10">
        <div className="py-2">
          <ul className="flex justify-start">
            <li>
              <Link href="/" className="px-4 py-2 bg-red-500 rounded-md mx-3">
                Home
              </Link>
              <Link
                href="/addUsers"
                className="px-4 py-2 bg-green-500 rounded-md"
              >
                Add User
              </Link>
            </li>
          </ul>
        </div>
        <table className="table-auto w-full shadow-md border-solid border-spacing-2 border-separate rounded">
          <thead className="bg-base-200 text-center text-white  tracking-wider">
            <tr>
              <th className="p-4">No</th>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Gender</th>
              <th className="p-4">Status</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((users, index) => (
              <tr key={users.id}>
                <td className="text-center p-4">{index + 1}</td>
                <td className="text-center p-4">{users.name}</td>
                <td className="text-center p-4">{users.email}</td>
                <td className="text-center p-4">{users.gender}</td>
                <td className="text-center p-4">{users.status}</td>
                <td className="flex">
                  <div className="mr-1">
                    <DeleteUsers {...users} />
                  </div>
                  <div className="mt-4">
                    <ul className="flex justify-start">
                      <li>
                        <Link
                          href="/updateUsers"
                          className="px-4 py-2 mt-3 bg-sky-500 rounded-md"
                        >
                          Update
                        </Link>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
