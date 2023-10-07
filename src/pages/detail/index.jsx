/* eslint-disable react/jsx-no-undef */
import { useState, useEffect } from "react";
import axios from "axios";
// import { useParams } from "react-router-dom";


const Detail = () => {
  // State
  const [users, setUsers] = useState([]);
  // const { id } = useParams();

  // did mount
  useEffect(() => {
    axios
      .get(`https://gorest.co.in/public/v2/comments`)
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
   
        </div>
        <table className="table-auto w-full shadow-md border-solid border-spacing-2 border-separate rounded">
          <thead className="bg-base-200 text-center text-white  tracking-wider">
            <tr>
              <th className="p-4">No</th>
              <th className="p-4">Post ID</th>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Body</th>
            </tr>
          </thead>
          <tbody>
            {users.map((users, index) => (
              <tr key={users.id}>
                <td className="text-center p-4">{index + 1}</td>
                <td className="text-center p-4">{users.post_id}</td>
                <td className="text-center p-4">{users.name}</td>
                <td className="text-center p-4">{users.email}</td>
                <td className="text-center p-4">{users.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Detail;
