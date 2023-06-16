import React from "react";

const StoreContext = React.createContext(null);

export const Provider = (props) => {
    return <StoreContext.Provider vulue={props.store}>
    {props.children}
    </StoreContext.Provider>
}

export default StoreContext