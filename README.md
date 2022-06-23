REACT STYLING

Harici bir dosya icersinde olusturulan bir component export default ile proje icerisinde herhangi bir yerde kullanima kullanima acimiş olur. Kullanmak icin hedef
dosyada import .... from "./..." ile import yapmak yeterlidir.


React,JSX kullanmaktadir. JSX'de, HTMl elementleri dogrudan JS icerisinde kullanilabilir.


Componentler, HTML,CSS ve JS kodlarindan meydana gelmiş bir kod parcacigidir.

Bir componentin return () kismi ise JSX kodlari icerir.

JSX'in kendine gore bazi kurallari vardir. Ornegin bir component eger birden fazla html elementi dondurmesi gerekirse bunlari tek bir container elemani ile sarmayalarak dondurmelidir.container icin div, article, header, <> v.b herhangi bir element kullanilabilir.

App componentinin tanimlanmasi

JSX stillendirme yapilmayacaksa container icin <> kullanilabilir.

function App(){
    return (
        <>
        <Header />
        <Content />
        <Footer />
        </>
    );
}


JSX'de stillendirme farklli sekillerde yapilabilr.
1-) Harici CSS sayfalari ile (index.css, app.css v.b)
2-) Inline stillendirme ile (style = {{color:"red"}})
3- )Local veya global degiskenler ile.

NOTLAR:
Stillendirme icin property-value(object) yapisi kullanilir. Property isimlerinde camelCase kullanimalidir. Class isimleri icin className kullanilir.
Material UI, Styled Component, Sass, Bootstrap v.b harici kutuphaneler kullanilabilir.


Reactte dahili bulunan bir resmi kullanmak için import etmek gerekmektedir. Kullanımı aşağıdaki gibidir.

import React from 'react'
import kus from './img/kus.jpg'   //Dahili kaynak kullanımı için

const Content = () => {
  return (
    <div>
        <h2>React JS</h2>
        <p>React, kullanici ara birimi tasarlamak için kullanilan bir JS kutuphanesidi.</p>
        <img src="https://cdn.pixabay.com/photo/2017/02/15/13/40/tulips-2068692__340.jpg" alt="" />  //Dış kaynak kullanımı
        <img src={kus} alt="" />                                                                     //Dahili kaynak kullanımı için
    </div>
  )
}

export default Content;


Inline stillendirme ile (style = {{color:"red"}}) :

const Content = () => {
    const imgStyle = {
        display: "block",
        width:"500px",
        margin: "1rem auto"
    }
  return (
    <div>
        <h2 style={{color:"red"}}>React JS</h2>
        <p style={{backgroundColor:"lightgreen"}}>React, kullanici ara birimi tasarlamak için kullanilan bir JS kutuphanesidi.</p>
        <img style={imgStyle} src="https://cdn.pixabay.com/photo/2017/02/15/13/40/tulips-2068692__340.jpg" alt="img1" />
        <img style={imgStyle} src={kus} alt="img2"/>
    </div>
  )
}

export default Content;


3- )Local veya global degiskenler ile.

import "./Content.css";

const Content = () => {
    const imgStyle = {
        display: "block",
        width:"500px",
        margin: "1rem auto"
    }
  return (
    <div>
        <h2 style={{color:"red"}}>React JS</h2>
        <p style={{backgroundColor:"lightgreen"}}>React, kullanici ara birimi tasarlamak için kullanilan bir JS kutuphanesidi.</p>
        <img style={imgStyle} src="https://cdn.pixabay.com/photo/2017/02/15/13/40/tulips-2068692__340.jpg" alt="img1" />
        <img style={imgStyle} src={kus} alt="img2"/>
        <p className="par-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum libero, dolores laudantium beatae esse ipsum consequuntur, quos maxime, tempore itaque natus! Expedita accusantium dolorum inventore sequi nostrum fugit sit quas veniam voluptas. Suscipit fuga id voluptas officiis ipsa unde enim!</p>
    </div>
  )
}

export default Content;

Content.css

.par-1{
    font-size: 1.2rem;
    font-family: 'Courier New', Courier, monospace;
    text-align: justify;
    color: blue;
}

index.CSS

.par-1{
  color: red;
}

NOT:Sayfada index.css de bulunan par-1 rengi görünür. Çünkü parent alt dosyaları baskılar.

CSS stillendirmeliri yaparken tüm bu stillendirmelerin tek bir dosyada birlesecigini unutmamak gerekir. Parent'daki bir stil asagidaki stilleri ezebilir. Bunun icin class isimlerinin her componente gore ayri ayri verilmesi daha dogru bir yaklasim olabilir. Ornegin content-par gibi 