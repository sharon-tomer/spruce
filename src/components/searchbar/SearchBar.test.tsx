import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<SearchBar />', () => {
  const onSubmitMock = (someString: any) => {
    return null;
  };


  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<SearchBar onSubmit={onSubmitMock}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('holds user input at state', () => {
    const wrapper = shallow(<SearchBar onSubmit={onSubmitMock}/>);
    const someInput = 'some input';

    wrapper.find('input').at(0).simulate('change', { target: { value: someInput } });
    expect(wrapper.state('searchTerm')).toEqual(someInput);
  });


  it('submits search term', async () => {
    // todo
  });
});

