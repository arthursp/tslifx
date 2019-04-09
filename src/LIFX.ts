import * as rp from 'request-promise';

const lifxURI = 'https://api.lifx.com/v1/';

class Lifx {
    private token: string;
    private options = {
        headers: {},
        json: true,
        method: 'GET',
        uri: lifxURI,
    };

    constructor(token: string) {
        this.token = token;
        this.options.headers = {
            Authorization: 'Bearer ' + token,
        };
    }

    public async getAllLights(): Promise<any> {
        this.options.uri = lifxURI + 'lights/all';
        return rp.get(this.options);
    }

    public async setState(selector: string, options: JSON): Promise<any> {
        this.options.uri = lifxURI + 'lights/' + selector + '/state';
        this.options.method = 'PUT';
        return rp.put(this.options);
    }
}

export { Lifx };
