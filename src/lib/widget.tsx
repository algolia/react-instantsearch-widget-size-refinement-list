import type { ComponentType } from 'react';
import type { RefinementListExposed } from 'react-instantsearch-core';
import { connectRefinementList } from 'react-instantsearch-dom';

import { SizeRefinementListComponent } from './component';

export type SizeRefinementListExposed = RefinementListExposed;

export const SizeRefinementList: ComponentType<SizeRefinementListExposed> =
  connectRefinementList(SizeRefinementListComponent);
