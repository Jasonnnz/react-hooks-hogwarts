import PigImage from './PigImage'
import augustus_gloop from "../assets/augustus_gloop.jpg";
import babe from "../assets/babe.jpg";
import bailey from "../assets/bailey.jpg";
import cherub from "../assets/cherub.jpg";
import galaxy_note from "../assets/galaxy_note.jpg";
import leggo_my_eggo from "../assets/leggo_my_eggo.jpg";
import peppa from "../assets/peppa.jpg";
import piggy_smalls from "../assets/piggy_smalls.jpg";
import piglet from "../assets/piglet.jpg";
import porkchop from "../assets/porkchop.jpg";
import trouble from "../assets/trouble.jpg";
import truffle_shuffle from "../assets/truffle_shuffle.jpg"; 

function PigList({hogs}){
    const hogImages = {"Babe": babe, "Porkchop": porkchop, "Cherub": cherub, "Piggy smalls": piggy_smalls, "Trouble": trouble, "Piglet": piglet, "Peppa": peppa, "Truffle Shuffle": truffle_shuffle, "Bailey": bailey, "Galaxy Note": galaxy_note, "Leggo My Eggo": leggo_my_eggo, "Augustus Gloop": augustus_gloop}
    const hogList = hogs.map((hog, index) => {{ 
        for (let key in hogImages){
            if (key === hog.name){
                return <PigImage key={index} hog={hog} image={hogImages[key]} />
            }
        }
    }
    })
    return (
        <div>
            <h1>Pigs:</h1>
            <div className="ui grid container">
                {hogList}
            </div>
        </div>
    );
}

export default PigList;