module.exports = {
    // https://www.i18next.com/overview/configuration-options#logging
    debug: process.env.NODE_ENV === 'development',
    i18n: {
        locales: ['en-US', 'es'],
        // This is the default locale you want to be used when visiting a non-locale prefixed path e.g. `/hello`
        defaultLocale: 'en-US',
        //defaultLocale: 'default',
        // The automatic locale detection can be disabled with:
        // localeDetection: false,
    },
    /** To avoid issues when deploying to some paas (vercel...) */
    // localePath:
    //     typeof window === 'undefined'
    //         ? require('path').resolve('./public/locales')
    //         : '/locales',
}