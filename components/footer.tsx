import { app_constants } from "@/lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="p-5 flex-center text-sm">
        {currentYear} {app_constants.APP_NAME} All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
