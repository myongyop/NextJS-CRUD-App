import { BiCircleThreeQuarter } from "react-icons/bi";
import AddUserForm from "./addUserForm";
import UpdateUserForm from "./updateUserForm";
import { useSelector } from "react-redux";
import { useReducer } from "react";


const formReducer=(state, event)=>{
  return{
    ...state,
    [event.target.name]:event.target.value
  }
}

export default function Form(){
  const[formData, setFormData]=useReducer(formReducer, {})
  const formId=useSelector((state)=>state.app.client.formId)
  const flag=false;

  return(
    <div className="container mx-auto py-5">
      {formId?UpdateUserForm({formId, formData, setFormData}):AddUserForm({formData, setFormData})}
    </div>
  )
}