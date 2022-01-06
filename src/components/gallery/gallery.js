import './gallery.css';
import FlipCard from '../flipCard/flipCard';
import giveBloodImage from '../../media/flip-cards-png/give-blood.png';
import skatePosterImage from '../../media/flip-cards-png/skate-poster.png';
import sugarMamaLogo from '../../media/flip-cards-png/sugarmama-logo.png';
import phonyFamousArt from '../../media/flip-cards-png/phony-famous.png';
import micahApparel from '../../media/flip-cards-png/micah-apparel.png';
import donnaDonnaApparel from '../../media/flip-cards-png/donnadonna-apparel.png';

const cardInfo= [
    {   title: "sugarMamaLogo",
        image:sugarMamaLogo,
        link: "#",
        description: <div className="description"><p>This is the description.</p></div>,
    },
    {   title: "phonyFamousArt",
    image:phonyFamousArt,
    link: "#",
    description: <div className="description"><p>This is the description.</p></div>,
    },
    {   title: "micahApparel",
    image: micahApparel,
    link: "#",
    description: <div className="description"><p>This is the description.</p></div>,
}, {   title: "skatePosterImage",
image:skatePosterImage,
link: "#",
description: <div className="description"><p>This is the description.</p></div>,
},
]

const gallery = (props)=>{
    return(
        <div className='gallery'>
           {cardInfo.map(card =>(
               <FlipCard
                    title= {card.title}
                    image= {card.image}
                    link= {card.link}
                    description= {card.description}
                    />
           ))}
        </div>
        
    )
};

export default gallery;