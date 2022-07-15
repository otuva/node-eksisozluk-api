/**
 * @api {get} /basliklar/:choice/:page? başlıkları GETir.
 * @apiName topicList
 * @apiGroup başlık
 * @apiVersion 0.0.1
 * 
 * @apiExample {curl} Example curl:
 *     curl -i http://localhost:3000/api/basliklar/gundem
 * @apiExample {curl} Example curl sayfa:
 *     curl -i http://localhost:3000/api/basliklar/gundem/2
 * @apiExample {python} Example python:
 *     import requests as r
 *     req = r.get("http://localhost:3000/api/basliklar/gundem")
 * @apiExample {javascript} Example axios(js):
 *     req = axios.get("http://localhost:3000/api/basliklar/gundem").then(...)
 * 
 * @apiDescription Secilen kategorideki (gündem, tarihte bugun vs.) başlıkları getiren endpoint. 
 * 
 * Sayfa parametresi opsiyonel olup diger sayfalari getirmek icin url sonuna /SAYI ekleyebilirsiniz.
 * 
 * Listenebilecek secenekler config dosyasindan belirlenir.
 * 
 * Baslik kategorisinin alabilecegi degerler icin gereken parametrelerin altindaki izin verilen degerlere bakiniz.
 * 
 * Kanallar icin diger endpointi kullaniniz.
 * 
 * @apiParam {String="gundem","sorunsal","tarihte-bugun","basiboslar"} choice getirilecek baslik kategorisi
 * @apiParam {Number} [page=1] getirilecek sayfa
 *
 * @apiSuccess (200) {Number} totalTopicCount toplam baslik adeti.
 * @apiSuccess (200) {Number} totalPageCount toplam kac sayfa baslik oldugu.
 * @apiSuccess (200) {Object[]} topics başlık objelerinin arrayi.
 * @apiSuccess (200) {Number} topics.id basligin id'si
 * @apiSuccess (200) {String} topics.title basligin ismi
 * @apiSuccess (200) {String} topics.topicSlug baslik url slug hali
 * @apiSuccess (200) {String} topics.topicUrl basligin full urli
 * @apiSuccess (200) {Number} topics.totalEntryCount basliktaki toplam entry sayisi
 *
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * {
 * "totalTopicCount": 299,
 * "totalPageCount": 6,
 * "topics": [
 *   {
 *     "id": 7341070,
 *     "title": "sönmüş kireçle yapılan +18 sanat",
 *     "topicSlug": "/sonmus-kirecle-yapilan-18-sanat--7341070?a=popular",
 *     "topicUrl": "https://eksisozluk.com//sonmus-kirecle-yapilan-18-sanat--7341070?a=popular",
 *     "totalEntryCount": 86
 *   },
 *   {
 *     "id": 7340995,
 *     "title": "türkiye ermenistan sınırı mayın temizliği",
 *     "topicSlug": "/turkiye-ermenistan-siniri-mayin-temizligi--7340995?a=popular",
 *     "topicUrl": "https://eksisozluk.com//turkiye-ermenistan-siniri-mayin-temizligi--7340995?a=popular",
 *     "totalEntryCount": 128
 *   },
 *  ...
 *  ]
 * }
 * 
 * @apiError TopicNotFound Aranan kategori gecerli ama hicbir baslik bulunamadi.
 * @apiError TopicIsInvalid Gecerli bir kategori degil.
 * 
 * @apiErrorExample {json} api/basliklar/gundem/412:
 *  {
 *  "error": "TopicNotFound"
 *  }
 * 
 * @apiErrorExample {json} api/basliklar/gundam:
 *  {
 *  "error": "TopicIsInvalid"
 *  }
 * 
 *
 */
function topicList() { return; }

/**
 * @api {get} /basliklar/kanal/:choice/:page? kanallari GETir.
 * @apiName topicListChannel
 * @apiGroup başlık
 * @apiVersion 0.0.1
 * 
 * @apiExample {curl} Example curl:
 *     curl -i http://localhost:3000/api/basliklar/kanal/haber
 * @apiExample {curl} Example curl sayfa:
 *     curl -i http://localhost:3000/api/basliklar/kanal/haber/2
 * @apiExample {python} Example python:
 *     import requests as r
 *     req = r.get("http://localhost:3000/api/basliklar/kanal/haber")
 * @apiExample {javascript} Example axios(js):
 *     req = axios.get("http://localhost:3000/api/basliklar/kanal/haber").then(...)
 * 
 * @apiDescription Secilen kanala ait (haber, bilim vs.) başlıkları getiren endpoint. 
 * 
 * Sayfa parametresi opsiyonel olup diger sayfalari getirmek icin url sonuna /SAYI ekleyebilirsiniz.
 * 
 * Listenebilecek kanallar config dosyasindan belirlenir.
 * 
 * Kanal kategorisinin alabilecegi degerler icin gereken parametrelerin altindaki izin verilen degerlere bakiniz.
 * 
 * Kanal kategorilerinin turkce karakter icermesine dikkat ediniz. Ornegin 'muzik' kategorisi hata verecekken 'müzik' kategorisi sorunsuz calisacaktir.
 * 
 * @apiParam {String="haber","sinema","bilim","eğitim","spoiler","müzik","edebiyat","ekonomi","tarih","yeme-içme","ilişkiler","siyaset","teknoloji","sanat","moda","otomotiv","magazin","ekşi-sözlük","spor","motosiklet","sağlık","oyun","anket","programlama","tv","seyahat","havacılık","troll"} choice getirilecek baslik kategorisi
 * @apiParam {Number} [page=1] getirilecek sayfa
 *
 * @apiSuccess (200) {Number} totalTopicCount toplam baslik adeti.
 * @apiSuccess (200) {Number} totalPageCount toplam kac sayfa baslik oldugu.
 * @apiSuccess (200) {Object[]} topics başlık objelerinin arrayi.
 * @apiSuccess (200) {Number} topics.id basligin id'si
 * @apiSuccess (200) {String} topics.title basligin ismi
 * @apiSuccess (200) {String} topics.topicSlug baslik url slug hali
 * @apiSuccess (200) {String} topics.topicUrl basligin full urli
 * @apiSuccess (200) {Number} topics.totalEntryCount basliktaki toplam entry sayisi
 *
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * {
 * "totalTopicCount": 150,
 * "totalPageCount": 3,
 * "topics": [
 *   {
 *     "id": 7341076,
 *     "title": "aç insanlar varken teleskopa 10 milyar $ harcamak",
 *     "topicSlug": "/ac-insanlar-varken-teleskopa-10-milyar-harcamak--7341076",
 *     "topicUrl": "https://eksisozluk.com//ac-insanlar-varken-teleskopa-10-milyar-harcamak--7341076",
 *     "totalEntryCount": 38
 *   },
 *   {
 *     "id": 116822,
 *     "title": "anksiyete",
 *     "topicSlug": "/anksiyete--116822?day=2022-07-14",
 *     "topicUrl": "https://eksisozluk.com//anksiyete--116822?day=2022-07-14",
 *     "totalEntryCount": 5
 *   },
 *  ...
 *  ]
 * }
 * 
 * @apiError TopicNotFound Aranan kategori gecerli ama hicbir baslik bulunamadi.
 * @apiError TopicIsInvalid Gecerli bir kategori degil.
 * 
 * @apiErrorExample {json} api/basliklar/kanal/bilim/17:
 *  {
 *  "error": "TopicNotFound"
 *  }
 * 
 * @apiErrorExample {json} api/basliklar/kanal/asd:
 *  {
 *  "error": "TopicIsInvalid"
 *  }
 * 
 *
 */
function topicList() { return; }

/**
 * @api {get} /baslik/:slug/:page? tekil başlık GETir.
 * @apiName topic
 * @apiGroup başlık
 * @apiVersion 0.0.1
 * 
 * @apiExample {curl} Example curl:
 *     curl -i http://localhost:3000/api/baslik/pena
 * @apiExample {curl} Example curl sayfa:
 *     curl -i http://localhost:3000/api/baslik/pena/2
 * @apiExample {python} Example python:
 *     import requests as r
 *     req = r.get("http://localhost:3000/api/baslik/pena")
 * @apiExample {javascript} Example axios(js):
 *     req = axios.get("http://localhost:3000/api/baslik/pena").then(...)
 * 
 * @apiDescription Spesifik başlığı entry'leri ile birlikte getiren endpoint. 
 * slug yerine basliğin kendisini birebir yazarsaniz da calisir: 
 * 
 * örneğin: 
 * `http://localhost:3000/api/baslik/veda ederken 2020'ye bir not bırak`
 * 
 * Full slug ise bu sekil gorunur (baslik--id):
 * `/baslik/pena--31782`
 * 
 * Eger baslik slugi full halinde degilse ve `config.topic.allowRedirect` true degerine sahipse tam haline yonlendirir.
 * 
 * Ornek:    `http://localhost:3000/api/baslik/insanlık tarihinin en kötü iki senesi 536 ve 537`
 * 
 * Son hali: `http://localhost:3000/api/baslik/insanlik-tarihinin-en-kotu-iki-senesi-536-ve-537--7341301/1`
 * 
 * @apiParam {String} slug getirilecek baslik
 * @apiParam {Number} [page=1] getirilecek sayfa
 *
 * @apiSuccess (200) {Number} topicID basligin idsi.
 * @apiSuccess (200) {Object[]} disambiguations farkli anlamlardaki basliklar.
 * @apiSuccess (200) {String} disambiguations.slug farkli basligin slug hali.
 * @apiSuccess (200) {String} disambiguations.title farkli basligin ismi.
 * 
 * @apiSuccess (200) {String} title başlıgin ismi.
 * @apiSuccess (200) {String} topicSlug basligin slug hali
 * @apiSuccess (200) {Number} numberOfPages basligin sahip oldugu sayfa sayisi
 * @apiSuccess (200) {Number} currentPage baslikta o anda incelenen sayfa. (.pager degeri)
 * @apiSuccess (200) {String[]} tags basligin tagleri.
 * 
 * @apiSuccess (200) {Object[]} entries basliktaki entryler. 
 * @apiSuccess (200) {Number} entries.id entry id'si.
 * @apiSuccess (200) {String} entries.title entrynin ait oldugu baslik
 * @apiSuccess (200) {String} entries.body entryin icerigi
 * @apiSuccess (200) {Number} entries.favCount entryin favori sayisi
 * @apiSuccess (200) {Boolean} entries.isPinned entryin pinli olup olmadigi.
 * @apiSuccess (200) {Boolean} entries.isPinnedOnProfile entryin profilinde pinli olup olmadigi.
 * @apiSuccess (200) {Boolean} entries.inEksiSeyler entryin eksiseyler'de olup olmadigi.
 * @apiSuccess (200) {Number} entries.commentCount entryin yorum sayisi. (sorularinizi yanitliyorum'da vs. bulunan)
 * 
 * @apiSuccess (200) {Object} entries.aboutAuthor entryin yazar bilgileri.
 * @apiSuccess (200) {String} entries.aboutAuthor.author yazarin nicki.
 * @apiSuccess (200) {String} entries.aboutAuthor.authorProfilePicture yazarin profil resmi.
 * 
 * @apiSuccess (200) {Object} entries.aboutDateTime entryin tarih bilgileri.
 * @apiSuccess (200) {String} entries.aboutDateTime.createdAtDate entryin olusturulma tarihi.
 * @apiSuccess (200) {String} entries.aboutDateTime.createdAtTime entryin olusturulma saati.
 * @apiSuccess (200) {String} entries.aboutDateTime.updatedAtDate entryin guncellenme tarihi.
 * @apiSuccess (200) {String} entries.aboutDateTime.updatedAtTime entryin guncellenme saati.
 * 
 * 
 * 
 * 
 * 
 *
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * {
 * "topicID": 31872,
 * "disambiguations": [
 *   {
 *     "slug": "/?q=c%20%28programlama%20dili%29",
 *     "title": "c (programlama dili)"
 *   },
 *   {
 *     "slug": "/?q=c%20%28s%c3%b6zl%c3%bck%20yazar%c4%b1%29",
 *     "title": "c (sözlük yazarı)"
 *   }
 * ],
 * "title": "c",
 * "topicSlug": "c--31872",
 * "numberOfPages": 18,
 * "currentPage": 1,
 * "tags": [
 *   "programlama",
 *   "edebiyat"
 * ],
 * "entries": [
 *   {
 *     "id": 1062,
 *     "title": "c",
 *     "body": "yıllar yılı ortamlarda şöyle yada böyle muhabbetini eden bir takım insanlara dönüp garip garip bakmamızı sağlayan,<br>sonrada \"evime gideyim biraz oyun bezeyim, bunlara benzemeyeyim dedirten.\" iştah açıcı, sivilce yapıcı,anti-sosyalite muamması.",
 *     "favCount": 4,
 *     "isPinned": false,
 *     "isPinnedOnProfile": false,
 *     "inEksiSeyler": false,
 *     "commentCount": 0,
 *     "aboutAuthor": {
 *       "author": "otisabi",
 *       "authorProfilePicture": "https://ekstat.com/img/default-profile-picture-light.svg"
 *     },
 *     "aboutDateTime": {
 *       "createdAtDate": "05.03.1999",
 *       "createdAtTime": null,
 *       "updatedAtDate": null,
 *       "updatedAtTime": null
 *     }
 *   },
 *   {
 *     "id": 172152,
 *     "title": "c",
 *     "body": "alfabenin 3. harfi.",
 *     "favCount": 3,
 *     "isPinned": false,
 *     "isPinnedOnProfile": false,
 *     "inEksiSeyler": false,
 *     "commentCount": 0,
 *     "aboutAuthor": {
 *       "author": "body",
 *       "authorProfilePicture": "https://ekstat.com/img/default-profile-picture-light.svg"
 *     },
 *     "aboutDateTime": {
 *       "createdAtDate": "26.05.2000",
 *       "createdAtTime": "01:06",
 *       "updatedAtDate": null,
 *       "updatedAtTime": null
 *     }
 *   },
 * ...
 *  ]
 * }
 * 
 * @apiError RequestFailedWithStatusCode404 Baslik bulunamadi.
 * 
 * @apiErrorExample {json} api/baslik/cdsaas:
 *  {
 *    "error": "Request failed with status code 404"
 *  }
 * 
 * 
 *
 */
function topic() { return; }

/**
 * @api {get} /api/debe/  debe GETir.
 * @apiName debe
 * @apiGroup debe
 * @apiVersion 0.0.1
 * 
 * @apiExample {curl} Example curl:
 *     curl -i http://localhost:3000/api/debe
 * @apiExample {python} Example python:
 *     import requests as r
 *     req = r.get("http://localhost:3000/api/debe")
 * @apiExample {javascript} Example axios(js):
 *     req = axios.get("http://localhost:3000/api/debe").then(...)
 * 
 * @apiDescription debeleri getiren endpoint. 
 * debe'deki tüm entry'lerin bilgileri döner.
 * 
 * @apiSuccess (200) {Object} info debe bilgileri
 * @apiSuccess (200) {String} info.date debe tarihi.
 * @apiSuccess (200) {Number} info.entryCount debe icindeki entry sayisi.
 *  
 * @apiSuccess (200) {Object[]} entries debe icindeki entryler.
 * @apiSuccess (200) {Number} entries.id entry id'si.
 * @apiSuccess (200) {String} entries.slug entryin slug'i.
 * @apiSuccess (200) {String} entries.title entryin basligi.
 *
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * {
 * "info": {
 *   "date": "2022-07-15",
 *   "entryCount": 45
 * },
 * "entries": [
 *   {
 *     "id": 139983585,
 *     "slug": "/entry/139983585",
 *     "title": "fazıl say"
 *   },
 *   {
 *     "id": 139971232,
 *     "slug": "/entry/139971232",
 *     "title": "14 temmuz 2022 datça kundakçısının açıklamaları"
 *   },
 *  ...
 *  ]
 * }
 */
function debe() { return; }




















/**
 * @api {get} /api/autocomplete/:query autoComplete.
 * @apiName autoComplete
 * @apiGroup search
 * @apiDescription Otomatik tamamlama sağlayan endpoint.
 * @apiVersion 0.0.1
 *
 * @apiParam {String} nick          kullanıcı nick'i
 *
 *
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
{
  "Titles": [
    "pena",
    "pena (video kanalı)",
    "pena'daki aldatan sevgili entry canlandırması",
    "pena olmayınca kullanılanlar",
    "ekşi sözlük logosundaki pena",
    "pena ile bas gitar çalmak",
    "trista pena",
    "20 ağustos 2018 pena butonunun gelmesi"
  ],
  "Query": "pena",
  "Nicks": [
    "pena",
    "pena gibi kaybolsam",
    "pena minik plastik garip nesne"
  ]
}
*/
function autoComplete() {
  let va;
}


/**  Düzelt
 * @api {get} /api/ara/:query aram sonucunu GETir.
 * @apiName GetSearch
 * @apiGroup search
 * @apiDescription site içi arama yapan endpoint.
 * @apiVersion 0.0.1
 *
 * @apiParam {String} query         arama kelimesi
 *
 * @apiSuccess {String} thread_count        başlık sayısı
 * @apiSuccess {Array}  threads             başlık array'i.
 *
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
{
  "thread_count": "230 başlık",
  "threads": [
    {
      "id": 6254224,
      "title": "veda ederken 2020'ye bir not bırak",
      "slug": "https://eksisozluk.com/veda-ederken-2020ye-bir-not-birak--6254224?a=popular",
      "entry_count_total": "182"
    },
    {
      "id": 6303813,
      "title": "9 kere leyla",
      "slug": "https://eksisozluk.com/9-kere-leyla--6303813?a=popular",
      "entry_count_total": "535"
    },
    {
      "id": 6754548,
      "title": "5 aralık 2020 çin'in ay'a bayrak dikmesi",
      "slug": "https://eksisozluk.com/5-aralik-2020-cinin-aya-bayrak-dikmesi--6754548?a=popular",
      "entry_count_total": "28"
    },
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 * {"error":"Request failed with status code 404"}
 */
function getSearch() {
  let va;
}

/**
 * @api {get} /api/biri/:nick tekil kullanıcı GETir.
 * @apiName GetUser
 * @apiGroup user
 * @apiDescription nick ile kullanıcı bilgisi getiren endpoint.
 * @apiVersion 0.0.1
 *
 * @apiParam {String} nick          kullanıcı nick'i
 *
 * @apiSuccess {String} nick        kullanıcı nick'i
 * @apiSuccess {String} entry_count_total       kullanıcının toplam entry sayısı.
 * @apiSuccess {String} entry_count_lastmonth   son ay entry sayısı.
 * @apiSuccess {String} entry_count_lastweek     son hafta entry sayısı.
 * @apiSuccess {String} entry_count_today       bugünkü entry sayısı.
 * @apiSuccess {String} last_entry_time         son entry girme zamanı.
 *
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 {
  "nick": "ssg",
  "entry_count_total": "50048",
  "entry_count_lastmonth": "67",
  "entry_count_lastweek": "25",
  "entry_count_today": "0",
  "last_entry_time": "evvelsi gün"
}
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 * {"error":"Request failed with status code 404"}
 */
function getUser() {
  let va;
}

/**
 * @api {get} /api/entry/:id tekil entry GETir.
 * @apiName GetEntry
 * @apiGroup entry
 * @apiDescription entry no'su ile entry getiren endpoint.
 * @apiVersion 0.0.1
 *
 * @apiParam {Number} id            entry no'su.
 *
 * @apiSuccess {Number} id          entry id'si.
 * @apiSuccess {String} title       entry başlığı.
 * @apiSuccess {String} body        entry içeriği.
 * @apiSuccess {String} author      entry yazarı.
 * @apiSuccess {Number} fav_count   entry favori sayısı.
 * @apiSuccess {String} created_at  entry oluşturulma tarihi.
 * @apiSuccess {String} updated_at  entry editlenme tarihi (varsa).
 *
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * {
 *  "id": 1,
 *  "title": "pena",
 *  "body": "gitar calmak icin kullanilan minik plastik garip nesne.",
 *  "author": "ssg",
 *  "fav_count": "12021",
 *  "created_at": "15.02.1999",
 *  "updated_at": null
 * }
 *
 * @apiError EntryNotFound Entry bulunamadı hatası.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Request failed with status code 404"
 *     }
 */
function getEntry() {
  let va;
}

