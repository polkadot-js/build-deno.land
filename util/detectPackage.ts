
import others from './detectOther.ts';
import { packageInfo } from './packageInfo.ts';
import { detectPackage } from './versionDetect.ts';

detectPackage(packageInfo, null, others);
