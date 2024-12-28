import { Button } from "@/components/ui/button";
import { app_constants } from "@/lib/constants";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const HomePage = async () => {
  await delay(1000);
  return (
    <div className="text-2xl font-semibold">
      Home
      <Button variant={"outline"}>{app_constants.APP_NAME}</Button>
    </div>
  );
};

export default HomePage;
