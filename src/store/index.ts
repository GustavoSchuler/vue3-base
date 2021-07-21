import {
  createStore, createLogger, Store, useStore as baseUseStore,
} from 'vuex';
import { InjectionKey } from 'vue';
import { State } from './types/state';

const debug = process.env.NODE_ENV !== 'production';

export const key: InjectionKey<Store<State>> = Symbol('store');

export const store = createStore<State>({
  state: {},
  mutations: {},
  getters: {},
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useStore() {
  return baseUseStore(key);
}
