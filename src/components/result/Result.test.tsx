import React from 'react';
import ReactDOM from 'react-dom';
import Result from './Result';
import Enzyme, {shallow} from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


describe('<Result />', () => {
  const someGifSrcUrl = 'some_url.com'
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Result src={someGifSrcUrl} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders an image with the correct src />', () => {
    const wrapper = shallow(<Result src={someGifSrcUrl} />);
    expect(wrapper.find('img').prop('src')).to.equal(someGifSrcUrl);
  });
});

