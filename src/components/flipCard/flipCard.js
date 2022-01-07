import './flipCard.css';


const flipCard = (props)=>{
    return(
 
            <div className='flipCard'>
                <div className='flipCardInner'>
                    <div class="flipCardFront">
                        <img src={props.image} alt={props.alt}></img>
                    </div>
                    <div class="flipCardBack">
                        <a href={props.link} target="_blank" rel= "noreferrer"><h3>See It Bigger</h3></a>
                        {props.description}
                    </div>
                </div>
            </div>

    
        
    )
};

export default flipCard;