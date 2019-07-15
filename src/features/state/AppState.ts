import { useState } from 'react';
import { Data, IState, CONFIG } from './types';

export default class AppState implements IState {
  public static create() {
    return new this();
  }

  private data: Data;

  public get zoom() {
    return this.data.zoom[0];
  }
  public set zoom(v) {
    this.data.zoom[1](Math.max(CONFIG.zoom.min, Math.min(CONFIG.zoom.max, v)));
  }

  public constructor() {
    const keys = Object.keys(CONFIG) as Array<keyof typeof CONFIG>;

    this.data = keys.reduce(
      (accum: Partial<Data>, key: keyof typeof CONFIG): Partial<Data> => ({
        ...accum,
        [key]: useState(CONFIG[key].default),
      }),
      {}
    ) as Data;
  }
}
