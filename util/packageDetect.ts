

import { packageInfo as decoderInfo } from 'https://deno.land/x/polkadot/x-textdecoder/mod.ts';
import { packageInfo as encoderInfo } from 'https://deno.land/x/polkadot/x-textencoder/mod.ts';

import { detectPackage } from './detectPackage.ts';
import { packageInfo } from './packageInfo.ts';

detectPackage(packageInfo, null, [decoderInfo, encoderInfo]);
