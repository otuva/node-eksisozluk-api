<a name="top"></a>
# eksisozluk-api v0.0.1

Unofficial eksisozluk api

# giris

<hr>
<h2>Aciklama</h2>
<p>ekşisözlük için geliştirilmiş resmi olmayan api.</p>
<p><strong>TLDR sondadir eger dokumantasyonu okumak istemiyorsaniz atlayabilirsiniz.</strong></p>
<p><strong>Not:</strong> Dokumantasyondaki port (3000), config dosyasinda kullanilmis default porttur.
Eger farkli bir port seciliyse goz onunde bulundurun.</p>
<h2>Kurulum</h2>
<p>Bu apiyi kolaylıkla kendi bilgisayarınızda çalışır hale getirebilirsiniz.</p>
<p>Bunun için terminalde sırasıyla şu komutları çalıştırın.</p>
<pre><code class="language-bash">git clone https://github.com/otuva/eksisozluk-api
cd eksisozluk-api
npm i
npm start
</code></pre>
<hr>

# Table of contents

- [arama](#arama)
  - [arama sonucunu getir.](#arama-sonucunu-getir.)
  - [otomatik tamamlamayi getir.](#otomatik-tamamlamayi-getir.)
- [balk](#balk)
  - [başlıkları getir.](#başlıkları-getir.)
  - [kanallari getir.](#kanallari-getir.)
  - [tek başlık getir.](#tek-başlık-getir.)
- [debe](#debe)
  - [debe getir.](#debe-getir.)
- [entry](#entry)
  - [tek entry getir.](#tek-entry-getir.)
- [etc](#etc)
  - [tum kanallari getir.](#tum-kanallari-getir.)
- [kullanici](#kullanici)
  - [entry sayfasini getir.](#entry-sayfasini-getir.)
  - [tek kullanıcı getir.](#tek-kullanıcı-getir.)

___


# <a name='arama'></a> arama

## <a name='arama-sonucunu-getir.'></a> arama sonucunu getir.
[Back to top](#top)

<p>site içi arama yapan endpoint.</p> <p>boslukla ayrilmis birden cok kelime veya tek aranabilir</p> <ul> <li> <p><code>api/index/search/mayonez</code></p> </li> <li> <p><code>api/index/search/ketcap mayonez</code></p> </li> </ul> <p>gibi.</p> <p>Sayfa parametresi opsiyonel olup diger sayfalari getirmek icin url sonuna /SAYI ekleyebilirsiniz.</p>

```
GET /api/index/search/:query/:page?
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| query | `String` | <p>arama kelimesi/kelimeleri</p> |
| page | `Number` | **optional** <p>getirilecek sayfa</p>_Default value: 1_<br> |

### Examples

Example curl:

```curl
curl -i http://localhost:3000/api/index/search/2022
```

Example curl sayfa:

```curl
curl -i http://localhost:3000/api/index/search/2022/2
```

Example python:

```python
import requests as r
req = r.get("http://localhost:3000/api/index/search/2022")
```

Example axios(js):

```javascript
req = axios.get("http://localhost:3000/api/index/search/2022").then(...)
```

### Success response

#### Success response - `200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| totalTopicCount | `Number` | <p>toplam baslik adeti.</p> |
| totalPageCount | `Number` | <p>toplam kac sayfa baslik oldugu.</p> |
| topics | `Object[]` | <p>başlık objelerinin arrayi.</p> |
| topics.id | `Number` | <p>basligin id'si</p> |
| topics.title | `String` | <p>basligin ismi</p> |
| topics.topicSlug | `String` | <p>baslik url slug hali</p> |
| topics.topicUrl | `String` | <p>basligin full urli</p> |
| topics.totalEntryCount | `Number` | <p>basliktaki toplam entry sayisi</p> |

### Success response example

#### Success response example - `Success-Response:`

```json

{
  "totalTopicCount": 52,
  "totalPageCount": 2,
  "topics": [
    {
      "id": 6398332,
      "title": "ketçap mayonez hardal üçlüsündeki hardalın durumu",
      "slug": "/ketcap-mayonez-hardal-uclusundeki-hardalin-durumu--6398332",
      "topicUrl": "https://eksisozluk.com/ketcap-mayonez-hardal-uclusundeki-hardalin-durumu--6398332",
      "totalEntryCount": 180
    },
    {
      "id": 7110782,
      "title": "en iyi ketçap mayonez markası",
      "slug": "/en-iyi-ketcap-mayonez-markasi--7110782",
      "topicUrl": "https://eksisozluk.com/en-iyi-ketcap-mayonez-markasi--7110782",
      "totalEntryCount": 165
    },
    ...
  ]
}
```

### Error response

#### Error response - `Error 4xx`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| SearchReturnedNoResults |  | <p>Arama sonucu bos dondu.</p> |

### Error response example

#### Error response example - `api/index/search/dsadsaads:`

```json
{"error":"Search returned no results"}
```

## <a name='otomatik-tamamlamayi-getir.'></a> otomatik tamamlamayi getir.
[Back to top](#top)

<p>Otomatik tamamlama sağlayan endpoint.</p> <p>Return edilen cevaptaki arraylerin ikisi de bos ise hata dondurur degilse eksi sozlukten alinan cevabi direkt olarak dondurur.</p>

```
GET /api/index/autocomplete/:query
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| query | `String` | <p>aranan kelime/kelimeler</p> |

### Examples

Example curl:

```curl
curl -i http://localhost:3000/api/index/autocomplete/pena
```

Example python:

```python
import requests as r
req = r.get("http://localhost:3000/api/index/autocomplete/pena")
```

Example axios(js):

```javascript
req = axios.get("http://localhost:3000/api/index/autocomplete/pena").then(...)
```

### Success response

#### Success response - `200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| Titles | `String[]` | <p>baslik isimlerinin arrayi.</p> |
| Query | `String` | <p>aranan kelime/ler</p> |
| Nicks | `String[]` | <p>kullanici nicklerinin arrayi.</p> |

### Success response example

#### Success response example - `Success-Response:`

```json

{
  "Titles": [
    "pena",
    "pena (video kanalı)",
    "pena'daki aldatan sevgili entry canlandırması",
    "inaki pena",
    ...
  ],
  "Query": "pena",
  "Nicks": [
    "pena",
    "pena gibi kaybolsam",
    "pena minik plastik garip nesne"
  ]
}
```

### Error response

#### Error response - `Error 4xx`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| SearchReturnedNoResults |  | <p>Arama sonucu bos dondu.</p> |

### Error response example

#### Error response example - `api/index/autocomplete/asd fdsaafsd:`

```json
{"error":"Search returned no results"}
```

# <a name='balk'></a> balk

## <a name='başlıkları-getir.'></a> başlıkları getir.
[Back to top](#top)

<p>Secilen kategorideki (gündem, tarihte bugun vs.) başlıkları getiren endpoint.</p> <p>Sayfa parametresi opsiyonel olup diger sayfalari getirmek icin url sonuna <code>/SAYI</code> ekleyebilirsiniz.</p> <p>Baslik kategorisinin alabilecegi degerler icin gereken parametrelerin altindaki izin verilen degerlere bakiniz.</p> <p>Kanallar icin diger endpointi kullaniniz.</p>

```
GET /api/topic/list/:choice/:page?
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| choice | `String` | <p>getirilecek baslik kategorisi</p>_Allowed values: "gundem","sorunsal","tarihte-bugun","basiboslar"_ |
| page | `Number` | **optional** <p>getirilecek sayfa</p>_Default value: 1_<br> |

### Examples

Example curl:

```curl
curl -i http://localhost:3000/api/topic/list/gundem
```

Example curl sayfa:

```curl
curl -i http://localhost:3000/api/topic/list/gundem/2
```

Example python:

```python
import requests as r
req = r.get("http://localhost:3000/api/topic/list/gundem")
```

Example axios(js):

```javascript
req = axios.get("http://localhost:3000/api/topic/list/gundem").then(...)
```

### Success response

#### Success response - `200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| totalTopicCount | `Number` | <p>toplam baslik adeti.</p> |
| totalPageCount | `Number` | <p>toplam kac sayfa baslik oldugu.</p> |
| topics | `Object[]` | <p>başlık objelerinin arrayi.</p> |
| topics.id | `Number` | <p>basligin id'si</p> |
| topics.title | `String` | <p>basligin ismi</p> |
| topics.topicSlug | `String` | <p>baslik url slug hali</p> |
| topics.topicUrl | `String` | <p>basligin full urli</p> |
| topics.totalEntryCount | `Number` | <p>basliktaki toplam entry sayisi</p> |

### Success response example

#### Success response example - `Success-Response:`

```json

{
"totalTopicCount": 299,
"totalPageCount": 6,
"topics": [
  {
    "id": 7341070,
    "title": "sönmüş kireçle yapılan +18 sanat",
    "topicSlug": "/sonmus-kirecle-yapilan-18-sanat--7341070?a=popular",
    "topicUrl": "https://eksisozluk.com//sonmus-kirecle-yapilan-18-sanat--7341070?a=popular",
    "totalEntryCount": 86
  },
  {
    "id": 7340995,
    "title": "türkiye ermenistan sınırı mayın temizliği",
    "topicSlug": "/turkiye-ermenistan-siniri-mayin-temizligi--7340995?a=popular",
    "topicUrl": "https://eksisozluk.com//turkiye-ermenistan-siniri-mayin-temizligi--7340995?a=popular",
    "totalEntryCount": 128
  },
 ...
 ]
}
```

### Error response

#### Error response - `Error 4xx`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| TopicNotFound |  | <p>Aranan kategori gecerli ama hicbir baslik bulunamadi.</p> |
| TopicIsInvalid |  | <p>Gecerli bir kategori degil.</p> |

### Error response example

#### Error response example - `api/topic/list/gundem/412:`

```json
{
"error": "Topic not found"
}
```

#### Error response example - `api/topic/list/gundam:`

```json
{
"error": "Topic is invalid"
}
```

## <a name='kanallari-getir.'></a> kanallari getir.
[Back to top](#top)

<p>Secilen kanala ait (haber, bilim vs.) başlıkları getiren endpoint.</p> <p>Sayfa parametresi opsiyonel olup diger sayfalari getirmek icin url sonuna <code>/SAYI</code> ekleyebilirsiniz.</p> <p>Kanal kategorisinin alabilecegi degerler icin gereken parametrelerin altindaki izin verilen degerlere bakiniz.</p> <p>Kanal kategorilerinin turkce karakter icermesine dikkat ediniz. Ornegin 'muzik' kategorisi hata verecekken 'müzik' kategorisi sorunsuz calisacaktir.</p>

```
GET /api/topic/list/channel/:choice/:page?
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| choice | `String` | <p>getirilecek baslik kategorisi</p>_Allowed values: "haber","sinema","bilim","eğitim","spoiler","müzik","edebiyat","ekonomi","tarih","yeme-içme","ilişkiler","siyaset","teknoloji","sanat","moda","otomotiv","magazin","ekşi-sözlük","spor","motosiklet","sağlık","oyun","anket","programlama","tv","seyahat","havacılık","troll"_ |
| page | `Number` | **optional** <p>getirilecek sayfa</p>_Default value: 1_<br> |

### Examples

Example curl:

```curl
curl -i http://localhost:3000/api/topic/list/channel/haber
```

Example curl sayfa:

```curl
curl -i http://localhost:3000/api/topic/list/channel/haber/2
```

Example python:

```python
import requests as r
req = r.get("http://localhost:3000/api/topic/list/channel/haber")
```

Example axios(js):

```javascript
req = axios.get("http://localhost:3000/api/topic/list/channel/haber").then(...)
```

### Success response

#### Success response - `200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| totalTopicCount | `Number` | <p>toplam baslik adeti.</p> |
| totalPageCount | `Number` | <p>toplam kac sayfa baslik oldugu.</p> |
| topics | `Object[]` | <p>başlık objelerinin arrayi.</p> |
| topics.id | `Number` | <p>basligin id'si</p> |
| topics.title | `String` | <p>basligin ismi</p> |
| topics.topicSlug | `String` | <p>baslik url slug hali</p> |
| topics.topicUrl | `String` | <p>basligin full urli</p> |
| topics.totalEntryCount | `Number` | <p>basliktaki toplam entry sayisi</p> |

### Success response example

#### Success response example - `Success-Response:`

```json

{
"totalTopicCount": 150,
"totalPageCount": 3,
"topics": [
  {
    "id": 7341076,
    "title": "aç insanlar varken teleskopa 10 milyar $ harcamak",
    "topicSlug": "/ac-insanlar-varken-teleskopa-10-milyar-harcamak--7341076",
    "topicUrl": "https://eksisozluk.com//ac-insanlar-varken-teleskopa-10-milyar-harcamak--7341076",
    "totalEntryCount": 38
  },
  {
    "id": 116822,
    "title": "anksiyete",
    "topicSlug": "/anksiyete--116822?day=2022-07-14",
    "topicUrl": "https://eksisozluk.com//anksiyete--116822?day=2022-07-14",
    "totalEntryCount": 5
  },
 ...
 ]
}
```

### Error response

#### Error response - `Error 4xx`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| TopicNotFound |  | <p>Aranan kategori gecerli ama hicbir baslik bulunamadi.</p> |
| TopicIsInvalid |  | <p>Gecerli bir kategori degil.</p> |

### Error response example

#### Error response example - `api/topic/list/channel/bilim/17:`

```json
{
"error": "Topic not found"
}
```

#### Error response example - `api/topic/list/channel/asd:`

```json
{
"error": "Topic is invalid"
}
```

## <a name='tek-başlık-getir.'></a> tek başlık getir.
[Back to top](#top)

<p>Spesifik başlığı entry'leri ile birlikte getiren endpoint. slug yerine basliğin kendisini birebir yazarsaniz da calisir:</p> <p>örneğin: <code>http://localhost:3000/api/topic/veda ederken 2020'ye bir not bırak</code></p> <p>Full slug ise bu sekil gorunur (baslik--id): <code>pena--31782</code></p> <p>Eger baslik slugi full halinde degilse ve <code>config.topic.allowRedirect</code> true degerine sahipse tam haline yonlendirir.</p> <p>Ornek:    <code>http://localhost:3000/api/topic/insanlık tarihinin en kötü iki senesi 536 ve 537</code></p> <p>Son hali: <code>http://localhost:3000/api/topic/insanlik-tarihinin-en-kotu-iki-senesi-536-ve-537--7341301/1</code></p>

```
GET /api/topic/:slug/:page?
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| slug | `String` | <p>getirilecek baslik</p> |
| page | `Number` | **optional** <p>getirilecek sayfa</p>_Default value: 1_<br> |

### Examples

Example curl:

```curl
curl -i http://localhost:3000/api/topic/pena
```

Example curl sayfa:

```curl
curl -i http://localhost:3000/api/topic/pena/2
```

Example python:

```python
import requests as r
req = r.get("http://localhost:3000/api/topic/pena")
```

Example axios(js):

```javascript
req = axios.get("http://localhost:3000/api/topic/pena").then(...)
```

### Success response

#### Success response - `200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| topicID | `Number` | <p>basligin idsi.</p> |
| disambiguations | `Object[]` | <p>farkli anlamlardaki basliklar.</p> |
| disambiguations.slug | `String` | <p>farkli basligin slug hali.</p> |
| disambiguations.title | `String` | <p>farkli basligin ismi.</p> |
| title | `String` | <p>başlıgin ismi.</p> |
| topicSlug | `String` | <p>basligin slug hali</p> |
| numberOfPages | `Number` | <p>basligin sahip oldugu sayfa sayisi</p> |
| currentPage | `Number` | <p>baslikta o anda incelenen sayfa. (.pager degeri)</p> |
| tags | `String[]` | <p>basligin tagleri.</p> |
| entries | `Object[]` | <p>basliktaki entryler.</p> |
| entries.id | `Number` | <p>entry id'si.</p> |
| entries.title | `String` | <p>entrynin ait oldugu baslik</p> |
| entries.body | `String` | <p>entryin icerigi</p> |
| entries.favCount | `Number` | <p>entryin favori sayisi</p> |
| entries.isPinned | `Boolean` | <p>entryin pinli olup olmadigi.</p> |
| entries.isPinnedOnProfile | `Boolean` | <p>entryin profilinde pinli olup olmadigi.</p> |
| entries.inEksiSeyler | `Boolean` | <p>entryin eksiseyler'de olup olmadigi.</p> |
| entries.commentCount | `Number` | <p>entryin yorum sayisi. (sorularinizi yanitliyorum'da vs. bulunan)</p> |
| entries.aboutAuthor | `Object` | <p>entryin yazar bilgileri.</p> |
| entries.aboutAuthor.author | `String` | <p>yazarin nicki.</p> |
| entries.aboutAuthor.authorProfilePicture | `String` | <p>yazarin profil resmi.</p> |
| entries.aboutDateTime | `Object` | <p>entryin tarih bilgileri.</p> |
| entries.aboutDateTime.createdAtDate | `String` | <p>entryin olusturulma tarihi.</p> |
| entries.aboutDateTime.createdAtTime | `String` | <p>entryin olusturulma saati.</p> |
| entries.aboutDateTime.updatedAtDate | `String` | <p>entryin guncellenme tarihi.</p> |
| entries.aboutDateTime.updatedAtTime | `String` | <p>entryin guncellenme saati.</p> |

### Success response example

#### Success response example - `Success-Response:`

```json

{
"topicID": 31872,
"disambiguations": [
  {
    "slug": "/?q=c%20%28programlama%20dili%29",
    "title": "c (programlama dili)"
  },
  {
    "slug": "/?q=c%20%28s%c3%b6zl%c3%bck%20yazar%c4%b1%29",
    "title": "c (sözlük yazarı)"
  }
],
"title": "c",
"topicSlug": "c--31872",
"numberOfPages": 18,
"currentPage": 1,
"tags": [
  "programlama",
  "edebiyat"
],
"entries": [
  {
    "id": 1062,
    "title": "c",
    "body": "yıllar yılı ortamlarda şöyle yada böyle muhabbetini eden bir takım insanlara dönüp garip garip bakmamızı sağlayan,<br>sonrada \"evime gideyim biraz oyun bezeyim, bunlara benzemeyeyim dedirten.\" iştah açıcı, sivilce yapıcı,anti-sosyalite muamması.",
    "favCount": 4,
    "isPinned": false,
    "isPinnedOnProfile": false,
    "inEksiSeyler": false,
    "commentCount": 0,
    "aboutAuthor": {
      "author": "otisabi",
      "authorProfilePicture": "https://ekstat.com/img/default-profile-picture-light.svg"
    },
    "aboutDateTime": {
      "createdAtDate": "05.03.1999",
      "createdAtTime": null,
      "updatedAtDate": null,
      "updatedAtTime": null
    }
  },
  {
    "id": 172152,
    "title": "c",
    "body": "alfabenin 3. harfi.",
    "favCount": 3,
    "isPinned": false,
    "isPinnedOnProfile": false,
    "inEksiSeyler": false,
    "commentCount": 0,
    "aboutAuthor": {
      "author": "body",
      "authorProfilePicture": "https://ekstat.com/img/default-profile-picture-light.svg"
    },
    "aboutDateTime": {
      "createdAtDate": "26.05.2000",
      "createdAtTime": "01:06",
      "updatedAtDate": null,
      "updatedAtTime": null
    }
  },
...
 ]
}
```

### Error response

#### Error response - `Error 4xx`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| RequestFailedWithStatusCode404 |  | <p>Baslik bulunamadi.</p> |

### Error response example

#### Error response example - `api/topic/cdsaas:`

```json
{
  "error": "Request failed with status code 404"
}
```

# <a name='debe'></a> debe

## <a name='debe-getir.'></a> debe getir.
[Back to top](#top)

<p>debeleri getiren endpoint. debe'deki tüm entry'lerin bilgileri döner.</p>

```
GET /api/index/debe
```

### Examples

Example curl:

```curl
curl -i http://localhost:3000/api/index/debe
```

Example python:

```python
import requests as r
req = r.get("http://localhost:3000/api/index/debe")
```

Example axios(js):

```javascript
req = axios.get("http://localhost:3000/api/index/debe").then(...)
```

### Success response

#### Success response - `200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| info | `Object` | <p>debe bilgileri</p> |
| info.date | `String` | <p>debe tarihi.</p> |
| info.entryCount | `Number` | <p>debe icindeki entry sayisi.</p> |
| entries | `Object[]` | <p>debe icindeki entryler.</p> |
| entries.id | `Number` | <p>entry id'si.</p> |
| entries.slug | `String` | <p>entryin slug'i.</p> |
| entries.title | `String` | <p>entryin basligi.</p> |

### Success response example

#### Success response example - `Success-Response:`

```json

{
"info": {
  "date": "2022-07-15",
  "entryCount": 45
},
"entries": [
  {
    "id": 139983585,
    "slug": "/entry/139983585",
    "title": "fazıl say"
  },
  {
    "id": 139971232,
    "slug": "/entry/139971232",
    "title": "14 temmuz 2022 datça kundakçısının açıklamaları"
  },
 ...
 ]
}
```

# <a name='entry'></a> entry

## <a name='tek-entry-getir.'></a> tek entry getir.
[Back to top](#top)

<p>entry no'su ile entry getiren endpoint.</p>

```
GET /api/entry/:id
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| id | `Number` | <p>entry no'su.</p> |

### Examples

Example curl:

```curl
curl -i http://localhost:3000/api/entry/139983585
```

Example python:

```python
import requests as r
req = r.get("http://localhost:3000/api/entry/139983585")
```

Example axios(js):

```javascript
req = axios.get("http://localhost:3000/api/entry/139983585").then(...)
```

### Success response

#### Success response - `200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| id | `Number` | <p>entry id'si.</p> |
| title | `String` | <p>entrynin ait oldugu baslik</p> |
| body | `String` | <p>entryin icerigi</p> |
| favCount | `Number` | <p>entryin favori sayisi</p> |
| isPinned | `Boolean` | <p>entryin pinli olup olmadigi.</p> |
| isPinnedOnProfile | `Boolean` | <p>entryin profilinde pinli olup olmadigi.</p> |
| inEksiSeyler | `Boolean` | <p>entryin eksiseyler'de olup olmadigi.</p> |
| commentCount | `Number` | <p>entryin yorum sayisi. (sorularinizi yanitliyorum'da vs. bulunan)</p> |
| aboutAuthor | `Object` | <p>entryin yazar bilgileri.</p> |
| aboutAuthor.author | `String` | <p>yazarin nicki.</p> |
| aboutAuthor.authorProfilePicture | `String` | <p>yazarin profil resmi.</p> |
| aboutDateTime | `Object` | <p>entryin tarih bilgileri.</p> |
| aboutDateTime.createdAtDate | `String` | <p>entryin olusturulma tarihi.</p> |
| aboutDateTime.createdAtTime | `String` | <p>entryin olusturulma saati.</p> |
| aboutDateTime.updatedAtDate | `String` | <p>entryin guncellenme tarihi.</p> |
| aboutDateTime.updatedAtTime | `String` | <p>entryin guncellenme saati.</p> |

### Success response example

#### Success response example - `Success-Response:`

```json

{
"id": 139730148,
"title": "simcity",
"body": "yine internetin karanlık dehlizlerinde gezerken ...",
"favCount": 11,
"isPinned": false,
"isPinnedOnProfile": false,
"inEksiSeyler": true,
"commentCount": 0,
"aboutAuthor": {
  "author": "jottar",
  "authorProfilePicture": "https://img.ekstat.com/profiles/jottar-637919601690625181.jpg"
},
"aboutDateTime": {
  "createdAtDate": "08.07.2022",
  "createdAtTime": "11:37",
  "updatedAtDate": "16:45",
  "updatedAtTime": null
 }
}
```

### Error response

#### Error response - `Error 4xx`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| RequestFailedWithStatusCode404 |  | <p>Entry bulunamadi.</p> |
| EntryNotFound |  | <p>Entry getirirken eksi sozluk patlarsa (büyük başarısızlıklar sözkonusu)</p> |

### Error response example

#### Error response example - `api/entry/4216654:`

```json
{
  "error": "Request failed with status code 404"
}
```

#### Error response example - `api/entry/42424242424:`

```json

{
   "error": "Entry not found"
}
```

# <a name='etc'></a> etc

## <a name='tum-kanallari-getir.'></a> tum kanallari getir.
[Back to top](#top)

<p>Tum kanallari getiren endpoint.</p> <p><code>¯\_(ツ)_/¯</code></p>

```
GET /api/index/channels
```

### Examples

Example curl:

```curl
curl -i http://localhost:3000/api/index/channels
```

Example python:

```python
import requests as r
req = r.get("http://localhost:3000/api/index/channels")
```

Example axios(js):

```javascript
req = axios.get("http://localhost:3000/api/index/channels").then(...)
```

### Success response

#### Success response - `200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| channels | `Object[]` | <p>kanallarin arrayi.</p> |
| channels.name | `String` | <p>kanalin ismi.</p> |
| channels.slug | `String` | <p>kanalin url slug hali.</p> |
| channels.description | `String` | <p>kanalin açiklamasi.</p> |

### Success response example

#### Success response example - `Success-Response:`

```json

{
  "channels": [
    {
      "name": "#haber",
      "slug": "/basliklar/kanal/haber",
      "description": "yurtta ve dünyada olan biten"
    },
    {
      "name": "#sinema",
      "slug": "/basliklar/kanal/sinema",
      "description": "filmler, yönetmenler, teknikler, yarıda salonu terk etmeler"
    },
    ...
  ]
}
```

# <a name='kullanici'></a> kullanici

## <a name='entry-sayfasini-getir.'></a> entry sayfasini getir.
[Back to top](#top)

<p>kullanicinin girdigi entry sayfalarini getiren endpoint.</p> <p>eger sayfa parametresi verilmezse ilk sayfayi dondurur.</p> <p>eger ilk sayfa ise ve kullanicinin sabitledigi bir entry varsa <code>entries</code> arrayindan once <code>pinnedEntry</code> objesi dondurur. formatin degistigi tek durum budur.</p> <p>diger sayfalarda ise veya sabitlenen entry yoksa sadece <code>entries</code> arrayi dondurur. null degeriyle bile olsa <code>pinnedEntry</code> diye bir bolum direkt yer almaz.</p>

```
GET /api/user/:nick/entries/:page?
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| nick | `String` | <p>kullanici nicki</p> |
| page | `Number` | **optional** <p>getirilecek sayfa</p>_Default value: 1_<br> |

### Examples

Example curl:

```curl
curl -i http://localhost:3000/api/user/ssg/entries
```

Example curl sayfa:

```curl
curl -i http://localhost:3000/api/user/ssg/entries/2
```

Example python:

```python
import requests as r
req = r.get("http://localhost:3000/api/user/ssg/entries")
```

Example axios(js):

```javascript
req = axios.get("http://localhost:3000/api/user/ssg/entries").then(...)
```

### Success response

#### Success response - `200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| pinnedEntry | `Object` | <p><code>NOT:</code> sadece ilk sayfada return edilen standart entry objesi. Objenin yapisi alttaki entry objesi ile ayni.</p> |
| entries | `Object[]` | <p>entryleri barindiran array</p> |
| entries.id | `Number` | <p>entry id'si.</p> |
| entries.title | `String` | <p>entrynin ait oldugu baslik</p> |
| entries.body | `String` | <p>entryin icerigi</p> |
| entries.favCount | `Number` | <p>entryin favori sayisi</p> |
| entries.isPinned | `Boolean` | <p>entryin pinli olup olmadigi.</p> |
| entries.isPinnedOnProfile | `Boolean` | <p>entryin profilinde pinli olup olmadigi.</p> |
| entries.inEksiSeyler | `Boolean` | <p>entryin eksiseyler'de olup olmadigi.</p> |
| entries.commentCount | `Number` | <p>entryin yorum sayisi. (sorularinizi yanitliyorum'da vs. bulunan)</p> |
| entries.aboutAuthor | `Object` | <p>entryin yazar bilgileri.</p> |
| entries.aboutAuthor.author | `String` | <p>yazarin nicki.</p> |
| entries.aboutAuthor.authorProfilePicture | `String` | <p>yazarin profil resmi.</p> |
| entries.aboutDateTime | `Object` | <p>entryin tarih bilgileri.</p> |
| entries.aboutDateTime.createdAtDate | `String` | <p>entryin olusturulma tarihi.</p> |
| entries.aboutDateTime.createdAtTime | `String` | <p>entryin olusturulma saati.</p> |
| entries.aboutDateTime.updatedAtDate | `String` | <p>entryin guncellenme tarihi.</p> |
| entries.aboutDateTime.updatedAtTime | `String` | <p>entryin guncellenme saati.</p> |

### Success response example

#### Success response example - `Success-Response:`

```json

{
  "entries": [
    {
      "id": 139962328,
      "title": "yazarların favori ressam ve eseri",
      "body": "<a class=\"b\" href=\"/?q=albert+bierstadt\">albert bierstadt</a>'ın \"<a rel=\"nofollow noopener\" class=\"url\" target=\"_blank\" href=\"https://twitter.com/esesci/status/927741151469117441?s=20&amp;t=GHkkCtUJz8GNqzwbjNfMLA\" title=\"https://twitter.com/esesci/status/927741151469117441?s=20&amp;t=GHkkCtUJz8GNqzwbjNfMLA\">puget sound on the pacific coast</a>\" eseri çok sevdiklerimden biridir.",
      "favCount": 12,
      "isPinned": false,
      "isPinnedOnProfile": false,
      "inEksiSeyler": false,
      "commentCount": 0,
      "aboutAuthor": {
        "author": "ssg",
        "authorProfilePicture": "https://img.ekstat.com/profiles/ssg-637802096150637091.jpg"
      },
      "aboutDateTime": {
        "createdAtDate": "14.07.2022",
        "createdAtTime": "10:38",
        "updatedAtDate": null,
        "updatedAtTime": null
      }
    },
    ...
  ]
}
```

### Error response

#### Error response - `Error 4xx`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| PageNotFound |  | <p>sayfa bulunamadi.</p> |

### Error response example

#### Error response example - `api/user/ssg/entries/54356:`

```json
{
  "error": "Page not found"
}
```

## <a name='tek-kullanıcı-getir.'></a> tek kullanıcı getir.
[Back to top](#top)

<p>nick ile kullanıcı bilgisi getiren endpoint.</p> <p>Bu endpoint kullanicinin son entrylerini gostermek icin otomatik olarak page endpoini de cagirir.</p> <p>Devre disi birakmak icin <code>config.user.autoRetrieveLastEntries</code> <code>false</code> yapilabilir. Eger yapilirsa <code>lastEntries</code> kismi dondurulmez.</p>

```
GET /api/user/:nick
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| nick | `String` | <p>kullanici nicki</p> |

### Examples

Example curl:

```curl
curl -i http://localhost:3000/api/user/ssg
```

Example python:

```python
import requests as r
req = r.get("http://localhost:3000/api/user/ssg")
```

Example axios(js):

```javascript
req = axios.get("http://localhost:3000/api/user/ssg").then(...)
```

### Success response

#### Success response - `200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| nick | `String` | <p>kullanicinin nicki.</p> |
| isUserCaylak | `Boolean` | <p>kullanicinin caylak olup olmadigi.</p> |
| isUserLanetli | `Boolean` | <p>kullanicinin lanetli olup olmadigi.</p> |
| isUserLeyla | `Boolean` | <p>kullanicinin ucup ucmadigi.</p> |
| totalEntryCount | `Number` | <p>kullanicinin toplam entry sayisi.</p> |
| totalPageCount | `Number` | <p>kullanicinin toplam entry sayfa sayisi.</p> |
| userFollowingCount | `Number` | <p>kullanicinin takip edilen kullanici sayisi.</p> |
| userFollowerCount | `Number` | <p>kullaniciyi takip eden kullanici sayisi.</p> |
| karmaLevel | `String` | <p>kullanicinin karma seviyesi.</p> |
| pinnedBadges | `Object[]` | <p>kullanicinin sergiledigi rozetler.</p> |
| pinnedBadges.title | `String` | <p>rozetin adi.</p> |
| pinnedBadges.imgSrc | `String` | <p>rozetin resmi.</p> |
| authorProfilePicture | `String` | <p>kullanicinin profil resmi.</p> |
| lastEntries | `Object` | <p>kullanicinin son entryleri.</p> |
| lastEntries.pinnedEntry | `Object` | <p>kullanicinin profiline sabitlenmis entry</p> |
| lastEntries.pinnedEntry.id | `Number` | <p>entry id'si.</p> |
| lastEntries.pinnedEntry.title | `String` | <p>entrynin ait oldugu baslik</p> |
| lastEntries.pinnedEntry.body | `String` | <p>entryin icerigi</p> |
| lastEntries.pinnedEntry.favCount | `Number` | <p>entryin favori sayisi</p> |
| lastEntries.pinnedEntry.isPinned | `Boolean` | <p>entryin pinli olup olmadigi.</p> |
| lastEntries.pinnedEntry.isPinnedOnProfile | `Boolean` | <p>entryin profilinde pinli olup olmadigi.</p> |
| lastEntries.pinnedEntry.inEksiSeyler | `Boolean` | <p>entryin eksiseyler'de olup olmadigi.</p> |
| lastEntries.pinnedEntry.commentCount | `Number` | <p>entryin yorum sayisi. (sorularinizi yanitliyorum'da vs. bulunan)</p> |
| lastEntries.pinnedEntry.aboutAuthor | `Object` | <p>entryin yazar bilgileri.</p> |
| lastEntries.pinnedEntry.aboutAuthor.author | `String` | <p>yazarin nicki.</p> |
| lastEntries.pinnedEntry.aboutAuthor.authorProfilePicture | `String` | <p>yazarin profil resmi.</p> |
| lastEntries.pinnedEntry.aboutDateTime | `Object` | <p>entryin tarih bilgileri.</p> |
| lastEntries.pinnedEntry.aboutDateTime.createdAtDate | `String` | <p>entryin olusturulma tarihi.</p> |
| lastEntries.pinnedEntry.aboutDateTime.createdAtTime | `String` | <p>entryin olusturulma saati.</p> |
| lastEntries.pinnedEntry.aboutDateTime.updatedAtDate | `String` | <p>entryin guncellenme tarihi.</p> |
| lastEntries.pinnedEntry.aboutDateTime.updatedAtTime | `String` | <p>entryin guncellenme saati.</p> |
| lastEntries.entries | `Object[]` | <p>kullanicinin entryleri.</p> |
| lastEntries.entries.id | `Number` | <p>entry id'si.</p> |
| lastEntries.entries.title | `String` | <p>entrynin ait oldugu baslik</p> |
| lastEntries.entries.body | `String` | <p>entryin icerigi</p> |
| lastEntries.entries.favCount | `Number` | <p>entryin favori sayisi</p> |
| lastEntries.entries.isPinned | `Boolean` | <p>entryin pinli olup olmadigi.</p> |
| lastEntries.entries.isPinnedOnProfile | `Boolean` | <p>entryin profilinde pinli olup olmadigi.</p> |
| lastEntries.entries.inEksiSeyler | `Boolean` | <p>entryin eksiseyler'de olup olmadigi.</p> |
| lastEntries.entries.commentCount | `Number` | <p>entryin yorum sayisi. (sorularinizi yanitliyorum'da vs. bulunan)</p> |
| lastEntries.entries.aboutAuthor | `Object` | <p>entryin yazar bilgileri.</p> |
| lastEntries.entries.aboutAuthor.author | `String` | <p>yazarin nicki.</p> |
| lastEntries.entries.aboutAuthor.authorProfilePicture | `String` | <p>yazarin profil resmi.</p> |
| lastEntries.entries.aboutDateTime | `Object` | <p>entryin tarih bilgileri.</p> |
| lastEntries.entries.aboutDateTime.createdAtDate | `String` | <p>entryin olusturulma tarihi.</p> |
| lastEntries.entries.aboutDateTime.createdAtTime | `String` | <p>entryin olusturulma saati.</p> |
| lastEntries.entries.aboutDateTime.updatedAtDate | `String` | <p>entryin guncellenme tarihi.</p> |
| lastEntries.entries.aboutDateTime.updatedAtTime | `String` | <p>entryin guncellenme saati.</p> |

### Success response example

#### Success response example - `Success-Response:`

```json

{
  "nick": "ssg",
  "isUserCaylak": false,
  "isUserLanetli": false,
  "isUserLeyla": false,
  "totalEntryCount": 51118,
  "totalPageCount": 5112,
  "userFollowingCount": 452,
  "userFollowerCount": 15122,
  "karmaLevel": "mangal yürekli rişar (500)",
  "pinnedBadges": [
    {
      "title": "gece kuşu: çoğunlukla gece entry girenler",
      "imgSrc": "https://cdn.eksisozluk.com/badges/gece-kusu.png"
    },
    ...
  ],
  "authorProfilePicture": "https://img.ekstat.com/profiles/ssg-637802096150637091.jpg",
  "lastEntries": {
    "pinnedEntry": {
      "id": 112047179,
      "title": "street coder",
      "body": "başlangıç ve orta seviye programcılar için hem var olan yerleşik kural ve prensipleri sorgulayan hem de bazılarını neden kullanmamız gerektiği konusunda sorgular ve tavsiyeler içeren <a rel=\"nofollow noopener\" class=\"url\" target=\"_blank\" href=\"https://www.manning.com/books/street-coder?utm_source=sedatk&amp;utm_medium=affiliate&amp;utm_campaign=book_kapanoglu_street_10_6_20&amp;a_aid=sedatk&amp;a_bid=72b5d1be\" title=\"https://www.manning.com/books/street-coder?utm_source=sedatk&amp;utm_medium=affiliate&amp;utm_campaign=book_kapanoglu_street_10_6_20&amp;a_aid=sedatk&amp;a_bid=72b5d1be\">kitabım</a>. kitabın amacı farklı yollardan kendine temel bir programlama bilgisi edinmiş geliştiricilere \"sokaklarda\" başlarına neler gelebileceği ve önemsemedikleri bazı konuların kendilerine bu sokak macerasında nasıl yardımcı olacağı konusunda bir perspektif açmak. <a class=\"b\" href=\"/?q=manning+publications\">manning publications</a>'ın <a class=\"b\" href=\"/?q=meap\">meap</a> erken erişim programıyla çıktı. gelen geri bildirimler doğrultusunda hem şekillenecek hem de kitabın gelişimini canlı takip etme imkanı olacak.<br><br><a rel=\"nofollow noopener\" class=\"url\" target=\"_blank\" href=\"https://streetcoder.org/\">https://streetcoder.org/</a>",
      "favCount": 221,
      "isPinned": false,
      "isPinnedOnProfile": true,
      "inEksiSeyler": false,
      "commentCount": 0,
      "aboutAuthor": {
        "author": "ssg",
        "authorProfilePicture": "https://img.ekstat.com/profiles/ssg-637802096150637091.jpg"
      },
      "aboutDateTime": {
        "createdAtDate": "24.08.2020",
        "createdAtTime": "22:49",
        "updatedAtDate": "01.09.2021",
        "updatedAtTime": "22:35"
      }
    },
    "entries": [
      {
        "id": 140215313,
        "title": "yazarların cips tercihleri",
        "body": "(bkz: <a class=\"b\" href=\"/entry/34124398\">kılıçoğlu sineması/#34124398</a>)",
        ...
        }
      },
      ...
    ]
  }
}
```

### Error response

#### Error response - `Error 4xx`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| RequestFailedWithStatusCode404 |  | <p>kullanici bulunamadi.</p> |

### Error response example

#### Error response example - `api/user/4213412fadsfsadsadsad421:`

```json
{
"error": "Request failed with status code 404"
}
```

# TLDR

<h1>TLDR</h1>
<table>
<thead>
<tr>
<th>controller</th>
<th>method</th>
<th style="text-align:center">endpoint</th>
<th>örnek url (tıkla)</th>
<th>sayfali örnek url (tıkla)</th>
<th>açıklama</th>
</tr>
</thead>
<tbody>
<tr>
<td>topicList</td>
<td>get</td>
<td style="text-align:center"><code>api/topic/list/channel/:choice/:page?</code></td>
<td><a href="/api/topic/list/channel/haber">/api/topic/list/channel/haber</a></td>
<td><a href="/api/topic/list/channel/m%C3%BCzik/2">/api/topic/list/channel/müzik/2</a></td>
<td>kanal başlıklarını getirir</td>
</tr>
<tr>
<td>topicList</td>
<td>get</td>
<td style="text-align:center"><code>api/topic/list/:choice/:page?</code></td>
<td><a href="/api/topic/gundem">/api/topic/gundem</a></td>
<td><a href="/api/topic/basiboslar/3">/api/topic/basiboslar/3</a></td>
<td>başlıkları getirir</td>
</tr>
<tr>
<td>topic</td>
<td>get</td>
<td style="text-align:center"><code>api/topic/:slug/:page?</code></td>
<td><a href="/api/topic/pena">/api/topic/pena</a></td>
<td><a href="/api/topic/gap-year/2">/api/topic/gap-year/2</a></td>
<td>bir başlığı getirir</td>
</tr>
<tr>
<td>entry</td>
<td>get</td>
<td style="text-align:center"><code>api/entry/:id</code></td>
<td><a href="/api/entry/1">/api/entry/1</a></td>
<td> </td>
<td>bir entry'i getirir</td>
</tr>
<tr>
<td>page</td>
<td>get</td>
<td style="text-align:center"><code>api/user/:nick/entries/:page?</code></td>
<td><a href="/api/user/ssg/entries">/api/user/ssg/entries</a></td>
<td><a href="/api/user/ssg/entries/2">/api/user/ssg/entries/2</a></td>
<td>bir suserin son entrylerini getirir</td>
</tr>
<tr>
<td>debe</td>
<td>get</td>
<td style="text-align:center"><code>api/index/debe</code></td>
<td><a href="/api/index/debe">/api/index/debe</a></td>
<td> </td>
<td>debe'yi getirir</td>
</tr>
<tr>
<td>user</td>
<td>get</td>
<td style="text-align:center"><code>api/user/:nick</code></td>
<td><a href="/api/user/ssg">/api/user/ssg</a></td>
<td> </td>
<td>bir suser'ı getirir</td>
</tr>
<tr>
<td>search</td>
<td>get</td>
<td style="text-align:center"><code>api/index/search/:query/:page?</code></td>
<td><a href="/api/index/search/pena">/api/index/search/pena</a></td>
<td><a href="/api/index/search/boston-celtics/4">/api/index/search/boston-celtics/4</a></td>
<td>arama sonucu</td>
</tr>
<tr>
<td>autoComplete</td>
<td>get</td>
<td style="text-align:center"><code>api/index/autocomplete/:query</code></td>
<td><a href="/api/index/autocomplete/pena">/api/index/autocomplete/pena</a></td>
<td> </td>
<td>otomatik tamamlama</td>
</tr>
<tr>
<td>allChannels</td>
<td>get</td>
<td style="text-align:center"><code>api/index/channels</code></td>
<td><a href="/api/index/channels">/api/index/channels</a></td>
<td> </td>
<td>kanal kategorileri</td>
</tr>
</tbody>
</table>
<p><a href="https://github.com/otuva/eksisozluk-api"><img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&amp;logo=github&amp;logoColor=white" alt="GitHub"></a></p>
<hr>

