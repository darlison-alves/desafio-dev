import React from 'react';
import './App.css';
import { ListOperations } from './components/list-operation';
import { UploadFile } from './components/upload.component';
import { apiRequest } from './helpers/api.helpers';
import UseAlertProvider from './hooks/useAlert';

function App() {
  const [operations, setOperations] = React.useState([])
  const [totalAmount, setTotalAmount] = React.useState(0)
  const [filters, setFilters] = React.useState({})

  const getList = () => {
    console.log('filters', filters)
    apiRequest.get('operations', filters)
      .then(res => {
        setOperations(res.content)
        // setTotalAmount(res.sum.total)
      }).catch(err => {
        console.log('err', err)
      })
  }

  const getSum = () => {
    apiRequest.get('operations/sum', filters)
      .then(res => {
        // setOperations(res.content)
        setTotalAmount(res.amount)
      }).catch(err => {
        console.log('err', err)
      })
  }

  React.useEffect(() => {
    getList()
    getSum()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[filters])

  return (
    <div className="text-center py-20 h-screen bg-white px-2">
      <UseAlertProvider>

        <UploadFile ofterUpload={() => getList()} />
        <ListOperations operations={operations} totalAmount={totalAmount} setFilters={setFilters} />
      </UseAlertProvider>
    </div>
  );
}

export default App;
