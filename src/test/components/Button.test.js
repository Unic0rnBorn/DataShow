import React from 'react';
import { Button, DivButton } from '../../components/Button';
import TestRenderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Button.component', () => {
  let component;

  it('should be rendered Custom Button', () => {
    TestRenderer.act(() => {
      component = TestRenderer.create(
        <Button />
      );
    });
    expect(component.root).toBeDefined();
  });

  it('Custom Button should have type submit', () => {
    const wrapper = shallow(<Button type='submit'/>);
    expect(wrapper.prop('type')).toBe('submit');
  });

  it('Custom Button should have Text Submit', () => {
    const wrapper = shallow(<Button type='submit'>Submit</Button>);
    expect(toJson(wrapper).children[0]).toBe('Submit');
  });

  it('Custom Button should button type', () => {
    const wrapper = shallow(<Button type='submit'>Submit</Button>);
    expect(wrapper.type()).toBe('button');
  });

  it('DivButton should be rendered', () => {
    TestRenderer.act(() => {
      component = TestRenderer.create(
        <DivButton />
      );
    });
    expect(component.root).toBeDefined();
  })

  it('DivButton should be div type', () => {
    const wrapper = shallow(<DivButton type='submit'>Submit</DivButton>);
    expect(wrapper.type()).toBe('div');
  });
});
