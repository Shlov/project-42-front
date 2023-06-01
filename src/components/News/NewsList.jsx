// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import {
    List,
    Item,
    Wrap,
    WrapImg,
    Img,
    Title,
    Description,
    WrapBottom,
    Date,
    Link,
} from './NewsList.styled';
// import icons from 'images/icons.svg';

const textCutter = (text, maxLength) => {
    if (text.length > maxLength) {
        return `${text.slice(0, maxLength)}...`;
    }
    return text;
};

const transformDate = date => {
    return date.split('T')[0].split('-').reverse().join('/');
}

// export const NewsList = ({ news }) => {
//   const transformDate = date => {
// return date.split('T')[0].split('-').reverse().join('/');
//   }
//   return (
//     <List>
//   {news.map(({ id, imgUrl, title, text, date, url }) => (
//     <Item>
//   <WrapImg>
//     {{ imgUrl } !== '' ? (
//       <Img src={imgUrl} alt={title} loading="lazy" width="280" />
//     ) : (
//       <Plug>
//         <use href={icons + '#'}></use>
//       </Plug>
//     )}
//   </WrapImg>
//   <Wrap>
//     <Title>{textCutter(title, 40)}</Title>
//     <Description>{textCutter(text, 160)}</Description>
//     <WrapBottom>
//       <Date>{transformDate(date)}</Date>
//       <Link href={url} target="_blank" rel="noreferrer noopener">
//         Read more
//       </Link>
//     </WrapBottom>
//   </Wrap>
// </Item>
//   ))}
//     </List>
//   );
// };

// NewsList.propTypes = {
//   _id: PropTypes.string,
//   imgUrl: PropTypes.string,
//   title: PropTypes.string.isRequired,
//   text: PropTypes.string.isRequired,
//   date: PropTypes.string.isRequired,
//   url: PropTypes.string.isRequired,
// };

export const NewsList = ({ news }) => {
    const theme = useSelector(state => state.main.theme)
    return (
        <List>
            {news.map(({id, imgUrl, title, text, date, url }) => (
                <Item key={id} theme={theme}>
                    <WrapImg>
                            <Img src={imgUrl} alt={title} width="280" />

                    </WrapImg>
                    <Wrap>
                        <Title>{textCutter(title, 40)}</Title>
                        <Description>{textCutter(text, 160)}</Description>
                        <WrapBottom>
                            <Date>{transformDate(date)}</Date>
                            <Link href={url} target="_blank" rel="noreferrer noopener">
                                Read more
                            </Link>
                        </WrapBottom>
                    </Wrap>
                </Item>
            ))}
        </List>
    )
};
