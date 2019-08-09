import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Base from '@/components/Chart/Base';

describe('Base.vue', () => {
    const props = {
        name: 'bar',
        chartType: 'bar',
        labels: ['January', 'February', 'March'],
        datasets: [{
            label: '# of Votes',
            data: [
            {x: -10, y: 0 },
            {x: 0, y: 10 },
            {x: 10, y: 5 },
            ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1,
        }],
    };
    const wrapper = mount(Base, {
        propsData: props,
    });
    it('Has a canvas as parent', () => {
        expect(wrapper.contains('canvas')).to.equal(true);
    });
    // Id of canvas equals name
});
