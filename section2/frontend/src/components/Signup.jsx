import React from 'react'
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const signupForm = useFormik({
    initialValues: {
      name : "",
      email : "",
      password : "",
      age : ""
    },
    onSubmit : async ( values ) => {
      console.log(values);

//fetch :asynchronous
      const res = await fetch('http://localhost:5000/user/add', {
        method:'POST',
        body: JSON.stringify(values),//convets to json as of postman
        headers: {
          'Content-Type' : 'application/json'
        }    
      });

     console.log(res.status);
      // write code to submit form to server

      if(res.status === 200){
        Swal.fire({
          icon: 'success',
          title: 'Success ho gaya',
          text : 'Mubarak ho!!'
        })
        navigate('/login')
      }
      else{
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text : 'do again!!'
        })
      }
    }
  });


  return (
    
    <div>
      <div className="w-25">
        <div className="card">
          <div className="card-body">
            <h3 className="text-center">Login Form</h3>
            <hr />

            <form onSubmit={signupForm.handleSubmit}>
              <label htmlFor="">Name</label>
              <span style={{color: 'red', fontSize: '0.7em', marginLeft: 10}}>{signupForm.errors.name}</span>
              <input type="text" className="form-control mb-3" name="name" onChange={signupForm.handleChange} value={signupForm.values.name} />
              
              <label htmlFor="">Email Address</label>
              <span style={{color: 'red', fontSize: '0.7em', marginLeft: 10}}>{signupForm.errors.email}</span>
              <input type="email" className="form-control mb-3" name="email" onChange={signupForm.handleChange} value={signupForm.values.email} />

              <label htmlFor="">Password</label>
              <span style={{color: 'red', fontSize: '0.7em', marginLeft: 10}}>{signupForm.errors.password}</span>
              <input type="password" className="form-control mb-3" name="password" onChange={signupForm.handleChange} value={signupForm.values.password} />
              
              <label htmlFor="">Age</label>
              <span style={{color: 'red', fontSize: '0.7em', marginLeft: 10}}>{signupForm.errors.age}</span>
              <input type="number" className="form-control mb-3" name="age" onChange={signupForm.handleChange} value={signupForm.values.age} />

              <button className="btn btn-primary w-100 mt-5">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    
    
  )
}

export default Signup;