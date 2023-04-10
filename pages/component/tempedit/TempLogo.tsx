/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
type Props = {
  path: string;
};

let data = {
  altText: "Company Logo",
};

export const TempLogo: React.FC<Props> = ({ path }) => {
  return (
    <>
      <div className="logo-cols">
        <div className="main-logo ">
          <div className="logo-wrap">
            <img src={path} alt={data.altText} className="d-block" />
          </div>
        </div>
      </div>
    </>
  );
};
