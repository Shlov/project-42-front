// Додаткове завдання

// Компонент рендериться на маршрут /news
// Компонент рендерить:
//  - поле для пошуку новин по ключовому слову
//  - список новин, які отримує з бекенда
// Якщо поле для пошуку заповнене - поряд з іконкою лупи повинна зʼявлятись кнопка з іконкою хрестика, по кліку на яке, поле для пошуку очищується. Пошук новин по вмісту ключового слова в заголовку новини відбувається по сабміту або кліку на іконку лупи.
// Новини повинні бути відсортовані по даті, найновіші новини на початку переліку.
// Клік по лінку ReadMore на карточці з новиною повинен переадресувати користувача на ресурс з новиною в окремій вкладці браузера

// import { useState, useEffect, useMemo } from 'react';
// import { Loader } from 'components/Loader/Loader';
// import { Search } from './Search';
// import { toast } from 'react-hot-toast';
import { NewsList } from '../../components/News/NewsList';
// import { Pagination } from '../Pagination/Pagination';
// import { NotFound } from 'components/News/NewsNotFound';
import { Wraper, Title } from './NewsPage.styled';
// import { useSearchParams } from 'react-router-dom';

// import axios from 'axios';

// const fetchNews = async params => {
//   console.log(params);
//   try {
//     const response = await axios.get('/news', {
//       params,
//     });
//       console.log(response)
//     return response.data;
//   } catch (e) {
//     return console.log(e.massage);
//   }
// };


// const sortNewsByDate = news => {
//   const newNews = [...news];
//   newNews.sort((a, b) => {
//     var dateA = new Date(a.date);
//     var dateB = new Date(b.date);
//     return dateB - dateA;
//   });

//   return newNews;
// };

export const NewsData = () => {
//   const limit = 6;
//   const [search, setSearch] = useState('');
//   const [news, setNews] = useState([]);
//   const [page, setPage] = useState(1);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);
//   const [totalPages, setTotalPages] = useState(0);
//   const [searchParams, setSearchParams] = useSearchParams();

//   const params = useMemo(
//     () => Object.fromEntries([...searchParams]),
//     [searchParams]
//   );

//   useEffect(() => {
//     setIsLoading(true);
//     const getNews = async ({ search, page, limit }) => {
//       try {
//         const newNews = await fetchNews({ search, page, limit });
//         console.log('newNews', newNews);
//         if (!newNews.totalPages) {
//           return;
//         }
//         setNews(sortNewsByDate(newNews.data));
//         setTotalPages(newNews.totalPages);
//       } catch (e) {
//         setIsError(true);
//         console.log(e);
//         toast.error(e.massage);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     if (!search) {
//       getNews({ page, limit });
//       return;
//     }
//     getNews({ search, page, limit });
//   }, [search, page, limit]);

//   const handleSearchSubmit = search => {
//     const nextParams = search !== '' ? { search } : {};
//     setSearchParams(nextParams);
//     setSearch(search);
//     setPage(1);
//   };

//   const handlePageChange = page => {
//     setSearchParams({ ...params, page });

//     setPage(page);
//   };

  return (
    <Wraper>
          <Title>News</Title>
          
          <NewsList/>

      {/* {isLoading && <Loader/>}
      {isError && !news.length && <NotFound />}

      <Search onSubmit={handleSearchSubmit} />
      {news && news.length > 0 && <NewsList news={news} />}
      {totalPages > 1 && (
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )} */}
    </Wraper>
  );
};