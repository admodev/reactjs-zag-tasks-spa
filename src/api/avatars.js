export const createAvatarByName = (fullname) => {
  try {
    return `https://api.dicebear.com/7.x/initials/svg?seed=${fullname}`;
  } catch (error) {
    console.error(error);

    throw new Error('An unexpected error has happened!');
  }
}