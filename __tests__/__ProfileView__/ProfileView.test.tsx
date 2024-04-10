import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ProfileView from '../../src/screens/ProfileView/ProfileView';

describe('<ProfileView />', () => {
  test('renders user name and email correctly', () => {
    const { getByTestId, getByText } = render(<ProfileView navigation={{}} />);
    const nameElement = getByTestId('name');
    const emailElement = getByTestId('email');
    expect(nameElement).toBeTruthy();
    expect(emailElement).toBeTruthy();
    expect(getByText('John Doe')).toBeTruthy(); // Change 'John Doe' if user data changes
    expect(getByText('john.doe@example.com')).toBeTruthy(); // Change email if user data changes
  });

  test('navigates to ProfileEdit screen when Edit Profile button is pressed', () => {
    const navigationMock = { navigate: jest.fn() };
    const { getByTestId } = render(<ProfileView navigation={navigationMock} />);
    const editButton = getByTestId('button');
    fireEvent.press(editButton);
    expect(navigationMock.navigate).toHaveBeenCalledWith('ProfileEdit', { user: { name: 'John Doe', email: 'john.doe@example.com', profileIcon: 'user-large' } });
    // Modify the expectation above if the user data structure changes
  });
});
function expect(emailElement: any) {
    throw new Error('Function not implemented.');
}

