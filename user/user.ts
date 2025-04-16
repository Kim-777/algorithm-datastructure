interface User {
  id: number;
  name: string;
  email: string;
}

export function getUser(id: number): User {
  // ... 기존 로직
}

export function createUser(user: User): void {
  // ... 기존 로직
}
