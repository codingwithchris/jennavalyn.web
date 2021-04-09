module.exports = {
    siteMetadata: {
        title: 'Jenna Valyn - Website',
        description: 'Speeshy ray',
        siteUrl: process.env.DEPLOY_PRIME_URL,
    },
    plugins: [
        `gatsby-plugin-image`,
        'gatsby-plugin-linaria',

        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/icon.png',
            },
        },

        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-react-helmet`,
    ],
};
