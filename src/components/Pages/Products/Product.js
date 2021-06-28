import React from 'react'
import HeroSection from '../HeroSection'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data'

function Product() {
    return (
        <div>
            <HeroSection {...homeObjOne} />
            <HeroSection {...homeObjThree} />
            <HeroSection {...homeObjTwo} />
            <HeroSection {...homeObjFour} />
        </div>
    )
}



export default Product
