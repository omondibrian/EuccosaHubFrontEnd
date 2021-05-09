import store from "../../state/store";
import { Provider } from "react-redux";

import React from 'react'

function StoryBookReduxWrapper({ children }) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default StoryBookReduxWrapper
