
import LedgerHid from 'https://esm.sh/@ledgerhq/hw-transport-node-hid-singleton@6.28.12';

import { createDefs } from './util.ts';

export { packageInfo } from './packageInfo.ts';

export const transports = /*#__PURE__*/ createDefs(['hid', LedgerHid]);
