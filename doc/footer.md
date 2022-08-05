# TLDR

| controller   | method |                endpoint                 | örnek url \(tıkla\)                | sayfali örnek url \(tıkla\)              | açıklama                            |
| ------------ | ------ | :-------------------------------------: | ---------------------------------- | ---------------------------------------- | ----------------------------------- |
| topicList    | get    | `api/topic/list/channel/:choice/:page?` | [/api/topic/list/channel/haber][1] | [/api/topic/list/channel/müzik/2][2]     | kanal başlıklarını getirir          |
| topicList    | get    |     `api/topic/list/:choice/:page?`     | [/api/topic/list/gundem][3]             | [/api/topic/list/basiboslar/3][4]             | başlıkları getirir                  |
| topic        | get    |        `api/topic/:slug/:page?`         | [/api/topic/pena][5]               | [/api/topic/gap-year/2][6]               | bir başlığı getirir                 |
| entry        | get    |             `api/entry/:id`             | [/api/entry/1][7]                  | &nbsp;                                   | bir entry'i getirir                 |
| page         | get    |     `api/user/:nick/entries/:page?`     | [/api/user/ssg/entries][8]         | [/api/user/ssg/entries/2][9]             | bir suserin son entrylerini getirir |
| debe         | get    |            `api/index/debe`             | [/api/index/debe][10]              | &nbsp;                                   | debe'yi getirir                     |
| user         | get    |            `api/user/:nick`             | [/api/user/ssg][11]                | &nbsp;                                   | bir suser'ı getirir                 |
| search       | get    |    `api/index/search/:query/:page?`     | [/api/index/search/pena][12]       | [/api/index/search/boston-celtics/4][13] | arama sonucu                        |
| autoComplete | get    |     `api/index/autocomplete/:query`     | [/api/index/autocomplete/pena][14] | &nbsp;                                   | otomatik tamamlama                  |
| allChannels  | get    |          `api/index/channels`           | [/api/index/channels][15]          | &nbsp;                                   | kanal kategorileri                  |

[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)][99]

[1]: /api/topic/list/channel/haber
[2]: /api/topic/list/channel/müzik/2
[3]: /api/topic/list/gundem
[4]: /api/topic/basiboslar/3
[5]: /api/topic/pena
[6]: /api/topic/gap-year/2
[7]: /api/entry/1
[8]: /api/user/ssg/entries
[9]: /api/user/ssg/entries/2
[10]: /api/index/debe
[11]: /api/user/ssg
[12]: /api/index/search/pena
[13]: /api/index/search/boston-celtics/4
[14]: /api/index/autocomplete/pena
[15]: /api/index/channels
[99]: https://github.com/otuva/eksisozluk-api

---
