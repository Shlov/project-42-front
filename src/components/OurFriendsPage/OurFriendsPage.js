import { useState } from 'react';
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
    CardAdress,
    CardTimeModal,
    ModalDay,
} from './OurFriendsPage.styled'

const FriendCard = ({ title, logo, time, address, email, phone, times }) => {
  const [activeTime, setActiveTime] = useState(false)

  const handleActiveTime = () => {
    if(!activeTime) {
      setActiveTime(true)
    } else {
      setActiveTime(false)
    }
  }

  return (
    <Card>
      <CardTitle>{title}</CardTitle>
      <CardWrap>
        <CardImg src={logo} alt={`${title} logo`} />
        <CardList>
          <CardItem>
            <CardLabel>Time:</CardLabel>
            <br />
            <div className='time' onClick={handleActiveTime}>{time}</div>
            {activeTime ?
              <CardTimeModal>
                {times.map((item, i) =>
                  <div key={i} className='card-time-wrapper'>
                    <div>
                      <ModalDay>{item.day}</ModalDay>
                    </div>
                    <div>
                      <span>{item.time}</span>
                    </div>
                  </div>
                )}
              </CardTimeModal>
              : null
            }
          </CardItem>
          <CardItem>
            <CardLabel>Address:</CardLabel>
            <br />
            <CardAdress  className='address'>{address}</CardAdress >
          </CardItem>
          <CardItem>
            <CardLabel>Email:</CardLabel>
            <br />
            <a className='email' href={`mailto:${email}`}>{email}</a>
          </CardItem>
          <CardItem>
            <CardLabel>Phone:</CardLabel>
            <br />
            <a className='phone' href={`tel:${phone}`}>{phone}</a>
          </CardItem>
        </CardList>
      </CardWrap>
    </Card>
  )
};


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
      times: [
        {
          day: 'MN',
          time: '8:00-19:00'
        },
        {
          day: 'TU',
          time: '8:00-19:00'
        },
        {
          day: 'WE',
          time: '8:00-19:00'
        },
        {
          day: 'TH',
          time: '8:00-19:00'
        },
        {
          day: 'FR',
          time: '8:00-19:00'
        },
        {
          day: 'SA',
          time: '8:00-19:00'
        },
        {
          day: 'SU',
          time: '8:00-19:00'
        },
      ]
    },
    {
      id: 2,
      title: 'Барбос',
      logo: require('../../images/friendslogo/barbos.png'),
      time: '8:00-20:00',
      address: 'Grigorenka Street, 25',
      email: 'barbos@gmail.com',
      phone: '066 488 0480',
      times: [
        {
          day: 'MN',
          time: '8:00-20:00'
        },
        {
          day: 'TU',
          time: '8:00-20:00'
        },
        {
          day: 'WE',
          time: '8:00-20:00'
        },
        {
          day: 'TH',
          time: '8:00-20:00'
        },
        {
          day: 'FR',
          time: '8:00-20:00'
        },
        {
          day: 'SA',
          time: '8:00-20:00'
        },
        {
          day: 'SU',
          time: '8:00-20:00'
        },
      ]
    },
    {
      id: 3,
      title: 'Whiskas',
      logo: require('../../images/friendslogo/whiskas.png'),
      time: 'day and night',
      address: 'website only',
      email: 'whiskas@gmail.com',
      phone: '0-800-500-155',
      times: [
        {
          day: 'MN',
          time: 'day and night'
        },
        {
          day: 'TU',
          time: 'day and night'
        },
        {
          day: 'WE',
          time: 'day and night'
        },
        {
          day: 'TH',
          time: 'day and night'
        },
        {
          day: 'FR',
          time: 'day and night'
        },
        {
          day: 'SA',
          time: 'day and night'
        },
        {
          day: 'SU',
          time: 'day and night'
        },
      ]
    },
    {
      id: 4,
      title: 'Happy paw',
      logo: require('../../images/friendslogo/happypaw.png'),
      time: '09:00-19:00',
      address: 'Chota Rystaveli Street, 44',
      email: 'hello@happypaw.ua',
      phone: '+380 44 290-03-29',
      times: [
        {
          day: 'MN',
          time: '9:00-19:00'
        },
        {
          day: 'TU',
          time: '9:00-19:00'
        },
        {
          day: 'WE',
          time: '9:00-19:00'
        },
        {
          day: 'TH',
          time: '9:00-19:00'
        },
        {
          day: 'FR',
          time: '9:00-19:00'
        },
        {
          day: 'SA',
          time: '9:00-19:00'
        },
        {
          day: 'SU',
          time: '9:00-19:00'
        },
      ]
    },
    {
      id: 5,
      title: 'PetHelp',
      logo: require('../../images/friendslogo/pethelp.png'),
      time: 'day and night',
      address: 'website only',
      email: 'pithelp.ukr@gmail.com',
      phone: 'email only',
      times: [
        {
          day: 'MN',
          time: 'day and night'
        },
        {
          day: 'TU',
          time: 'day and night'
        },
        {
          day: 'WE',
          time: 'day and night'
        },
        {
          day: 'TH',
          time: 'day and night'
        },
        {
          day: 'FR',
          time: 'day and night'
        },
        {
          day: 'SA',
          time: 'day and night'
        },
        {
          day: 'SU',
          time: 'day and night'
        },
      ]
    },
    {
      id: 6,
      title: 'Сіріус',
      logo: require('../../images/friendslogo/sirius.png'),
      time: '11:00-16:00',
      address: 'Fedorivka, Kyiv Oblast',
      email: 'dogcat.sirius@gmail.com',
      phone: '+38 093 193 40 69',
      times: [
        {
          day: 'MN',
          time: '11:00-16:00'
        },
        {
          day: 'TU',
          time: '11:00-16:00'
        },
        {
          day: 'WE',
          time: '11:00-16:00'
        },
        {
          day: 'TH',
          time: '11:00-16:00'
        },
        {
          day: 'FR',
          time: '11:00-16:00'
        },
        {
          day: 'SA',
          time: '11:00-16:00'
        },
        {
          day: 'SU',
          time: '11:00-16:00'
        },
      ]
    },
    {
      id: 7,
      title: 'PURINA',
      logo: require('../../images/friendslogo/purina.png'),
      time: 'day and night',
      address: 'website only',
      email: 'info@ua.nestle.com',
      phone: '1-800-778-7462',
      times: [
        {
          day: 'MN',
          time: 'day and night'
        },
        {
          day: 'TU',
          time: 'day and night'
        },
        {
          day: 'WE',
          time: 'day and night'
        },
        {
          day: 'TH',
          time: 'day and night'
        },
        {
          day: 'FR',
          time: 'day and night'
        },
        {
          day: 'SA',
          time: 'day and night'
        },
        {
          day: 'SU',
          time: 'day and night'
        },
      ]
    },
    {
      id: 8,
      title: 'Josera',
      logo: require('../../images/friendslogo/josera.png'),
      time: '09:00-17:00',
      address: 'Sholom-Aleikhema St, 11',
      email: 'info@josera.ua',
      phone: '0800 409 060',
      times: [
        {
          day: 'MN',
          time: '9:00-17:00'
        },
        {
          day: 'TU',
          time: '9:00-17:00'
        },
        {
          day: 'WE',
          time: '9:00-17:00'
        },
        {
          day: 'TH',
          time: '9:00-17:00'
        },
        {
          day: 'FR',
          time: '9:00-17:00'
        },
        {
          day: 'SA',
          time: '9:00-17:00'
        },
        {
          day: 'SU',
          time: '9:00-17:00'
        },
      ]
    },
    {
      id: 9,
      title: 'LICO',
      logo: require('../../images/friendslogo/lico.png'),
      time: '9:00-20:00',
      address: 'Dryhetiv Street, 77',
      email: 'lico@gmail.com',
      phone: '+38 097 509 8005',
      times: [
        {
          day: 'MN',
          time: '9:00-20:00'
        },
        {
          day: 'TU',
          time: '9:00-20:00'
        },
        {
          day: 'WE',
          time: '9:00-20:00'
        },
        {
          day: 'TH',
          time: '9:00-20:00'
        },
        {
          day: 'FR',
          time: '9:00-20:00'
        },
        {
          day: 'SA',
          time: '9:00-20:00'
        },
        {
          day: 'SU',
          time: '9:00-20:00'
        },
      ]
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
            times={friend.times}
          />
        ))}
      </FriendsList>
    </FriendsSection>
  );
};

export default FriendsPage;
