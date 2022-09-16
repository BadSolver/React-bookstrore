import React, { CSSProperties } from "react";
import { ClipLoader } from "react-spinners";

interface Iprops {
  size: string;
}

export const Loader = ({ size }: Iprops) => {
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    background: "transparent",
  };

  return <ClipLoader cssOverride={override} size={size} color="goldenrod" />;
};
