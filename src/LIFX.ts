import * as rp from 'request-promise';

const lifxURI = 'https://api.lifx.com/v1/';

class Lifx {
    private token: string;
    private options: any = {
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

    public async setState(selector: string, options: object): Promise<any> {
        this.options.uri = lifxURI + 'lights/' + selector + '/state';
        this.options.method = 'PUT';
        this.options.body = options;
        return rp.put(this.options);
    }

    public async setStates(states: object[], defaults: object, fast: boolean = true) {
        this.options.uri = lifxURI + 'lights/states';
        this.options.method = 'PUT';
        this.options.body = {
            defaults: defaults,
            fast: fast,
            states: states,
        };
        return rp.put(this.options);
    }
}

export { Lifx };
