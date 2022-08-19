# Bunun ismini eksi crawler falan yap. eksi apiyi official apiyi kullanan bir sey yapabilirsin 

# yeni endpoint ekleme checklist
- doc/doc.js guncelle
- ./readme guncelle
- doc/footer guncelle
- src/router guncelle 
- constant/urls guncelle 
- doc-flush yaz

# readme guncelleme checklist
- ./readme guncelle
- doc/header guncelle


arama sonuclarinda b yaziyorsa uc sifir ekle.

controller importlarini sirala duzenle

belki entry epdeki gereksiz kisimlari temizle. cok da onemi yok 

apideki kisimlari official apidekine benzer olsun diye isimlerini degistir. birebir ayni olmasi gerekmiyor

apiyi zaple test et

ucuz bir servera deploy et. clientda api linki secebilme olmali. direkt localdeki bir sunucuyu ya da remote sunucuyu kullanabilsin

rate limitingi test et. rate limitinge takilinca belki diger instancelarin linkini gosterebilir nitter tarzi

no cache koy caching tamamen clientda olmali

helmet ve cors doc bak

mobil client kotlinle. iosa daha kolay app olsun diye react native de olabilir ama iosa appini cikaracagimi sanmam. dusun

desktop client node ile gene. browser ustu olsun istiyorum normal eksi sozluk deneyimi gibi.

fonksiyonlara jsdoc ekle 

<!-- https://eksisozluk.com/23-ocak-2022-wolf-pubda-oldurulesiye-dovulmek--7154265 --> 
eger baslikta pinlenmis entry varsa onu da dondur

gorsel tarihlerinin onune sifir ekle

kullanici badge endpointi

user epde son entry girilen tarihi dondur. pinli olmayan son entrynin tarih deltasini alip goster

pinli entryi last entries altinda dondurmek yerine direkt user altinda dondurebilirsin. dusun

profildeki diger epler

gorsel b64 endpointi (belki gerekli olmayabilir gorselin arsivlenmesini client yapabilir)

off apideki diger endpointler

belki client sadece arsiv yapmak yerine normal viewer olarak da calisabilir.
eger olursa sukela modunu eklemen gerek

belki login ve kullanici islemleri endpointleri? belki sonra. official apiyi kullanmadan giris yapabilsin. surekli girisi engellemek icin postda remember me objesi yolla  

firefox veya chromedan session token parselama secenegi? geregi oldugunu sanmam newpipe gibi tamamen anonim ve tum kayitlarin (fav, arama gecmisi) vs. localde tutulmasi daha mantikli

---

~~controllerlari anabasliklar altinda duzenle~~

~~kullanici favlari EPI~~

~~disamb calismiyor duzelt~~

~~/kanal endpointi olustur~~

~~tek bir baslik endpointi~~

~~kullanici, son entriler endpointini cagirsin. configde bu ozelligi kullansin mi diye sor~~

~~kullanici gorselleri~~

~~EPlerin eksisozluge benzemesi gerekmiyor. daha kolay ve intuitive yapilabilir~~

```
/basliklar/gundem
          /sorunsal
          /kanal
                /<kanallar>
```

---
