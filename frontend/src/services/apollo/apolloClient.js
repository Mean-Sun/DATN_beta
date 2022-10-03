import {
  ApolloClient, ApolloLink, HttpLink, InMemoryCache,
} from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';
import _ from 'lodash';

// import CONFIG from '../config';
import { useDispatch } from 'react-redux';
import { EMITTER_CONSTANTS } from '../../constants';
import { toastrError } from '../../utils/toastNotification';
import emitter from '../../utils/eventEmitter';

const { localStorage } = global.window;

const cache = new InMemoryCache({ addTypename: false });
const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
};

const createClient = async (isUsingCache = false, defaultToken) => {
  const token = defaultToken;

  const authLink = setContext((_, { headers }) => ({
    headers: {
      ...headers,
      'access-token': token,
    },
  }));
  return new ApolloClient({
    link: authLink.concat(
      ApolloLink.from([
        onError(({
          graphQLErrors, networkError, response, operation, forward,
        }) => {
          if (graphQLErrors) {
            _.map(graphQLErrors, ({ message, extensions }) => {
              if (_.includes(message, '403') || _.includes(message, '400') || extensions.code === 'UNAUTHENTICATED') {
                console.log('apollo bad request!');
              }
            });
          } else if (networkError) {
            console.log(`[Network error]: ${networkError}`);
            toastrError('Please check your network connection and try again', 'Network error');
          }
        }),
        new HttpLink({
          uri: 'https://gateway.delta.bioheart.bioflux.io/',
          credentials: 'same-origin',
        }),
      ]),
    ),
    // *: name & version variables use for statistic purpose
    name: 'NAME_PROJECT',
    version: '0.5.2',
    cache,
    defaultOptions: isUsingCache ? undefined : defaultOptions,
  });
};

// const createUploadClient = (isUsingCache = false) => {
//   const uploadLink = createUploadLink({ uri: 'https://gateway.delta.bioheart.bioflux.io/' });
//   const { token } = localStorage;
//   if (!token) {
//     console.log('Missing token');
//     return null;
//   }
//   const authLink = setContext((_, { headers }) => ({
//     headers: {
//       ...headers,
//       'access-token': token,
//     },
//   }));
//   const uploadClient = new ApolloClient({
//     link: authLink.concat(uploadLink),
//     // *: name & version variables use for statistic purpose
//     name: 'NAME_PROJECT',
//     version: '0.5.2',
//     cache,
//     defaultOptions: isUsingCache ? undefined : defaultOptions,
//   });

//   return uploadClient;
// };

// export { createUploadClient };

export default createClient;
