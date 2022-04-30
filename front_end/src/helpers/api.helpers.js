const urlBase = "http://localhost:5000"

class ApiRequest {

  post(path, body) {
    return new Promise((resolve, reject) => {
      fetch(`${urlBase}/${path}`,{
        method: 'POST',
        body
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