const urlBase = "http://localhost:5000"

class ApiRequest {

  post(path, body) {
    return new Promise((resolve, reject) => {

      const formData = new FormData();
      formData.append('file', body);
      fetch(`${urlBase}/${path}`,{
        method: 'POST',
        body: formData,
        headers: {

        }
      }).then(res => res.json())
      .then(data => {
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  }

  get(path) {
    return new Promise((resolve, reject) => {
      fetch(`${urlBase}/${path}`,{
        method: 'GET',
        headers: {
          'Content-type': 'application/json'
        }
      }).then(res => res.json())
      .then(data => {
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  }

}

export const apiRequest = new ApiRequest();