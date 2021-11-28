export interface User {
  name: string,
  surname: string,
  role: string,
  login: string,
  password: string
}

export interface Task {
  question: string,
  answers: Answer[]
}

export interface Answer {
  option: string,
  correct: boolean
}

export interface proUser {
  user: User,
  teacher?: proUser,
  students?: proUser[],
  levelOfEnglish?: string,
  tasks?: Task[];
}
