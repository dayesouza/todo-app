import { shallow } from 'enzyme';
import App from './App';

const setup = () => {
  return shallow(<App />);
}

test('render app without error', () => {
  const wrapper = setup();
  const app = wrapper.find('.app');
  expect(app).toHaveLength(1);
})

test('renders title', () => {
  const wrapper = setup();
  const title = wrapper.find('#title');
  expect(title).toHaveLength(1);
})