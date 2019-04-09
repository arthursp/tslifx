import { Lifx } from '../dist/LIFX';

jest.mock('request-promise'); // SoundPlayer is now a mock constructor

describe('test all lib functionnalities', () => {

    beforeEach(() => {
    });

    test('getAllLights', async () => {
        var LifxClient = new Lifx('');
        var lights = await LifxClient.getAllLights();
        expect(lights).toBe(undefined);
    });

});
