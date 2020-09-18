import React, {useState, useEffect}  from 'react';
import { useForm } from 'react-hook-form';

function Userdetailsform(props) {

    const initialFieldValues = {
        name:'',
        email:'',
        phone:'',
        gender:'',
        skills:'',
        description:''
    }

    var [values, setValues] = useState(initialFieldValues)
    
    useEffect( () => {
      if(props.currentId=='')
      setValues({
        ...initialFieldValues
      })
      else
      setValues({
        ...props.userObject[props.currentId]
      })
    },[props.currentId, props.userObject])

    const handleInputChange = e => {
        var { name, value }= e.target
        setValues (
            {
                ...values,
                [name] : value,
            }
        )
        }
    const handleformSubmit = e => {
        // e.preventDefault();
        props.CreateorEdit(values)
    }

    const { register, handleSubmit, errors } = useForm();



    return (
        <form autoComplete="off" onSubmit={handleSubmit(handleformSubmit)}>
            <div className="form-group row">
        
        <div className="col-12">
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="fa fa-user"></i>
              </div>
            </div> 
            <input  
            name="name" 
            placeholder="Name"  
            className="form-control" 
            value={values.name}
            onChange={handleInputChange}
            ref={register({required: true})} />
            {errors.name && (
              <p>Email is field required</p>
            )}
          </div>
        </div>
      </div>
      <div className="form-group row">
      <div className="col-12">
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="fa fa-envelope"></i>
              </div>
            </div> 
            <input  
            name="email"
            placeholder="Email"
            className="form-control" value={values.email} 
            onChange={handleInputChange} 
            ref={register({required: true})}
            />
            {errors.email && (
              <p>Email is field required</p>
            )}
            
          </div>
        </div>
      </div>
      <div className="form-group row">
      <div className="col-12">
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="fa fa-phone"></i>
              </div>
            </div> 
            <input  
            name="phone" 
            placeholder="Phone" 
            className="form-control" 
            value={values.phone}
            onChange={handleInputChange} 
            ref={register({required: true, max: 10, min: 10})}
            />
            {errors.phone && (
              <p>Phone no is field required</p>
            )}
          </div>
        </div>
      </div>
      <div className="form-group row">
      <label className="col-3">Gender</label>
        <div className="col-9">
          <div className="custom-control custom-radio custom-control-inline">
            <input name="gender" id="gender_0" type="radio" className="custom-control-input" value="M" onChange={handleInputChange} ref={register({ required: true })}/> 
            <label for="gender_0" className="custom-control-label">M</label>
          </div>
          <div className="custom-control custom-radio custom-control-inline">
            <input name="gender" id="gender_1" type="radio" className="custom-control-input" value="F" onChange={handleInputChange} ref={register({ required: true })}/> 
            <label for="gender_1" className="custom-control-label">F</label>
          </div>
        </div>
      </div>
      <div className="form-group row">
        <label className="col-3 col-form-label" for="skills">Skills</label> 
        <div className="col-9">
          <select id="skills" name="skills" className="custom-select" onChange={handleInputChange} ref={register({ required: true })} >
            <option value="ui">UI</option>
            <option value="ux">UX</option>
            <option value="backend">Backend</option>
            <option value="css">CSS</option>
          </select>
        </div>
      </div>
      <div className="form-group row">
        
        <div className="col-12">
          <textarea  placeholder="Description" name="description" cols="40" rows="5" className="form-control" value={values.description} onChange={handleInputChange}
          ref={register({required: true, maxLength: 50})}
          ></textarea>
        </div>
      </div> 
      <div className="form-group" >
          <input value={props.currentId==''?"Save":"Update"} type="submit" className="btn btn-primary btn-block" />
        </div>
     
    
            
        </form>
    )
}

export default Userdetailsform
