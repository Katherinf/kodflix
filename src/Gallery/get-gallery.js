import blackmirror from './img/blackmirror.jpeg';
import breakingbad from './img/breakingbad.jpeg';
import deathnote from './img/deathnote.jpeg';
import gameofthrones from './img/gameofthrones.jpeg';
import thewalkingdeath from './img/thewalkingdeath.jpeg';
import thewire from './img/thewire.jpeg';

export default function getGallery() {
    return [
       { id: 'black-mirror', title: 'Black Mirror', img: blackmirror, synopsis: 'Black Mirror is a British science fiction anthology television series created by Charlie Brooker, with Brooker and Annabel Jones serving as the programme showrunners. It examines modern society, particularly with regard to the unanticipated consequences of new technologies.'}, 
       { id: 'breaking-bad', title: 'Breaking Bad', img: breakingbad, synopsis: 'Mild-mannered high school chemistry teacher Walter White thinks his life can\'t get much worse. His salary barely makes ends meet, a situation not likely to improve once his pregnant wife gives birth, and their teenage son is battling cerebral palsy.' },
       { id: 'death-note', title: 'Death Note', img: deathnote, synopsis: 'Death Note is a Japanese manga series written by Tsugumi Ohba and illustrated by Takeshi Obata.' },
       { id: 'game-of-thrones', title: 'Game of Thrones', img: gameofthrones, synopsis: 'George R.R. Martin\'s best-selling book series "A Song of Ice and Fire" is brought to the screen as HBO sinks its considerable storytelling teeth into the medieval fantasy epic.' },
       { id: 'the-walking-death', title: 'The Walking Death', img: thewalkingdeath, synopsis: 'Based on the comic book series written by Robert Kirkman, this gritty drama portrays life in the months and years that follow a zombie apocalypse.' },
       { id: 'the-wire', title: 'The Wire', img: thewire, synopsis: 'This series looks at the narcotics scene in Baltimore through the eyes of law enforcers as well as the drug dealers and users. Other facets of the city that are explored in the series are the government and bureaucracy, schools and the news media.' },
    ];
}