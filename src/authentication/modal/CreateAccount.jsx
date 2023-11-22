import {useState} from "react";
import axios from "axios";
import {baseUrl} from "../../App.jsx";
import axiosApiInstance from "../../utils/AxiosApiInstance.js";

export function CreateAccountModal({showOTP, showDefault, showPassword}) {

    const [loading, setLoading] = useState(false)
    const [showError, setShowError] = useState('')
    const [toggleModals, setToggleModals] = useState({
        OTP: showOTP,
        default: showDefault,
        password: showPassword
    });

    const [registerFrom, setRegisterForm] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });
    const [otp, setOTP] = useState('');
    const [otpToken, setOTPToken] = useState('');
    const [passwordToken, setPasswordToken] = useState('');
    const [passwordForm, setPasswordForm] = useState({
        password: '',
        confirmPassword: ''
    });

    const otpStep = () => {
        setToggleModals({
            OTP: true,
            default: false,
            password: false
        })
    }


    const handleChange = (event) => {
        const targetName = event.target.name;
        switch (targetName) {
            case 'email':
                setRegisterForm({...registerFrom, [targetName]: event.target.value})
                return;

            case 'firstName':
                setRegisterForm({...registerFrom, [targetName]: event.target.value})
                return;

            case 'lastName':
                setRegisterForm({...registerFrom, [targetName]: event.target.value})
                return;

            default:
                return;
        }
        // this.setState({value: event.target.value});
    }

    const verifyOTP = () => {
        if (!otp) {
            setAlertMessage('Please fill the OTP field')
            return;
        }
        setLoading(true);
        axiosApiInstance.post( '/auth/validate-otp?OTPtoken=' + otpToken, {code: parseInt(otp)})
            .then(
                res => {
                    setPasswordToken(res.data.data.token)
                    setToggleModals({
                        OTP: false,
                        default: false,
                        password: true
                    })
                }
            )
            .catch(e => {
                console.log(e)
                setAlertMessage(e.response.data.message ?? 'Fill all fields to proceed')
            }).finally(() => {
            setLoading(false);
        })
    }

    const setPassword = () => {
        console.log(passwordForm)
        if (passwordForm.password === '' || passwordForm.confirmPassword === '') {
            setAlertMessage('Please fill all fields to proceed')
            return;
        }
        setLoading(true);
        axiosApiInstance.patch( '/auth/set-password?token=' + passwordToken, {...passwordForm})
            .then(
                res => {
                    setToggleModals({
                        OTP: false,
                        default: false,
                        password: true
                    })
                    localStorage.setItem('@AUTH_LOCAL_STORE_KEY', res.data.data.token);
                    document.getElementById('register_modal').close();
                }
            )
            .catch(e => {
                console.log(e)
                setAlertMessage(e.response.data.message ?? 'Fill all fields to proceed')
            }).finally(() => {
            setLoading(false);
        })
    }

    const clearModals = () => {
        setToggleModals({
            OTP: false,
            default: true,
            password: false
        })
        console.log(registerFrom)
    }

    const setAlertMessage = (message) => {
        setShowError(message);
        setTimeout(() => {
                setShowError('')
            }
            , 3000)
    }

    const createAccount = () => {
        if (registerFrom.email === '' || registerFrom.firstName === '' || registerFrom.lastName === '') {
            setAlertMessage('Fill all fields to proceed')
            return
        }
        setLoading(true);
        axios.post(baseUrl + '/auth/registration', {...registerFrom})
            .then(
                res => {
                    otpStep();
                    setOTPToken(res.data.data.token)

                    setRegisterForm({
                        firstName: '',
                        lastName: '',
                        email: ''
                    })
                }
            )
            .catch(e => {
                console.log(e)
                setAlertMessage(e.response.data.message ?? 'Fill all fields to proceed')
            }).finally(() => {
            setLoading(false);
        })
    }


    return (
        <>
            <div className="modal-box">
                    <img src={'src/assets/images/auth-header.jpg'} className={'object-cover h-14 md:h-20 w-full rounded-lg mb-4 rounded-tr-3xl'} alt={'Cover'}/>
                {
                    toggleModals.default && (
                        <>
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <div className={'text-left'}>
                                <h3 className={'text-2xl font-semibold mb-4'}>Create an account</h3>
                                <p>Enter your email and password to proceed</p>

                                <div className={'my-4'}>
                                    <label className="label">
                                        <span className="label-text font-semibold">First Name</span>
                                    </label>
                                    <input name={'firstName'} type="text" placeholder="Enter your first name"
                                           className="input input-bordered w-full" required
                                           value={registerFrom.firstName} onChange={handleChange}/>
                                    <label className="label">
                                        <span className="label-text font-semibold">Last Name</span>
                                    </label>
                                    <input name={'lastName'} type="text" placeholder="Enter your last name"
                                           className="input input-bordered w-full"
                                           value={registerFrom.lastName} onChange={handleChange}/>
                                    <label className="label">
                                        <span className="label-text font-semibold">Email</span>
                                    </label>
                                    <input name={'email'} type="text" placeholder="Enter your email"
                                           className="input input-bordered w-full"
                                           value={registerFrom.email} onChange={handleChange}/>

                                    <button className="btn btn-primary mt-4 w-full text-white" disabled={loading}
                                            onClick={() => createAccount()}>
                                        <span
                                            className={loading ? "loading loading-spinner text-primary" : 'hidden'}></span>
                                        <span className={loading ? "hidden" : 'visible'}>Create Account</span>
                                    </button>

                                </div>

                                <p className={'text-center'}>Already have an account?</p>
                                <form method="dialog">
                                    <button className="btn w-full mt-4"
                                            onClick={() => document.getElementById('login_modal').showModal()}>Login
                                    </button>
                                </form>
                            </div>
                        </>
                    )
                }


                {
                    toggleModals.OTP && (
                        <div className={'text-left'}>
                            <h3 className={'text-2xl font-semibold mb-4'}>Enter OTP</h3>
                            <p>Enter the OTP sent to your email address </p>

                            <div className={'my-4'}>
                                <label className="label">
                                    <span className="label-text font-semibold">OTP</span>
                                </label>
                                <input type="text" placeholder="Enter OTP" className="input input-bordered w-full"
                                       value={otp} onChange={(event) => setOTP(event.target.value)}/>

                                <button className="btn btn-primary mt-4 w-full text-white" disabled={loading}
                                        onClick={() => verifyOTP()}>
                                    <span className={loading ? "loading loading-spinner text-accent" : 'hidden'}></span>
                                    <span className={loading ? "hidden" : 'visible'}>Verify OTP</span>
                                </button>
                                <form method="dialog">
                                    <button className="btn w-full mt-4" onClick={() => clearModals()}>Cancel</button>
                                </form>

                            </div>
                        </div>
                    )
                }

                {
                    toggleModals.password && (
                        <div className={'text-left'}>
                            <h3 className={'text-2xl font-semibold mb-4'}>Set password</h3>
                            <p>Set a strong password for your account</p>

                            <div className={'my-4'}>
                                <label className="label">
                                    <span className="label-text font-semibold">Password</span>
                                </label>
                                <input type="text" placeholder="Password" className="input input-bordered w-full"
                                       value={passwordForm.password}
                                       onChange={(event) => setPasswordForm({
                                           ...passwordForm,
                                           password: event.target.value
                                       })}/>

                                <label className="label">
                                    <span className="label-text font-semibold">Confirm Password</span>
                                </label>
                                <input type="text" placeholder="Confirm password" className="input input-bordered w-full"
                                       value={passwordForm.confirmPassword}
                                       onChange={(event) => setPasswordForm({
                                           ...passwordForm,
                                           confirmPassword: event.target.value
                                       })}/>

                                <button className="btn btn-primary mt-4 w-full text-white" disabled={loading}
                                        onClick={() => setPassword()}>
                                    <span className={loading ? "loading loading-spinner text-accent" : 'hidden'}></span>
                                    <span className={loading ? "hidden" : 'visible'}>Submit</span>
                                </button>


                            </div>
                        </div>
                    )
                }

                {
                    showError && (
                        <div role="alert" className="alert alert-warning text-white mt-4">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 className="stroke-current shrink-0 h-6 w-6" fill="none"
                                 viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                            </svg>
                            <span>Warning: {showError}</span>
                        </div>
                    )
                }


            </div>
        </>
    )
}
