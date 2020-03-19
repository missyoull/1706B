import mockData from './data.json';

let mock = {
    '/api/list'(){
        return mockData
    }
}

export default mock;