import { gql } from '@apollo/client';

const UPDATE_PROFILE = gql`
  mutation updateProfile($UpdateProfileInput: UpdateProfileInput! ) {
    updateProfile ( input: $UpdateProfileInput) {
      isSuccess,
      message,
      profile{
      _id,
      avatar,
      height,
      weight,
      role,
      birthday,
      dateOfBirth,
      photo,
      isProfileCompleted,
      lastName,
      firstName,
      cognitoId,
      email,
      gender,
      willDeletedAt,
    },
    }
  }
`;
export default UPDATE_PROFILE;
