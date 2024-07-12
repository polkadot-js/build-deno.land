
import LedgerHid from 'https://esm.sh/@ledgerhq/hw-transport-webhid@6.29.0';
import LedgerUsb from 'https://esm.sh/@ledgerhq/hw-transport-webusb@6.29.0';

import { createDefs } from './util.ts';

export { packageInfo } from './packageInfo.ts';

export const transports = /*#__PURE__*/ createDefs(['webusb', LedgerUsb], ['hid', LedgerHid]);
