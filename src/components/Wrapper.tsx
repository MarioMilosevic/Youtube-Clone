import { ReactNode } from "react";

type WrapperTypes = {
  children: ReactNode;
};

const Wrapper = ({ children }: WrapperTypes) => {
  return <div>{children}</div>;
};

export default Wrapper;
