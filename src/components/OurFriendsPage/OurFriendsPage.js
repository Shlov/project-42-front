import {
  FriendsSection,
  Title,
  FriendsList,
  Card,
  CardTitle,
  CardWrap,
  CardImg,
  CardList,
  CardItem,
  CardLabel,
  TitleUrl
} from './OurFriendsPage.styled';



const FriendCard = ({ title, logo, time, address, email, phone, onlineStoreUrl }) => (
  <Card>
    <TitleUrl href={onlineStoreUrl} target="_blank" rel="noopener noreferrer">
      <CardTitle>{title}</CardTitle>
      </TitleUrl>
    <CardWrap>
      <CardImg src={logo} alt={`${title} logo`} />
      <CardList>
        <CardItem>
          <CardLabel>Time:</CardLabel>
          <br />
          {time}
        </CardItem>
        <CardItem>
          <CardLabel>Address:</CardLabel>
          <br />
          <a
            href={`https://maps.google.com/?q=${address}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {address}
          </a>
        </CardItem>
        <CardItem>
          <CardLabel>Email:</CardLabel>
          <br />
          <a href={`mailto:${email}`}>{email}</a>
        </CardItem>
        <CardItem>
          <CardLabel>Phone:</CardLabel>
          <br />
          <a href={`tel:${phone}`}>{phone}</a>
        </CardItem>
      </CardList>
    </CardWrap>
  </Card>
);


const FriendsPage = () => {
  const friends = [
    {
      id: 1,
      title: 'ЛКП "ЛЕВ"',
      logo: require('../../images/friendslogo/lkplev.png'),
      time: '8:00-19:00',
      address: 'Promuslova Street, 56',
      email: 'lkplev@gmail.com',
      phone: '(032) 293-30-41',
      onlineStoreUrl: 'https://lkplev.com',
    },
    {
      id: 2,
      title: 'Барбос',
      logo: require('../../images/friendslogo/barbos.png'),
      time: '8:00-20:00',
      address: 'Grigorenka Street, 25',
      email: 'barbos@gmail.com',
      phone: '066 488 0480',
      onlineStoreUrl: 'https://uk-ua.facebook.com/NGO.Barbos/',
    },
    {
      id: 3,
      title: 'Whiskas',
      logo: require('../../images/friendslogo/whiskas.png'),
      time: 'day and night',
      address: 'website only',
      email: 'whiskas@gmail.com',
      phone: '0-800-500-155',
      onlineStoreUrl: 'https://www.whiskas.ua',
    },
    {
      id: 4,
      title: 'Happy paw',
      logo: require('../../images/friendslogo/happypaw.png'),
      time: '09:00-19:00',
      address: 'Chota Rystaveli Street, 44',
      email: 'hello@happypaw.ua',
      phone: '+380 44 290-03-29',
      onlineStoreUrl: 'https://happypaw.ua/ua',
    },
    {
      id: 5,
      title: 'PetHelp',
      logo: require('../../images/friendslogo/pethelp.png'),
      time: 'day and night',
      address: 'website only',
      email: 'pithelp.ukr@gmail.com',
      phone: 'email only',
      onlineStoreUrl: 'https://pethelp.com.ua',
    },
    {
      id: 6,
      title: 'Сіріус',
      logo: require('../../images/friendslogo/sirius.png'),
      time: '11:00-16:00',
      address: 'Fedorivka, Kyiv Oblast',
      email: 'dogcat.sirius@gmail.com',
      phone: '+38 093 193 40 69',
      onlineStoreUrl: 'https://dogcat.com.ua',
    },
    {
      id: 7,
      title: 'PURINA',
      logo: require('../../images/friendslogo/purina.png'),
      time: 'day and night',
      address: 'website only',
      email: 'info@ua.nestle.com',
      phone: '1-800-778-7462',
      onlineStoreUrl: 'https://www.purina.ua',
    },
    {
      id: 8,
      title: 'Josera',
      logo: require('../../images/friendslogo/josera.png'),
      time: '09:00-17:00',
      address: 'Sholom-Aleikhema St, 11',
      email: 'info@josera.ua',
      phone: '0800 409 060',
      onlineStoreUrl: 'https://josera.ua',
    },
    {
      id: 9,
      title: 'LICO',
      logo: require('../../images/friendslogo/lico.png'),
      time: '9:00-20:00',
      address: 'Dryhetiv Street, 77',
      email: 'lico@gmail.com',
      phone: '+38 097 509 8005',
      onlineStoreUrl: 'https://lico.vet',
    },
  ];

  return (
    <FriendsSection>
      <Title>Our friends</Title>
      <FriendsList>
        {friends.map(friend => (
          <FriendCard
            key={friend.id}
            title={friend.title}
            logo={friend.logo}
            time={friend.time}
            address={friend.address}
            email={friend.email}
            phone={friend.phone}
            onlineStoreUrl={friend.onlineStoreUrl}
          />
        ))}
      </FriendsList>
    </FriendsSection>
  );
};

export default FriendsPage;