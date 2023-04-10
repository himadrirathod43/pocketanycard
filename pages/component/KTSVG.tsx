import React from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "./AssetHelpers";

type Props = {
  className?: string;
  path: string;
  svgClassName?: string;
  style?: React.CSSProperties;
};

const KTSVG: React.FC<Props> = ({
  className = "",
  path,
  svgClassName = "",
  style,
}) => {
  return (
    <span className={`svg-icon ${className}`}>
      {/* <span> */}
      <SVG
        src={toAbsoluteUrl(path)}
        className={`mh-50px ${svgClassName}`}
        style={style}
      />
    </span>
  );
};

export { KTSVG };
