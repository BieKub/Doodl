import React, {useState} from 'react'
import styles from "./ChooseAvatar.module.css";
import img1 from './assets/Billy.jpg'
import img2 from './assets/Brandon.jpg'
import img3 from './assets/Brandon2.jpg'
import img4 from './assets/Chris.jpg'
import img5 from './assets/Jason.jpg'
import img6 from './assets/Jason2.jpg'
import img7 from './assets/Louis.jpg'
import img8 from './assets/Louis2.jpg'
import img9 from './assets/Nick.jpg'
import img10 from './assets/Nick2.jpg'
import img11 from './assets/Ryan.jpg'
import img12 from './assets/Ryan2.jpg'
import img13 from './assets/trev.jpg'
import img14 from './assets/Yankees.jpg'
import leftArrow from './assets/arrow-left.png'
import rightArrow from './assets/arrow-right.png'



function ChooseAvatar(){

    const [index, setIndex] = useState(0);

    
    const avatars = [img1, img2, img3, img4, img5, img6, 
          img7, img8, img9, img10, img11, img12, img13, img14];

    function selectLeft(){
        setIndex((prev) => prev === 0 ? avatars.length - 1 : prev - 1)
    }

    function selectRight(){
        setIndex(prev => prev === avatars.length - 1 ? 0 : prev + 1)
    }

    return (
    <div className={styles.avatarBox}>
        <button className={styles.arrow} onClick={selectLeft}>
        <img src={leftArrow} alt="Left" />
        </button>

        <img className={styles.avatar} src={avatars[index]} alt="Avatar" />

        <button className={styles.arrow} onClick={selectRight}>
        <img src={rightArrow} alt="Right" />
        </button>
    </div>
    );

}

export default ChooseAvatar;