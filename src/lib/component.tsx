import React from 'react';
import type { RefinementListProvided } from 'react-instantsearch-core';
import { createClassNames, RefinementList } from 'react-instantsearch-dom';

import type { SizeRefinementListExposed } from './widget';

export type SizeRefinementListProps = RefinementListProvided &
  SizeRefinementListExposed;

export const SizeRefinementListComponent = ({
  ...props
}: SizeRefinementListProps) => {
  const cx = createClassNames('SizeRefinementList');
  return <RefinementList className={cx('')} {...props} />;
};
