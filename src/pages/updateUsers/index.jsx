"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AddUsers(users) {
  const [name, setName] = useState(users.name);
  const [email, setEmail] = useState(users.email);
  const [gender, setGender] = useState(users.gender);
  const [status, setStatus] = useState(users.status);
  const [modal, setModal] = useState(false);
  const [isMutating, setIsMutating] = useState(false);

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsMutating(true);

    fetch(`http://localhost:5000/users/${users.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        gender: gender,
        status: status,
      }),
    });

    setIsMutating(false);

    router.refresh();
    setModal(false);
  };

  function handleChange() {
    setModal(!modal);
  }

  return (
    <div>
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg px-4 py-2">Update Users</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-control p-4">
              <label className="label font-bold">Name</label>
              <br />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-12 bg-slate-400 rounded-md mb-3 w-1/2 p-4"
                placeholder="User Name"
              />
            </div>
            <div className="form-control p-4">
              <label className="label font-bold">Email</label>
              <br />
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 bg-slate-400 rounded-md mb-3 w-1/2 p-4"
                placeholder="email"
              />
            </div>
            <div className="form-control p-4">
              <label className="label font-bold">Gender</label>
              <br />
              <input
                type="text"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="h-12 bg-slate-400 rounded-md mb-3 w-1/2 p-4"
                placeholder="Gender"
              />
            </div>
            <div className="form-control p-4">
              <label className="label font-bold">Status</label>
              <br />
              <input
                type="text"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="h-12 bg-slate-400 rounded-md mb-3 w-1/2 p-4"
                placeholder="Status"
              />
            </div>
            <div className="modal-action flex gap-4 ml-4">
              <ul className="flex justify-start mt-2">
                <li>
                  <Link
                    href="/users"
                    className="px-4 py-2.5 bg-red-500 rounded-md"
                  >
                    Back
                  </Link>
                </li>
              </ul>
              {!isMutating ? (
                <button
                  type="submit"
                  className="bg-green-500 px-4 py-2 mb-4 rounded-md"
                >
                  Save
                </button>
              ) : (
                <button type="button" className="btn loading">
                  Saving...
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
