# shikimori
JavaScript library for shikimori.one
# main
```js
async function main(){
    const {shikimori} = require('./shikimori');
    const comics= new shikimori();
    let req=await comics.calendar_list(false)
    console.log(req)
}
main()
```
