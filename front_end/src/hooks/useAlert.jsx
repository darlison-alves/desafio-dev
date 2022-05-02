import { createContext, useContext, useState } from "react";
import { Alert } from "../components/alert.component";

export const UseAlert = createContext({
  alertConfig: '',
  setAlertConfig: (text) => {}
})

export const useAlertContext = () => useContext(UseAlert);

const UseAlertProvider = value => {
  const [alertConfig, setAlertConfig] = useState({ description: '', title: '', type: '' });

  const setDescriptionCustom = ({ description, title, type }) => {
    setAlertConfig(old =>({ ...old, description, title, type }))

    setTimeout(() => {
      setAlertConfig(old => ({ ...old, description: '', title: '', type: '' }))
    }, 10000)
  }

  return (
    <UseAlert.Provider value={{ alertConfig, setAlertConfig: setDescriptionCustom }}>
      <div>
      { alertConfig.description && <Alert type={alertConfig.type} description={alertConfig.description} title={alertConfig.title} /> }
      </div>
      { value.children }
    </UseAlert.Provider>
  )
}

export default UseAlertProvider;