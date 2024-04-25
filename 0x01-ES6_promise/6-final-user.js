import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(
  firstName,
  lastName,
  fileName,
) {
  const response = [];
  try {
    const usr = await signUpUser(firstName, lastName);
    response.push({ status: 'fulfilled', value: usr });
  } catch (err) {
    response.push({
      status: 'rejected',
      value: err.toString(),
    });
  }

  try {
    const upload = await uploadPhoto(fileName);
    response.push({ status: 'fulfilled', value: upload });
  } catch (err) {
    response.push({
      status: 'rejected',
      value: err.toString(),
    });
  }

  return response;
}
