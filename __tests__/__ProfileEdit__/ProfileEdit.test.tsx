import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ProfileEdit from '../../src/screens/ProfileEdit/ProfileEdit';

// Mocking navigation hook
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

describe('<ProfileEdit />', () => {
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    profileIcon: 'user-icon',
  };

  it('renders correctly', () => {
    const { getByTestId, getByPlaceholderText } = render(
      <ProfileEdit route={{ params: { user } }} />
    );

    expect(getByTestId('profileImage')).toBeDefined();
    expect(getByPlaceholderText('Name')).toBeDefined();
    expect(getByPlaceholderText('Email')).toBeDefined();
    expect(getByTestId('button')).toBeDefined();
  });

  it('updates name and email when typing', () => {
    const { getByTestId } = render(<ProfileEdit route={{ params: { user } }} />);
    const nameInput = getByTestId('name');
    const emailInput = getByTestId('email');

    fireEvent.changeText(nameInput, 'Jane Doe');
    fireEvent.changeText(emailInput, 'jane@example.com');

    expect(nameInput.props.value).toBe('Jane Doe');
    expect(emailInput.props.value).toBe('jane@example.com');
  });

  it('calls handleProfileIconChange when profile image is pressed', () => {
    const handleProfileIconChange = jest.fn();
    const { getByTestId } = render(
      <ProfileEdit route={{ params: { user } }} handleProfileIconChange={handleProfileIconChange} />
    );
    const profileImage = getByTestId('profileImage');

    fireEvent.press(profileImage);

    expect(handleProfileIconChange).toHaveBeenCalledWith('newIconName');
  });

  it('calls handleUpdateProfile when update button is pressed', () => {
    const handleUpdateProfile = jest.fn();
    const { getByTestId } = render(
      <ProfileEdit route={{ params: { user } }} handleUpdateProfile={handleUpdateProfile} />
    );
    const updateButton = getByTestId('button');

    fireEvent.press(updateButton);

    expect(handleUpdateProfile).toHaveBeenCalled();
  });

  it('navigates to ProfileView with updated user when update button is pressed', () => {
    const { getByTestId } = render(<ProfileEdit route={{ params: { user } }} />);
    const updateButton = getByTestId('button');

    fireEvent.press(updateButton);

    // Assuming navigation is mocked
    expect(navigation.navigate).toHaveBeenCalledWith('ProfileView', { updatedUser: user });
  });
});
function expect(handleProfileIconChange: any) {
    throw new Error('Function not implemented.');
}

