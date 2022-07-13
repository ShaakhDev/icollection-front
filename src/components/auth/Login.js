import { useState, useEffect } from 'react'
import { lFields } from './formFields';
import Input from './Input';
import FormAction from './FormAction';
import FormWrapper from './FormWrapper';
import { useNavigate } from 'react-router-dom';
import Notification from "components/Notification"
import { useLoginUserMutation, } from 'redux';
const loginFields = lFields;
let fieldsState = {};
loginFields.forEach(field => fieldsState[field.id] = '');

function Login() {
   const navigate = useNavigate()
   const [loginUser, { isLoading, isSuccess, isError, data, status, error }] = useLoginUserMutation();
   const [loginState, setLoginState] = useState(fieldsState);
   const [notification, setNotification] = useState({
      isActive: false,
      message: '',
      type: ''
   })

   useEffect(() => {
      console.log(status, data)
   }, [status, data])

   useEffect(() => {
      if (data && data.data.access_token) {
         console.log(data)
         localStorage.setItem("access_token", data.data?.access_token)
         localStorage.setItem("uId", data.data?.user?.id)
         console.log(data)
         navigate('/', { replace: true })
      }
   }, [isSuccess, data, navigate]);


   useEffect(() => {
      if (isError) {
         setNotification({
            isActive: true,
            message: error?.data.message,
            type: "error"
         })
         setTimeout(() => {
            setNotification({
               isActive: false,
               message: null,
               type: null
            })
         }, 3000)
      }
   }, [isError]);

   const handleChange = (e) => {
      setLoginState({ ...loginState, [e.target.id]: e.target.value });
   }

   const handleSubmit = async (e) => {
      e.preventDefault();
      const { username, email, password } = loginState;
      const bodyObj = {
         user_name: username,
         user_password: password,
         user_email: email
      }
      await loginUser(bodyObj)

   }

   return (
      <>
         {
            notification.isActive &&
            <Notification
               message={notification.message}
               codetype={notification.type}
               setNotification={setNotification}
            />
         }
         <FormWrapper handleSubmit={handleSubmit}>

            {
               loginFields.map(field =>
                  <Input
                     key={field.id}
                     handleChange={handleChange}
                     value={loginState[field.id]}
                     id={field.id}
                     type={field.type}
                     isRequired={field.isRequired}
                     placeholder={field.placeholder}
                  />
               )
            }
            <FormAction
               isLoading={isLoading}
               text="Login"
               handleSubmit={handleSubmit}
            />
         </FormWrapper>
      </>
   )
}

export default Login