import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'


import { Grid, Cell } from 'react-flexr';




const SchedulingHome = (props) => {

    const [active1, setActive1] = useState(false);
    const toggleActive1 = () => setActive1(!active1);
    const [active2, setActive2] = useState(false);
    const toggleActive2 = () => setActive2(!active2);
    const [active3, setActive3] = useState(false);
    const toggleActive3 = () => setActive3(!active3);
    const [active4, setActive4] = useState(false);
    const toggleActive4 = () => setActive4(!active4);
    const [active5, setActive5] = useState(false);
    const toggleActive5 = () => setActive5(!active5);
    const [active6, setActive6] = useState(false);
    const toggleActive6 = () => setActive6(!active6);

    useEffect(() => {
        console.log('active status: ', active1, active2, active3, active4, active5, active6)
    }, [active1, active2, active3, active4, active5, active6]);





    return (
        <div className='scheduling-home-container'>
            <div className='scheduling-inner-container'>
                <div className='home-titles'>
                    <div className='scheduling-inner-header'>

                        <h1>
                            All wines for each wine tasting event are chosen by David and are specifically meant to show off the typicality of wines from that region.
                        </h1>
                        <h1>
                            All tasting events are a maximum of 2 hours in length.
                        </h1>
                        <h1>
                            All Food & Wine pairing meals are a maximum of 3 hours in length.
                        </h1>
                    </div>
                </div>
                <div className='scheduling-row'>
                            <ul>
                    <div className='scheduling-column'>
                        <div className={`scheduling-inner-column ${active1 ? '' : ''}`} onMouseEnter={toggleActive1} onMouseLeave={toggleActive1}>
                                <li><h1>Cabernet Sauvignon from around the World! (Blind Tasting) </h1></li>
                                <li className = 'list-align' ><h3>$100 per person (must be booked in increments of 6 people) </h3></li>
                            <div className={`column-info ${active1 ? '' : 'hidden'}`}  >
                                <li><h3>All wine tasting only events include one EVOLUTION OF WINE Reidel Stem per person. 6 Wines that represent regions such as Napa Valley, California, - Walla Walla, Washington, - Bordeaux, France - Stellenbosch South Africa, - Coonawarra, Australia - Tuscany, Italy - Jumilla, Spain - Mendoza, Argentina - Colchagua, Chile, Sonoma County, California - Alexander Valley, California</h3></li>
                                <img src={'/images/wine-barrel-1.jpeg'} className='medium' />
                                <li><h3>All wine tasting only events include one EVOLUTION OF WINE Reidel Stem per person. 6 Wines that represent regions such as Napa Valley, California, - Walla Walla, Washington, - Bordeaux, France - Stellenbosch South Africa, - Coonawarra, Australia - Tuscany, Italy - Jumilla, Spain - Mendoza, Argentina - Colchagua, Chile, Sonoma County, California - Alexander Valley, California</h3></li>
                                <li><button className='schedule-btn'> Schedule Event</button></li>
                            </div>
                            </div>
                    </div>



                    <div className='scheduling-column'>
                        <div className={`scheduling-inner-column ${active2 ? '' : ''}`} autoFocus onMouseEnter={toggleActive2} onMouseLeave={toggleActive2}>
                                <li><h1>Pinot Noir from around the World!</h1></li>
                                <li className = 'list-align' ><h3>$100 per person (must be booked in increments of 6 people) </h3></li>
                            <div className={`column-info ${active2 ? '' : 'hidden'}`}  >
                                <li><h3>All wine tasting only events include one EVOLUTION OF WINE Reidel Stem per person</h3></li>
                                <li><h3>6 Wines that represent regions such as Napa Valley, California, - Cote d’ Or Burgundy, France - Hemel en Aarde, South Africa, - Adelaide Hills, Australia - Alto Adige, Italy - Mendoza, Argentina - Colchagua, Chile, Marlborough, New Zealand - Rheingau, Germany - Willamette Valley, Oregon - Sonoma Coast, California - Dundee Hills, Oregon - Monterey, California - Central Coast, California - Casablanca Valley, Chile - Central Otago, New Zealand - Martinborough, New Zealand - Franschoek Valley, South Africa - Friuli, Italy - Yarra Valley, Australia -</h3></li>
                                <img src={'/images/wine-barrel-1.jpeg'} className='medium' />
                                <li><h3>All wine tasting only events include one EVOLUTION OF WINE Reidel Stem per person. 6 Wines that represent regions such as Napa Valley, California, - Walla Walla, Washington, - Bordeaux, France - Stellenbosch South Africa, - Coonawarra, Australia - Tuscany, Italy - Jumilla, Spain - Mendoza, Argentina - Colchagua, Chile, Sonoma County, California - Alexander Valley, California</h3></li>
                                <li><button className='schedule-btn'> Schedule Event</button></li>
                            </div>
                        </div>
                    </div>

                    <div className='scheduling-column'>
                        <div className={`scheduling-inner-column ${active3 ? '' : ''}`} onMouseEnter={toggleActive3} onMouseLeave={toggleActive3}>
                                <li><h1>White wines from around the World!</h1></li>
                                <li className = 'list-align' ><h3>$100 per person (must be booked in increments of 6 people) </h3></li>
                            <div className={`column-info ${active3 ? '' : 'hidden'}`}   >
                                <li><h3>All wine tasting only events include one EVOLUTION OF WINE Reidel Stem per person</h3></li>
                                <li><h3>6 Wines that represent regions such as Napa Valley, California,  - Columbia Valley, Washington, - Burgundy, France - Stellenbosch South Africa, - Hunter Valley, Australia - Tuscany, Italy - Rioja, Spain - Mendoza, Argentina - Colchagua, Chile, Marlborough, New Zealand - Rheingau, Germany - Loire Valley, France, Margaret River, Australia - Willamette Valley, Oregon - Alsace, France - Alto Adige, Italy - Rias Baixas, Spain</h3></li>
                                <img src={'/images/wine-barrel-1.jpeg'} className='medium' />
                                <li><h3>All wine tasting only events include one EVOLUTION OF WINE Reidel Stem per person. 6 Wines that represent regions such as Napa Valley, California, - Walla Walla, Washington, - Bordeaux, France - Stellenbosch South Africa, - Coonawarra, Australia - Tuscany, Italy - Jumilla, Spain - Mendoza, Argentina - Colchagua, Chile, Sonoma County, California - Alexander Valley, California</h3></li>
                                <li><button className='schedule-btn'> Schedule Event</button></li>
                            </div>
                        </div>
                    </div>

                    <div className='scheduling-column'>
                        <div className={`scheduling-inner-column ${active4 ? '' : ''}`} onMouseEnter={toggleActive4} onMouseLeave={toggleActive4}>
                                <li><h1>Red Wines from around the World! (Blind Tasting)</h1></li>
                                <li className = 'list-align' ><h3>$100 per person (must be booked in increments of 6 people) </h3></li>
                            <div className={`column-info ${active4 ? '' : 'hidden'}`}  >
                                <li><h3>All wine tasting only events include one EVOLUTION OF WINE Reidel Stem per person</h3></li>
                                <li><h3>6 Wines that represent regions such as Napa Valley, California, - Walla Walla, Washington, - Bordeaux, France - Stellenbosch South Africa, - Coonawarra, Australia - Tuscany, Italy - Jumilla, Spain - Mendoza, Argentina - Colchagua, Chile, Sonoma County, California - Alexander Valley, California - Cote du Rhone, France - Paso Robles, California - </h3></li>
                                <img src={'/images/wine-barrel-1.jpeg'} className='medium' />
                                <li><h3>All wine tasting only events include one EVOLUTION OF WINE Reidel Stem per person. 6 Wines that represent regions such as Napa Valley, California, - Walla Walla, Washington, - Bordeaux, France - Stellenbosch South Africa, - Coonawarra, Australia - Tuscany, Italy - Jumilla, Spain - Mendoza, Argentina - Colchagua, Chile, Sonoma County, California - Alexander Valley, California</h3></li>
                                <li><button className='schedule-btn'> Schedule Event</button></li>
                            </div>
                        </div>
                    </div>

                    <div className='scheduling-column'>
                        <div className={`scheduling-inner-column ${active5 ? '' : ''}`} onMouseEnter={toggleActive5} onMouseLeave={toggleActive5}>
                                <li><h1>Sparkling wines from around the World (Blind Tasting)</h1></li>
                                <li className = 'list-align' ><h3>$100 per person (must be booked in increments of 6 people) </h3></li>
                            <div className={`column-info ${active5 ? 'active' : 'hidden'}`} >
                                <li><h3>All wine tasting only events include one EVOLUTION OF WINE Reidel Stem per person</h3></li>
                                <li><h3>6 wines that represent regions such as Tamar Valley, Tasmania - Reims Champagne, France - Epernay Champagne, France - Penedes, Spain - Lombardy, Italy - Napa Valley, California, Kampal, Austria, Breede River Vally, South Africa - Prosecco, Italy - Engle, New Mexico - Trentino-Alto Adige, Italy - Willamette Valley, Oregon -</h3></li>
                                <img src={'/images/wine-barrel-1.jpeg'} className='medium' />
                                <li><h3>All wine tasting only events include one EVOLUTION OF WINE Reidel Stem per person. 6 Wines that represent regions such as Napa Valley, California, - Walla Walla, Washington, - Bordeaux, France - Stellenbosch South Africa, - Coonawarra, Australia - Tuscany, Italy - Jumilla, Spain - Mendoza, Argentina - Colchagua, Chile, Sonoma County, California - Alexander Valley, California</h3></li>
                                <li><button className='schedule-btn'> Schedule Event</button></li>
                            </div>
                        </div>
                    </div>

                    <div className='scheduling-column'>
                        <div className={`scheduling-inner-column ${active6 ? 'active' : ''}`} onMouseEnter={toggleActive6} onMouseLeave={toggleActive6}>
                                <li><h1>5 Course Food and Wine pairing Event</h1></li>
                                <li className = 'list-align' ><h3>$250 per person + tax and gratuity (must be booked in increments of 6 people) </h3></li>
                                <div className={`column-info ${active6 ? 'active' : 'hidden'}`} >
                                <li><h3>Sparkling Wine Reception</h3></li>
                                <li><h3>Delicate White wine with Food pairing</h3></li>
                                <li><h3>Robust White wine with Food pairing</h3></li>
                                <li><h3>Delicate Red wine with Food pairing</h3></li>
                                <li><h3>Robust Red wine with Food pairing</h3></li>
                                <li><h3>Dessert Wine with Food pairing</h3></li>
                                <li><h3>All Menu items are prepared by Michelin Restaurant trained wünderkind Chef, Luis Sandoval. Themed events are highly entertaining. Take a trip to Spain for dinner! How about Italian regional Food? American Classics? We can make you feel like royalty with our gracious service staff, individually printed menus, and sharing a bit of knowledge about the food and wines. We are capable of preparing for dietary restrictions with advance notice.</h3></li>
                                <li><h3>All stemware, plates, silverware, and napkins are provided by EVOLUTION OF WINE. You enjoy yourselves. We cook, clean and leave your home just like we found it. You provide a kitchen and a dining table for your party. We can also provide this same service done “butler style”. Your party continues to mingle. We bring wine and food with tray service and nobody has to sit down.</h3></li>
                                <li><img src={'/images/wine-barrel-1.jpeg'} className='medium' /></li>
                                <li><h3>All wine tasting only events include one EVOLUTION OF WINE Reidel Stem per person. 6 Wines that represent regions such as Napa Valley, California, - Walla Walla, Washington, - Bordeaux, France - Stellenbosch South Africa, - Coonawarra, Australia - Tuscany, Italy - Jumilla, Spain - Mendoza, Argentina - Colchagua, Chile, Sonoma County, California - Alexander Valley, California</h3></li>
                                <li><button className='schedule-btn'> Schedule Event</button></li>
                            </div>
                        </div>
                    </div>
                            </ul>

                </div>
            </div>
        </div>
    );
}

export default SchedulingHome;























// Change the banner to pics from my instagram with quotations from the reviews.
// ACRE MERLOT
// “500 cases made of a first class wine”

// Off to the left, put an “all” drop down menu. To include
// 1. Apparel / breakdown 
// hats, 
// short sleeve shirts, 
// long sleeve shirts, 
// women’s short sleeve shirts

// Each item will have 3 photos of the product
// Each item needs to be able to be clicked on to purchase and ask for gender, size, quantity
// Each item needs to add appropriate taxation
// Each item need to add shipping to destination

// 2. Wine tasting events
// Each item needs to have a disclaimer that 
// "All wines for each wine tasting event are chosen by David and are specifically meant to show off the typicality of wines from that region.”
// All tasting events are a maximum of 2 hours in length. 

// All Food & Wine pairing meals are a maximum of 3 hours in length. 

// Cabernet Sauvignon from around the World! (Blind Tasting) 
// $100 per person (must be booked in increments of 6 people)
// All wine tasting only events include one EVOLUTION OF WINE Reidel Stem per person6 Wines that represent regions such as Napa Valley, California, - Walla Walla, Washington, - Bordeaux, France - Stellenbosch South Africa, - Coonawarra, Australia - Tuscany, Italy - Jumilla, Spain - Mendoza, Argentina - Colchagua, Chile, Sonoma County, California - Alexander Valley, California

// Pinot Noir from around the World!
// $100 per person (must be booked in increments of 6 people)
// All wine tasting only events include one EVOLUTION OF WINE Reidel Stem per person
// 6 Wines that represent regions such as Napa Valley, California, - Cote d’ Or Burgundy, France - Hemel en Aarde, South Africa, - Adelaide Hills, Australia - Alto Adige, Italy - Mendoza, Argentina - Colchagua, Chile, Marlborough, New Zealand - Rheingau, Germany - Willamette Valley, Oregon - Sonoma Coast, California - Dundee Hills, Oregon - Monterey, California - Central Coast, California - Casablanca Valley, Chile - Central Otago, New Zealand - Martinborough, New Zealand - Franschoek Valley, South Africa - Friuli, Italy - Yarra Valley, Australia - 

// White wines from around the World! 
// $100 per person (must be booked in increments of 6 people)
// All wine tasting only events include one EVOLUTION OF WINE Reidel Stem per person
// 6 Wines that represent regions such as Napa Valley, California,  - Columbia Valley, Washington, - Burgundy, France - Stellenbosch South Africa, - Hunter Valley, Australia - Tuscany, Italy - Rioja, Spain - Mendoza, Argentina - Colchagua, Chile, Marlborough, New Zealand - Rheingau, Germany - Loire Valley, France, Margaret River, Australia - Willamette Valley, Oregon - Alsace, France - Alto Adige, Italy - Rias Baixas, Spain

// Red Wines from around the World! (Blind Tasting) 
// $100 per person (must be booked in increments of 6 people)
// All wine tasting only events include one EVOLUTION OF WINE Reidel Stem per person
// 6 Wines that represent regions such as Napa Valley, California, - Walla Walla, Washington, - Bordeaux, France - Stellenbosch South Africa, - Coonawarra, Australia - Tuscany, Italy - Jumilla, Spain - Mendoza, Argentina - Colchagua, Chile, Sonoma County, California - Alexander Valley, California - Cote du Rhone, France - Paso Robles, California - 

// Sparkling wines from around the World (Blind Tasting) 
// $100 per person (must be booked in increments of 6 people) 
// All wine tasting only events include one EVOLUTION OF WINE Reidel Stem per person
// 6 wines that represent regions such as Tamar Valley, Tasmania - Reims Champagne, France - Epernay Champagne, France - Penedes, Spain - Lombardy, Italy - Napa Valley, California, Kampal, Austria, Breede River Vally, South Africa - Prosecco, Italy - Engle, New Mexico - Trentino-Alto Adige, Italy - Willamette Valley, Oregon - 

// 5 Course Food and Wine pairing Event
// $250 per person + tax and gratuity (must be booked in increments of 6 people) 
// Sparkling Wine Reception
// Delicate White wine with Food pairing
// Robust White wine with Food pairing
// Delicate Red wine with Food pairing
// Robust Red wine with Food pairing
// Dessert Wine with Food pairing

// All Menu items are prepared by Michelin Restaurant trained wünderkind Chef, Luis Sandoval. Themed events are highly entertaining. Take a trip to Spain for dinner! How about Italian regional Food? American Classics? We can make you feel like royalty with our gracious service staff, individually printed menus, and sharing a bit of knowledge about the food and wines. We are capable of preparing for dietary restrictions with advance notice. 

// All stemware, plates, silverware, and napkins are provided by EVOLUTION OF WINE. You enjoy yourselves. We cook, clean and leave your home just like we found it. You provide a kitchen and a dining table for your party. We can also provide this same service done “butler style”. Your party continues to mingle. We bring wine and food with tray service and nobody has to sit down. 

// Describing the Indescribable Event (blindfolded sensory evaluation)
// $150 per person (must be booked in increments of 6 people)
// All wine tasting only events include one EVOLUTION OF WINE Reidel Stem per person
// 25 separate glasses are infused with typical aromatics from white and red wines. Each guest is blindfolded and given the chance to smell and guess what is in the glass. A prize is given to the person that achieves the highest number of correct responses. 
// Afterwards, 6 wines with exceptional aromatics are shared to further the sensory memory process. 

// 3. Evolution of Wine Club (Bi-Monthly)
// Every other month you’ll receive 2 bottles that are hand selected from our daily reviews. Our intention is to send you two wines of extreme merit from wineries the world over. Something amazing that might not come from your backyard, but represents an “as good as it gets bottle” from the region it’s from. You want all white wines? We can do it! You want all red wines? We can do it! All Bubbles? All Rose’? One White, One Red? We want to be the best Wine Club you have ever experienced. It’s not just another bottle of wine. It’s a hand selected, conscientiously chosen, amazing bottle of wine. 

// All wines are priced to be competitive with the best pricing available anywhere. A great wine club shouldn’t gouge it’s loyal clientele. We are here to make filling your wine assortment as easy and economical as possible. 

// ALL WHITES are nice club 
// $75 + tax + delivery

// ALL REDS are nice club
// $75 + tax + delivery

// LET’S TRY BOTH club
// $75 + tax + delivery

// BUBBLES ARE MY BESTIES club
// $100 + tax + delivery

// ROSE’ IS ALWAYS IN SEASON club
// $65 + tax + delivery

// DAVE’S ABSOLUTE FAVES club (4 bottles of whatever made me the happiest this month)
// $200 + tax + delivery