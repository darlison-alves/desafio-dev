import { useState } from 'react';
import './App.css';
import { UploadFile } from './components/upload.component';
import UseAlertProvider from './hooks/useAlert';

function App() {

  return (
    <div className="text-center py-20 h-screen bg-white px-2">
      <UseAlertProvider>
        <UploadFile />
      </UseAlertProvider>
    </div>
  );
}

export default App;
