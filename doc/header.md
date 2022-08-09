<hr>

## Aciklama

ekşisözlük için geliştirilmiş resmi olmayan api.

**TLDR sondadir eger dokumantasyonu okumak istemiyorsaniz atlayabilirsiniz.**

**Not:** Dokumantasyondaki port (3000), config dosyasinda kullanilmis default porttur. 
Eger farkli bir port seciliyse goz onunde bulundurun.

### Kurulum

#### Git ile
Terminalde sırasıyla şu komutları çalıştırın:

```bash
git clone https://github.com/otuva/eksisozluk-api
cd eksisozluk-api
npm i
npm start
```

#### NPM ile

Local olarak
```bash
npm i eksisozluk-api # install
npx eksisozluk # run
```
Global Olarak
```bash
sudo npm install eksisozluk-api -g # install
eksisozluk # run
```

### Node.js API 

npm ile kurup dokumantasyonda bulunan tum fonksiyonlari kullanabilirsiniz.
Ornek:
```js
const eksisozluk = require('eksisozluk-api');

eksisozluk.entry.getEntry('1').then(
    (data) => {
        console.log(data);
    }
);

eksisozluk.user.getUser('ssg').then(
    (data) => {
        console.log(data);
    }
);

eksisozluk.startServer();
```

<hr>