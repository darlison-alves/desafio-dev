import { useState } from 'react';
import './App.css';
import { UploadFile } from './components/upload.component';
import { apiRequest } from './helpers/api.helpers';
import UseAlertProvider from './hooks/useAlert';

function App() {

  const [loading, setLoading] = useState(false)

  const onSubmit = (data) => {
    setLoading(true)
    apiRequest.post('upload', data)
      .then(res => {
        console.log('res', res)
        setLoading(false)
      }).catch(err => {
        console.log('err', err)
        setLoading(false)
      })
  }

  return (
    <div className="text-center py-20 h-screen bg-white px-2">
      <UseAlertProvider>
        <UploadFile loading={loading} onSubmit={onSubmit} />
      </UseAlertProvider>
    </div>
  );
}

export default App;
