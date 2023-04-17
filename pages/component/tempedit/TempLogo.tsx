/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from "next/image";
import React from "react";
type Props = {
  path: string;
};

let data = {
  altText: "Company Logo",
};

export default function TempLogo ({ path } : Props) {
  return (
    <>
      <div className="logo-cols">
        <div className="main-logo ">
          <div className="logo-wrap">
            <Image src={path} alt={data.altText} className="d-block" />
          </div>
        </div>
      </div>
    </>
  );
};
