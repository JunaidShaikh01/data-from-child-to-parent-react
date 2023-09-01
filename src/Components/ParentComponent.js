import React from "react";
import ChildComponent from "./ChildComponent";
import { useState } from "react";
function ParentComponent() {
  const [uiColor, setUiColor] = useState(null);
  const changehandler = (enderedColor) => {
    setUiColor(enderedColor);
  };
  return (
    <div>
      <div
        style={{
          backgroundColor: uiColor,
          width: "100px",
          height: "100px"
        }}
      >
        Color Changes Here
      </div>
      <div>
        <ChildComponent onChangeHadler={changehandler} />
      </div>
    </div>
  );
}

export default ParentComponent;
