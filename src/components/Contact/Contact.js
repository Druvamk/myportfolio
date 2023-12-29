
import './Contact.css'
import s1 from '../../assests/fb.png'
import s2 from '../../assests/insta.png'




const Contact = () => {
 
  return (
    <div id='contact'>
        <h1 className='contacttitle'>Contact ME</h1>

        <form className="contactform" >
          <input type='text' className='name' placeholder='Your name' name='your_name'/>
          <input type='email' className='email' placeholder='Your email' name='your_email'/>
          <textarea name='Message' rows='5' placeholder='message' className='msg'/>
          <button type='submit' value="submit" className='submitbutton'>Submit</button>
          <div className='links'>
            <img src={s1} alt='fb' className='link'/>
            <img src={s2} alt='insta' className='link'/>
          </div>
        </form>
    </div>
  )
}

export default Contact;
