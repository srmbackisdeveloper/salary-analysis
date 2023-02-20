import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Confirmation from './Confirmation';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorMessage } from '@hookform/error-message';
import '../css/login.css';
import { FaGhost } from "react-icons/fa";
import {db} from './database/FireBase';
import {collection, getDocs, addDoc} from 'firebase/firestore';
import { Audio } from  'react-loader-spinner';

const schema = yup.object().shape({
    name: yup.string().required('required'),
    age: yup.string().required('required'),
    salary: yup.string().required('required'),
    email: yup.string().required('required'),
  })
  .required();

export default function LogIn() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(schema),
  });

  let navigate = useNavigate(); // for redirection
  const [show, setShow] = useState(false); // modal for ghost mode

  const usersCollectionRef = collection(db, 'users');
    // for send
    const [details, setDetails] = useState({
      name: '',
      age: 0,
      salary: 0,
      email: ''
    })

    const sendData = async () => {
      await addDoc(usersCollectionRef, { name: details.name, age: details.age * 1, salary: details.salary * 1, email: details.email });
      navigate("/main");
    }
    
  return (
    <div>
      {show && <Confirmation show={show} setShow={setShow} />}
      <div className="form-center">
        <h1>Few Information</h1>

        <form onSubmit={handleSubmit(sendData)}>
        {isSubmitting && <div className="body__spinner" ><Audio height = "80" width = "80" radius = "9" color = 'black' ariaLabel = 'three-dots-loading' wrapperStyle wrapperClass /></div>}
        
        
              <div className="form-controll">
                  <input type="text" {...register('name')} placeholder={errors.name?.message ? "Name: " + errors.name?.message : 'Name'} 
                  onChange={(e) => setDetails({...details, name:e.target.value})}/>

                  <input type="number" min={18} {...register('age')}  placeholder={errors.age?.message ? "Age: " + errors.age?.message : 'Age'} 
                  onChange={(e) => setDetails({...details, age:e.target.value})}/>
                  {/*<ErrorMessage errors={errors} name="age" render={({ message }) => <p className='form-error'>{message}</p>} />*/}

                  <input type="number" min={0} {...register('salary')}  placeholder={errors.salary?.message ? "Salary $: " + errors.salary?.message : 'Salary $'} 
                  onChange={(e) => setDetails({...details, salary:e.target.value})}/>
                  {/*<ErrorMessage errors={errors} name="salary" render={({ message }) => <p className='form-error'>{message}</p>} />*/}

                  <input type="email" {...register('email')} placeholder={errors.email?.message ? "Email: " + errors.email?.message : 'Email'} 
                  onChange={(e) => setDetails({...details, email:e.target.value})}/>
                  {/*<ErrorMessage errors={errors} name="email" render={({ message }) => <p className='form-error'>{message}</p>} />*/}
              </div>

              <div className="ghost">
                Don't want to share data?<br></br><br></br>
                <a onClick={() => {setShow(true)}}><FaGhost /></a>
              </div>

              <div className="btn">
                <input disabled={isSubmitting} type='submit' value='Go' />
              </div>
          </form>
      </div>
    </div>
  )
}
