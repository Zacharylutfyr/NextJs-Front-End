"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DeleteUsers(users) {
  const [modal, setModal] = useState(false);
  const [isMutating, setIsMutating] = useState(false);

  const router = useRouter();

  function handleDelete() {
    setIsMutating(true);

    fetch(`http://localhost:5000/users/${users.id}`, {
      method: "DELETE",
    });

    setIsMutating(false);

    router.refresh();
    setModal(false);
  }

  function handleChange() {
    setModal(!modal);
  }

  return (
    <div>
    


      <div className="modal">
        <div className="modal-box">
          <div className="modal-action">

            {!isMutating ? (
              <button
                type="button"
                onClick={() => handleDelete(users.id)}
                className="bg-red-600 px-3 py-2 rounded-md mt-2"
              >
                Delete
              </button>
            ) : (
              <button type="button" className="btn loading">
                Deleting...
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
