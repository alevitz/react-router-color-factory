
import {Link} from 'react-router-dom';

function Colors({colors}) {
console.log(colors);

  let chosenColors = colors.map(color => {
    return(
    <p key={color.id}>
    <Link to={`/colors/${color.name}`} >{color.name} </Link>
    </p>
    )
  });

  

  return (
    <div className="Colors">
    <Link to={`/colors/new`}>Add a Color</Link>
    <p>Please select a color</p>
    {chosenColors}
    </div>
  );
}

export default Colors;
