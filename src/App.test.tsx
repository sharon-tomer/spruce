import React from 'react';
import ReactDOM from 'react-dom';
import ResultsTab from './components/resultsTab/ResultsTab';
import SearchBar from './components/searchbar/SearchBar';
import App from './App';
import Enzyme, {shallow} from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders a <SearchBar />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(SearchBar)).to.have.lengthOf(1);
  });

  it('renders a <ResultsTab />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(ResultsTab)).to.have.lengthOf(1);
  }); 
});

