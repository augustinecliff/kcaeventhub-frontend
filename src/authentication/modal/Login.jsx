import {useState} from "react";
import axiosApiInstance from "../../utils/AxiosApiInstance.js";

export function LoginModal() {

    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        password: '',
        email: ''
    });

    const handleChange = (event) => {
        const targetName = event.target.name;
        switch (targetName) {
            case 'email':
                setFormData({...formData, [targetName]: event.target.value})
                return;

            case 'password':
                setFormData({...formData, [targetName]: event.target.value})
                return;

            default:
                return;
        }
        // this.setState({value: event.target.value});
    }

    const loginUser = () => {
        setLoading(true);
        axiosApiInstance.post( '/auth/login', {...formData})
            .then(
                res => {
                    console.log(res)
                    setFormData({
                        password: '',
                        email: ''
                    })
                    localStorage.setItem('@AUTH_LOCAL_STORE_KEY', res.data.data.token);
                    document.getElementById('login_modal').close();
                    window.location.reload();
                }
            )
            .catch(e => {
                console.log(e)
            }).finally(() => {
            setLoading(false);
        })
    }


    return (
        <>
            <div className="modal-box">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" type={'submit'}></button>
                </form>
                <img src={'src/assets/images/auth-header.jpg'} className={'object-cover h-14 md:h-20 w-full rounded-lg mb-4 rounded-tr-3xl'} alt={'Cover'}/>

                <div className={'text-left'}>
                    <h3 className={'text-2xl font-semibold mb-4'}>Login to Tiketi Hub</h3>
                    <p>Enter your email and password to proceed</p>

                    <div className={'my-4'}>
                        <label className="label">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <input name={'email'} type="email" placeholder="Enter your email"
                               className="input input-bordered w-full"
                               value={formData.email} onChange={handleChange}/>
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input name={'password'} type="password" placeholder="Enter your password"
                               className="input input-bordered w-full"
                               value={formData.password} onChange={handleChange}/>

                        <button className="btn btn-primary mt-4 w-full text-white" disabled={loading}
                                onClick={() => loginUser()}>
                            <span className={loading ? "loading loading-spinner text-primary" : 'hidden'}></span>
                            <span className={loading ? "hidden" : 'visible'}>Login</span>
                        </button>

                    </div>


                    <p className={'text-center'}>Dont have an account?</p>

                    <form method="dialog">
                        <button className="btn w-full mt-4"
                                onClick={() => document.getElementById('register_modal').showModal()}>
                            Register
                        </button>
                    </form>
                </div>
                {/*<dialog id="register_modal" className="modal">*/}
                {/*    <CreateAccountModal/>*/}
                {/*</dialog>*/}
            </div>
        </>
    )
}
