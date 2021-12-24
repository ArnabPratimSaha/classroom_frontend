import { memo } from 'react'
import IntroPageNavbar from '../../components/IntroPageNavbar/IntroPageNavbar';
import './Signup.css'


const Signup = () =>{

    return(
        <div className = 'signup-page__full-div'>
            <IntroPageNavbar/>
            <div className='signup-page__inner-div'>
                <form className='singup-page__form'>
                    <div className='singup-page__scrollable-div'>

                        <div className='singup-page__each-pages-div'>
                            
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )

}

export default memo(Signup);