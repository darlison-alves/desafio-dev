import { createContext, useContext, useState } from "react";
import { Alert } from "../components/alert.component";

export const UseAlert = createContext({
  description: '',
  setDescription: (text) => {}
})

export const useAlertContext = () => useContext(UseAlert);

const UseAlertProvider = value => {
  const [description, setDescription] = useState('');

  const setDescriptionCustom = (text) => {
    setDescription(text)

    setTimeout(() => {
      setDescription('')
    }, 5000)
  }

  return (
    <UseAlert.Provider value={{ description, setDescription: setDescriptionCustom }}>
      <div>
      { description && <Alert description={description}/> }
      </div>
      { value.children }
    </UseAlert.Provider>
  )
}

export default UseAlertProvider;