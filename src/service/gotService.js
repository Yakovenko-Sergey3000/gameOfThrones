export default class GotService  {

    constructor(){
        this._apiPath = 'https://www.anapioficeandfire.com/api/'
    }
    
    getResurce = async (url) => {
        

        const res = await fetch(this._apiPath + url);
        if(!res.ok) {
            throw new Error(`Cannot get resurce ${this._apiPath + url} status: ${res.status} `)
        }

        return res.json();
    }

    getAllCharacters = async () => {
        const characters = await this.getResurce('characters?page=5&pageSize=10');
        return characters.map(characters => this._tranformCharters(characters))
    }

    getCharacter = async (id) => {
        const character = await this.getResurce(`characters/${id}`);
        return this._tranformCharters(character)
    }

    getAllHouses = async () => {
        const houses = await this.getResurce('houses');
        return houses
    }

    getHouses = async (id) => {
        const house = await this.getResurce(`house/${id}`);
        return house
    }

    getAllBooks = async () => {
        const books = await this.getResurce('books');
        return books
    }

    getBook = async (id) => {
        const book = await this.getResurce(`book/${id}`);
        return book
    }

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)$/;
        return item.url.match(idRegExp)[1];
    }

    isSet(data) {
        if(data) {
            return data;
        }

        return 'not data :('
    }

    _tranformCharters(char) {
        return {
            name: this.isSet(char.name),
            gender: this.isSet(char.gender),
            born: this.isSet(char.born),
            died: this.isSet(char.died),
            culture:this.isSet(char.culture),
            id: this._extractId(char)
        }
    }

    _transformBook(book) {
        return {
            name: this.isSet(book.name),
            numberOfPages: this.isSet(book.numberOfPages),
            publiser: this.isSet(book.publiser),
            released: this.isSet(book.released),
            id: this._extractId(book)
        }
    }

    _transformHouse(house) {
        return {
            name: this.isSet(house.name),
            region: this.isSet(house.region),
            words: this.isSet(house.words),
            titles: this.isSet(house.titles),
            overlord: this.isSet(house.overlord),
            ancestralWeapons: this.isSet(house.ancestralWeapons),
            id: this._extractId(house)
        }
    }
};


