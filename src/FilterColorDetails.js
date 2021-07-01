
import Color from "./Color";
import { useParams } from 'react-router-dom';

function FilterColorDetails({colors}) {
  const {color} = useParams();

  if(color) {
    const currentColor = colors.find(c => c.name === color);

    return <Color color={currentColor} />
  }

  return null;
}

export default FilterColorDetails;
