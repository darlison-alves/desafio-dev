# Upload Test

Forma para roda aplicação:

```
   sudo docker-compose up
```

Documentação da api
obs: endpoint após "docker-compose" http://localhost:5000

```
POST /operations/upload
headers {
    Content-Type: multipart/form-data;
}
body {
    file: binary
}
```

```
GET /operations
headers {
    Content-Type: application/json
}
response {
    count: number;
    operations: [,…]
    sum: {total: number}
}
```

```
GET /operations/sum
headers {
    Content-Type: application/json
}
response {
    amount: number;
}
```

```
GET /operations/store-names
headers {
    Content-Type: application/json
}
response {
    name: string;
}
```
