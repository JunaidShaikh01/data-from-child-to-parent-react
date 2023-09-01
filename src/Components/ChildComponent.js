import { useState } from "react";
function ChildComponent(props) {
  const [selectColor, setSelectColor] = useState("");
  const activateColor = (event) => {
    const value = event.target.value;
    setSelectColor(value);
    props.onChangeHadler(value);
  };
  return (
    <div>
      {/* <select onChange={activateColor} value={selectColor}>
        <option value="red">Red</option>
        <option value="Blue">Blue</option>
        <option value="black">Black</option>
        <option value="Green">Green</option>
      </select> */}
      <input type="text" value={selectColor} onChange={activateColor} />
      {/* <div className="colorSection" style={{width:"100px" , height:"100px" , background:selectColor}}>

      </div> */}
    </div>
  );
}

export default ChildComponent;
