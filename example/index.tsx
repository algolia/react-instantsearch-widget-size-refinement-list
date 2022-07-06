import algoliasearch from 'algoliasearch/lite';
import React from 'react';
import { createRoot } from 'react-dom/client';
import type { Hit } from 'react-instantsearch-core';
import { Configure } from 'react-instantsearch-core';
import {
  InstantSearch,
  SearchBox,
  Hits,
  Panel,
  Pagination,
} from 'react-instantsearch-dom';

import { SizeRefinementList } from '../src';

import { useDebugger } from './utils';

import '../src/style.scss';
import './index.scss';

const searchClient = algoliasearch(
  'latency',
  'a4a3ef0b25a75b6df040f4d963c6e655'
);

const HitComponent = ({ hit }: { hit: Hit }) => {
  return (
    <>
      <img src={hit.image_urls[0]} alt={hit.name} />
      <div>{hit.name}</div>
    </>
  );
};

const App = () => {
  const { props } = useDebugger();

  return (
    <InstantSearch
      indexName="STAGING_pwa_ecom_ui_template_products"
      searchClient={searchClient}
    >
      <Configure maxValuesPerFacet={50} />

      <main className="container">
        <Panel header="Sizes" className="panel__filters">
          <SizeRefinementList {...props} />
        </Panel>

        <Panel className="panel__results">
          <SearchBox />
          <Hits hitComponent={HitComponent} />
          <Pagination />
        </Panel>
      </main>
    </InstantSearch>
  );
};

createRoot(document.getElementById('root')!).render(<App />);
