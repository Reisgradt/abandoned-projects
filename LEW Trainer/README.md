## LEW Trainer
Писал его, чтобы потренироваться, да и английский хотел подтянуть, да вот только бросил, так как и без него можно слова учить. А так, отточил React + Redux. Из рабочего функционала здесь только перевод английского слова на русский язык. Используется API яндека-переводчика, то есть нужен свой личный ключ для работы с этим приложением.  

![Пример приложения]("https://github.com/Reisgradt/abandoned-projects/blob/master/LEW Trainer/example.PNG" "Пример приложения")

### То, что нужно заменить

В файле ./server/config/config.json нужно вставить свой ключ от API яндека в translater.key. А также придумать свою ключ для сессий в session.secret.

```json
{
    "db": {
        "url": "mongodb://localhost:27017/LEW_Trainer",
        "options": {
            "useMongoClient": true
        }
    },
    "server": {
        "port": 3000
    },
    "translater": {
        "url": "https://translate.yandex.net/api/v1.5/tr.json/translate",
        "key": "Your key"
    },
    "session": {
        "secret": "Your secret",
        "key": "sid",
        "cookie": {
            "path": "/",
            "httpOnly": true,
            "maxAge": null,
            "secure": false
        }
    }
}
```
