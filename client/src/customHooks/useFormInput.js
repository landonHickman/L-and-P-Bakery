import {useState} from 'react'

export const useFormInput = (initialValue, label='') => {
  const [formValue, setFormValue] =useState(initialValue)

  //returning an object {} is necessary
  return {
    //label will go on top of input to describe what needs to be input
    label,
    //placeholder goes inside input fadded out to describe what needs to be input
    placeholder: `Enter ${label}`,
    //value is the default value of the input as well as what we will receive from the input.
    value: formValue,
    onChange: (e)=>setFormValue(e.target.value)
  }
}