import './footer.css'
import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs'

export default function Footer(){
    return(
        <footer className='footer_area'>
            <div className='social_media'>
                <BsFacebook color='#FFF' size={25}/>
                <BsInstagram color='#FFF' size={25}/>
                <BsTwitter color='#FFF' size={25}/>
            </div>
            <div className='logo'>
            <img src="" alt="" />
            </div>
        </footer>
    )
}