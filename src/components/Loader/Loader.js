// import { Hearts } from 'react-loader-spinner';
// import {LoaderStyle} from './Loader.styled';


// const Loader = () => {
//   return (
//     <LoaderStyle>
//       <Hearts
//         color="orange"
//         strokeWidth="5"
//         animationDuration="1.5"
//         width="96"
//         visible={true}
//       />
//     </LoaderStyle>
//   );
// };

// export default Loader;

import { LoaderStyle, Paw } from './Loader.styled';
import icons from 'images/icons.svg';

export const Loader = () => (
  <LoaderStyle>
    <Paw>
      <svg className="icon">
        <use xlinkHref={icons + '#paw'} />
      </svg>
    </Paw>
    <Paw>
      <svg className="icon">
        <use xlinkHref={icons + '#paw'} />
      </svg>
    </Paw>
    <Paw>
      <svg className="icon">
        <use xlinkHref={icons + '#paw'} />
      </svg>
    </Paw>
    <Paw>
      <svg className="icon">
        <use xlinkHref={icons + '#paw'} />
      </svg>
    </Paw>
    <Paw>
      <svg className="icon">
        <use xlinkHref={icons + '#paw'} />
      </svg>
    </Paw>
    <Paw>
      <svg className="icon">
        <use xlinkHref={icons + '#paw'} />
      </svg>
    </Paw>
  </LoaderStyle>
);