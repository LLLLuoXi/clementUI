<!--
 * @Author: luoxi
 * @LastEditTime: 2022-07-13 23:41:15
 * @LastEditors: your name
 * @Description: 
-->

<template>
  <div class="radio-test-container">
    <h2>基础用法</h2>
    <cl-radio :options="options" @change="handleChange"></cl-radio>
    <h2>禁用选项</h2>
    <p>可以对options下某个选项来添加disableed属性实现禁用选项</p>
    <cl-radio :options="disabledOptions"></cl-radio>
    <h2>垂直排列</h2>
    <p>可以设置inline属性为false实现垂直排列</p>
    <cl-radio
      :options="options"
      :inline="false"
      @change="handleChange"
    ></cl-radio>
    <h2>匹配不同格式</h2>
    <p>
      默认option接收label和value作为显示和值绑定，你可以根据labelFiled和valueFiled来重新确定字段的绑定，更方便的匹配不同格式的数据
    </p>
    <cl-radio
      :options="filedOptions"
      labelFiled="name"
      valueFiled="id"
      @change="handleChange"
    ></cl-radio>
    <h2>自定义颜色</h2>
    <p>通过设置customColor自定义颜色</p>
    <cl-radio
      :options="options"
      @change="handleChange"
      customColor="#2dce89"
    ></cl-radio>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const state = reactive({
  options: [
    {
      label: "冰块🧊",
      value: 1,
    },
    {
      label: "西瓜🍉",
      value: 2,
    },
    {
      label: "椰子🥥",
      value: 3,
    },
  ],
  disabledOptions: [
    {
      label: "冰块🧊",
      value: 1,
    },
    {
      label: "西瓜🍉",
      value: 2,
    },
    {
      label: "椰子🥥",
      value: 3,
      disabled: true,
    },
  ],
  filedOptions: [
    {
      name: "冰块🧊",
      id: 1,
    },
    {
      name: "西瓜🍉",
      id: 2,
    },
    {
      name: "椰子🥥",
      id: 3,
      disabled: true,
    },
  ],
});

const handleChange = (e) => {
  console.log("e", e);
};

const { options, disabledOptions, filedOptions } = state;
</script>

<style>
a {
  margin-right: 10px;
}
</style>
