import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
const banner = {

    images: [
        {
            _id: uuidv4(),
            name: 'Prazo de Roriz',
            image: ['/images/bannerImgs/1.PrazoDeRoriz.png'],
            description: 'Ancient schist soils',
        },
        {
            _id: uuidv4(),
            name: 'Chateau Puy Blanquet',
            image: ['/images/bannerImgs/2.ChateauPuyBlanquet.png'],
            description: 'Completely saturates the palate',
        },
        {
            _id: uuidv4(),
            name: 'Seriously Old Dirt',
            image: ['/images/bannerImgs/3.SeriouslyOldDirt.png'],
            description: 'Million year old soil',
        },
        {
            _id: uuidv4(),
            name: 'Scribe Rose',
            image: ['/images/bannerImgs/4.ScribeRose.png'],
            description: 'Darling of the somm community',
        },
        {
            _id: uuidv4(),
            name: 'Abacela',
            image: ['/images/bannerImgs/5.Abacela.png'],
            description: 'Jumped from the glass',
        },
        {
            _id: uuidv4(),
            name: 'Acre',
            image: ['/images/bannerImgs/6.Acre.png'],
            description: 'Wünderkind winemaker',
        },
        {
            _id: uuidv4(),
            name: 'Chateau Cantenac Brown',
            image: ['/images/bannerImgs/7.ChateauCanatenacBrown.png'],
            description: 'Focus on sustainable farming',
        },
        {
            _id: uuidv4(),
            name: 'J. Schram',
            image: ['/images/bannerImgs/8.J.Schram.png'],
            description: 'Hand harvested fruit',
        },
        {
            _id: uuidv4(),
            name: 'Pewsey Vale',
            image: ['/images/bannerImgs/9.PewseyVale.png'],
            description: 'Liquid perfection',
        },
        {
            _id: uuidv4(),
            name: 'Massican',
            image: ['/images/bannerImgs/10.Massican.png'],
            description: 'Gorgeous lemon and grapefruit',
        },
        {
            _id: uuidv4(),
            name: 'Shaw + Smith',
            image: ['/images/bannerImgs/11.Shaw&Smith.png'],
            description: 'Sandy loam over clay and quartzite',
        },
        {
            _id: uuidv4(),
            name: 'Favia',
            image: ['/images/bannerImgs/12.Favia.png'],
            description: 'Inky purple in color',
        },
        {
            _id: uuidv4(),
            name: 'Peyrassol',
            image: ['/images/bannerImgs/13.Peyrassol.png'],
            description: '800 year old majestic winery',
        },
        {
            _id: uuidv4(),
            name: 'Hundred Acre',
            image: ['/images/bannerImgs/14.HundredAcre.png'],
            description: 'Pursuit of perfection',
        },
        {
            _id: uuidv4(),
            name: 'Andrew Will',
            image: ['/images/bannerImgs/15.AndrewWill.png'],
            description: 'Abundance of sophistication',
        },
        {
            _id: uuidv4(),
            name: 'Antidoto',
            image: ['/images/bannerImgs/16.Antidoto.png'],
            description: 'Blueberries, lavender, violets',
        },
        {
            _id: uuidv4(),
            name: 'Clos De Los Siete',
            image: ['/images/bannerImgs/17.ClosDeLosSiete.png'],
            description: 'Incredible richness and balance',
        },
        {
            _id: uuidv4(),
            name: 'Abadia Retuerta',
            image: ['/images/bannerImgs/18.AbadiaRetuerta.png'],
            description: 'Shot out of a cannon towards stardom',
        },
        {
            _id: uuidv4(),
            name: 'Ser Lapo',
            image: ['/images/bannerImgs/19.SerLapo.png'],
            description: 'Experience the vineyard in our glass',
        },
        {
            _id: uuidv4(),
            name: 'Birichino',
            image: ['/images/bannerImgs/20.Birichino.png'],
            description: 'They choose the road less traveled',
        },
        {
            _id: uuidv4(),
            name: 'Jiménez-Landi',
            image: ['/images/bannerImgs/21.Jimenez-Landi.png'],
            description: 'Clean, pure, fruit expression',
        },
        {
            _id: uuidv4(),
            name: 'Murder Ridge',
            image: ['/images/bannerImgs/22.MurderRidge.png'],
            description: 'Microscopic producer in this microscopic region',
        },
        {
            _id: uuidv4(),
            name: 'Las Gundinas',
            image: ['/images/bannerImgs/23.LasGundinas.png'],
            description: 'The vintage was a blessing from above',
        },
        {
            _id: uuidv4(),
            name: 'Sancerre',
            image: ['/images/bannerImgs/24.Sancerre.png'],
            description: '11 generations have passed the baton of knowledge',
        },
        {
            _id: uuidv4(),
            name: 'Kupe',
            image: ['/images/bannerImgs/25.Kupe.png'],
            description: 'Elusive little brat that decided to be amazing',
        },
        {
            _id: uuidv4(),
            name: 'Meeker',
            image: ['/images/bannerImgs/26.Meeker.png'],
            description: 'Deeply rooted in the soil',
        },
        {
            _id: uuidv4(),
            name: 'Touran',
            image: ['/images/bannerImgs/27.Touran.png'],
            description: 'It’s wearing big boy pants',
        },
        {
            _id: uuidv4(),
            name: 'Pouilly-Fuisse',
            image: ['/images/bannerImgs/28.Pouilly-Fuisse.png'],
            description: 'Creamy, baked apple, delicious wines',
        },
        {
            _id: uuidv4(),
            name: 'Domaine Drouhin',
            image: ['/images/bannerImgs/29.DomaineDrouhin.png'],
            description: 'A standout amongst it’s peers',
        },
        {
            _id: uuidv4(),
            name: 'Clos Apalta',
            image: ['/images/bannerImgs/30.ClosApalta.png'],
            description: 'The wine washes away every worry in the world',
        },
        {
            _id: uuidv4(),
            name: 'Ornellaia 25',
            image: ['/images/bannerImgs/31.Ornellaia.png'],
            description: 'Special occasions and important friendships',
        },
        {
            _id: uuidv4(),
            name: 'Leclerc Briant',
            image: ['/images/bannerImgs/32.LeclercBriant.png'],
            description: 'Biodynamic producer from Champagne',
        },
        {
            _id: uuidv4(),
            name: 'Leeuwin Estate',
            image: ['/images/bannerImgs/33.LeeuwinEstate.png'],
            description: 'Most consistently extraordinary chardonnay in the world',
        },
        {
            _id: uuidv4(),
            name: 'Verite',
            image: ['/images/bannerImgs/34.Verite.png'],
            description: 'Beyond all expectations',
        },
        {
            _id: uuidv4(),
            name: 'Clos Des Foretes',
            image: ['/images/bannerImgs/35.ClosDesForetes.png'],
            description: 'Awaiting it’s ultimate revealing of greatness',
        },
        {
            _id: uuidv4(),
            name: 'La Bruja De Rozas',
            image: ['/images/bannerImgs/36.LaBrujaDeRozas.png'],
            description: 'Tiny vineyards speckle the landscape',
        },
        {
            _id: uuidv4(),
            name: 'Boekenhoutskloof',
            image: ['/images/bannerImgs/37.Boekenhoutskloof.png'],
            description: 'South African Grand Cru',
        },
        {
            _id: uuidv4(),
            name: 'Turley',
            image: ['/images/bannerImgs/38.Turley.png'],
            description: 'Organically farmed old vine fruit',
        },
        {
            _id: uuidv4(),
            name: 'Leirana',
            image: ['/images/bannerImgs/39.Leirana.png'],
            description: 'Peaches, citrus, mineral and salinity',
        },
        {
            _id: uuidv4(),
            name: 'Kumeu Village',
            image: ['/images/bannerImgs/40.KumeuVillage.png'],
            description: 'Handpicked, wild yeast fermented, extended lees aging',
        },
        {
            _id: uuidv4(),
            name: 'Pride',
            image: ['/images/bannerImgs/41.Pride.png'],
            description: 'Consistent magnificence in the glass',
        },
        {
            _id: uuidv4(),
            name: 'DuMOL',
            image: ['/images/bannerImgs/42.DuMOL.png'],
            description: 'Writing a wonderful story with their wines',
        },
        {
            _id: uuidv4(),
            name: 'The FMC',
            image: ['/images/bannerImgs/43.TheFMC.png'],
            description: '50 year old bush vines',
        },
        {
            _id: uuidv4(),
            name: 'Paradigm',
            image: ['/images/bannerImgs/44.Paradigm.png'],
            description: 'Refreshingly refined dry finish',
        },
        
    ],
};
export default banner;









// 1. Prazo de Roriz - “Ancient schist soils”

// 2. Chateau Puy Blanquet - “Completely saturates the palate”

// 3. Seriously Old Dirt - “Million year old soil”

// 4. Scribe Rosé - “Darling of the somm community”

// 5. Abacela - “Jumped from the glass”

// 6. Acre - “Wünderkind winemaker”

// 7. Chateau Cantenac Brown - “Focus on sustainable farming”

// 8. J. Schram - “Hand harvested fruit”

// 9. Pewsey Vale - “Liquid perfection”

// 10. Massican - “Gorgeous lemon and grapefruit”

// 11. Shaw + Smith - “Sandy loam over clay and quartzite”

// 12. Favia - “Inky purple in color”

// 13. Peyrassol - “800 year old majestic winery”

// 14. Hundred Acre - “Pursuit of perfection”

// 15. Andrew Will - “Abundance of sophistication”

// 16. Antidoto - “Blueberries, lavender, violets”

// 17. Clos De Los Siete - “Incredible richness and balance”

// 18. Abadia Retuerta - “Shot out of a cannon towards stardom”

// 19. Ser Lapo - “Experience the vineyard in our glass”

// 20. Birichino - “They choose the road less traveled”

// 21. Jiménez-Landi - “Clean, pure, fruit expression”

// 22. Murder Ridge - “Microscopic producer in this microscopic region”

// 23. Las Gundinas - “The vintage was a blessing from above”

// 24. Sancerre - “11 generations have passed the baton of knowledge”

// 25. Kupe - “Elusive little brat that decided to be amazing”

// 26. Meeker - “Deeply rooted in the soil”

// 27. Touran - “It’s wearing big boy pants”

// 28. Pouilly-Fuisse - “Creamy, baked apple, delicious wines”

// 29. Domaine Drouhin - “A standout amongst it’s peers”

// 30. Clos Apalta - “The wine washes away every worry in the world”

// 31. Ornellaia 25 - “Special occasions and important friendships”

// 32. Leclerc Briant - “Biodynamic producer from Champagne”

// 33. Leeuwin Estate - “Most consistently extraordinary chardonnay in the world”

// 34. Verite - “Beyond all expectations”

// 35. Clos Des Foretes - “Awaiting it’s ultimate revealing of greatness”

// 36. La Bruja De Rozas - “Tiny vineyards speckle the landscape”

// 37. Boekenhoutskloof - “South African Grand Cru”

// 38. Turley - “Organically farmed old vine fruit”

// 39. Leirana - “Peaches, citrus, mineral and salinity”

// 40. Kumeu Village - “Handpicked, wild yeast fermented, extended lees aging”

// 41. Pride - “Consistent magnificence in the glass”

// 42. DuMOL - “Writing a wonderful story with their wines” 

// 43. The FMC - “50 year old bush vines”

// 44. Paradigm - “Refreshingly refined dry finish”