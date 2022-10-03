import createClient from '../apolloClient';
import ME_QUERY from '../queries/me';

const fetchMe = async () => {
  const client = await createClient();

  const result = await client.query({
    query: ME_QUERY,
  });
  const { data, error } = result;
  if (error) {
    throw error;
  }
  const { me } = data;
  return me;
};

export default fetchMe;
