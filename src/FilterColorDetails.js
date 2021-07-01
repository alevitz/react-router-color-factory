
import Color from "./Color";
import { useParams } from 'react-router-dom';

function FilterColorDetails({colors}) {
  const {color} = useParams();

  console.log(colors, color);

  if(color) {
    const currentColor = colors.find(c => c.name === color);
    console.log(currentColor);
    return <Color color={currentColor} />
  }

  return null;
}

export default FilterColorDetails;
