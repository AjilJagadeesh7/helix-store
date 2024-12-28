"use client";
import Image from "next/image";
import LoaderSystem from "@/assets/loading.gif";

const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center h-[100vh] w-[100vw]">
      <Image src={LoaderSystem} alt="loader" height={250} width={250} />
    </div>
  );
};

export default LoadingPage;
