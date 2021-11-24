export const currentUser = {
  name: '',
  levelOfEnglish: '',
  teacher: ''
};

export const changeLevelOfEnglish = (level: string) => currentUser.levelOfEnglish = level;
