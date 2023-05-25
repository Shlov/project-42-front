import { Hearts } from 'react-loader-spinner';
import {LoaderStyle} from './Loader.styled';


const Loader = () => {
  return (
    <LoaderStyle>
      <Hearts
        color="orange"
        strokeWidth="5"
        animationDuration="1.5"
        width="96"
        visible={true}
      />
    </LoaderStyle>
  );
};

export default Loader;