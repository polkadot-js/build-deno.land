
import type { DeriveCustom } from 'https://deno.land/x/polkadot@0.2.38/api-base/types/index.ts';
import type { AnyFunction, AnyString } from 'https://deno.land/x/polkadot@0.2.38/types/types/index.ts';
import type { ExactDerive } from './derive.ts';
import type { DeriveApi } from './types.ts';

import { lazyDeriveSection } from './util/index.ts';
import { derive } from './derive.ts';

export * from './derive.ts';
export * from './type/index.ts';

interface Avail {
  instances: string[];
  methods: string[];
  withDetect?: boolean;
}

export { lazyDeriveSection };

const checks: Record<string, Avail> = {
  allianceMotion: {
    instances: ['allianceMotion'],
    methods: []
  },
  bagsList: {
    instances: ['voterBagsList', 'voterList', 'bagsList'],
    methods: [],
    withDetect: true
  },
  contracts: {
    instances: ['contracts'],
    methods: []
  },
  council: {
    instances: ['council'],
    methods: [],
    withDetect: true
  },
  crowdloan: {
    instances: ['crowdloan'],
    methods: []
  },
  democracy: {
    instances: ['democracy'],
    methods: []
  },
  elections: {
    instances: ['phragmenElection', 'electionsPhragmen', 'elections', 'council'],
    methods: [],
    withDetect: true
  },
  imOnline: {
    instances: ['imOnline'],
    methods: []
  },
  membership: {
    instances: ['membership'],
    methods: []
  },
  parachains: {
    instances: ['parachains', 'registrar'],
    methods: []
  },
  session: {
    instances: ['session'],
    methods: []
  },
  society: {
    instances: ['society'],
    methods: []
  },
  staking: {
    instances: ['staking'],
    methods: ['erasRewardPoints']
  },
  technicalCommittee: {
    instances: ['technicalCommittee'],
    methods: [],
    withDetect: true
  },
  treasury: {
    instances: ['treasury'],
    methods: []
  }
};

function getModuleInstances (api: DeriveApi, specName: AnyString, moduleName: string): string[] {
  return api.registry.getModuleInstances(specName, moduleName) || [];
}

/**
 * Returns an object that will inject `api` into all the functions inside
 * `allSections`, and keep the object architecture of `allSections`.
 */
/** @internal */
function injectFunctions (instanceId: string, api: DeriveApi, derives: DeriveCustom): ExactDerive {
  const result: Record<string, Record<string, AnyFunction>> = {};
  const names = Object.keys(derives);
  const keys = Object.keys(api.query);
  const specName = api.runtimeVersion.specName;

  const filterKeys = (q: string) => keys.includes(q);
  const filterInstances = (q: string) => getModuleInstances(api, specName, q).some(filterKeys);
  const filterMethods = (all: string[]) => (m: string) => all.some((q) => keys.includes(q) && api.query[q][m]);
  const getKeys = (s: string) => Object.keys(derives[s]);
  const creator = (s: string, m: string) => derives[s][m](instanceId, api);
  const isIncluded = (c: string) => (!checks[c] || (
    (checks[c].instances.some(filterKeys) && (
      !checks[c].methods.length ||
      checks[c].methods.every(filterMethods(checks[c].instances))
    )) ||
    (
      checks[c].withDetect &&
      checks[c].instances.some(filterInstances)
    )
  ));

  for (let i = 0, count = names.length; i < count; i++) {
    const name = names[i];

    isIncluded(name) &&
      lazyDeriveSection(result, name, getKeys, creator);
  }

  return result as ExactDerive;
}

/** @internal */
export function getAvailableDerives (instanceId: string, api: DeriveApi, custom: DeriveCustom = {}): ExactDerive {
  return {
    ...injectFunctions(instanceId, api, derive as DeriveCustom),
    ...injectFunctions(instanceId, api, custom)
  };
}
