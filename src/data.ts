import {Answer, proUser, Task} from "./types";

let customTask: Task = {
  taskTitle: 'Articles',
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
    },
    tasks: [customTask]
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
    },
      tasks: [customTask]
  }
];
