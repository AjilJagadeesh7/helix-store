import { app_constants } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import Menu from "./menu";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image
              className="rounded-md"
              src="/images/logo.png"
              width={48}
              height={48}
              priority
              alt={`${app_constants.APP_NAME}`}
            />
            <span className="hidden md:block font-bold text-2xl ml-3">
              {app_constants.APP_NAME}
            </span>
          </Link>
        </div>
        <div className="space-x-2">
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Header;
