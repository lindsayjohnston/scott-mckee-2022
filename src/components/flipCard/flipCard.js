import './flipCard.css';
import testImage from '../../media/images/computer-lady-hands.png';

const flipCard = (props)=>{
    return(
 
            <div className='flipCard'>
                <div className='flipCardInner'>
                    <div class="flipCardFront">
                        <img src={testImage} alt="test"></img>
                    </div>
                    <div class="flipCardBack">
                        <h3>Title goes here</h3>
                        <p>A little bit of body text</p>
                    </div>
                </div>
            </div>

    
        
    )
};

export default flipCard;