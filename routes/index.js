/**
 * Copyright 2017-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

// ===== MODULES ===============================================================
import express from 'express';

const router = express.Router();
// fake posts to simulate a database
const tracks = [
  {
    artist: '아이유',
    title: '가을 아침',
    imgurl: 'https://cdnimg.melon.co.kr/cm/album/images/100/96/855/10096855.jpg',
    link: 'https://melon.do/EOsvusIaG'
  },
  {
    artist: '선미',
    title: '가시나',
    imgurl: 'https://cdnimg.melon.co.kr/cm/album/images/100/89/089/10089089.jpg',
    link: 'https://melon.do/gi7hWJEtF'
  },
  {
    artist: '에픽하이',
    title: '연애소설 (Feat. 아이유)',
    imgurl: 'https://cdnimg.melon.co.kr/cm/album/images/101/05/030/10105030.jpg',
    link: 'https://melon.do/w2nksaJVH'
  },
  {
    artist: '멜로망스',
    title: '선물',
    imgurl: 'https://cdnimg.melon.co.kr/cm/album/images/100/78/176/10078176.jpg',
    link: 'https://melon.do/AgaPhIdmE'
  },
  {
    artist: '트와이스',
    title: 'LIKEY',
    imgurl: 'https://cdnimg.melon.co.kr/cm/album/images/101/07/114/10107114.jpg',
    link: 'https://melon.do/K7h5ZPZgH'
  },
]


// GET home page
router.get('/', (_, res) => {
  res.redirect('http://m.search.melon.com/search/facebook/index.htm?memberKey=0');
  //res.render('./home', {demo: process.env.DEMO, tracks : tracks} );
});

export default router;
