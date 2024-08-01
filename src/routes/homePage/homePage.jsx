import SearchBar from '../../components/searchBar/SearchBar'
import './homePage.scss'

function HomePage() {
    return (
        <div className='homePage'> 
        <div className="textContainer">
            <div className="wrapper">
                <h1 className='title'>Find Real Estate & Get Your Dream Place</h1>
                <p> The terms land, real estate, and real property are often used interchangeably, but there are distinctions.

Land refers to the earth surface down to the center of the earth and upward to the airspace above, including the trees, minerals, and water. The physical characteristics of land include its immobility, indestructibility, and uniqueness, where each parcel of land differs geographically.

Real estate encompasses the land, plus any permanent man-made additions, such as houses and other buildings. Any additions or changes to the land that affects the property value are called an improvement.
            </p>
            <SearchBar/>
            <div className="boxes">
                <div className="box">
                    <h1>16+</h1>
                    <h2>Years Of Experience</h2>
                </div>
                <div className="box">
                    <h1>200</h1>
                    <h2>Awards Gained</h2>
                </div>
                <div className="box">
                    <h1>2000+</h1>
                    <h2>Properties Ready</h2>
                </div>
            </div>
            </div>
            

        </div>
        <div className="imgContainer">
            <img src="/bg.png" alt=''/>
        </div>
         </div>
    )
}


export default HomePage