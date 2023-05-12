import { mount } from '@vue/test-utils';
import { describe, test, expect, vi } from 'vitest';
import FormSubmit from '../FormSubmit.vue';

describe('Form submit button', () => {
  test('renders the button with the provided title', () => {
    const title = 'Save';
    const wrapper = mount(FormSubmit, {
      props: {
        title,
      },
    });

    expect(wrapper.text()).toContain(title);
  });

  test('disables the button when disabled prop is true', () => {
    const wrapper = mount(FormSubmit, { props: { disabled: true } });
    const handleSubmit = vi.spyOn(wrapper.vm, 'handleSubmit');

    expect(wrapper.vm.isDisabled).toBe(true);
    expect(handleSubmit).not.toHaveBeenCalled();
  });

  test('shows loading indicator when loading prop is true', async () => {
    const wrapper = mount(FormSubmit, { props: { loading: true } });

    expect(wrapper.find('svg').exists()).toBe(true);
    expect(wrapper.text()).toContain('Loading...');
  });

  test('shows loading indicator when button was clicked', async () => {
    const wrapper = mount(FormSubmit);

    await wrapper.trigger('click');

    expect(wrapper.find('svg').exists()).toBe(true);
    expect(wrapper.text()).toContain('Loading...');
  });

  test('does not call handleSubmit when button is disabled', async () => {
    const wrapper = mount(FormSubmit, { props: { disabled: true } });
    const handleSubmit = vi.spyOn(wrapper.vm, 'handleSubmit');

    await wrapper.trigger('click');

    expect(handleSubmit).not.toHaveBeenCalled();
    expect(wrapper.find('svg').exists()).toBe(false);
  });

  test('does not call handleSubmit when button is loading', async () => {
    const wrapper = mount(FormSubmit, { props: { loading: true } });
    const handleSubmit = vi.spyOn(wrapper.vm, 'handleSubmit');

    await wrapper.trigger('click');

    expect(handleSubmit).not.toHaveBeenCalled();
    expect(wrapper.find('svg').exists()).toBe(true);
  });

  test('calls the handleSubmit method when clicked', async () => {
    const wrapper = mount(FormSubmit);
    const handleSubmit = vi.spyOn(wrapper.vm, 'handleSubmit');

    await wrapper.trigger('click');

    expect(wrapper.vm.loading).toBe(true);

    setTimeout(async () => {
      expect(handleSubmit).toHaveBeenCalled();
      expect(wrapper.vm.loading).toBe(false);
      expect(wrapper.emitted('on-submit')).toBeTruthy();
    }, 800);
  });
});
