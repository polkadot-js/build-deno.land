
export const prevLedgerRecord: Record<string, string> = {
  acala: 'Acala',
  ajuna: 'Ajuna',
  'aleph-node': 'AlephZero',
  astar: 'Astar',
  bifrost: 'Bifrost',
  'bifrost-kusama': 'BifrostKusama',
  centrifuge: 'Centrifuge',
  composable: 'Composable',
  darwinia: 'Darwinia',
  'dock-mainnet': 'Dock',
  edgeware: 'Edgeware',
  enjin: 'Enjin',
  equilibrium: 'Equilibrium',
  genshiro: 'Genshiro',
  hydradx: 'HydraDX',
  'interlay-parachain': 'Interlay',
  karura: 'Karura',
  khala: 'Khala',
  kusama: 'Kusama',
  matrixchain: 'Matrixchain',
  nodle: 'Nodle',
  origintrail: 'OriginTrail',
  parallel: 'Parallel',
  peaq: 'Peaq',
  pendulum: 'Pendulum',
  phala: 'Phala',
  picasso: 'Picasso',
  polkadex: 'Polkadex',
  polkadot: 'Polkadot',
  polymesh: 'Polymesh',
  quartz: 'Quartz',
  sora: 'Sora',
  stafi: 'Stafi',
  statemine: 'Statemine',
  statemint: 'Statemint',
  ternoa: 'Ternoa',
  unique: 'Unique',
  vtb: 'VTB',
  xxnetwork: 'XXNetwork',
  zeitgeist: 'Zeitgeist'
};

export const genericLedgerApps = {
  bittensor: 'Bittensor',
  creditcoin3: 'Creditcoin3',
  encointer: 'Encointer',
  frequency: 'Frequency',
  integritee: 'Integritee',
  liberland: 'Liberland',
  polimec: 'Polimec',
  vara: 'Vara'
};

export const ledgerApps: Record<string, string> = {
  ...prevLedgerRecord,
  ...genericLedgerApps
};
