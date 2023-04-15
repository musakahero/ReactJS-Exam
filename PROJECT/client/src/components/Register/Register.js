import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

export const Register = ({onRegisterSubmit}) => {

    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        password: '',
        repass:''
    }, onRegisterSubmit);


    return (
        <section>
            <form style={{ margin: "20px" }} onSubmit={onSubmit}>
                <div className="form-group" style={{ width: "15%" }}>
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input onChange={changeHandler} value={values.email} name="email" type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                </div>
                <div className="form-group" style={{ width: "15%" }}>
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input onChange={changeHandler} value={values.password} name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-group" style={{ width: "15%" }}>
                    <label htmlFor="exampleInputRepass1">Confirm password</label>
                    <input onChange={changeHandler} value={values.repass} name="repass" type="password" className="form-control" id="exampleInputRepass1" placeholder="Repeat your password" />
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
            </form>
            <p>Already have an account? Click <Link to={'/login'}>here</Link> to sign-in.</p>
        </section>
    )
}