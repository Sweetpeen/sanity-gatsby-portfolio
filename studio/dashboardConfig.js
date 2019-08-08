export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d4c346c72bae5d57b272813',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-mo9a6i6i',
                  apiId: 'd58911a4-26d9-4bc1-a719-3a18a0e9fd3f'
                },
                {
                  buildHookId: '5d4c346c530d01aaa47af3c8',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-gtnygzb5',
                  apiId: '2c81a034-174d-4cad-9333-6cbce1bfe93a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Sweetpeen/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-gtnygzb5.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
