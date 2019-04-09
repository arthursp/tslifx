# tslifx
A Node.js module that allow you to control lifx lights over typescript

## Installation
```sh
npm install tslifx --save
```

## Usage
### Get the client authentified
```typescript
import { Lifx } from 'tslifx';
var LifxClient = new Lifx('your_lifx_token');
```

### Get all lights
```typescript
var lights = await LifxClient.getAllLights();
console.log(lights);
```
```sh
Example Output should be '[{"brightness": 1, "color": {"hue": 0, "kelvin": 3500, "saturation": 0}, "connected": true, "effect": "OFF", "group": {"id": "XXXXXX", "name": "XXXX"}, "id": "XXXXX", "label": "XXXXX", "last_seen": "2019-04-09T10:19:44Z", "location": {"id": "XXXX", "name": "XXXXX"}, "power": "off", "product": {"capabilities": [[Function Object]], "company": "LIFX", "identifier": "lifx_mini", "name": "LIFX Mini"}, "seconds_since_seen": 0, "uuid": "XXX-XXX-XXX"}]'
```

### set state of a light
```typescript
let optionState = {
    "power": "on",
    "color": "#84e0ff",
    "brightness": 1,
    "duration": 2,
}
var state = await LifxClient.setState('all', optionState);

console.log(state);
```
```sh
Example Output should be '{ results: [ { id: "XXXX", status: "ok", label: "XXXXX" } ] }'
```

## Test
```sh
npm run test
```