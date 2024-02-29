import React from "react";
import { SkeleStyl } from "../css/Styl";

const Loading = () => {
  return (
    <>
      <SkeleStyl variant="rectangular" height={300} />
      <SkeleStyl variant="text" height={20} />
      <SkeleStyl variant="text" height={10} />
      <SkeleStyl variant="text" height={20} />
      <SkeleStyl variant="text" height={100} />
    </>
  );
};

export default Loading;
