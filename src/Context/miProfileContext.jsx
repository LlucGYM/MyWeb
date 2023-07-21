import React, {useState} from "react";

const Context = React.createContext({})

export function MiProfileContext ({children}) {
    const [name,setName] = useState(() => window.sessionStorage.getItem('name'))
    const [nick,setNick] = useState(() => window.sessionStorage.getItem('nick'))
    const [image,setImage] = useState(() => window.sessionStorage.getItem('image'))
    const [description,setDescription] = useState(() => window.sessionStorage.getItem('description'))
    const [company,setCompany] = useState(() => window.sessionStorage.getItem('company'))

    return <Context.Provider value={{name,setName,nick,image,description,company,setNick,setImage,setDescription,setCompany}}>{children}</Context.Provider>
}

export default Context