import React, {useState, useEffect} from 'react'


function MyComponent5(){
   
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    
    const images = [img1]


    return(
        <div>
        {images.map((src, i) => (
            <img className='image' key={i} src={src} alt={`img-${i}`} />
        ))}
        </div>
    )
}

export default MyComponent5