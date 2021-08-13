<p align="left">
  <a href="https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/react/">
    <img alt="React InstantSearch" src="https://i.ibb.co/44km5r2/react-widget.png">
  </a>
</p>

[React InstantSearch widget](https://www.algolia.com/?utm_source=react-instantsearch&utm_campaign=repository) that filters the dataset based on **size facet values**.  
Equivalent of the offcial [RefinementList widget](https://www.algolia.com/doc/api-reference/widgets/refinement-list/react/) but displaying **size boxes** as a grid instead of facet values checkboxes as a list.

![Example](https://i.ibb.co/WVFLSVx/ezgif-5-4b260bd61a7d.gif)

---

[![MIT](https://img.shields.io/npm/l/@algolia/react-instantsearch-widget-size-refinement-list)](./LICENSE) [![NPM version](https://img.shields.io/npm/v/@algolia/react-instantsearch-widget-size-refinement-list.svg)](https://npmjs.org/package/@algolia/react-instantsearch-widget-size-refinement-list)

## Summary

- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Styling](#styling)
  - [CSS variables](#css-variables)
- [Requirements](#requirements)
- [Options](#options)
- [Example](#example)
- [Browser Support](#browser-support)
- [Troubleshooting](#Troubleshooting)
- [Contributing & Licence](#contributing--licence)

# Get started

## Demo

[Demo](https://codesandbox.io/s/github/algolia/react-instantsearch-widget-size-refinement-list?file=/example/index.tsx) on CodeSandbox.

## Installation

```bash
npm install @algolia/react-instantsearch-widget-size-refinement-list
# or
yarn add @algolia/react-instantsearch-widget-size-refinement-list
```

## Usage

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { InstantSearch, SearchBox, Hits, Panel } from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch/lite';
import { SizeRefinementList } from '@algolia/react-instantsearch-widget-size-refinement-list';

// Import default styles
import '@algolia/react-instantsearch-widget-size-refinement-list/dist/style.css';

const searchClient = algoliasearch('appId', 'apiKey');

ReactDOM.render(
  <InstantSearch indexName="indexName" searchClient={searchClient}>
    <SizeRefinementList attribute="size" />
  </InstantSearch>,
  document.getElementById('root')
);
```

## Styling

The widget ships with default styles that you can import either from the NPM package or directly from a CDN like JSDelivr.

```js
import '@algolia/react-instantsearch-widget-size-refinement-list/dist/style.css';
```

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@algolia/react-instantsearch-widget-size-refinement-list/dist/style.css"
/>
```

### CSS variables

The widget styles uses CSS variables that you can customize in your own CSS.  
You can override CSS variables using the `.ais-SizeRefinementList` class.

| Name | Type | Description |
| --- | --- | --- |
| `--transition-duration` | [`time`][css-time] | Transition duration (used for hover, active, refined states). |
| `--items-column-width` | [`length`][css-length] | Items grid column width. |
| `--items-gap` | [`length`][css-length] | Items grid gap. |
| `--refined-color-rgb` | [`integer, integer, integer`][css-integer] | The RGB values when an item is refined. |
| `--refined-color-alpha` | [`number`][css-number] | The alpha value when an item is refined. |
| `--not-refined-rgb` | [`integer, integer, integer`][css-integer] | The RGB values when an item is not refined. |
| `--not-refined-alpha` | [`number`][css-number] | The alpha value when an item is not refined. |
| `--border-alpha` | [`number`][css-number] | The alpha value for the item border color when an item is not refined. |

### Options

Same options as the official [RefinementList](https://www.algolia.com/doc/api-reference/widgets/refinement-list/react/#props) widget.

| Option | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| [`attribute`](#attribute) | `string` | true | - | The name of the attribute in the record. |
| [`defaultRefinement`](#defaultRefinement) | `string[]` | false | `[]` | The value of the item selected by default. |
| [`operator`](#operator) | `string ("or"\|"and")` | false | `or` | How to apply the refinements. |
| [`limit`](#limit) | `number` | false | `10` | How many facet values to retrieve. |
| [`showMore`](#showMore) | `boolean` | false | `false` | Whether to display a button that expands the number of items. |
| [`showMoreLimit`](#showMoreLimit) | `number` | false | `20` | Maximum number of displayed items. Only used when `showMore` is set to `true`. |
| [`searchable`](#searchable) | `boolean` | false | `false` | Whether to add a search input to let the user search for more facet values. |
| [`transformItems`](#transformItems) | `function` | false | `undefined` | Modifies the items being displayed, for example, to filter or sort them. It takes items as argument and expects them back in return. |
| [`translations`](#translations) | `object` | false | - | A mapping of keys to translation values. |

#### attribute

> `string` | **required**

The name of the attribute in the record.

```tsx
<SizeRefinementList attribute="size" />
```

#### defaultRefinement

> `string[]`

The value of the item selected by default.

```tsx
<SizeRefinementList defaultRefinement={['M']} />
```

#### operator

> `string ("or"|"and")`

How to apply the refinements.

```tsx
<SizeRefinementList operator="and" />
```

#### limit

> `number`

How many facet values to retrieve.

```tsx
<SizeRefinementList limit={10} />
```

#### showMore

> `boolean`

Whether to display a button that expands the number of items.

```tsx
<SizeRefinementList showMore={true} />
```

#### showMoreLimit

> `number`

Maximum number of displayed items. Only used when `showMore` is set to `true`.

```tsx
<SizeRefinementList showMoreLimit={20} />
```

#### searchable

> `boolean`

Whether to add a search input to let the user search for more facet values.

```tsx
<SizeRefinementList searchable={true} />
```

#### transformItems

> `function`

Modifies the items being displayed, for example, to filter or sort them. It takes items as argument and expects them back in return.

```tsx
<SizeRefinementList
  transformItems={(items) =>
    items.map((item) => ({
      ...item,
      label: item.label.toUpperCase(),
    }))
  }
/>
```

#### translations

> `object`

A mapping of keys to translation values.

- `showMore`: the label of the “Show more” button. Accepts one boolean parameter that is `true` if the values are expanded, `false` otherwise.
- `noResults`: the label of the no results text when no search for facet values results are found.
- `submitTitle`: the alternative text of the submit icon.
- `resetTitle`: the alternative text of the reset button icon.
- `placeholder`: the label of the input placeholder.

```tsx
<LoadMoreWithProgressBar
  translations={{
    showMore(expanded: boolean) {
      return expanded ? 'Show less' : 'Show more';
    },
    noResults: 'No results',
    submitTitle: 'Submit your search query.',
    resetTitle: 'Clear your search query.',
    placeholder: 'Search here...',
  }}
/>
```

## Example

Clone this repository and go to the repo folder:

```bash
git clone git@github.com:algolia/react-instantsearch-widget-size-refinement-list.git && \
cd react-instantsearch-widget-size-refinement-list
```

Install the dependencies and start the example:

```bash
npm install && npm start
# or
yarn install && yarn start
```

Then open http://localhost:3000/ to see the example in action.

## Browser support

Same as React InstantSearch it supports the **last two versions of major browsers** (Chrome, Edge, Firefox, Safari).

Please refer to the [browser support](https://www.algolia.com/doc/guides/building-search-ui/installation/react/#browser-support) section in the documentation to use React InstantSearch and this widget on other browsers.

## Troubleshooting

Encountering an issue? Before reaching out to support, we recommend heading to our [FAQ](https://www.algolia.com/doc/guides/building-search-ui/troubleshooting/faq/react/) where you will find answers for the most common issues and gotchas with the library.

## Contributing & Licence

### How to contribute

We welcome all contributors, from casual to regular 💙

- **Bug report**. Is something not working as expected? [Send a bug report](https://github.com/algolia/react-instantsearch-widget-size-refinement-list/issues/new?template=Bug_report.md).
- **Feature request**. Would you like to add something to the library? [Send a feature request](https://github.com/algolia/react-instantsearch-widget-size-refinement-list/issues/new?template=Feature_request.md).
- **Documentation**. Did you find a typo in the doc? [Open an issue](https://github.com/algolia/react-instantsearch-widget-size-refinement-list/issues/new) and we'll take care of it.
- **Development**. If you don't know where to start, you can check the open issues that are [tagged easy](https://github.com/algolia/react-instantsearch-widget-size-refinement-list/issues?q=is%3Aopen+is%3Aissue+label%3A%22Difficulty%3A++++++%E2%9D%84%EF%B8%8F+easy%22), the [bugs](https://github.com/algolia/react-instantsearch-widget-size-refinement-list/issues?q=is%3Aissue+is%3Aopen+label%3A%22%E2%9D%A4+Bug%22) or [chores](https://github.com/algolia/react-instantsearch-widget-size-refinement-list/issues?q=is%3Aissue+is%3Aopen+label%3A%22%E2%9C%A8+Chore%22).

To start contributing to code, you need to:

1.  [Fork the project](https://help.github.com/articles/fork-a-repo/)
1.  [Clone the repository](https://help.github.com/articles/cloning-a-repository/)
1.  Install the dependencies: `yarn`
1.  Run the development mode: `yarn start`
1.  [Open the project](http://localhost:3000)

Please read [our contribution process](CONTRIBUTING.md) to learn more.

### Licence

Licensed under the [MIT license](LICENSE).

---

**About React InstantSearch**

React InstantSearch is a React library that lets you create an instant-search result experience using [Algolia][algolia-website]’s search API. It is part of the InstantSearch family:

**React InstantSearch** | [InstantSearch.js][instantsearch.js-github] | [Angular InstantSearch][instantsearch-angular-github] | [Vue InstantSearch][instantsearch-vue-github] | [InstantSearch Android][instantsearch-android-github] | [InstantSearch iOS][instantsearch-ios-github]

This project was generated with [create-instantsearch-app](https://github.com/algolia/create-instantsearch-app) by [Algolia](https://algolia.com).

<!-- Links -->

[algolia-website]: https://www.algolia.com/?utm_source=react-instantsearch&utm_campaign=repository
[instantsearch.js-github]: https://github.com/algolia/instantsearch.js
[instantsearch-angular-github]: https://github.com/algolia/angular-instantsearch
[instantsearch-vue-github]: https://github.com/algolia/vue-instantsearch
[instantsearch-android-github]: https://github.com/algolia/instantsearch-android
[instantsearch-ios-github]: https://github.com/algolia/instantsearch-ios
[css-time]: https://developer.mozilla.org/en-US/docs/Web/CSS/time
[css-length]: https://developer.mozilla.org/en-US/docs/Web/CSS/length
[css-integer]: https://developer.mozilla.org/en-US/docs/Web/CSS/integer
[css-number]: https://developer.mozilla.org/en-US/docs/Web/CSS/number
