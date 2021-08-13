import { useEffect, useState } from 'react';
import { Pane } from 'tweakpane';

const defaultProps = {
  attribute: 'sizeFilter',
  searchable: false,
  limit: 10,
  showMore: false,
  showMoreLimit: 20,
};

export const useDebugger = () => {
  const [props, setProps] = useState(defaultProps);

  useEffect(() => {
    const pane = new Pane({
      title: 'SizeRefinementList widget',
      expanded: true,
      container: document.getElementById('debug') as HTMLElement,
    });

    const propsFolder = pane.addFolder({ title: 'Props' });

    const commonFolder = propsFolder.addFolder({ title: 'Common' });
    commonFolder.addInput(defaultProps, 'attribute');
    commonFolder.addInput(defaultProps, 'searchable');

    const showMoreFolder = propsFolder.addFolder({ title: 'Show More' });
    showMoreFolder.addInput(defaultProps, 'limit', {
      min: 1,
      max: 12,
      step: 1,
    });
    showMoreFolder.addInput(defaultProps, 'showMore');
    showMoreFolder.addInput(defaultProps, 'showMoreLimit', {
      min: 1,
      max: 20,
      step: 1,
    });

    pane.on('change', (ev) => {
      setProps((p) => ({
        ...p,
        [ev.presetKey as string]: ev.value,
      }));
    });

    return () => {
      pane.dispose();
    };
  }, []);

  return {
    props,
  };
};
