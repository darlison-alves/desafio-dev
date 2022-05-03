# Upload Test

Forma para roda aplicação:

```
   sudo docker-compose up
```

Documentação da api
obs: endpoint após "docker-compose" http://localhost:5000

```
POST /stores/upload
headers {
    Content-Type: multipart/form-data;
}
body {
    file: binary
}
```

```
GET /stores/operations
headers {
    Content-Type: application/json
}
response {
    count: number;
    operations: [,…]
    sum: {total: number}
}
```
