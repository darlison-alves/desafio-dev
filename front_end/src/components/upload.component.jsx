import React, { useState } from "react";
import filesvg from '../svg/cloud-computing-svgrepo-com.svg'
import filesvgWait from '../svg/cloud-computing-svgrepo-com-wait.svg'

const initialValue = {
  lastModified: null,
  lastModifiedDate: "",
  name: "",
  size: 0,
  type: "",
  webkitRelativePath: ""
}

export const UploadFile = ({ onSubmit = () => {}, loading = false } ) => {

  const [file, setFile] = useState(initialValue);

  return(    
      <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
        <div className="md:flex">
          <div className="w-full p-3">
            <div className="relative border-dotted h-48 rounded-lg border-dashed border-2 border-blue-700 bg-gray-100 flex justify-center items-center">
              <div className="absolute">
                <div className="flex flex-col items-center">
                  {
                    loading ? <img className="file-upload-img" src={filesvgWait} alt="file upload" /> :<img className="file-upload-img" src={filesvg} alt="file upload" />
                  }
                  <span className="block text-gray-400 font-normal">
                    {
                      file.name || "Selecione o arquivo no computador"
                    }                    
                  </span>
                </div>
              </div>
              <input disabled={loading} onChange={(evt) => {
                const [fileInstace] = evt.target.files;
                setFile(fileInstace)
                onSubmit(fileInstace)
              }} type="file" accept=".txt" className="upload-input h-full w-full opacity-0" name="" />
            </div>
          </div>
        </div>
      </div>
  )
}