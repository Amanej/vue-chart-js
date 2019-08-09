import { expect } from 'chai';
import { createLocalVue,  mount } from '@vue/test-utils';
import Base from './Base.vue';

describe('Base.vue', () => {
    const props = {
        name: 'Toggler',
        OnLabel: 'På',
        OffLabel: 'Av',
    };
    const wrapper = mount(Base, {
        propsData: props,
    });
    it('Has a div as parent', () => {
        expect(wrapper.contains('div')).to.equal(true);
    });
});
