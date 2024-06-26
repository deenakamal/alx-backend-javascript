import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  return Promise.allSettled([userPromise, photoPromise])
    .then((results) => results.map((result) => {
      if (result.status === 'rejected') {
        return {
          status: result.status,
          value: `Error: ${result.reason.message}`,
        };
      }
      return {
        status: result.status,
        value: result.value,
      };
    }))
    .catch(() => console.log('Signup system offline'));
}
