/*
 * @Author: luoxi
 * @LastEditTime: 2022-06-01 22:01:29
 * @LastEditors: your name
 * @Description: Button 组件单元测试
 */

import Button from '@clement/Button';
import { shallowMount } from '@vue/test-utils';

describe('Button.vue', () => {
  let wrapper;
  let buttonEle;

  beforeEach(() => {
    wrapper = shallowMount(Button);
    buttonEle = wrapper.vm.$el;
  })

  //create
  it('create', () => {
    expect(buttonEle.classList).toContain('cl-button');
  });

  // size
  it('size', async () => {
    await wrapper.setProps({
      type: "mini"
    })
    expect(buttonEle.classList).toContain('cl-button--mini');
  })

  // type
  it('type', async () => {
    await wrapper.setProps({
      type: "primary"
    })
    expect(buttonEle.classList).toContain('cl-button--primary');
  })

  // plain
  it('plain', async () => {
    await wrapper.setProps({
      plain: true
    })
    expect(buttonEle.classList).toContain('is-plain');
  })

  // round
  it('round', async () => {
    await wrapper.setProps({
      round: true
    })
    expect(buttonEle.classList).toContain('is-round');
  })

  // circle
  it('circle', async () => {
    await wrapper.setProps({
      circle: true
    })
    expect(buttonEle.classList).toContain('is-circle');
  })

  // disabled
  it('disabled', async () => {
    await wrapper.setProps({
      disabled: true
    })
    expect(buttonEle.classList).toContain('is-disabled');
  })

  // loading
  it('loading', async () => {
    await wrapper.setProps({
      loading: true
    })
    expect(wrapper.html()).toContain('<i class="cl-icon-loading"></i>');
  })

  // icon
  it('icon', async () => {
    await wrapper.setProps({
      icon: 'cl-icon-edit'
    })
    expect(wrapper.html()).toContain('<i class="cl-icon-edit"></i>');
  })

  // autofocus
  it('autofocus', async () => {
    await wrapper.setProps({
      autofocus: true
    })
    expect(wrapper.attributes().autofocus).toEqual('')
  })

  // native-type
  it('native-type', async () => {
    await wrapper.setProps({
      nativeType: 'submit'
    })
    expect(wrapper.attributes().type).toEqual('submit')
  })

  // $emit event
  it('click', async () => {
    await wrapper.trigger('click')
    expect(wrapper.emitted().click).toBeTruthy()
  })
});