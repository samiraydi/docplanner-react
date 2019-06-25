import React  from 'react'
import Main from './main.css';
import image from './sygnet.png'
import market from './screen-marketplace@2x.png'
import saas from './screen-saas@2x.png'

const main = () => {
  return (
    <div>
      <main>

<div className="intro">
   <img src={image}/>
    <h1>Making the healthcare experience more human</h1>
</div>
<div className="cards">

    <div className="card1">
        <p className="para">We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.</p>

        <div className="patients">
            <span>For patients</span>
            <h2>Find a doctor, book a visit and solve any health-related doubt</h2>

            <div className="select-and-img">
                <select name="" id="select">
                      <option value="">choose country</option>
                      <option value="1"></option>
                     <option value="2"></option>
                     <option value="3"></option>
               </select>

                <div className="image-div">
                <img src={market} id="logo1"/>
                    
                </div>
            </div>
        </div>
    </div>
    <div>
        <p className="para">We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters:
            their patients</p>

        <div className="doctors doc-color">
            <span>For doctors</span>
            <h2>Save time managing visits and cut no-shows by half</h2>
            <div className="image-div"> <img src={saas} id="logo1"/></div>
        </div>
    </div>
</div>

</main>
    </div>
  )
}

export default main;