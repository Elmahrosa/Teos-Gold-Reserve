export const displayProfilePhoto = (user) => {
  return `<img src="${user.photoUrl}" alt="${user.name}'s profile" class="civic-profile">`;
};
