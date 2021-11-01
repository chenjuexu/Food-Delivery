import styled from 'styled-components'
import { withError } from './../withError'
import {Fragment} from 'react' 
import useEditProfileForm from '../../hooks/useEditProfileForm'
import {LoaderSpinner} from './../LoaderSpinner'
import {ErrorMessage} from '../contact/ContactForm';
import {UserNameInput,UserLastNameInput,UserPasswordInput,UserNewPasswordInput,ErrorServerMessage} from '../auth/SingupForm'
import {OptionList,Option,CheckboxWrapper} from '../dashboard/CreateNewProductForm'
import {FormButtons } from '../dashboard/CreateNewProductForm'
import {TextInput } from '../contact/ContactForm';
import {GoBackLink} from '../product_details/ProductDetails'
import userEditIcone from '../../img/user-edit-solid.svg'

const EditProfilePage = styled.section`
    min-height:100vh;
width:100vw;
padding: 60px 0px;

`
const EditProfileForm = styled.form`

  max-width:400px;
  width:100%;
      padding: 10px 25px 40px;
    border-radius: 10px;
    background: #fff;
margin: 50px auto;
display:flex;
flex-flow:column;
align-items:center;
& > input {
  border:none;
  background: #f0f0f0;
}
&> label {
  margin: 0 auto 20px
}
&> small {
margin: -10px auto 4px 0;
}
& >${OptionList} {
  min-width: 100%
}

& > input:focus {
  outline: 2px solid #ccc;
    outline-style: auto;
}
  `

  const InputWrapper = styled.div`
  margin-top:-15px;
  & > label{
font-size:16px;
  }

  `;
const FormIcone = styled.img`
width:120px;
margin: 0 auto;
margin-bottom:20px;
margin-top:-20px;
`
const GoToProfileLink = styled(GoBackLink)`
margin-left: 15px;
&:before{
      content: "<-- ";
    margin-right: 3px;
}
`


function NewPasswordCheckbox({setIsChangingPassword,value}){


   return(
          <CheckboxWrapper >
<label htmlFor="newPasswordCheckbox">Change Password:</label>
<input
onChange={(e) =>{setIsChangingPassword(!value)}}
id="newPasswordCheckbox" type="checkbox" name="newPasswordCheckbox" />
          </CheckboxWrapper>
    )
  }
function CellphoneInput({register,errors,placeholder,defaultValue}) {
  
  return(
<Fragment>
    {errors.userNumber && <ErrorMessage  role="alert">{errors.userNumber.message}</ErrorMessage>}

<TextInput
placeholder={placeholder}
 name="userNumber"
 type='text'
      defaultValue={defaultValue || ''}
          ref={register({
              required: '*The field is required',
                  minLength: {
            value: 9,
            message: "*Invalid Phone"
                                      },
           maxLength: {
            value: 10,
            message: "*Invalid Phone"
                                      },                                      
                     pattern: {
            value: /[0-9]/,
            message: "*Only numbers are accepted"
          } 
          })}
           style={{ borderColor: errors.userNumber && "#bf0000" }}/>
</Fragment>
  )
} 
function CityAddressOptions({register,defaultValue}){
  return(
   <OptionList name="userCityAddress"
   ref={register({
           required: '*The field is required',
        
          })}
   
   >
<Option value="Cordova"  selected={defaultValue === 'Cordova' ? true :false}>Cordova</Option>
<Option value="Buenos Aires" selected={defaultValue === 'buenos aires' ? true :false}>Buenos Aires</Option>
</OptionList>
  );
}
function StreetAddressInput({errors,placeholder,register,defaultValue}) {
  
  return(
<Fragment>
    {errors.userStreetAddress && <ErrorMessage  role="alert">{errors.userStreetAddress.message}</ErrorMessage>}

<TextInput
placeholder={placeholder}
 name="userStreetAddress" 
     defaultValue={defaultValue || ''}
          ref={register({
           required: '*The field is required',
        
          })}
           style={{ borderColor: errors.userStreetAddress && "#bf0000" }}/>
</Fragment>
  )
} 
function StreetNumberInput({errors,placeholder,register,defaultValue}) {
  
  return(
<Fragment>
    {errors.userStreetNumber && <ErrorMessage  role="alert">{errors.userStreetNumber.message}</ErrorMessage>}

<TextInput
placeholder={placeholder}
 name="userStreetNumber" 
     defaultValue={defaultValue || ''}
          ref={register({
    required: '*The field is required',
            
           maxLength: {
            value: 4,
            message: "*Invalid Number"
                                      },                                      
                     pattern: {
            value: /[0-9]/,
            message: "*Only numbers are accepted"
          } 
          })}
           style={{ borderColor: errors.userStreetNumber && "#bf0000" }}/>
</Fragment>
  )
} 


 function EditMyProfile() {
  


const { register,handleSubmit,errors,onSubmit ,serverError,formIsLoading,isChangingPassword,setIsChangingPassword,defaultsValues} = useEditProfileForm()

  return(
<EditProfilePage>

  
    <GoToProfileLink to="/myAccount/myProfile" >To return</GoToProfileLink>
  

  <EditProfileForm onSubmit={handleSubmit(onSubmit)} novalidate>

    <FormIcone src={userEditIcone} alt="edit-profile"/>
<UserNameInput  errors={errors} register={register} defaultValue={defaultsValues.name}/>
   <UserLastNameInput  errors={errors} register={register} defaultValue={defaultsValues.lastName} />
  
     
 
               <CellphoneInput defaultValue={defaultsValues.number} errors={errors} register={register}  placeholder="Your telephone..." />

<CityAddressOptions register={register} defaultValue={defaultsValues.city} />

         <StreetAddressInput  errors={errors} register={register} placeholder="Street..." defaultValue={defaultsValues.street}/>

         <StreetNumberInput  errors={errors} register={register} placeholder="Port number..." defaultValue={defaultsValues.streetNumber } / >
 <InputWrapper >
   <NewPasswordCheckbox setIsChangingPassword ={setIsChangingPassword} value={isChangingPassword} />
   </InputWrapper>

   {isChangingPassword ? 

<Fragment>
<UserPasswordInput  errors={errors}  register={register} name="userPassword" placeholder="Your password..."/>
     <UserNewPasswordInput  errors={errors}   register={register} name="newPassword" placeholder="New Password..."/>
</Fragment>
: null
}
     

       
   {formIsLoading ?  <LoaderSpinner small /> :

         <ErrorServerMessage>{serverError}</ErrorServerMessage>
      
  }
  
          <FormButtons small/>
  </EditProfileForm>

</EditProfilePage>

  );

  
}

export default withError(EditMyProfile)