
import { TextDecoder as BrowserTD } from './browser.ts';
import { TextDecoder as NodeTD } from './node.ts';

console.log(new BrowserTD('utf-8').decode(new Uint8Array([1, 2, 3])));
console.log(new NodeTD('utf-8').decode(new Uint8Array([1, 2, 3])));
