/**
 * @api {get} /api/topic/list/:choice/:page? başlıkları getir.
 * @apiName topicList
 * @apiGroup başlık
 * @apiVersion 0.0.1
 * 
 * @apiExample {curl} Example curl:
 *     curl -i http://localhost:3000/api/topic/list/gundem
 * @apiExample {curl} Example curl sayfa:
 *     curl -i http://localhost:3000/api/topic/list/gundem/2
 * @apiExample {python} Example python:
 *     import requests as r
 *     req = r.get("http://localhost:3000/api/topic/list/gundem")
 * @apiExample {javascript} Example axios(js):
 *     req = axios.get("http://localhost:3000/api/topic/list/gundem").then(...)
 * 
 * @apiDescription Secilen kategorideki (gündem, tarihte bugun vs.) başlıkları getiren endpoint. 
 * 
 * Sayfa parametresi opsiyonel olup diger sayfalari getirmek icin url sonuna `/SAYI` ekleyebilirsiniz.
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
 * @apiErrorExample {json} api/topic/list/gundem/412:
 *  {
 *  "error": "Topic not found"
 *  }
 * 
 * @apiErrorExample {json} api/topic/list/gundam:
 *  {
 *  "error": "Topic is invalid"
 *  }
 * 
 *
 */
function topicList() { return; }

/**
 * @api {get} /api/topic/list/channel/:choice/:page? kanallari getir.
 * @apiName topicListChannel
 * @apiGroup başlık
 * @apiVersion 0.0.1
 * 
 * @apiExample {curl} Example curl:
 *     curl -i http://localhost:3000/api/topic/list/channel/haber
 * @apiExample {curl} Example curl sayfa:
 *     curl -i http://localhost:3000/api/topic/list/channel/haber/2
 * @apiExample {python} Example python:
 *     import requests as r
 *     req = r.get("http://localhost:3000/api/topic/list/channel/haber")
 * @apiExample {javascript} Example axios(js):
 *     req = axios.get("http://localhost:3000/api/topic/list/channel/haber").then(...)
 * 
 * @apiDescription Secilen kanala ait (haber, bilim vs.) başlıkları getiren endpoint. 
 * 
 * Sayfa parametresi opsiyonel olup diger sayfalari getirmek icin url sonuna `/SAYI` ekleyebilirsiniz.
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
 * @apiErrorExample {json} api/topic/list/channel/bilim/17:
 *  {
 *  "error": "Topic not found"
 *  }
 * 
 * @apiErrorExample {json} api/topic/list/channel/asd:
 *  {
 *  "error": "Topic is invalid"
 *  }
 * 
 *
 */
function topicList() { return; }

/**
 * @api {get} /api/topic/:slug/:page? tek başlık getir.
 * @apiName topic
 * @apiGroup başlık
 * @apiVersion 0.0.1
 * 
 * @apiExample {curl} Example curl:
 *     curl -i http://localhost:3000/api/topic/pena
 * @apiExample {curl} Example curl sayfa:
 *     curl -i http://localhost:3000/api/topic/pena/2
 * @apiExample {python} Example python:
 *     import requests as r
 *     req = r.get("http://localhost:3000/api/topic/pena")
 * @apiExample {javascript} Example axios(js):
 *     req = axios.get("http://localhost:3000/api/topic/pena").then(...)
 * 
 * @apiDescription Spesifik başlığı entry'leri ile birlikte getiren endpoint. 
 * slug yerine basliğin kendisini birebir yazarsaniz da calisir: 
 * 
 * örneğin: 
 * `http://localhost:3000/api/topic/veda ederken 2020'ye bir not bırak`
 * 
 * Full slug ise bu sekil gorunur (baslik--id):
 * `pena--31782`
 * 
 * Eger baslik slugi full halinde degilse ve `config.topic.allowRedirect` true degerine sahipse tam haline yonlendirir.
 * 
 * Ornek:    `http://localhost:3000/api/topic/insanlık tarihinin en kötü iki senesi 536 ve 537`
 * 
 * Son hali: `http://localhost:3000/api/topic/insanlik-tarihinin-en-kotu-iki-senesi-536-ve-537--7341301/1`
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
 * @apiSuccessExample Success-Response:
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
 * @apiErrorExample {json} api/topic/cdsaas:
 *  {
 *    "error": "Request failed with status code 404"
 *  }
 * 
 * 
 *
 */
function topic() { return; }

/**
 * @api {get} /api/index/debe  debe getir.
 * @apiName debe
 * @apiGroup debe
 * @apiVersion 0.0.1
 * 
 * @apiExample {curl} Example curl:
 *     curl -i http://localhost:3000/api/index/debe
 * @apiExample {python} Example python:
 *     import requests as r
 *     req = r.get("http://localhost:3000/api/index/debe")
 * @apiExample {javascript} Example axios(js):
 *     req = axios.get("http://localhost:3000/api/index/debe").then(...)
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
 * @api {get} /api/entry/:id tek entry getir.
 * @apiName entry
 * @apiGroup entry
 * @apiVersion 0.0.1
 * 
 * @apiExample {curl} Example curl:
 *     curl -i http://localhost:3000/api/entry/139983585
 * @apiExample {python} Example python:
 *     import requests as r
 *     req = r.get("http://localhost:3000/api/entry/139983585")
 * @apiExample {javascript} Example axios(js):
 *     req = axios.get("http://localhost:3000/api/entry/139983585").then(...)
 * 
 * @apiDescription entry no'su ile entry getiren endpoint.
 * 
 * @apiParam {Number} id entry no'su.
 *
 * @apiSuccess (200) {Number} id entry id'si.
 * @apiSuccess (200) {String} title entrynin ait oldugu baslik
 * @apiSuccess (200) {String} body entryin icerigi
 * @apiSuccess (200) {Number} favCount entryin favori sayisi
 * @apiSuccess (200) {Boolean} isPinned entryin pinli olup olmadigi.
 * @apiSuccess (200) {Boolean} isPinnedOnProfile entryin profilinde pinli olup olmadigi.
 * @apiSuccess (200) {Boolean} inEksiSeyler entryin eksiseyler'de olup olmadigi.
 * @apiSuccess (200) {Number} commentCount entryin yorum sayisi. (sorularinizi yanitliyorum'da vs. bulunan)
 * 
 * @apiSuccess (200) {Object} aboutAuthor entryin yazar bilgileri.
 * @apiSuccess (200) {String} aboutAuthor.author yazarin nicki.
 * @apiSuccess (200) {String} aboutAuthor.authorProfilePicture yazarin profil resmi.
 * 
 * @apiSuccess (200) {Object} aboutDateTime entryin tarih bilgileri.
 * @apiSuccess (200) {String} aboutDateTime.createdAtDate entryin olusturulma tarihi.
 * @apiSuccess (200) {String} aboutDateTime.createdAtTime entryin olusturulma saati.
 * @apiSuccess (200) {String} aboutDateTime.updatedAtDate entryin guncellenme tarihi.
 * @apiSuccess (200) {String} aboutDateTime.updatedAtTime entryin guncellenme saati.
 * 
 * 
 *
 * @apiSuccessExample Success-Response:
 * {
 * "id": 139730148,
 * "title": "simcity",
 * "body": "yine internetin karanlık dehlizlerinde gezerken ...",
 * "favCount": 11,
 * "isPinned": false,
 * "isPinnedOnProfile": false,
 * "inEksiSeyler": true,
 * "commentCount": 0,
 * "aboutAuthor": {
 *   "author": "jottar",
 *   "authorProfilePicture": "https://img.ekstat.com/profiles/jottar-637919601690625181.jpg"
 * },
 * "aboutDateTime": {
 *   "createdAtDate": "08.07.2022",
 *   "createdAtTime": "11:37",
 *   "updatedAtDate": "16:45",
 *   "updatedAtTime": null
 *  }
 * }
 * 
 * @apiError RequestFailedWithStatusCode404 Entry bulunamadi.
 * @apiError EntryNotFound Entry getirirken eksi sozluk patlarsa (büyük başarısızlıklar sözkonusu)
 * 
 * @apiErrorExample {json} api/entry/4216654:
 *  {
 *    "error": "Request failed with status code 404"
 *  }
 * 
 * @apiErrorExample {json} api/entry/42424242424:
 * 
 * {
 *    "error": "Entry not found"
 * }
 *
 */
function entry() { return; }

/**
 * @api {get} /api/user/:nick tek kullanıcı getir.
 * @apiName user
 * @apiGroup kullanici
 * @apiVersion 0.0.1
 * 
 * @apiExample {curl} Example curl:
 *     curl -i http://localhost:3000/api/user/ssg
 * @apiExample {python} Example python:
 *     import requests as r
 *     req = r.get("http://localhost:3000/api/user/ssg")
 * @apiExample {javascript} Example axios(js):
 *     req = axios.get("http://localhost:3000/api/user/ssg").then(...)
 * 
 * @apiDescription nick ile kullanıcı bilgisi getiren endpoint.
 * 
 * Bu endpoint kullanicinin son entrylerini gostermek icin otomatik olarak page endpoini de cagirir.
 * 
 * Devre disi birakmak icin `config.user.autoRetrieveLastEntries` `false` yapilabilir.
 * Eger yapilirsa `lastEntries` kismi dondurulmez.
 * 
 * @apiParam {String} nick kullanici nicki
 *
 * @apiSuccess (200) {String} nick kullanicinin nicki.
 * @apiSuccess (200) {Boolean} isUserCaylak kullanicinin caylak olup olmadigi.
 * @apiSuccess (200) {Boolean} isUserLanetli kullanicinin lanetli olup olmadigi.
 * @apiSuccess (200) {Boolean} isUserLeyla kullanicinin ucup ucmadigi.
 * @apiSuccess (200) {Number} totalEntryCount kullanicinin toplam entry sayisi.
 * @apiSuccess (200) {Number} totalPageCount kullanicinin toplam entry sayfa sayisi.
 * @apiSuccess (200) {Number} userFollowingCount kullanicinin takip edilen kullanici sayisi.
 * @apiSuccess (200) {Number} userFollowerCount kullaniciyi takip eden kullanici sayisi.
 * @apiSuccess (200) {String} karmaLevel kullanicinin karma seviyesi.
 * 
 * @apiSuccess (200) {Object[]} pinnedBadges kullanicinin sergiledigi rozetler.
 * @apiSuccess (200) {String} pinnedBadges.title rozetin adi.
 * @apiSuccess (200) {String} pinnedBadges.imgSrc rozetin resmi.
 * 
 * @apiSuccess (200) {String} authorProfilePicture kullanicinin profil resmi.
 * 
 * @apiSuccess (200) {Object} lastEntries kullanicinin son entryleri.
 * @apiSuccess (200) {Object} lastEntries.pinnedEntry kullanicinin profiline sabitlenmis entry
 * @apiSuccess (200) {Number} lastEntries.pinnedEntry.id entry id'si.
 * @apiSuccess (200) {String} lastEntries.pinnedEntry.title entrynin ait oldugu baslik
 * @apiSuccess (200) {String} lastEntries.pinnedEntry.body entryin icerigi
 * @apiSuccess (200) {Number} lastEntries.pinnedEntry.favCount entryin favori sayisi
 * @apiSuccess (200) {Boolean} lastEntries.pinnedEntry.isPinned entryin pinli olup olmadigi.
 * @apiSuccess (200) {Boolean} lastEntries.pinnedEntry.isPinnedOnProfile entryin profilinde pinli olup olmadigi.
 * @apiSuccess (200) {Boolean} lastEntries.pinnedEntry.inEksiSeyler entryin eksiseyler'de olup olmadigi.
 * @apiSuccess (200) {Number} lastEntries.pinnedEntry.commentCount entryin yorum sayisi. (sorularinizi yanitliyorum'da vs. bulunan)
 * 
 * @apiSuccess (200) {Object} lastEntries.pinnedEntry.aboutAuthor entryin yazar bilgileri.
 * @apiSuccess (200) {String} lastEntries.pinnedEntry.aboutAuthor.author yazarin nicki.
 * @apiSuccess (200) {String} lastEntries.pinnedEntry.aboutAuthor.authorProfilePicture yazarin profil resmi.
 * 
 * @apiSuccess (200) {Object} lastEntries.pinnedEntry.aboutDateTime entryin tarih bilgileri.
 * @apiSuccess (200) {String} lastEntries.pinnedEntry.aboutDateTime.createdAtDate entryin olusturulma tarihi.
 * @apiSuccess (200) {String} lastEntries.pinnedEntry.aboutDateTime.createdAtTime entryin olusturulma saati.
 * @apiSuccess (200) {String} lastEntries.pinnedEntry.aboutDateTime.updatedAtDate entryin guncellenme tarihi.
 * @apiSuccess (200) {String} lastEntries.pinnedEntry.aboutDateTime.updatedAtTime entryin guncellenme saati.
 * 
 * 
 * @apiSuccess (200) {Object[]} lastEntries.entries kullanicinin entryleri.
 * @apiSuccess (200) {Number} lastEntries.entries.id entry id'si.
 * @apiSuccess (200) {String} lastEntries.entries.title entrynin ait oldugu baslik
 * @apiSuccess (200) {String} lastEntries.entries.body entryin icerigi
 * @apiSuccess (200) {Number} lastEntries.entries.favCount entryin favori sayisi
 * @apiSuccess (200) {Boolean} lastEntries.entries.isPinned entryin pinli olup olmadigi.
 * @apiSuccess (200) {Boolean} lastEntries.entries.isPinnedOnProfile entryin profilinde pinli olup olmadigi.
 * @apiSuccess (200) {Boolean} lastEntries.entries.inEksiSeyler entryin eksiseyler'de olup olmadigi.
 * @apiSuccess (200) {Number} lastEntries.entries.commentCount entryin yorum sayisi. (sorularinizi yanitliyorum'da vs. bulunan)
 * 
 * @apiSuccess (200) {Object} lastEntries.entries.aboutAuthor entryin yazar bilgileri.
 * @apiSuccess (200) {String} lastEntries.entries.aboutAuthor.author yazarin nicki.
 * @apiSuccess (200) {String} lastEntries.entries.aboutAuthor.authorProfilePicture yazarin profil resmi.
 * 
 * @apiSuccess (200) {Object} lastEntries.entries.aboutDateTime entryin tarih bilgileri.
 * @apiSuccess (200) {String} lastEntries.entries.aboutDateTime.createdAtDate entryin olusturulma tarihi.
 * @apiSuccess (200) {String} lastEntries.entries.aboutDateTime.createdAtTime entryin olusturulma saati.
 * @apiSuccess (200) {String} lastEntries.entries.aboutDateTime.updatedAtDate entryin guncellenme tarihi.
 * @apiSuccess (200) {String} lastEntries.entries.aboutDateTime.updatedAtTime entryin guncellenme saati.
 *
 * @apiSuccessExample Success-Response:
 * {
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
 * 
 * @apiError RequestFailedWithStatusCode404 kullanici bulunamadi.
 * 
 * @apiErrorExample {json} api/user/4213412fadsfsadsadsad421:
 *  {
 *  "error": "Request failed with status code 404"
 *  }
 * 
 *
 */
function user() { return; }

/**
 * @api {get} /api/user/:nick/:choice/:page? entry sayfasini getir.
 * @apiName page
 * @apiGroup kullanici
 * @apiVersion 0.0.1
 * 
 * @apiExample {curl} Example curl:
 *     curl -i http://localhost:3000/api/user/ssg/entries
 * @apiExample {curl} Example curl sayfa:
 *     curl -i http://localhost:3000/api/user/ssg/entries/2
 * @apiExample {python} Example python:
 *     import requests as r
 *     req = r.get("http://localhost:3000/api/user/ssg/entries")
 * @apiExample {javascript} Example axios(js):
 *     req = axios.get("http://localhost:3000/api/user/ssg/entries").then(...)
 * 
 * @apiDescription kullanicinin girdigi entry sayfalarini getiren endpoint.
 * 
 * eger sayfa parametresi verilmezse ilk sayfayi dondurur.
 * 
 * eger ilk sayfa ise ve kullanicinin sabitledigi bir entry varsa `entries` arrayindan once `pinnedEntry` objesi dondurur.
 * formatin degistigi tek durum budur. 
 * 
 * diger sayfalarda ise veya sabitlenen entry yoksa sadece `entries` arrayi dondurur. 
 * null degeriyle bile olsa `pinnedEntry` diye bir bolum direkt yer almaz.
 * 
 * ```
'entries': 'son-entryleri',
'favorites': 'favori-entryleri',
'most-favorited': 'en-cok-favorilenen-entryleri',
'last-voted': 'son-oylananlari',
'weekly': 'bu-hafta-dikkat-cekenleri',
'handicraft': 'el-emegi-goz-nuru',
'most-liked': 'en-begenilenleri',
 * ```
 * 
 * @apiParam {String} nick kullanici nicki
 * @apiParam {String="entries","favorites","most-favorited","last-voted","weekly","handicraft","most-liked"} choice getirelecek entry sayfasi kategorisi.
 * @apiParam {Number} [page=1] getirilecek sayfa
 *
 * @apiSuccess (200) {Object} pinnedEntry `NOT:` sadece ilk sayfada return edilen standart entry objesi. Objenin yapisi alttaki entry objesi ile ayni.
 * 
 * @apiSuccess (200) {Object[]} entries entryleri barindiran array
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
 * @apiSuccessExample Success-Response:
 * {
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
 * 
 * @apiError PageNotFound sayfa bulunamadi.
 * 
 * @apiErrorExample {json} api/user/ssg/entries/54356:
 *  {
 *    "error": "Page not found"
 *  }
 * 
 */
function page() { return; }

/**
 * @api {get} /api/index/search/:query/:page? arama sonucunu getir.
 * @apiName search
 * @apiGroup arama
 * @apiVersion 0.0.1
 * 
 * @apiExample {curl} Example curl:
 *     curl -i http://localhost:3000/api/index/search/2022
 * @apiExample {curl} Example curl sayfa:
 *     curl -i http://localhost:3000/api/index/search/2022/2
 * @apiExample {python} Example python:
 *     import requests as r
 *     req = r.get("http://localhost:3000/api/index/search/2022")
 * @apiExample {javascript} Example axios(js):
 *     req = axios.get("http://localhost:3000/api/index/search/2022").then(...)
 * 
 * @apiDescription site içi arama yapan endpoint.
 * 
 * boslukla ayrilmis birden cok kelime veya tek aranabilir
 * 
 * - `api/index/search/mayonez`
 * 
 * - `api/index/search/ketcap mayonez`
 * 
 * gibi.
 * 
 * Sayfa parametresi opsiyonel olup diger sayfalari getirmek icin url sonuna /SAYI ekleyebilirsiniz.
 * 
 * @apiParam {String} query arama kelimesi/kelimeleri
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
 * {
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
 * 
 * @apiError SearchReturnedNoResults Arama sonucu bos dondu.
 * 
 * @apiErrorExample {json} api/index/search/dsadsaads:
 *  {"error":"Search returned no results"}
 * 
 *
 */
function search() { return; }

/**
 * @api {get} /api/index/autocomplete/:query otomatik tamamlamayi getir.
 * @apiName autoComplete
 * @apiGroup arama
 * @apiVersion 0.0.1
 * 
 * @apiExample {curl} Example curl:
 *     curl -i http://localhost:3000/api/index/autocomplete/pena
 * @apiExample {python} Example python:
 *     import requests as r
 *     req = r.get("http://localhost:3000/api/index/autocomplete/pena")
 * @apiExample {javascript} Example axios(js):
 *     req = axios.get("http://localhost:3000/api/index/autocomplete/pena").then(...)
 * 
 * @apiDescription Otomatik tamamlama sağlayan endpoint.
 * 
 * Return edilen cevaptaki arraylerin ikisi de bos ise hata dondurur degilse eksi sozlukten alinan cevabi direkt olarak dondurur.
 * 
 * @apiParam {String} query aranan kelime/kelimeler
 *
 * @apiSuccess (200) {String[]} Titles baslik isimlerinin arrayi.
 * @apiSuccess (200) {String} Query aranan kelime/ler
 * @apiSuccess (200) {String[]} Nicks kullanici nicklerinin arrayi.
 *
 * @apiSuccessExample Success-Response:
 * {
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
 * 
 * @apiError SearchReturnedNoResults Arama sonucu bos dondu.
 * 
 * @apiErrorExample {json} api/index/autocomplete/asd fdsaafsd:
 *  {"error":"Search returned no results"}
 * 
 *
 */
function autoComplete() { return; }

/**
 * @api {get} /api/index/channels tum kanallari getir.
 * @apiName allChannels
 * @apiGroup etc
 * @apiVersion 0.0.1
 * 
 * @apiExample {curl} Example curl:
 *     curl -i http://localhost:3000/api/index/channels
 * @apiExample {python} Example python:
 *     import requests as r
 *     req = r.get("http://localhost:3000/api/index/channels")
 * @apiExample {javascript} Example axios(js):
 *     req = axios.get("http://localhost:3000/api/index/channels").then(...)
 * 
 * @apiDescription Tum kanallari getiren endpoint. 
 * 
 * `¯\_(ツ)_/¯`
 * 
 * @apiSuccess (200) {Object[]} channels kanallarin arrayi.
 * @apiSuccess (200) {String} channels.name kanalin ismi.
 * @apiSuccess (200) {String} channels.slug kanalin url slug hali.
 * @apiSuccess (200) {String} channels.description kanalin açiklamasi.
 *
 * @apiSuccessExample Success-Response:
 * {
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
 * 
 */
function allChannels() { return; }