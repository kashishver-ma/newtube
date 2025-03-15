import Image from "next/image";
//parenthesisi() - to catergoris in same folder

export default function Home() {
  return (
    <div>
      <Image src="/logo.svg" height={50} width={50} alt="Logo"></Image>
      <p className="text-xl font-semibold tracking-tight">NewTube</p>
    </div>
  );
}
