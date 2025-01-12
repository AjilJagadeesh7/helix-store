import { Button } from "@/components/ui/button";
import ModeToggle from "./mode";
import Link from "next/link";
import { EllipsisVertical, ShoppingCart, UserIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Menu = () => {
  const menuContent = () => {
    return (
      <div className="flex flex-col-reverse md:flex-row gap-3 items-start">
        <ModeToggle />
        <Button asChild variant={"ghost"}>
          <Link href="/cart">
            <ShoppingCart />
            Cart
          </Link>
        </Button>
        <Button asChild>
          <Link href="/signin">
            <UserIcon />
            Sign In
          </Link>
        </Button>
      </div>
    );
  };
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden md:flex w-full max-w-xs gap-1">
        {menuContent()}
      </nav>
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <EllipsisVertical />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start">
            <SheetTitle>Menu</SheetTitle>
            {menuContent()}
            <SheetDescription></SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
