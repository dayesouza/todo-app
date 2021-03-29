import { shallow } from 'enzyme';
import Tabs from './Tabs';

const setup = () => {
  return shallow(<Tabs />);
}
test('renders without errors', () => {
  const wrapper = setup();
  const tabs = wrapper.find('.tabs');
  expect(tabs).toHaveLength(1);
});
