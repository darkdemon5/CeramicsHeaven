import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import BrandCardCarousel from '../../components/HomeSectionCarousel/BrandCardCarousel';
import CategorySectionCarousel from '../../components/HomeSectionCarousel/CategorySectionCarousel';
import { tilesdata } from '../../../Data/tilesdata';
import { brands } from '../../../Data/brands-data';
import { category } from '../../../Data/category';

const HomePage = () =>{
    return(
        <div>
            <MainCarousel/>
            <div className='space-y-10 py-20'>
                <BrandCardCarousel data={brands} sectionName={"Popular Brand's"}/>
                <CategorySectionCarousel data={category} sectionName={"Categories"}/>
                <HomeSectionCarousel data={tilesdata} sectionName={"New Arrivals"}/>
            </div>
        </div>
    )
}

export default HomePage;