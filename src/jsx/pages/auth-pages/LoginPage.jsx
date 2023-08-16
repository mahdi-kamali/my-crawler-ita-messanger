import { Icon } from '@iconify/react';
import Lottie from 'react-lottie-player'



import smsAnimation from "../../../animation/sms.json"
import { useRef } from 'react';



const LoginPage = () => {


    const formOneRef = useRef()
    const formTwoRef = useRef()

    const animationDuration = 2000;

    function handlePhoneNumberSubmit(e) {
        e.preventDefault();
        console.log(formOneRef);
        formOneRef.current.classList.remove("fade-in")
        formOneRef.current.classList.add("fade-out")

        setTimeout(() => {
            formTwoRef.current.classList.add("fade-in")
            console.log(true);
        }, animationDuration)

    }


    function handleBackClick() {
        formTwoRef.current.classList.add("fade-out")
        formTwoRef.current.classList.remove("fade-in")

        setTimeout(() => {
            formOneRef.current.classList.remove("fade-out")
            formOneRef.current.classList.add("fade-in")
        }, animationDuration);
    }




    return (
        <main className='login-page'>

            <form
                ref={formOneRef}
                className='enter-number-form'
                action="#"
                onSubmit={handlePhoneNumberSubmit}>
                <div className="form-header">
                    <img className={"logo"} src={require("../../../images/logo.png")} alt="" />
                    <h1>ورود به ایتا</h1>
                    <p>
                        برای ادامه عملیات شما نیاز دارید که در این پیام رسان یک حساب کاربری داشته باشد و در صورت امکان , با وارد کردن اطلاعات خود وارد شوید
                    </p>
                </div>
                <div className="form-body">
                    <fieldset>
                        <legend>
                            <Icon icon="fluent:phone-20-filled" />
                            <span>
                                شماره تلفن
                            </span>
                        </legend>
                        <div className="input-content"  >
                            <input type="text" name='phone-number' />
                        </div>
                    </fieldset>
                    <div className="checkbox-group">
                        <label>
                            <input type="checkbox" />
                            <span>مرا بخاطر بسپار</span>
                        </label>
                    </div>
                </div>
                <div className="form-buttons">
                    <button>
                        ادامه
                    </button>
                </div>

            </form>

            <form
                ref={formTwoRef}
                className='sms-authentication-form '
                action="#">
                <div className="left">
                    <div className="form-header">
                        <h1>
                            +98 123 456 7890
                        </h1>
                        <p>
                            ما برای شما پیامک ارسال کردیم
                            همراه با کد
                            این کد را داخل این فرم قرار دهید
                        </p>
                    </div>
                    <div className="form-body">
                        <input type="number" name='code' placeholder='کد' />
                    </div>
                    <div className="form-buttons">
                        <button
                            className='back'
                            type='button'
                            onClick={handleBackClick}>
                            <span>بازگشت</span>
                            <Icon icon="pajamas:go-back" />
                        </button>
                        <button className='login'>
                            <span>ورود</span>
                            <Icon icon="basil:login-solid" />
                        </button>
                    </div>
                </div>
                <div className="right">
                    <div className="form-aniamtion">
                        <Lottie
                            play
                            loop
                            animationData={smsAnimation}
                        />
                    </div>
                </div>



            </form>
        </main>
    )
}

export default LoginPage