import Link from "next/link";
import ProductCard from "../components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Image from "next/image";
import ReactLogo from "../../public/images/react11.jpg";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const text = session ? session.user?.name : "World";

  return (
    <main>
      <h1>Hello {text}</h1>
      <h2 className="font-finalFantasy text-2xl">Final Fantasy XV</h2>
      <Link href="/users">Users</Link>
      <ProductCard />
      <Image src={ReactLogo} alt="react logo" />
    </main>
  );
}
