import React from "react";
import { useFontContext } from "../Context/FontSizeControllerContext";

const FontSizeShow: React.FC = () => {
  const { size } = useFontContext();
  return (
    <div>
      <h1 style={{ fontSize: `${size}px` }}>
        Font size of the text is : {size || 0}
      </h1>{" "}
    </div>
  );
};

export default FontSizeShow;
