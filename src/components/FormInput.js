const FormInput = ({fieldId, label, value, changeHandler}) => {
  return (
    <div className='form-group'>
      <label htmlFor={fieldId} className='mb-3'>{label}</label>
      <input
        type="text"
        id={fieldId}
        name={fieldId}
        className='form-control'
        value={value}
        onChange={changeHandler} />
    </div>
  )
}

export default FormInput