export default class ErrorRepository {
    constructor() {
        this.map = new Map([
            [102, 'Processing'],
            [204, 'No Content'],
            [301, 'Moved Permanently'],
            [404, 'Not Found'],
            [500, 'Internal Server Error']
        ]);
    }

    translate(code) {
        return this.map.has(code) ? this.map.get(code) : 'Unknown error';
    }
}
