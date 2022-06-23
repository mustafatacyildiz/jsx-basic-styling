import React from 'react'
//Dahili stillendirme
import kus from './img/kus.jpg'
//Harici Stillendirme
import "./Content.css";



//* JSX'de stillendirme farklli sekillerde yapilabilr.
//* 1-) Harici CSS sayfalari ile (index.css, app.css v.b)
//* 2-) Inline stillendirme ile (style = {{color:"red"}})
//* 3- )Local veya global degiskenler ile.

//! NOTLAR:
//* Stillendirme icin property-value(object) yapisi kullanilir.
//* property isimlerinde camelCase kullanimalidir.
//* class isimleri icin className kullanilir.
//* Material UI, Styled Component, Sass, Bootstrap v.b harici kutuphaneler kullanilabilir.


const Content = () => {
    const imgStyle = {
        display: "block",
        width:"500px",
        margin: "1rem auto"
    }
  return (
    <div className="content">
        <h2 style={{color:"red"}}>React JS</h2>
        <p style={{backgroundColor:"lightgreen"}}>React, kullanici ara birimi tasarlamak için kullanilan bir JS kutuphanesidi.</p>
        <img style={imgStyle} src="https://cdn.pixabay.com/photo/2017/02/15/13/40/tulips-2068692__340.jpg" alt="img1" />
        <img style={imgStyle} src={kus} alt="img2"/>
        <p className="par-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum libero, dolores laudantium beatae esse ipsum consequuntur, quos maxime, tempore itaque natus! Expedita accusantium dolorum inventore sequi nostrum fugit sit quas veniam voluptas. Suscipit fuga id voluptas officiis ipsa unde enim!</p>
    </div>
  )
}

export default Content;