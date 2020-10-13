import {} from './component/world.js';
import { world } from './hello.js';

const test = (user) => {
    world();
    console.log(`Hello, ${user}`);
}

export default test;