import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

type ValueType = {
    name: string,
    email: string,
    channel: string
}

const initialValues: ValueType = {
    name: "",
    email: "",
    channel: ""
}

const onSubmit = (values: any) => {
    console.log(values)
}
const validate = (data: ValueType) => {
    let errors: any = {};

    if (!data.name) {
        errors.name = "Required";
    }

    if (!data.email) {
        errors.email = "Required";
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
        errors.email = 'Invalid email format'
    }

    if (!data.channel) {
        errors.channel = "Required";
    }
    console.log(errors);
    return errors;
}




export const OldYoutubeForm = () => {

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: onSubmit,
        validate: validate
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className='form-control'>
                <label htmlFor='name'>Name</label>
                <input className='form-control'
                    type='text'
                    id='name'
                    name='name'
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                    <div className='error'>{formik.errors.name}</div>
                ) : null}
            </div>
            <br></br>
            <div className='form-control'>
                <label htmlFor='email'>E-mail</label>
                <input className='form-control'
                    type='email'
                    id='email'
                    name='email'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                    <div className='error'>{formik.errors.email}</div>
                ) : null}
            </div>
            <br></br>

            <div className='form-control'>
                <label htmlFor='channel'>Channel</label>
                <input
                    type='text'
                    id='channel'
                    name='channel'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.channel}
                />
                {formik.touched.channel && formik.errors.channel ? (
                    <div className='error'>{formik.errors.channel}</div>
                ) : null}
            </div>
            <br></br>

            <button type='submit'>Submit</button>
        </form>
    )
}

export default OldYoutubeForm