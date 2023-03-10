import './featured.css';
import img from '../../assets/hotel5.jpg';
import img1 from '../../assets/hotel4.jpg';
import img2 from '../../assets/hotel3.jpg';

const Featured = () => {
  return (
    <div className='featured'>
        <div className='featuredItem'>
            <img src={img} alt='Hotel' className='featuredImage'/>
            <div className='featuredTitles'>
                <h1>Abuja</h1>
                <h2>233 Properties</h2>
            </div>
        </div>

        <div className='featuredItem'>
            <img src={img1} alt='Hotel' className='featuredImage'/>
            <div className='featuredTitles'>
                <h1>Lagos</h1>
                <h2>144 Properties</h2>
            </div>
        </div>

        <div className='featuredItem'>
            <img src={img2} alt='Hotel' className='featuredImage'/>
            <div className='featuredTitles'>
                <h1>Uyo</h1>
                <h2>170 Properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured
