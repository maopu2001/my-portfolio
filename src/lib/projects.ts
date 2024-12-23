type ProjectInfoType = {
  techStack: string[];
  coverSrc: string;
  iconSrc: string;
  title: string;
  name: string;
  description: string;
  about?: string;
};

const questionVault: ProjectInfoType = {
  techStack: ['Next.js', 'Tailwind CSS', 'MongoDB', 'shad-cn', 'JavaScript'],
  coverSrc: '/questionVault/cover.png',
  iconSrc: '/questionVault/logo.png',
  title: 'Question Vault',
  name: 'question-vault',
  description: 'A full stack web app for storing all previous questions of my university.',
  about: 'https://raw.githubusercontent.com/maopu2001/Question-Vault-Rmstu',
};

const questionVaultApp: ProjectInfoType = {
  techStack: ['Android Studio', 'Java'],
  coverSrc: '/questionVaultApp/cover.jpg',
  iconSrc: '/questionVaultApp/logo.png',
  title: 'Question Vault App',
  name: 'question-vault-app',
  description: 'A simple app to search all previous questions of my university and filter them.',
};

const wordle: ProjectInfoType = {
  techStack: ['Next.js', 'Tailwind CSS', 'MongoDB', 'shad-cn', 'JavaScript'],
  coverSrc: '/wordle/cover.png',
  iconSrc: '/wordle/logo.svg',
  title: 'Wordle',
  name: 'wordle',
  description: `A clone of the popular game Wordle with it's own dictionary.`,
};

const ticTacToe: ProjectInfoType = {
  techStack: ['Next.js', 'Tailwind CSS', 'JavaScript'],
  coverSrc: '/tic-tac-toe/cover.png',
  iconSrc: '/tic-tac-toe/logo.png',
  title: 'Tic Tac Toe',
  name: 'tic-tac-toe',
  description: 'A simple game of tic-tac-toe.',
};

const projects = [questionVault, questionVaultApp, wordle, ticTacToe];

export default projects;
