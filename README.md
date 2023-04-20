## Ejecucion del programa

### build de imagen
```bash
docker build -t "avatar:1.0" .
```
### comando para ejecutar
```bash
 docker run --rm -p 3000:3000 "avatar:1.0" npm run dev
```