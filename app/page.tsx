import Image from "next/image";
import treasure from "@/public/treasure_picture.jpg"

export default function Home() {
  return (
    <main className="flex items-center flex-col justify-center">
      <div className="mt-16 min-h-screen">

      <Image src={treasure} alt="Treasure"  />
      </div>
      <div className="flex min-h-screen t"
      id="profiles">
        bio
      </div>
    </main>
  );
}
