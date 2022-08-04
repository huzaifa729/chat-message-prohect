import { createContext, useContext, useReducer } from "react";


export const StateContext = createContext(); //This means PrepareDatalayer


export const StateProvider = ({reducer,initialState,children}) =>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
) // This means wrap our app


export const useStateValue = () => useContext(StateContext); //This means pull Datalayer.



