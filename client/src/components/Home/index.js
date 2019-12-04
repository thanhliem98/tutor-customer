import React from 'react'
import HeaderHome from './header'
import Slide from './slide'
import DiscoverMore from './discoverMore'
import QuickLink from './quicklink'
import PopularCourse from './populerCourse'
import Header from '../Header'

class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<>
            <HeaderHome />
            <Slide />
            <QuickLink />
            <DiscoverMore />
            <PopularCourse />
        </>)
    }
}

export default Home