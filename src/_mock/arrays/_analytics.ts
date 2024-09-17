//
import _mock from '../_mock';

// ----------------------------------------------------------------------

export const _analyticPost = [...Array(5)].map((_, index) => ({
  id: _mock.id(index),
  title: _mock.text.title(index),
  description: _mock.text.description(index),
  image: _mock.image.cover(index),
  postedAt: _mock.time(index),
}));

export const _analyticOrderTimeline = [...Array(10)].map((_, index) => ({
  id: _mock.id(index),
  title: [
    'User @john_doe liked your post',
    'You have 12 new followers',
    '@alice commented on your post',
    'New NFT created: #NFT-2356',
    'You joined the #Web3 community',
    '@charlie shared your content',
    'New vote in governance poll #1023',
    '@david followed you',
    'Your post was promoted to trending',
    'Community event: "NFT Fair Launch" started',
  ][index],
  type: `social_activity${index + 1}`,
  time: _mock.time(index),
}));

export const _analyticTraffic = [
  {
    value: 'facebook',
    label: 'FaceBook',
    total: 323234,
  },
  {
    value: 'google',
    label: 'Google',
    total: 341212,
  },
  {
    value: 'linkedin',
    label: 'Linkedin',
    total: 411213,
  },
  {
    value: 'twitter',
    label: 'Twitter',
    total: 443232,
  },
];
