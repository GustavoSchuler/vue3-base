/* eslint-disable @typescript-eslint/no-explicit-any */
import { shallowMount, VueWrapper } from '@vue/test-utils';
import router from '@/router';
import App from '@/App.vue';

describe('App.vue', () => {
  describe('Given that the app is mounted', () => {
    let wrapper: VueWrapper<any>;

    beforeAll(() => {
      wrapper = shallowMount(App,
        {
          global: {
            plugins: [router],
          },
        });
    });

    it('should have correct container id', async () => {
      const containerId = 'container';
      const appContainer = wrapper.find(`#${containerId}`);
      const appEl = appContainer.element;

      await router.isReady();

      expect(appContainer).toBeTruthy();
      expect(appEl).toBeDefined();
      expect(appEl.id).toEqual(containerId);
    });
  });
});
