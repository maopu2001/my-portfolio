type ProjectInfoType = {
  techStack: string[];
  coverSrc: string;
  iconSrc: string;
  title: string;
  name: string;
  description: string;
  liveDemo?: string;
  mobileImgSrc?: string[];
  desktopImgSrc?: string[];
};

const questionVault: ProjectInfoType = {
  techStack: ['Next.js', 'Tailwind CSS', 'MongoDB', 'shad-cn', 'JavaScript'],
  coverSrc: '/questionVault/cover.png',
  iconSrc: '/questionVault/logo.png',
  title: 'Question Vault',
  name: 'question-vault',
  description: `A digital repository system for managing and accessing academic exam questions at RMSTU (Rangamati Science and Technology University).`,
  liveDemo: 'https://question-vault-rmstu.vercel.app',
  desktopImgSrc: [
    '/questionVault/desktop1.png',
    '/questionVault/desktop2.png',
    '/questionVault/desktop3.png',
    '/questionVault/desktop4.png',
  ],
  mobileImgSrc: [
    '/questionVault/mobile1.jpg',
    '/questionVault/mobile2.jpg',
    '/questionVault/mobile3.jpg',
    '/questionVault/mobile4.jpg',
    '/questionVault/mobile5.jpg',
  ],
};

const questionVaultApp: ProjectInfoType = {
  techStack: ['Android Studio', 'Java'],
  coverSrc: '/questionVaultApp/cover.jpg',
  iconSrc: '/questionVaultApp/logo.png',
  title: 'Question Vault App',
  name: 'question-vault-app',
  description: `A simple app to search all previous questions of my university and filter them. It's an mobile frontend for the Question Vault website.`,
  liveDemo:
    'https://raw.githubusercontent.com/maopu2001/Question-Vault-Rmstu/refs/heads/master/public/ExamQuestionsRMSTU.apk',
  desktopImgSrc: [
    '/questionVaultApp/mobile1.jpg',
    '/questionVaultApp/mobile2.jpg',
    '/questionVaultApp/mobile3.jpg',
    '/questionVaultApp/mobile4.jpg',
    '/questionVaultApp/mobile5.jpg',
  ],
  mobileImgSrc: [
    '/questionVaultApp/mobile1.jpg',
    '/questionVaultApp/mobile2.jpg',
    '/questionVaultApp/mobile3.jpg',
    '/questionVaultApp/mobile4.jpg',
    '/questionVaultApp/mobile5.jpg',
  ],
};

const wordle: ProjectInfoType = {
  techStack: ['Next.js', 'Tailwind CSS', 'MongoDB', 'shad-cn', 'JavaScript'],
  coverSrc: '/wordle/cover.png',
  iconSrc: '/wordle/logo.svg',
  title: 'Wordle',
  name: 'wordle',
  description: `A clone of the popular game Wordle with it's own dictionary.`,
  liveDemo: 'https://wordle-mygames.vercel.app',
};

const ticTacToe: ProjectInfoType = {
  techStack: ['Next.js', 'Tailwind CSS', 'JavaScript'],
  coverSrc: '/tic-tac-toe/cover.png',
  iconSrc: '/tic-tac-toe/logo.png',
  title: 'Tic Tac Toe',
  name: 'tic-tac-toe',
  description: 'A simple game of tic-tac-toe.',
  liveDemo: 'https://tic-tac-toe-mygames.vercel.app',
};

const projects = [questionVault, questionVaultApp, wordle, ticTacToe];

export default projects;
