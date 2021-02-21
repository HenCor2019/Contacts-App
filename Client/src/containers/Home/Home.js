import React, {Fragment} from 'react'
import Banner from '../../components/Home/Banner/Banner'
import img01 from '../../img/busca_contactos.svg'
import img02 from '../../img/edita_contactos.svg'
import img03 from '../../img/guarda_contactos.svg'
import './Home.css'
import ImgInformation from '../../components/Home/ImgInformation/ImgInformation'

const MESSAGE_INFORMATION = '¿Qué hacemos en HenCor contactos?'
 
const INFORMATION_IMAGES = [ 
  {img: img01, message: 'Encuentra contactos fácilmente', id: 0},
  {img: img02, message: 'Edita contactos fácilmente', id:1},
  {img: img03, message: 'Guarda contactos fácilmente', id:2}
]

export default function Home(){
  return(
    <Fragment>
      <div className="home-information-top">
        <Banner />
      </div>
      <div className="home-information-down">
        <h1 className='home-information-down-title'>
           { MESSAGE_INFORMATION }
        </h1>
        <div className='home-imgs-information'>
          {INFORMATION_IMAGES.map(({ img, message, id }) => 
           <ImgInformation key={id} img={img} message={message} />)
          }
        </div>
      </div>
    </Fragment>
  )
}
