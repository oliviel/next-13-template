"use client";
import { useRouter } from "next/navigation";

const NewUserPage = () => {
  const router = useRouter();

  return (
    <div>
      <h1>New User Page</h1>
      <button className="btn btn-primary" onClick={() => router.push("/users")}>
        Create
      </button>
    </div>
  );
};

export default NewUserPage;
