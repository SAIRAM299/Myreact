import React from 'react';
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';

let r = 0
const schema = yup.object().shape({

    firstname: yup.string().required("please enter firname"),
    lastname: yup.string().required("please enter lastname"),
    age: yup.number().integer().positive().required("please enter age"),
    email: yup.string().email("please enter valid email").required("please enter email"),
    password: yup.string().required().min(4, "please enter min 4").max(12, "please enter max 12"),
    cpassword: yup.string().required().oneOf([yup.ref("password"), null], "please enter crdct")}
    )


export default function Reacthookform() {
    const { register, handleSubmit, formState: { errors } } = useForm(
        {
             resolver:yupResolver(schema)
         })
    const onsubmit = (data) => {
        console.log(data);
    }
    console.log(errors);
    r++
    return (
        <div>
            {r}
            <form onSubmit={handleSubmit(onsubmit)}>
                <input {...register('firstname')} type='text' placeholder='firstname' />
                <br />
                <p>{errors?.firstname?.message}</p>
                <br />
                <input {...register('lastname')} type='text' placeholder='lastname' />
                <br />
                <p>{errors?.lastname?.message}</p>
                <br />
                <input {...register('age')} type='text' placeholder='age' />
                <br />
                <br />
                <input {...register('email')} type='text' placeholder='email' />
                <br />
                <br />
                <input {...register('password')} type='text' placeholder='password' />
                <br />
                <br />
                <input {...register('cpassword')} type='text' placeholder='conform password' />
                <br />
                <button type='submit'>submit</button>
            </form>
        </div >
    )
}
