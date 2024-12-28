"use client";

import { Button } from "@/components/ui/button";
import { app_constants } from "@/lib/constants";
import Image from "next/image";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        src="/images/logo.png"
        alt={`${app_constants.APP_NAME}`}
        width={48}
        height={48}
        className="rounded-md shadow-sm shadow-slate-300"
        priority
      />
      <div className="p-6 rounded-lg shadow-sm shadow-slate-300  text-center w-1/3 mt-4">
        <h1 className="text-3xl font-bold mb-4">Not Found</h1>
        <p className="text-destructive">Could not find requested page</p>
        <Button
          variant={"outline"}
          className="mt-4 ml-2"
          onClick={() => (window.location.href = "/")}
        >
          Back To Home
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
