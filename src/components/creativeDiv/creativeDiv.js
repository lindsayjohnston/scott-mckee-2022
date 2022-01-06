import './creativeDiv.css';
import FlipCard from '../flipCard/flipCard';

const creativeDiv = (props)=>{
    return(
        <div className='creativeDiv'>
           <FlipCard />
           <FlipCard />
           <FlipCard />
           <FlipCard />
           <FlipCard />
           <FlipCard />
        </div>
        
    )
};

export default creativeDiv;