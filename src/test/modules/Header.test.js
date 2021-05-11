import Header from '../../modules/Header';
import TestRenderer from 'react-test-renderer';
import { TestComponentContainer } from '../__testUtils__/TestComponentContainer';
import { getTestStore } from '../__testUtils__/TestInitialStore';

describe('Header.component', () => {
  let store;
  let component;

  beforeEach(() => {
    store = getTestStore({});

    TestRenderer.act(() => {
      component = TestRenderer.create(
        <TestComponentContainer store={store}>
          <Header />
        </TestComponentContainer>
      );
    });

  });

  afterEach(() => {
    store.clearActions();
    jest.clearAllMocks();
  });

  it('should be rendered', () => {
    expect(component.root).toBeDefined();
  });
});
