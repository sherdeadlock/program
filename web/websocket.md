```js
var location = url.parse(ws.upgradeReq.url, true);
// you might use location.query.access_token to authenticate or share sessions
// or ws.upgradeReq.headers.cookie (see http://stackoverflow.com/a/16395220/151312)
```
