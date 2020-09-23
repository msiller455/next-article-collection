import gql from 'graphql-tag'

export const GET_ALL_ARTICLES = gql`
    query Articles {
        articleCollection {
            items {
                tag
                title
                image {
                    url
                    description
                }
                # author {
                #     authorName
                #     role
                # }
                publishDate
            }
        }
    }
`