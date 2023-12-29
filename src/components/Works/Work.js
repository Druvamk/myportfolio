import React from 'react';
import './Work.css';
import logoReact from '../../assests/p1.png';
import p1 from '../../assests/p2.png';
import logocss from '../../assests/p3.png';
import p2 from '../../assests/p5.png';
import logojavascript from '../../assests/wf.png';

const Work = () => {
  return (
    <section id='skills1'>
        <span>
            <p className='skilltitle'>My Protfolio Works</p>
        </span>
        <div className='skillbars'>
            <div className='skillbar'>
                <img src={p1} alt='c programing' className='skillbarimg1'/>
                <div className='skillbarText'>
                  <h2 className='h2'>Color changer project</h2>
                </div>
            </div>
            
          
            <div className='skillbar'>
                <img src={logocss} alt='css' className='skillbarimg1'/>
                <div className='skillbarText'>
                  <h2 className='h2'>Message Displayer</h2>
                </div>
            </div>
            <div className='skillbar'>
                <img src={logojavascript} alt='javascriplt' className='skillbarimg1'/>
                <div className='skillbarText'>
                  <h2 className='h2'>Whether Forecasting</h2>
                </div>
            </div>
            
            <div className='skillbar'>
                <img src={logoReact} alt='React' className='skillbarimg1'/>
                <div className='skillbarText'>
                  <h2 className='h2'>Basic caculator</h2>
                </div>
            </div>
            <div className='skillbar'>
                <img src={p2} alt='Java programing' className='skillbarimg1'/>
                <div className='skillbarText'>
                  <h2 className='h2'>My Protfolio Project</h2>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Work
