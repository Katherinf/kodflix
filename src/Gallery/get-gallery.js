import blackmirror from './img/blackmirror.jpeg';
import breakingbad from './img/breakingbad.jpeg';
import deathnote from './img/deathnote.jpeg';
import gameofthrones from './img/gameofthrones.jpeg';
import thewalkingdeath from './img/thewalkingdeath.jpeg';
import thewire from './img/thewire.jpeg';

export default function getGallery() {
    return [
       { id: 'img1', title: 'Black Mirror', img: blackmirror },
       { id: 'img2', title: 'Breaking Bad', img: breakingbad },
       { id: 'img3', title: 'Death Note', img: deathnote },
       { id: 'img4', title: 'Game of Thrones', img: gameofthrones },
       { id: 'img5', title: 'The Walkig Death', img: thewalkingdeath },
       { id: 'img6', title: 'The Wire', img: thewire },
    ];
}