import { useState, useEffect } from 'react'
import FormAction from './FormAction';
import { sFields } from './formFields'
import FormWrapper from './FormWrapper';
import { useNavigate } from 'react-router-dom';
import Input from './Input';
import Notification from "components/Notification";
import { useSignupUserMutation } from 'redux';

const signupFields = sFields;
let fieldsState = {};

signupFields.forEach(field => fieldsState[field.id] = '');

function Signup() {
   const navigate = useNavigate()
   const [regData, setRegData] = useState({})
   const [signupUser, { isLoading, isError, isSuccess }] = useSignupUserMutation()
   const [signupState, setSignupState] = useState(fieldsState);
   const [notification, setNotification] = useState({
      isActive: false,
      message: '',
      code: null
   })

   const handleChange = (e) => setSignupState({ ...signupState, [e.target.id]: e.target.value });

   const handleSubmit = async (e) => {
      e.preventDefault();
      const { username, password, email } = signupState
      const bodyObj = {
         user_name: username,
         user_password: password,
         user_email: email
      }
      const data = await signupUser(bodyObj)
      setRegData(data)
   }

   useEffect(() => {
      if (isSuccess) {
         navigate('/login')
         console.log(regData)
      }
   }, [isSuccess, regData.ok, navigate]);


   useEffect(() => {
      if (isError) {
         setNotification({
            isActive: true,
            message: regData.message,
            code: regData.status
         })
         setTimeout(() => {
            setNotification({
               isActive: false,
               message: null,
               code: null
            })
         }, 3000)
         console.log(regData)
      }
   }, [isError, regData])

   return (
      <>
         {
            notification.isActive &&
            <Notification
               message={notification.message}
               code={notification.code}
               setNotification={setNotification}
            />
         }
         <FormWrapper handleSubmit={handleSubmit}>
            {
               signupFields.map(field =>
                  <Input
                     key={field.id}
                     handleChange={handleChange}
                     value={signupState[field.id]}
                     id={field.id}
                     type={field.type}
                     isRequired={field.isRequired}
                     placeholder={field.placeholder}

                  />
               )
            }
            <FormAction
               isLoading={isLoading}
               text="Sign Up"
               handleSubmit={handleSubmit}
            />
         </FormWrapper>
      </>
   )
}

export default Signup