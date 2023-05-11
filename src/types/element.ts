import type { UnitValue } from './units';

export interface ElementProperties {
  id?: number;
  height: number;
  heightUnit: UnitValue;
  width: number;
  widthUnit: UnitValue;
  backgroundColor?: string;
  description?: string;
}
