import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  // Router
  const router = useRouter();

  // STATE
  const [posts, setPosts] = useState([]);

  // DID MOUNT
  useEffect(() => {
    axios
      .get("https://gorest.co.in/public/v2/posts")
      .then((res) => {
        // console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <section>
      <h1 className="text-center text-4xl text-bold p-10">
        FrontEnd Engineer Challenge PT. Synapsis Sinergi Digital
      </h1>
      <hr className="mt-2 p-2" />
      <ul className="flex justify-center gap-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/users">Users</Link>
        </li>
      </ul>
      <hr className="mt-4 p-4" />
      <main className="flex flex-wrap justify-center mt-8 gap-8 px-20 ">
        {posts.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-evenly bg-gradient-to-tl from-red-300 to-red-500 w-72 h-96 p-4 rounded-xl"
          >
            <h3 className="text-white text-lg text-center font-semibold">
              {item.title}
            </h3>
            <hr className="mt-2 p-4" />
            <p className="text-3xl text-center">{item.user_id}</p>
            <hr className="mt-2 p-4" />

            <Link
              href="/detail"
              className="bg-red-950 py-2 rounded-md font-semibold hover:bg-red-600 mb-0 text-center"
            >
              Detail
            </Link>
          </div>
        ))}
      </main>
      <div className="mb-40"></div>
    </section>
  );
}
