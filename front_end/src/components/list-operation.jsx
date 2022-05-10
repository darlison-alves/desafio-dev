import React from "react";
import moment from 'moment';

import { apiRequest } from "../helpers/api.helpers";
import { formatter } from "../helpers/utils.helper";

export const ListOperations = ({totalAmount, operations, setFilters = () => {} }) => {  
  
  const [nameOwners, setNameOwners] = React.useState([])
  
  const getListName = () => { 
    apiRequest.get('operations/store-names', {})
      .then(res => {
        setNameOwners(res)
      }).catch(err => {
        console.log('err', err)
      })
  }
  
  React.useEffect(() => {
    getListName()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [operations])


  return (
    <div>
      <select type="text" id="myInput" onChange={(evt) => {
        setFilters(old => ({...old, storeName: evt.target.value }))
        console.log('evt', evt.target.value)
      }} placeholder="Pesquisar pelo nome Dono" title="Type in a name">
        <option value={""} >Selecione loja</option>
        {
          nameOwners.map( owner => <option value={owner.name} > {owner.name} </option>)
        }
      </select>
      <h1 className="tb-title">Lista de Operações</h1>

      <table id="myTable">
        <tr class="header">
          <th>Tipo</th>
          <th>Data</th>
          <th>Valor</th>
          <th>CPF</th>
          <th>Cartão</th>
          <th>Hora</th>
          <th>Dono da Loja</th>
          <th>Nome Loja</th>
        </tr>
        <tr class="header">
          <td colSpan={8} >saldo: {formatter.format(totalAmount)}</td>
        </tr>
        {
          operations.map(operation => {
            const { type } = operation
            return (
            <tr>
              <td>{type.description}</td>
              <td>{moment(operation.data).format('DD/MM/yyyy')}</td>
              <td>{formatter.format(operation.amount)}</td>
              <td>{operation.document}</td>
              <td>{operation.card}</td>
              <td>{operation.hour}</td>
              <td>{operation.storeOwner}</td>
              <td>{operation.storeName}</td>
            </tr>)
          })
        }
        
      </table>
    </div>
  )
}