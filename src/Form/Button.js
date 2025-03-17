import { Fragment } from "react";
import classes from './Button.module.css'

 const Button =(props)=>{
     return (
         <Fragment>
       <buton className={classes.btn}>Submit</buton>
         </Fragment>
     )
 }
 export default Button;