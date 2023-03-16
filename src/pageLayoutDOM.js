import projectButtonCreator from './projectButtonCreator';
import { projects, selectProject } from './projects';

export default function createPageLayout() {
  const createHeader = () => {
    const HeaderContainer = document.createElement('div');
    HeaderContainer.classList.add('headerContainer');
    document.body.appendChild(HeaderContainer);

    const header = document.createElement('h2');
    header.classList.add('header');
    header.innerText = 'Todo List';
    HeaderContainer.appendChild(header);
  };

  createHeader();

  // main.js

  const createMain = () => {
    const main = document.createElement('div');
    main.classList.add('main');
    document.body.appendChild(main);

    const createMainContent = () => {
      const projectContainer = document.createElement('div');
      projectContainer.classList.add('projectsContainer');
      main.appendChild(projectContainer);

      const tasksContainer = document.createElement('div');
      tasksContainer.classList.add('tasksContainer');
      main.appendChild(tasksContainer);

      projectButtonCreator(projects, selectProject, projectContainer);
    };

    createMainContent();
  };

  createMain();

  const createFooter = () => {
    const footerContainer = document.createElement('div');
    footerContainer.classList.add('footerContainer');
    document.body.appendChild(footerContainer);

    const footer = document.createElement('footer');
    footer.classList.add('footer');
    footerContainer.appendChild(footer);
  };

  createFooter();
}
