import { createContext, useContext } from "react";

const UserContext = createContext();

//children: predefined
export const UserProvider = ({children}) => {
    return <UserContext.Provider>
      {children}
    </UserContext.Provider>
}

const useUserContext = () => {useContext(UserContext)}

export default useUserContext;