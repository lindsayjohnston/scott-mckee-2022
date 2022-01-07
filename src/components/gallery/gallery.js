import './gallery.css';
import FlipCard from '../flipCard/flipCard';
import skatePosterImage from '../../media/flip-cards-png/skate-poster.png';
import sugarMamaLogo from '../../media/flip-cards-png/sugarmama-logo.png';
import phonyFamousArt from '../../media/flip-cards-png/phony-famous.png';
import micahApparel from '../../media/flip-cards-png/micah-apparel.png';
import donnaDonnaApparel from '../../media/flip-cards-png/donnadonna-apparel.png';
import giveBlood from '../../media/flip-cards-png/give-blood.png';
import donnaPrint from '../../media/flip-cards-png/donna-print.png';
import grillsPoster from '../../media/flip-cards-png/grills-poster.png';

const cardInfo= [
    {   title: "sugarMamaLogo",
        image:sugarMamaLogo,
        link: "https://lkj-website-media-jan2022.s3.us-east-2.amazonaws.com/Sugar_mama_mustard.jpg",
        description: <div className="description"><p>This fun logo and color scheme capture the feel-good vibes of a party band from Bend, OR.</p></div>,
    },
    {   title: "phonyFamousArt",
    image:phonyFamousArt,
    link: "https://lkj-website-media-jan2022.s3.us-east-2.amazonaws.com/phony_famous_jacket_purple_black.jpg",
    description: <div className="description"><p>Vibrant colors twist up a punk jacket and reflect the genre-bending music of Spokane duo dee-em. </p></div>,
    },
    {   title: "micahApparel",
    image: micahApparel,
        link: "https://lkj-website-media-jan2022.s3.us-east-2.amazonaws.com/IMG_7615-Edit-Edit.jpg",
        description: <div className="description"><p>80s throwback logo for a limited edition line of up-cycled tops for my rock-and-roll persona Vanna Oh!</p></div>,
    }, {
        title: "skatePosterImage",
        image: skatePosterImage,
        link: "https://lkj-website-media-jan2022.s3.us-east-2.amazonaws.com/Donna+Emerald+poster+(1).png",
        description: <div className="description"><p>Drumsticks? Roller skates? Let's go to the show!</p></div>,
    },
    {
        title: "donnaDonnaApparel",
        image: donnaDonnaApparel,
        link: "https://lkj-website-media-jan2022.s3.us-east-2.amazonaws.com/Donna+Donna+bw+photo+tee.jpg",
        description: <div className="description"><p>Black tees are required at the merch booth. Here's the best-selling design from my blues rock project Donna Donna.</p></div>,
    },
    {
        title: "giveBlood",
        image: giveBlood,
        link: "https://lkj-website-media-jan2022.s3.us-east-2.amazonaws.com/Screen+Shot+2022-01-06+at+1.49.48+PM.png",
        description: <div className="description"><p>When the suits are looking over my shoulder, I can create a clean design that is sure to offend no-one. Also, be a hero and donate blood!</p></div>,
    },
    {
        title: "grillsPoster",
        image: grillsPoster,
        link: "https://lkj-website-media-jan2022.s3.us-east-2.amazonaws.com/emerald_Grillz_show_poster.jpg",
        description: <div className="description"><p>This poster gives you the show details AND tells you how to dress. </p></div>,
    },
    {
        title: "donnaPrint",
        image: donnaPrint,
        link: "https://lkj-website-media-jan2022.s3.us-east-2.amazonaws.com/save+the+date.001.jpg",
        description: <div className="description"><p>Ever heard of a band sending save-the-date postcards for an album release? That's how you sell out a show.</p></div>,
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