import {test,expect,jest} from '@jest/globals';

jest.mock('@react-navigation/native', () => ({
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: jest.fn(),
      goBack: jest.fn(),
    }),
    useRoute: () => ({
      params: {},
    }),
    NavigationContainer: ({ children }) => children, // Mocking NavigationContainer
}));
  

jest.mock('@react-navigation/native-stack', () => ({
    createStackNavigator: jest.fn(() => ({
      Navigator: ({ children }) => children,
      Screen: ({ children }) => children,
    })),
}));

  
jest.mock('~navigation/root', () => {
const MockNavigator = () => <></>;
return MockNavigator;
});



