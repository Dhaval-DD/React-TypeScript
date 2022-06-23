import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";

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

const validate = (data : ValueType)=>{
    let errors : any = {};

    if(!data.name){
        errors.name = "Required";
    }

    if(!data.email){
        errors.email = "Required";
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
        errors.email = 'Invalid email format'
    }

    if(!data.channel){
        errors.channel = "Required";
    }
    console.log(errors);
    return errors;
}

export const FormikFormsElement = ()=>{
    return(
        <div className="container">
            <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
                <Form>
                    <div>
                        <label htmlFor='name' className="form-lable">Name</label>
                        <Field type='text' className='form-control' id='name' name='name'/><br></br>
                        <ErrorMessage name='name'/>
                    </div>

                    <div>
                        <label htmlFor='email' className="form-lable">Email</label>
                        <Field type='text' className='form-control' id='email' name='email'/>
                        <ErrorMessage name='email'>
                            {error => <div className='text-danger'>{error}</div>}
                        </ErrorMessage>
                    </div>

                    <div>
                        <label htmlFor='channel' className="form-lable">Channel</label>
                        <Field type='text' className='form-control' id='channel' name='channel'/><br></br>
                        <ErrorMessage name='channel' />
                    </div>

                    <div>
                        <button type='submit' className="btn btn-danger">Submit</button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}