import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Box from './Box'; // Adjust the import path according to your file structure

describe('Box', () => {
  it('renders without crashing', () => {
    const handleRemove = jest.fn();
    const { getByText } = render(<Box id="test-box" handleRemove={handleRemove} />);

    // Check if the button renders correctly
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByText(/remove the box!/i)).toBeInTheDocument();
  });

  it('calls handleRemove on button click', () => {
    const handleRemove = jest.fn();
    const { getByText } = render(<Box id="test-box" handleRemove={handleRemove} />);
    
    // Simulate button click
    // eslint-disable-next-line testing-library/prefer-screen-queries
    fireEvent.click(getByText(/remove the box!/i));

    // Check if handleRemove was called
    expect(handleRemove).toHaveBeenCalledWith("test-box");
  });

  it('renders correctly', () => {
    const handleRemove = jest.fn(); // Mock function for handleRemove prop
    const tree = renderer
      .create(<Box id="test-box" handleRemove={handleRemove} width={5} height={5} backgroundColor="blue" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
