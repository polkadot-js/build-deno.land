
import { TextEncoder as BrowserTE } from './browser.ts';
import { TextEncoder as NodeTE } from './node.ts';

console.log(new BrowserTE().encode('abc'));
console.log(new NodeTE().encode('abc'));
