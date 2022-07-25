import * as RawConstants from './raw';
import * as CattleConstants from './cattle';
import * as PigConstants from './pig';
import * as PoultryConstants from './poultry';

export const catalog = {
	pig: { ...PigConstants },
	raw: { ...RawConstants },
	poultry: { ...PoultryConstants },
	cattle: { ...CattleConstants },
};
