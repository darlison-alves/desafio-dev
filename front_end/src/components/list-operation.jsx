import React from "react";
import moment from 'moment';

import { apiRequest } from "../helpers/api.helpers";
import { formatter } from "../helpers/utils.helper";

export const ListOperations = () => {

  const [operations, setOperations] = React.useState([])

  const getList = () => {
    apiRequest.get('stores/operations')
      .then(res => {
        console.log('33', res)
        setOperations(res.operations)
      }).catch(err => {
        console.log('err', err)
      })
  }

  React.useEffect(() => {
    getList()
  }, [])


  return (
    <div>
      <select type="text" id="myInput" onkeyup="myFunction()" placeholder="Pesquisar pelo nome Dono" title="Type in a name"></select>
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
          <td colSpan={8} >saldo: </td>
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