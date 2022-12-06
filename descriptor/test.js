const statusUser = {
    online: 'online',
    oflline: 'offline',
    busy: 'busy'
}

let descriptor = Object.defineProperty(statusUser, 'online', {
    writable: false,
    enumerable: false,
    configurable: false
});

statusUser.online = 'safafs'