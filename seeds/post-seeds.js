const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    post_content: 'Who is there',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_content: 'Not a mouse stirring.',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_content: 'If you do meet Horatio and Marcellus',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    post_content: 'Friends to this ground.',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    post_content: 'Give you good night.',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    post_content: 'Bernardo has my place.',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_content: 'I have seen nothing.',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_content: 'And will not let belief take hold of him',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    post_content: 'Therefore I have entreated him along',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    post_content: 'Sit down awhile',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_content: 'That are so fortified against our story',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    post_content: 'And let us hear Bernardo speak of this.',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    post_content: 'Had made his course to illume that part of heaven',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    post_content: 'In the same figure',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    post_content: 'In which the majesty of buried Denmark',
    user_id: 3
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
      post_content: 'Of mine own eyes.',
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_content: 'Such was the very armour he had on',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    post_content: 'With martial stalk hath he gone by our watch.',
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    post_content: 'This bodes some strange eruption to our state.',
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    post_content: 'And foreign mart for implements of war',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;