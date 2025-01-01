import renderer from 'react-test-renderer';
import {test,expect} from '@jest/globals';
import { ErrorInfoModal } from "~components";



test('renders correctly', () => {
    const tree = renderer.create(<ErrorInfoModal isModalVisible={true} handleModalDismiss={()=>{}} />).toJSON();
    expect(tree).toMatchSnapshot();
});
