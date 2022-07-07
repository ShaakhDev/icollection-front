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
   const [loginData, setLoginData] = useState({})
   const [loginUser, { isLoading, isSuccess, isError }] = useLoginUserMutation();
   const [loginState, setLoginState] = useState(fieldsState);
   const [notification, setNotification] = useState({
      isActive: false,
      message: '',
      code: null
   })


   useEffect(() => {
      if (isSuccess && loginData !== {}) {
         console.log(loginData)
         localStorage.setItem("JWTToken", loginData.data?.token)
         navigate('/')
      }
   }, [isSuccess]);


   useEffect(() => {
      if (isError) {
         setNotification({
            isActive: true,
            message: loginData.message,
            code: loginData.status
         })
         setTimeout(() => {
            setNotification({
               isActive: false,
               message: null,
               code: null
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
      const { data } = await loginUser(bodyObj)
      setLoginData(data)
      console.log(data)

   }

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