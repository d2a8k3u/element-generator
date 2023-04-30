import type { ElementProperties } from '../../types/element';
import { describe, beforeEach, it, expect } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useElementStore } from '../element';

const elementData: ElementProperties = {
  height: 120,
  heightUnit: 'px',
  width: 12,
  widthUnit: 'px',
};

describe('Counter Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('save data', () => {
    const elementStore = useElementStore();
    expect(elementStore.data).toBe(null);
    elementStore.saveElement(elementData);
    expect(elementStore.data).toEqual(elementData);
  });
});
