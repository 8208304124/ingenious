import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import VersionInfo from '../../src/screens/VersionInfo/VersionInfo';
import { ReactTestInstance } from 'react-test-renderer';

describe('<VersionInfo />', () => {
  test('renders correctly', () => {
    const { getByTestId } = render(<VersionInfo />);

    // Ensure all input fields are rendered
    expect(getByTestId('productVersion')).toBeTruthy();
    expect(getByTestId('releaseDate')).toBeTruthy();
    expect(getByTestId('buildNo')).toBeTruthy();
    expect(getByTestId('buildDate')).toBeTruthy();
  });

  test('updates product version state correctly', () => {
    const { getByTestId } = render(<VersionInfo />);
    const productVersionInput = getByTestId('productVersion');

    fireEvent.changeText(productVersionInput, 'New Version');
    expect(productVersionInput.props.value).toBe('New Version');
  });

  test('updates release date state correctly', () => {
    const { getByTestId } = render(<VersionInfo />);
    const releaseDateInput = getByTestId('releaseDate');

    fireEvent.changeText(releaseDateInput, '10-04-2024');
    expect(releaseDateInput.props.value).toBe('10-04-2024');
  });

  test('updates build number state correctly', () => {
    const { getByTestId } = render(<VersionInfo />);
    const buildNoInput = getByTestId('buildNo');

    fireEvent.changeText(buildNoInput, '1.0.0');
    expect(buildNoInput.props.value).toBe('1.0.0');
  });

  test('updates build date state correctly', () => {
    const { getByTestId } = render(<VersionInfo />);
    const buildDateInput = getByTestId('buildDate');

    fireEvent.changeText(buildDateInput, '10-04-2024');
    expect(buildDateInput.props.value).toBe('10-04-2024');
  });
});
function expect(_arg0: ReactTestInstance) {
  throw new Error('Function not implemented.');
}
