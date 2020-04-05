
import Vue from 'vue';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';

const requireComponent = require.context('.', false, /[\w-].vue$/); // _global 이랑 현재 같은 경로 상에  선언된 vue 파일들

requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName);
    const componentName = upperFirst(
        camelCase(fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')) // 파일명만 camelCase로 바꾼다
    )
    Vue.component(componentName, componentConfig.default || componentConfig)
})