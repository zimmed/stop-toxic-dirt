import { KeyboardEvent } from 'react';

export default function onEnterKey(callback: (e: KeyboardEvent) => any): any {
  return (e: KeyboardEvent) => (e.key === 'Enter' ? callback(e) : null);
}
