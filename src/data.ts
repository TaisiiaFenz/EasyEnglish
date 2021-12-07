import {Answer, proUser, Task} from "./types";

let customTask1: Task = {
  //status: 'TO DO',
  // studentAnswers: [1, 1, 1],
  taskTitle: 'Using have',
  taskInfo: "The verb have has the forms:" +
    " have, has, having, had. The base form of the verb is have." +
    " The present participle is having. The past tense and past participle form is had.",
  tests: [
    {
    question: "These people __ a lot in common.",
    answers: [
      {
        option: "had",
        correct: false
      },
      {
        option: "have",
        correct: true
      },
      {
        option: "has",
        correct: false
      }
    ]
  },
    {
      question: "__ a good day!",
      answers: [
        {
          option: "had",
          correct: false
        },
        {
          option: "has",
          correct: false
        },
        {
          option: "have",
          correct: true
        }
      ]
    },
    {
      question: "I __ a bad feeling about it.",
      answers: [
        {
          option: "had",
          correct: true
        },
        {
          option: "will have",
          correct: false
        },
        {
          option: "have",
          correct: false
        }
      ]
    }
  ]
};

let customTask2: Task = {
  //status: 'TO DO',
  // studentAnswers: [1, 1, 1],
  taskTitle: 'Past Simple',
  taskInfo: "The past simple shows us that an action was in the past," +
    " not in the present. Regular past simple verbs have -ed at the end" +
    " (e.g. called, played, arrived). Irregular verbs have a different form," +
    " usually with a different vowel sound (e.g. wake → woke, break → broke, feel → felt).",
  tests: [
    {
      question: "I (to invite) __ your friend to the party.",
      answers: [
        {
          option: "invited",
          correct: true
        },
        {
          option: "invite",
          correct: false
        },
        {
          option: "had invited",
          correct: false
        }
      ]
    },
    {
      question: "Paul (to find) __ a good and inexpensive hotel.",
      answers: [
        {
          option: "finds",
          correct: false
        },
        {
          option: "finded",
          correct: false
        },
        {
          option: "found",
          correct: true
        }
      ]
    },
    {
      question: "We (to understand) __ each other.",
      answers: [
        {
          option: "understanded",
          correct: false
        },
        {
          option: "understood",
          correct: true
        },
        {
          option: "understand",
          correct: false
        }
      ]
    }
  ]
};

let myTask: Task = {
  status: "TO DO",
  taskTitle: 'Past Simple',
  taskInfo: "The past simple shows us that an action was in the past," +
    " not in the present. Regular past simple verbs have -ed at the end" +
    " (e.g. called, played, arrived). Irregular verbs have a different form," +
    " usually with a different vowel sound (e.g. wake → woke, break → broke, feel → felt).",
  tests: [
    {
      question: "I (to invite) __ your friend to the party.",
      answers: [
        {
          option: "invited",
          correct: true
        },
        {
          option: "invite",
          correct: false
        },
        {
          option: "had invited",
          correct: false
        }
      ]
    },
    {
      question: "Paul (to find) __ a good and inexpensive hotel.",
      answers: [
        {
          option: "finds",
          correct: false
        },
        {
          option: "finded",
          correct: false
        },
        {
          option: "found",
          correct: true
        }
      ]
    },
    {
      question: "We (to understand) __ each other.",
      answers: [
        {
          option: "understanded",
          correct: false
        },
        {
          option: "understood",
          correct: true
        },
        {
          option: "understand",
          correct: false
        }
      ]
    }
  ]
};

export let teacher1: proUser = {
  user: {
    name: 'Bob',
    surname: 'Marley',
    role: 'Teacher',
    login: 'bob@gmail.com',
    password: '123'
  },
  tasks: [customTask1],
};

export let user1: proUser =  {
  user: {
    name: "Taya",
    surname: 'Fenz',
    role: 'Student',
    login: 'taya@gmail.com',
    password: '123'
  },
  levelOfEnglish: 'B1',
  tasks: [myTask],
  teacher: teacher1
};

export let teacher2: proUser = {
  user: {
    name: 'Bob',
    surname: 'Bingo',
    role: 'Teacher',
    login: 'teacher@gmail.com',
    password: '123'
  },
  tasks: [customTask1],
  students: [user1]
};

export let users: proUser[] = [
 user1,
  {
    user: {
      name: "Alica",
      surname: 'Fiar',
      role: 'Student',
      login: 't@gmail.com',
      password: '123'
    },
    levelOfEnglish: 'A2'
  },
 teacher1,
  teacher2
];

export let currentUser: proUser[] = [
  //   {
  //     user: {
  //     name: 'T',
  //     surname: 'F',
  //     role: 'Teacher',
  //     login: 't@f',
  //     password: '123'
  //   },
  //     students: [users[0], users[1]],
  //     tasks: [customTask]
  // }
];
