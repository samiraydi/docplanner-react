import React from 'react';
import Platform from './platform.css';
import Image1 from './ezgif.com-webp-to-png (1).png'
import Image2 from './flag@2x.png'
import Image3 from './patients@2x.png'
import Image4 from './visits.png'
import Image5 from './doctors.png'


const platform = () => {
  return (
    <div>
    <div className="platform">
        <div className="font">
            <div className="tex"><strong>the world's <br /> biggest healthcare platform </strong><br /><br />
                <div className="tex1">We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries</div>
                <div className="fontimg">
                  <img className="hh" src={Image1}/>
                  </div>
            </div>
        </div>
        <div className="border">
            <div className="border11">
                <div className="border1">
                <img className="bor1" src={Image2}/>
                    <div className="Leader">
                        <p style={{color: "#00b39b"}}>Leader in <br /> 10 countries</p>
                    </div>
                    <div className="Leader1">
                        <p> Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile</p>
                    </div>

                </div>
                <div className="border2">
                <img className="bor2" src={Image3}/>
                    <div className="Leader">
                        <p style={{color: "#00b39b"}}> 30 million unique <br /> patients</p>
                    </div>
                    <div className="Leader1">
                        <p> visit us every month</p>
                    </div>
                </div>
            </div>
            <div className="border22">
                <div className="border3">
                <img className="bor3" src={Image4}/>
                    <div className="Leader">
                        <p style={{color: "#00b39b"}}> 1.5 million <br /> appointments</p>
                    </div>
                    <div className="Leader1">
                        <p>booked last month</p>
                    </div>
                </div>
                <div className="border4">
                <img className="bor4" src={Image5}/>
                    <div className="Leader">
                        <p style={{color: "#00b39b"}}>2 million active <br /> doctors</p>
                    </div>
                    <div className="Leader1"><p>in our solutions</p></div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default platform;