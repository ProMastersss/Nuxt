# Nuxt 3 Tutorial

## gRPC

Чтобы оконччательно проверить нужен прокси сервер между браузером и сервером

```
protoc -I composables composables/hero.proto \
  --js_out=import_style=commonjs,binary:composables \
  --grpc-web_out=import_style=typescript,mode=grpcweb:composables
```

## Stack

<span>
<img height="50" src="https://github.com/ProMastersss/ProMastersss/blob/main/src/images/tech/Vue.svg" />
<img height="50" src="https://github.com/ProMastersss/ProMastersss/blob/main/src/images/tech/Nuxt.svg" />
<img height="50" src="https://github.com/ProMastersss/ProMastersss/blob/main/src/images/tech/gRPC.svg" />
</span>
