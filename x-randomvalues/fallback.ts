

let warned = false;

export function insecureRandomValues <T extends Uint8Array> (arr: T): T {
  if (!warned) {
    console.warn('Using an insecure random number generator, this should only happen when running in a debugger without support for crypto');
    warned = true;
  }

  let r = 0;

  for (let i = 0; i < arr.length; i++) {
    if ((i & 0b11) === 0) {
      r = Math.random() * 0x100000000;
    }

    arr[i] = (r >>> ((i & 0b11) << 3)) & 0xff;
  }

  return arr;
}
