import { gql } from '@apollo/client';

const GET_ME = gql`
  query me {
    me {
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
    }
  }
`;
export default GET_ME;
