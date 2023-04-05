async function fetchSearch({ queryKey }) {
  const { animal, location, breed } = queryKey[1];

  const resApi = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );

  if (!resApi.ok) {
    throw new Error(`fetchSearch/${animal}-${location}-${breed} fetch not ok`);
  }

  return resApi.json();
}

export default fetchSearch;
