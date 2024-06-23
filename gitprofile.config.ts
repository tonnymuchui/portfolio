// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'tonnymuchui', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/Portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 6, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: ['tonnymuchui/Portfolio', 'tonnymuchui/tonnymuchui'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          'tonnymuchui/RecipeApp',
          'tonnymuchui/Ecommerce-Android',
          'tonnymuchui/Full-Stack-Ecommerce',
          'tonnymuchui/Ecommerce-Frontend',
          'tonnymuchui/Food-Ordering-Website-Frontend',
          'tonnymuchui/Food-Ordering-Website-Backend',
          'tonnymuchui/Shopping',
        ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        // {
        //   title: 'Project Name',
        //   description:
        //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
        //   imageUrl: 'https://photos.app.goo.gl/2t77KuiQJV5FcSwN8',
        // },
        // {
        //   title: 'Project Name',
        //   description:
        //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
        //   imageUrl:
        //     'https://github.com/tonnymuchui/RecipeApp/blob/development/Spec.md/search.jpg',
        // },
        // {
        //   title: 'Project Name',
        //   description:
        //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
        //   imageUrl: process.env.PUBLIC_URL + '/commerce.png',
        // },
        // {
        //   title: 'Project Name',
        //   description:
        //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
        //   imageUrl:
        //     'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        //   link: 'https://example.com',
        // },
      ],
    },
  },
  seo: {
    title: 'Tonny muchui',
    description: 'This is portfolio of Tonny Muchui',
    imageURL: 'https://photos.app.goo.gl/CezYUDtWy2tzyLx19',
  },
  social: {
    linkedin: 'tonny-muchui',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://github.com/tonnymuchui/Portfolio',
    phone: '+254721270949',
    email: 'tonykanyingah@gmail.com',
  },
  resume: {
    fileUrl:
      'https://docs.google.com/document/d/1SXv2eT8bOKEvzYttmDc904t2c7qQdRhE4smM7a084jc/edit?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Java',
    'Kotlin',
    'SpringBoot MVC',
    'Android',
    'React.js',
    'Redux',
    'Nest.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'TDD',
    'AWS',
    'Domain',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Counter1serve- FinTech',
      position: 'Software Developer',
      from: 'January 2021',
      to: 'December 2021',
      companyLink: 'https://counter1serve.com/',
    },
    {
      company: 'LISHELIVING LTD- HealthCare',
      position: 'Software Developer Internship',
      from: 'January 2019',
      to: 'December 2019',
      companyLink: 'https://www.lisheliving.com/',
    },
  ],
  certifications: [
    {
      name: 'MICROVERSE, USA',
      body: 'Full-Stack Web Development, Full-Time',
      year: 'June 2023',
      link: 'https://www.microverse.org/full-stack-program',
    },
    {
      name: 'Moringa School',
      body: 'Software Engineering/Android Mobile Application Development, Full-Time',
      year: 'December 2018',
      link: 'https://www.microverse.org/full-stack-program',
    },
  ],
  educations: [
    {
      institution: 'JOMO KENYATTA UNIVERSITY OF SCIENCE AND TECHNOLOGY.',
      degree: 'Bachelor of Information Technology',
      from: '2019',
      to: '2022',
    },
    {
      institution: 'Institute of Advanced Technology, Nairobi',
      degree: 'International Computer Driving Licence',
      from: '2018',
      to: '2018',
    },
  ],
  publications: [
    // {
    //   title: 'Publication Title',
    //   conferenceName: '',
    //   journalName: 'Journal Name',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
    // {
    //   title: 'Publication Title',
    //   conferenceName: 'Conference Name',
    //   journalName: '',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
  ],
  // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many articles to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'synthwave',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  enablePWA: false,
};

export default CONFIG;
