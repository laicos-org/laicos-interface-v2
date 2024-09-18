import {formatAddress} from 'src/utils/formatAddress';
import _mock from '../_mock';
import { randomNumberRange, randomInArray } from '../utils';
import DN404Medias from "../../DN404.media.json"
import DN404MediasPost from "../../DN404.media.post.json"
// ----------------------------------------------------------------------

export const _userAbout = {
  id: _mock.id(1),
  cover: randomInArray(DN404Medias),
  avatar:  randomInArray(DN404Medias),
  role: 'Product Manager',
  follower: randomNumberRange(999, 99999),
  following: randomNumberRange(999, 99999),
  quote:
    'Tart I love sugar plum I love oat cake. Sweet roll caramels I love jujubes. Topping cake wafer..',
  country: _mock.address.country(1),
  email: _mock.email(1),
  company: _mock.company(1),
  school: _mock.company(2),
  socialLinks: {
    facebookLink: `https://www.facebook.com/vincent`,
    instagramLink: `https://www.instagram.com/vincent`,
    linkedinLink: `https://www.linkedin.com/in/vincent`,
    twitterLink: `https://www.twitter.com/vincent`,
  },
};

export const _userFollowers = [...Array(18)].map((_, index) => ({
  id: _mock.id(index),
  avatarUrl: randomInArray(DN404Medias),
  name: _mock.name.fullName(index),
  country: _mock.address.country(index),
  isFollowed: _mock.boolean(index),
}));

export const _userFriends = [...Array(18)].map((_, index) => ({
  id: _mock.id(index),
  avatarUrl: randomInArray(DN404Medias),
  name: _mock.name.fullName(index),
  role: _mock.role(index),
}));

export const _userGallery = [...Array(12)].map((_, index) => ({
  id: _mock.id(index),
  title: _mock.text.title(index),
  postAt: _mock.time(index),
  imageUrl: _mock.image.cover(index),
}));

export const _userFeeds = [...Array(20)].map((_, index) => ({
  id: _mock.id(index),
  author: {
    id: _mock.id(8),
    avatarUrl: randomInArray(DN404Medias),
    name: 'david.ens.laicos',
  },
  isLiked: true,
  createdAt: _mock.time(index),
  media: randomInArray(DN404MediasPost),
  message: _mock.text.sentence(index),
  personLikes: [...Array(Math.floor(Math.random() * 20 + 40))].map((__, personIndex) => ({
    name: _mock.name.fullName(personIndex),
    avatarUrl: randomInArray(DN404Medias),
  })),
  comments: (index === 2 && []) || [
    {
      id: _mock.id(7),
      author: {
        id: _mock.id(8),
        avatarUrl: randomInArray(DN404Medias),
        name: formatAddress('0xa371D544318AA431a3ABAD9702B10B20029bd977'),
      },
      createdAt: _mock.time(2),
      message: 'Praesent venenatis metus at',
    },
    {
      id: _mock.id(9),
      author: {
        id: _mock.id(10),
        avatarUrl: randomInArray(DN404Medias),
        name: formatAddress('0xdEc91a05108713067ee6BaB1A999381623E5c0AE'),
      },
      createdAt: _mock.time(3),
      message:
        'Etiam rhoncus. Nullam vel sem. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Sed lectus.',
    },
  ],
}));

export const _userCards = [...Array(24)].map((_, index) => ({
  id: _mock.id(index),
  avatarUrl: randomInArray(DN404Medias),
  cover: _mock.image.cover(index),
  name: _mock.name.fullName(index),
  follower: randomNumberRange(999, 99999),
  following: randomNumberRange(999, 99999),
  totalPosts: randomNumberRange(999, 99999),
  role: _mock.role(index),
}));

export const _userPayment = [...Array(2)].map((_, index) => ({
  id: _mock.id(index),
  cardNumber: ['**** **** **** 1234', '**** **** **** 5678', '**** **** **** 7878'][index],
  cardType: ['master_card', 'visa', 'master_card'][index],
}));

export const _userAddressBook = [...Array(4)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.name.fullName(index),
  phone: _mock.phoneNumber(index),
  country: _mock.address.country(index),
  state: 'New Hampshire',
  city: 'East Sambury',
  street: '41256 Kamille Turnpike',
  zipCode: '85807',
}));

export const _userInvoices = [...Array(10)].map((_, index) => ({
  id: _mock.id(index),
  createdAt: _mock.time(index),
  price: _mock.number.price(index),
}));

export const _userList = [...Array(24)].map((_, index) => ({
  id: _mock.id(index),
  avatarUrl: randomInArray(DN404Medias),
  name: _mock.name.fullName(index),
  email: _mock.email(index),
  phoneNumber: _mock.phoneNumber(index),
  address: '908 Jack Locks',
  country: _mock.address.country(index),
  state: 'Virginia',
  city: 'Rancho Cordova',
  zipCode: '85807',
  company: _mock.company(index),
  isVerified: _mock.boolean(index),
  status: randomInArray(['active', 'banned']),
  role: _mock.role(index),
}));
