export type UnitValue = 'px' | '%';

export interface Unit {
  title: string;
  value: UnitValue;
}

export interface ElementProperties {
  id?: number | string;
  height: number | string | null;
  heightUnit: UnitValue;
  width: number | string | null;
  widthUnit: UnitValue;
  backgroundColor?: string;
  description?: string;
}
