
import {Link, Redirect} from "react-router-dom";

function Color({color}) {

  if (!color) return <Redirect to="/colors"/>

  const colorStyle = {
    backgroundColor: color.value,
    height: "100vh"
  }


  return (
    <div style={colorStyle} className="Color">
    <div>This is {color.name}.  Isn't it beautiful?</div>
    <p>
    <Link to="/colors">Go Back</Link>  
    </p>
    </div>
  );
}

export default Color;
