import { Formik, useFormik } from "formik";
import * as Yup from 'yup';

type ValueType = {
    name : string,
    email : string,
    channel : string
}
const initialValues : ValueType = {
    name : "",
    email : "",
    channel : "",
}

const onSubmit = (data:ValueType)=>{
    console.log(data);
}

const yup = Yup.object({
    name : Yup.string().required("Required"),
    email : Yup.string().email("Invalid email").required("Required"),
    channel : Yup.string().required("Required")
});

export const YupForms = ()=>{
    const formik = useFormik({
        initialValues : initialValues,
        onSubmit : onSubmit,
        validationSchema :  yup
    });
    return(
        <div className="container">
            <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor='name' className="form-lable">Name</label>
                <input type='text' className='form-control' id='name' name='name' onChange={formik.handleChange} value={formik.values.name}/>
            </div>
            {formik.errors.name ? <div className="text-danger">{formik.errors.name}</div> : null}

            <div>
                <label htmlFor='email' className="form-lable">Email</label>
                <input type='text' className='form-control' id='email' name='email' value={formik.values.email} onChange={formik.handleChange}/>
            </div>
            {formik.errors.email ? <div className="text-danger">{formik.errors.email}</div> : null}

            <div>
                <label htmlFor='channel' className="form-lable">Channel</label>
                <input type='text' className='form-control' id='channel' name='channel' value={formik.values.channel} onChange={formik.handleChange}/>
            </div>
            {formik.errors.channel ? <div className="text-danger">{formik.errors.channel}</div> : null}

            <button type='submit' className="btn btn-danger">Submit</button>
            </form>
        </div>
    );
}