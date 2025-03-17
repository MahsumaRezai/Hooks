import { useState } from "react";
import { Fragment } from "react";
import classes from './Form.module.css'
import Button from "./Button";


const Form =(prosp)=>{
    const [name,setname]=useState('')
    const [last,setlast]=useState('')
    const [age,setage]=useState('')
    
    const formHandler = () => {
    setShowUsers((curState) => !curState);
    event.preventDefault();
    console.log(name,last,age)
  };
  const NameHandler=(event)=>{
      setname(event.target.value)
  }
  const LastHandler=(event)=>{
    setlast(event.target.value)
} 
const AgeHandler=(event)=>{
    setage(event.target.value)
}



     
    return (
        <Fragment>
            <form className={classes.form} onSubmit={formHandler}>
                <lable className={classes.lable}>Name</lable>
                <input onChange={NameHandler}/>
                <lable className={classes.lable}>LastName</lable>
                <input onChange={LastHandler}/> 
                 <lable className={classes.lable}>age</lable>
                <input onChange={AgeHandler}/>
              <Button/>
            </form>
        </Fragment>

    )
}
export default Form

