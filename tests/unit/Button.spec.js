/*
 * @Author: luoxi
 * @LastEditTime: 2022-05-31 23:48:05
 * @LastEditors: your name
 * @Description: 
 */

import Button from '@clement/Button';
import { shallowMount } from '@vue/test-utils';

describe('Button.vue', () => {
  it('create', () => {
    const wrapper = shallowMount(Button)
    const buttonEle = wrapper.vm.$el;

    expect(buttonEle.classList).toContain('cl-button');
  });

  it('size', () => {
    const wrapper = shallowMount(Button)
    const buttonEle = wrapper.vm.$el;

    wrapper.setProps({
      size: "mini"
    })

    expect(buttonEle.classList).toContain('cl-button--mini');
    // cl-button--${size}
  })

  it('type', () => {
    const wrapper = shallowMount(Button)
    const buttonEle = wrapper.vm.$el;

    wrapper.setProps({
      type: "primary"
    })

    expect(buttonEle.classList).toContain('cl-button--primary');
  })
});