## Docker 
- ![image](https://github.com/lckydidn/FSWD-HW-11/assets/136577844/c5a0a130-00af-437a-b926-395b05701cc9)
  Setelah menjalankan docker compose up, gunakan command docker ps untuk mencari image aplikasi yg sudah kita buat, disini bernama newtodo-app
- ![image](https://github.com/lckydidn/FSWD-HW-11/assets/136577844/8a262c9a-bcac-4ffc-a2a4-552f95005a46)
</br>
  Untuk masuk ke workdir image kita, docker exec -it container id sh jika sudah masuk maka seperti berikut dan jalankan command dibawah untuk menginput data ke dalam tabel yg sudah dibuat (users dan Todos)
  - npx sequelize-cli db:create
  - npx sequelize-cli db:migrate
  - npx sequelize-cli db:seed:all
- Kondisi pada aplikasi docker desktop
  ![image](https://github.com/lckydidn/FSWD-HW-11/assets/136577844/952d3cd1-08fa-4333-955a-10fcc5a64ebe)
  ![image](https://github.com/lckydidn/FSWD-HW-11/assets/136577844/e1a8a55c-9fb9-400b-aa70-904cd21ce24e)


  
## Bisa coba melakukan pengujian API pada postman
Berikut hasil pengujian:
- ![image](https://github.com/lckydidn/FSWD-HW-11/assets/136577844/e2004f8c-4880-42dd-bd94-b1fcc91bce25)
- ![image](https://github.com/lckydidn/FSWD-HW-11/assets/136577844/14ac587e-e85c-4755-b44c-34608a3240e4)

## Hasil log pengujian unit testing pada terminal
- ![image](https://github.com/lckydidn/FSWD-HW-11/assets/136577844/eb1a1e90-6d6a-44e9-ab84-2e30eb9adeb5)
