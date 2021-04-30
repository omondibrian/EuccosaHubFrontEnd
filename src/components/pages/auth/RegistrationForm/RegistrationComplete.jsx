import React, { useEffect, useState } from 'react'
import style from "./index.module.css"
import { useSelector } from "react-redux"
import { getRegistrationState } from "../../../../state/slices/registration";
import { CSSTransition } from "react-transition-group"
import { Button } from '../../../button';


function RegistrationComplete() {
    const state = useSelector(getRegistrationState);
    const [resetState, setReset] = useState(59)
    let reset = 59
    const timer = () => {
        setInterval(() => {
            reset -= 1
            if (reset < 0)
                reset = 0
            // document.getElementById("time").innerHTML = reset;
            setReset(reset)
        }, 1000)
    }

    useEffect(() => timer(), [])

    return (
        <CSSTransition classNames="fade" in={state.stage === 4} unmountOnExit timeout={200}>
            <div className={style.reg_complete}>
                <p>An confirmation code has been send to
                    {state.Email}. Please follow to confirm your account
                </p>
                <form action="" method="post">
                    <input type="hidden" value={state.Email} name="email" />
                    <Button type="submit" className="btn_light" disabled={(resetState > 0)}>
                        <span style={{ color: "red" }} id="time">{resetState}</span>&nbsp;&nbsp;  Resend Confirmation
                 </Button>
                </form>
            </div>
        </CSSTransition>
    )
}

export default RegistrationComplete

