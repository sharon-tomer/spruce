import React from 'react';
import ReactDOM from 'react-dom';
import ResultsTab from './ResultsTab';
import Result from '../result/Result';
import Enzyme, {shallow} from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

let someRawResults = [
  { 
    images: {
      preview_gif: {
        url: 'some_url'
      }
    }, 
    id: 123
  }, 
  { 
    images: {
      preview_gif: {
        url: 'some_other_url'
      }
    }, 
    id: 124
}];

let someErrorMessage = 'some error msg';

describe('<ResultsTab />', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ResultsTab results={someRawResults}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders two <Result /> components', () => {
    const wrapper = shallow(<ResultsTab results={someRawResults}/>);
    expect(wrapper.find(Result)).to.have.lengthOf(2);
  });

  it('handles erroneous results', () => {
    const wrapper = shallow(<ResultsTab results={{err: someErrorMessage}}/>);
    const expectedPrompt = 'Error occurred while fetching the gifs';
    expect(wrapper.text()).to.contain(expectedPrompt);
    expect(wrapper.text()).to.contain(someErrorMessage);
    expect(wrapper.find(Result)).to.have.lengthOf(0);
  });
});

