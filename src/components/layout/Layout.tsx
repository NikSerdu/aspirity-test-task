import { FC, PropsWithChildren } from "react";
import Header from "./Header";

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <div className="max-w-[1494px] mx-auto px-2 pb-2">
      <Header />
      <div className="">{children}</div>
    </div>
  );
};

export default Layout;
