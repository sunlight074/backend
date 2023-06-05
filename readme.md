## การ Installation

ต้องติดตั้ง  node  ลงมาบนเครื่องก่อนโดยใช้ version 16  ขึ้นไป
โดยใช้  https://nodejs.org/en/download

โปรเจคนี้เราจะใช้ npm เป็น package manager

โดยถ้าหาก clone โปรเจคมาแล้วจะต้องทำการติดตั้ง node module ก่อนโดยใช้คำสั่ง

```bash
npm install 
```

ต่อมาจะต้อง run mySQL ก่อนโดยเราจะใช้ Docker  เป็น  container  


จำเป็นต้องมีโปรแกรม Docker Desktop แล้วก็ start โปรแกรม Docker Desktop 

จากนั้นใช้คำสั่งด้านล่างเพื่อรัน mySQL

```bash
docker-compose up -d
```

และก็รัน  backend ขึ้นมาตามลำดับ

```bash
npm run dev
```
