import {useState} from 'react'

function Avatar  ({ id, name = "👷‍♀️", size }){
    const [enabled, setEnabled] = useState(true);
    const src = `https://randomuser.me/api/portraits/women/${id}.jpg`;
  
    let pictureClassName = "";
    if (size === "small") {
      pictureClassName = "is-small";
    } else if (size === "large") {
      pictureClassName = "is-large";
    }
  
    const imgClassName = enabled ? "" : "disabled";
  
    return (
      <picture className={pictureClassName}>{id ? (
          <img alt='error' onClick={() => {setEnabled(!enabled); }} className={imgClassName} src={src} />
        ) : 
        (
          <i>Sin imagen</i>
        )}
        <strong>{enabled ? name : "Desactivada"}</strong>
      </picture>
    );
  }

  export default Avatar