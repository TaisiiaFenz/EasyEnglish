export interface User {
  name: string,
  surname: string,
  role: string,
  login: string,
  password: string
}

export interface Task {
  id?: number,
  status?: string,
  studentAnswers?: number[],
  taskTitle: string,
  taskInfo: string,
  tests: Test[],
  isOpen?: boolean
}

export interface Test {
  question: string,
  answers: Answer[]
}

export interface Answer {
  option: string,
  correct: boolean
}

export interface proUser {
  key?: string,
  user: User,
  teacher?: proUser,
  students?: proUser[],
  levelOfEnglish?: string,
  tasks?: Task[];
}
