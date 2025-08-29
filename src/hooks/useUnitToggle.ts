import { useState, useCallback } from 'react';

export type UnitSystem = 'imperial' | 'metric';

export interface UnitToggleHook {
  unitSystem: UnitSystem;
  toggleUnits: () => void;
  formatSpeed: (mph: number, kmh: number) => string;
  formatTorque: (lbFt: number, nm: number) => string;
  formatWeight: (lbs: number, kg: number) => string;
  formatLength: (inches: number, mm: number) => string;
  formatPower: (hp: number, kw: number) => string;
}

export const useUnitToggle = (): UnitToggleHook => {
  const [unitSystem, setUnitSystem] = useState<UnitSystem>('imperial');

  const toggleUnits = useCallback(() => {
    setUnitSystem(prev => prev === 'imperial' ? 'metric' : 'imperial');
  }, []);

  const formatSpeed = useCallback((mph: number, kmh: number): string => {
    return unitSystem === 'imperial' ? `${mph} mph` : `${kmh} km/h`;
  }, [unitSystem]);

  const formatTorque = useCallback((lbFt: number, nm: number): string => {
    return unitSystem === 'imperial' ? `${lbFt} lb-ft` : `${nm} Nm`;
  }, [unitSystem]);

  const formatWeight = useCallback((lbs: number, kg: number): string => {
    return unitSystem === 'imperial' ? `${lbs.toLocaleString()} lbs` : `${kg.toLocaleString()} kg`;
  }, [unitSystem]);

  const formatLength = useCallback((inches: number, mm: number): string => {
    return unitSystem === 'imperial' ? `${inches}"` : `${mm} mm`;
  }, [unitSystem]);

  const formatPower = useCallback((hp: number, kw: number): string => {
    return unitSystem === 'imperial' ? `${hp} HP` : `${kw} kW`;
  }, [unitSystem]);

  return {
    unitSystem,
    toggleUnits,
    formatSpeed,
    formatTorque,
    formatWeight,
    formatLength,
    formatPower,
  };
};