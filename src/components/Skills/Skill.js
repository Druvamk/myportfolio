import React from 'react';
import './Skill.css';
import logoReact from '../../assests/logo512.png';
import logoc from '../../assests/c.png';
import logocss from '../../assests/css.png';
import logojava from '../../assests/java.png';
import logojavascript from '../../assests/javascript.png';
import logojQuery from '../../assests/jQuery.png';
import logohtml from '../../assests/html.png';
const Skill = () => {
  return (
    <section id='skills'>
        <span>
            <p className='skilltitle'>What I do</p>
            <p className='skilldescrption'>I am well skilled in Html,css,javascript,React js and I am good java programming</p>
        </span>
        <div className='skillbars'>
            <div className='skillbar'>
                <img src={logoc} alt='c programing' className='skillbarimg'/>
                <div className='skillbarText'>
                  <h2 className='h2'>C Programming</h2>
                  <p>I know c programing Upto the pointers</p>
                </div>
            </div>
            <div className='skillbar'>
                <img src={logojava} alt='Java programing' className='skillbarimg'/>
                <div className='skillbarText'>
                  <h2 className='h2'>Java Programming</h2>
                  <p>I know core Java</p>
                </div>
            </div>
            <div className='skillbar'>
                <img src={logohtml} alt='html' className='skillbarimg'/>
                <div className='skillbarText'>
                  <h2 className='h2'>Html</h2>
                  <p>I know Intermediate Html</p>
                </div>
            </div>
            <div className='skillbar'>
                <img src={logocss} alt='css' className='skillbarimg'/>
                <div className='skillbarText'>
                  <h2 className='h2'>CSS</h2>
                  <p>I know Intermediate CSS</p>
                </div>
            </div>
            <div className='skillbar'>
                <img src={logojavascript} alt='javascriplt' className='skillbarimg'/>
                <div className='skillbarText'>
                  <h2 className='h2'>javascript</h2>
                  <p>I know Intermediate javascript</p>
                </div>
            </div>
            <div className='skillbar'>
                <img src={logojQuery} alt='jQuery' className='skillbarimg'/>
                <div className='skillbarText'>
                  <h2 className='h2'>JQuery</h2>
                  <p>I know Basics javaQuery</p>
                </div>
            </div>
            <div className='skillbar'>
                <img src={logoReact} alt='React' className='skillbarimg'/>
                <div className='skillbarText'>
                  <h2 className='h2'>React JS</h2>
                  <p>I know Basics React JS</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skill
