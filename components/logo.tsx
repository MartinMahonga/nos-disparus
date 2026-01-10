import Image from "next/image";
import logo from "@/src/assets/images/logo.png";

export function Logo() {
  return (
    <div className="flex items-center">
      <Image src={logo} alt="logo" width={80} />
      <div className="relative -left-3 md:block hidden">
        <p className="text-sm font-bold text-accent">NOS DISPARUS</p>
        <p className="text-[8px]">Plateforme Citoyenne</p>
      </div>
    </div>
  );
}
