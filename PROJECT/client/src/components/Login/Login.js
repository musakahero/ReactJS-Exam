import { useForm } from "../../hooks/useForm";
import { Link } from "react-router-dom";

export const Login = ({ onLoginSubmit }) => {

    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        password: ''
    }, onLoginSubmit);


    return (
        <section>
            <form className="form-inline" method="post" onSubmit={onSubmit}>
                <div className="form-group">
                    <label className="sr-only" htmlFor="exampleInputEmail3">Email address</label>
                    <input onChange={changeHandler} name="email" value={values.email} type="email" className="form-control" id="exampleInputEmail3" placeholder="Email" />
                </div>
                <div className="form-group">
                    <label className="sr-only" htmlFor="exampleInputPassword3">Password</label>
                    <input onChange={changeHandler} name="password" value={values.password} type="password" className="form-control" id="exampleInputPassword3" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-default">Sign in</button>
                <p>Not registered yet? Click <Link to={'/register'}>here</Link> to create an account.</p>
            </form>
        </section>
    )
}