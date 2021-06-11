import React from 'react'
import style from "./index.module.css"
import { useDispatch, useSelector } from "react-redux"
import { CSSTransition } from "react-transition-group"
import {
    getRegistrationState,
    RegisterNewUser
} from "../../../../state/slices/registration";
import Button from "../../../button/index"
import {Ellipsis} from "../../../loader/index"


function RegistrationComplete() {
    const dispatch = useDispatch()
    const state = useSelector(getRegistrationState);
    const submitRegistation = (e) => {
        e.preventDefault()
        dispatch(RegisterNewUser(state));
    }
    
    
    return (
        <CSSTransition classNames="fade" in={state.stage === 4} unmountOnExit timeout={200}>
            <div className={style.reg_complete}>
                <h5> <strong>Terms {"&"} Conditions</strong></h5>
                <div className={style.terms}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque consequatur doloribus laboriosam porro sed eos reprehenderit maxime error soluta. Assumenda unde at nihil earum, laborum modi neque cupiditate architecto commodi.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur eaque perferendis soluta rem inventore necessitatibus ipsa, reiciendis ducimus veniam nesciunt praesentium natus harum earum nobis deserunt autem. Eveniet, delectus incidunt!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quibusdam, soluta eaque laborum iure dolores et, odio nisi omnis nihil amet odit placeat aspernatur earum distinctio ducimus animi. Quidem, incidunt!
                </div>
                <form onSubmit={submitRegistation}>
                    <div >
                        <label htmlFor="agree" style={{ marginRight: ".6rem" }}>Agree</label>
                        <input type="checkbox" id="agree" required />
                    </div>
                    <Button type="submit" >{state.loading?  <Ellipsis text="loading"/>:"Register"}</Button>
                </form>
                {state.registrationReport &&
                    <p className={(state.registrationReport.status > 0 && state.registrationReport.status < 400) ?
                        style.success : style.info
                    }>
                        {state.registrationReport.message}
                    </p>}
            </div>
        </CSSTransition>
    )
}

export default RegistrationComplete

