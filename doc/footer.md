# TLDR

| controller   | method |               endpoint               | örnek url \(tıkla\)                 | sayfali örnek url \(tıkla\)                       | açıklama                            |
| ------------ | ------ | :----------------------------------: | ----------------------------------- | ------------------------------------------------- | ----------------------------------- |
| topicList    | get    | `api/basliklar/kanal/:choice/:page?` | [\/api\/basliklar\/kanal\/haber][1] | [\/api\/basliklar\/kanal\/müzik\/2][2]            | kanal başlıklarını getirir          |
| topicList    | get    |    `api/basliklar/:choice/:page?`    | [\/api\/basliklar\/gundem][3]       | [\/api\/basliklar\/basiboslar\/3][4]              | başlıkları getirir                  |
| topic        | get    |      `api/baslik/:slug/:page?`       | [\/api\/baslik\/pena][5]            | [\/api\/baslik\/gap year\/2][6]                   | bir başlığı getirir                 |
| entry        | get    |           `api/entry/:id`            | [\/api\/entry\/1][7]                | &nbsp;                                            | bir entry'i getirir                 |
| page         | get    |   `api/son-entryleri/:nick/:page?`   | [\/api\/son-entryleri\/ssg][8]      | [\/api\/son-entryleri\/kumasi-iyi-futbolcu\/2][9] | bir suserin son entrylerini getirir |
| debe         | get    |              `api/debe`              | [\/api\/debe][10]                   | &nbsp;                                            | debe'yi getirir                     |
| user         | get    |           `api/biri/:nick`           | [\/api\/biri\/ssg][11]              | &nbsp;                                            | bir suser'ı getirir                 |
| search       | get    |           `api/ara/:query`           | [\/api\/ara\/pena][12]              | [\/api\/ara\/boston celtics\/4][13]               | arama sonucu                        |
| autoComplete | get    |      `api/autocomplete/:query`       | [\/api\/autocomplete\/pena][14]     | &nbsp;                                            | otomatik tamamlama                  |
| allChannels  | get    |            `api/kanallar`            | [\/api\/kanallar][15]               | &nbsp;                                            | kanal kategorileri                  |

[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)][99]

[1]: /api/basliklar/kanal/haber
[2]: /api/basliklar/kanal/müzik/2
[3]: /api/basliklar/gundem
[4]: /api/basliklar/basiboslar/3
[5]: /api/baslik/pena
[6]: /api/baslik/gap-year/2
[7]: /api/entry/1
[8]: /api/son-entryleri/ssg
[9]: /api/son-entryleri/kumasi-iyi-futbolcu/2
[10]: /api/debe
[11]: /api/biri/ssg
[12]: /api/ara/pena
[13]: /api/ara/boston-celtics/4
[14]: /api/autocomplete/pena
[15]: /api/kanallar
[99]: https://github.com/otuva/eksisozluk-api

---
