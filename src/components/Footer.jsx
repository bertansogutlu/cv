import React, { useContext } from "react";
import DataContext from "../DataProvider";

function Footer() {
  const { data } = useContext(DataContext);
  const { footer } = data;

  return (
    <footer className="bg-[#F9F9F9] dark:bg-[#141414]">
      <h5 className="w-4/5 m-auto text-2xl py-5 bg-[#F9F9F9] dark:text-[#AEBCCF] dark:bg-[#141414]">
        {footer.firstRow}
        <br />
        {footer.secondRow}
      </h5>
    </footer>
  );
}

export default Footer;
