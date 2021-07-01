
import {Link} from "react-router-dom";

function Color({color}) {
  console.log(color)

  const colorStyle = {
    backgroundColor: color.value,
    height: "100vh"
  }

  return (
    <div style={colorStyle} className="Color">
    {color.name}
    {color.value}
    <p>
    <Link to="/colors">Go Back</Link>  
    </p>
    </div>
  );
}

export default Color;
