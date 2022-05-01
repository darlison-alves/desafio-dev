import React from 'react';
import './App.css';
import { ListOperations } from './components/list-operation';
import { UploadFile } from './components/upload.component';
import UseAlertProvider from './hooks/useAlert';

function App() {
  return (
    <div className="text-center py-20 h-screen bg-white px-2">
      <UseAlertProvider>
        {/* <Tabs /> */}
        <UploadFile />
        <ListOperations />
      </UseAlertProvider>
    </div>
  );
}

export default App;
