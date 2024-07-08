// TODO: Remove these polyfills once the below issue is solved.
// It present here to allow Jest work with the last React environment.
// https://github.com/facebookincubator/create-react-app/issues/3199#issuecomment-332842582
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

global.requestAnimationFrame = (cb) => {
  setTimeout(cb, 0);
};

if (typeof window !== 'undefined') {
  global.matchMedia =
    window.matchMedia
    || function () {
      return {
        matches: false,
        addListener: () => {},
        removeListener: () => {}
      };
    };
}

Enzyme.configure({ adapter: new Adapter() });
