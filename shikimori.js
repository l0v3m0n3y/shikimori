class shikimori{
    constructor(){
        this.api = "https://shikimori.one/api"
        this.headerss={"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0"}
    }
    async anime_list(page,limit,order,kind,censored){
        let req=await fetch(`${this.api}/animes?&page=${page}&limit=${limit}&order=${order}&kind=${kind}&censored=${censored}`,{method:"GET",headerss: this.headers});
        return await req.json();
    }
    async calendar_list(censored){
        let req=await fetch(`${this.api}/calendar?censored=${censored}`,{method:"GET",headerss: this.headers});
        return await req.json();
    }
    async search_manga(page,limit,order,censored,search){
        let req=await fetch(`${this.api}/mangas?&page=${page}&limit=${limit}&order=${order}&censored=${censored}&search=${search}`,{method:"GET",headerss: this.headers});
        return await req.json();
    }
    async search_anime(page,limit,order,censored,search){
        let req=await fetch(`${this.api}/animes?&page=${page}&limit=${limit}&order=${order}&censored=${censored}&search=${search}`,{method:"GET",headerss: this.headers});
        return await req.json();
    }
    async search_ranobe(page,limit,order,censored,search){
        let req=await fetch(`${this.api}/ranobe?&page=${page}&limit=${limit}&order=${order}&censored=${censored}&search=${search}`,{method:"GET",headerss: this.headers});
        return await req.json();
    }
    async manga_list(page,limit,order,kind,censored){
        let req=await fetch(`${this.api}/mangas?&page=${page}&limit=${limit}&order=${order}&kind=${kind}&censored=${censored}`,{method:"GET",headerss: this.headers});
        return await req.json();
    }
    async ranobe_list(page,limit,order,kind,censored){
        let req=await fetch(`${this.api}/ranobe?&page=${page}&limit=${limit}&order=${order}&kind=${kind}&censored=${censored}`,{method:"GET",headerss: this.headers});
        return await req.json();
    }
    async manga_info(title){
        let req=await fetch(`${this.api}/animes/${title}`,{method:"GET",headerss: this.headers});
        return await req.json();
    }
    async ranobe_info(title){
        let req=await fetch(`${this.api}/ranobe/${title}`,{method:"GET",headerss: this.headers});
        return await req.json();
    }
    async anime_info(title){
        let req=await fetch(`${this.api}/animes/${title}`,{method:"GET",headerss: this.headers});
        return await req.json();
    }
}
module.exports = {shikimori};
