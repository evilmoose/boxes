import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import BoxList from './BoxList'; // Adjust the import path according to your file structure

describe('BoxList', () => {
  it('renders without crashing', () => {
    render(<BoxList />);
  });

  it('renders correctly and matches snapshot', () => {
    const tree = renderer.create(<BoxList />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
