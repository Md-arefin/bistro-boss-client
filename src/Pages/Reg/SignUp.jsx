import { useContext } from "react";
import { useForm } from "react-hook-form";
import {  useNavigate } from "react-router-dom";
import { AuthContext } from "../../provide/AuthProvider";

const SignUp = () => {

    const {createUser, updateUserProfile} = useContext(AuthContext);

    const navigate = useNavigate();

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        createUser( data.email, data.password)
        .then(result => { 
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(data.name, data.photo)
            .then( () => {
                console.log('user profile info updated')
                reset();
                navigate('/');
            })
            .catch(error => console.log(error))
        })
        .catch(error => error.message)
    };

    console.log(watch("example")); // watch input value by passing the name of it

    return (
        <div className=" my-32  ">
            <div className="text-center ">
                <h1 className="text-5xl font-bold">Sign up now!</h1>
            </div>
            <div className="card bg-slate-400 w-full max-w-md shadow-2xl mx-auto my-32 ">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name"
                            {...register("name",  { required: true })}
                            className="input input-bordered" />
                             {errors.name && <span className="text-red-600">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" placeholder="Photo url"
                            {...register("photo",  { required: true })}
                            className="input input-bordered" />
                             {errors.name && <span className="text-red-600">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email"
                            {...register("email",  { required: true })}
                            className="input input-bordered"  />
                            {errors.email && <span className="text-red-600">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password"
                            {...register("password" ,  { required: true })}
                            className="input input-bordered" />
                             {errors.password && <span className="text-red-600">This field is required</span>}
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <input className="btn btn-primary" type="submit" value="Sign Up" />

                </form >
            </div>
        </div>
    );
};

export default SignUp;