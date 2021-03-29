import { shallow } from 'enzyme';
import Footer from './Footer';

const setup = () => {
  return shallow(<Footer />);
}

test('renders without error', () => {
  const wrapper = setup();
  const footer = wrapper.find('.footer');
  expect(footer).toHaveLength(1);
})

test('renders name in footer without error', () => {
  const wrapper = setup();
  const name = wrapper.find('.footer__name');
  expect(name).toHaveLength(1);
})