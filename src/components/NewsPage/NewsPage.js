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

  const news=[{
    "imgUrl": "https://www.nytimes.com/images/2023/04/16/magazine/16mag-LOR/16mag-LOR-blog480.jpg",
    "title": "What I Learned Dogsitting for New York City’s Opulent Elite",
    "text": "In a city of yawning class inequality, some side hustles let you glimpse how the other half lives.",
    "date": "2023-04-11T09:00:18+0000",
    "url": "https://www.nytimes.com/2023/04/11/magazine/dogsitting-rich-new-york.html",
    "id": "nyt://article/8d29f1fc-d146-509d-8ceb-5a5b17d7886b"
  },
  {
    "imgUrl": "https://www.nytimes.com/images/2023/04/04/multimedia/00VIRTUAL-VETS-01b-fmzk/00VIRTUAL-VETS-01b-fmzk-blog480.jpg",
    "title": "The Virtual Vet Will See You Meow",
    "text": "Veterinary telemedicine could help more pet owners access much-needed care and put anxious animals at ease, but challenges remain.",
    "date": "2023-04-07T09:00:46+0000",
    "url": "https://www.nytimes.com/2023/04/07/health/vet-pet-health-telemedicine.html",
    "id": "nyt://article/992f2f7f-793c-5553-b722-348625f53a4b"
  },
  {
    "imgUrl": "https://www.nytimes.com/images/2023/04/04/travel/00tripped-up-illo/00tripped-up-illo-blog480.jpg",
    "title": "Help! My Dog Was Rejected by the Airline Because of a Carrier Rule That Doesn’t Exist.",
    "text": "A gate agent suddenly objected to a canine who’d flown previously on the same route, saying the carrier wasn’t big enough. Our columnist tries to sort out what the actual rules for pets on planes are.",
    "date": "2023-04-05T09:00:24+0000",
    "url": "https://www.nytimes.com/2023/04/05/travel/airlines-flying-with-dogs-cats.html",
    "id": "nyt://article/08d32cd1-6eb4-50f7-8126-f7bad37b098f"
  },
  {
    "imgUrl": "https://media4.giphy.com/media/h52OM8Rr5fLiZRqUBD/giphy.gif",
    "title": "On Pets, Moral Logic and Love",
    "text": "I didn’t think I was a dog person. Then Herbie showed up and taught me a lesson about love.",
    "date": "2023-03-19T13:00:06+0000",
    "url": "https://www.nytimes.com/2023/03/19/opinion/pets-dogs-love.html",
    "id": "nyt://article/0dc54659-a8a1-589a-bac8-f4d8321b0f43"
  },
  {
    "imgUrl": "https://www.nytimes.com/images/2023/03/15/nyregion/NY-FISH/NY-FISH-blog480.jpg",
    "title": "When Helpless Fish Need a Hero, She Answers the Call",
    "text": "Three hundred goldfish in a hospital basement, a suckermouth at the airport: When fish are in crisis, a Bronx beautician and a partner in Pennsylvania ride to the rescue.",
    "date": "2023-03-17T09:00:35+0000",
    "url": "https://www.nytimes.com/2023/03/17/nyregion/new-york-city-fish-rescue.html",
    "id": "nyt://article/7bce8e93-e6b3-5cb7-ad38-a361fa0d2812"
  },
  {
    "imgUrl": "https://www.nytimes.com/images/2023/03/16/multimedia/16xp-dogpoisoning2/16xp-dogpoisoning2-blog480-v2.jpg",
    "title": "3 Dogs Die After Eating Poisoned Meatballs at a Race in France",
    "text": "The poisonings took place at the French canicross championships, in which people run or cycle while attached to their dogs.",
    "date": "2023-03-16T16:12:57+0000",
    "url": "https://www.nytimes.com/2023/03/16/world/europe/dog-poisoning-france.html",
    "id": "nyt://article/111d57a8-01f0-5bc5-b7ac-d9056ee73b35"
  },]
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
          
      <NewsList news={news} />

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