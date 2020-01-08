import './BannerHome.scss'
import React from 'react'
import { UncontrolledCarousel } from 'reactstrap'

const imgbanner1 = 'https://i.imgur.com/kiirGOj.jpg'
const imgbanner2 = 'https://i.imgur.com/kiirGOj.jpg'
const imgbanner3 = 'https://i.imgur.com/kiirGOj.jpg'

const items = [
  {
    src: imgbanner1,
    altText: 'banner 1',
    caption: '',
    key: '1',
  },
  {
    src: imgbanner2,
    altText: 'banner 2',
    caption: '',
    key: '2',
  },
  {
    src: imgbanner3,
    altText: 'banner 3',
    caption: '',
    key: '3',
  },
]

const BannerHome = () => <UncontrolledCarousel items={items} indicators={false} />

export default BannerHome
