import {proUser} from "./types";

export let users: proUser[] = [
  {
    user: {
      name: "Taya",
      surname: 'Fenz',
      role: 'Student',
      login: 't@f',
      password: '123'
    },
    levelOfEnglish: 'B1'
  },
  {
    user: {
      name: "Alica",
      surname: 'Fiar',
      role: 'Student',
      login: 't@fia',
      password: '123'
    },
    levelOfEnglish: 'A2'
  },
  {
    user: {
      name: 'T',
      surname: 'F',
      role: 'Teacher',
      login: 'ta@fe',
      password: '123'
    }
  }
];

export let currentUser: proUser[] = [
    {
    user: {
      name: 'T',
      surname: 'F',
      role: 'Teacher',
      login: 't@f',
      password: '123'
    }
  }
];

//export const changeLevelOfEnglish = (level: string) => currentUser.levelOfEnglish = level;
