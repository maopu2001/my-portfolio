type ProjectInfoType = {
  techStack: string[];
  coverSrc: string;
  iconSrc: string;
  projectName: string;
  projectDescription: string;
};

const questionVault: ProjectInfoType = {
  techStack: ['Next.js', 'Tailwind CSS', 'MongoDB', 'shad-cn', 'JavaScript'],
  coverSrc: '/questionVault/cover.png',
  iconSrc: '/questionVault/logo.png',
  projectName: 'Question Vault',
  projectDescription: 'A full stack web app for storing all previous questions of the university.',
};

const questionVaultApp: ProjectInfoType = {
  techStack: ['Android Studio', 'Java'],
  coverSrc: '/questionVaultApp/cover.jpg',
  iconSrc: '/questionVaultApp/logo.png',
  projectName: 'Question Vault App',
  projectDescription: 'A simple app to search all previous questions of the university and filter them.',
};

const wordle: ProjectInfoType = {
  techStack: ['Next.js', 'Tailwind CSS', 'MongoDB', 'shad-cn', 'JavaScript'],
  coverSrc: '/wordle/cover.png',
  iconSrc: '/wordle/logo.svg',
  projectName: 'Wordle',
  projectDescription: `A clone of the popular game Wordle with it's own dictionary`,
};

const ticTacToe: ProjectInfoType = {
  techStack: ['Next.js', 'Tailwind CSS', 'JavaScript'],
  coverSrc: '/tic-tac-toe/cover.png',
  iconSrc: '/tic-tac-toe/logo.png',
  projectName: 'Tic Tac Toe',
  projectDescription: 'A simple game of tic-tac-toe',
};

const projects = [questionVault, questionVaultApp, wordle, ticTacToe];

export default projects;
