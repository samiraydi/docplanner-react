import React from 'react';
import Finfin from './finfin.css';
import image from './warsaw.png';
import image1 from './rome.png';
import image2 from './mexico-city.png';
import image3 from './istanbul.png';
import image4 from './curitiba.png';
import image5 from './barcelona.png';
const finfin = () => {
  return (
    <div>
      <div class="finfin">
        <div class="finfin1">
            <div id="fin">
                <div class="fin1">
                  <img src={image} className="img123" />
                </div>
                <div class="button2">
                    <div class="button">
                        <p style={{color: "#8f8f8f"}}> Warsaw</p>
                    </div>
                    <div class="button1">
                        <button>see openings</button>
                    </div>
                </div>
            </div>
            <div id="fin">
                <div class="fin1">
                <img src={image1} className="img123"/>
                </div>
                <div class="button2">
                    <div class="button">
                        <p style={{color: "#8f8f8f"}}>roma</p>
                    </div>
                    <div class="button1">
                        <button>see openings</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="finfin2">
            <div id="fin">
                <div class="fin1">
                <img src={image5} className="img123"/>
                </div>
                <div class="button2">
                    <div class="button">
                        <p style={{color: "#8f8f8f"}}> barcelona</p>
                    </div>
                    <div class="button1">
                        <button>see openings</button>
                    </div>
                </div>
            </div>
            <div id="fin">
                <div class="fin1">
                <img src={image2} className="img123"/>
                </div>
                <div class="button2">
                    <div class="button">
                        <p style={{color: "#8f8f8f"}}>mexico city</p>
                    </div>
                    <div class="button1">
                        <button>see openings</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="finfin3">
            <div id="fin">
                <div class="fin1">
                <img src={image3} className="img123"/>
                </div>
                <div class="button2">
                    <div class="button">
                        <p style={{color: "#8f8f8f"}}> istanbul</p>
                    </div>
                    <div class="button1">
                        <button>see openings</button>
                    </div>
                </div>
            </div>
            <div id="fin">
                <div class="fin1">
                <img src={image4} className="img123"/>
                </div>
                <div class="button2">
                    <div class="button">
                        <p style={{color: "#8f8f8f"}}>curitiba</p>
                    </div>
                    <div class="button1">
                        <button>see openings</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default finfin;