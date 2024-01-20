module.exports = {
    debug: process.env.NODE_ENV === 'development',
    i18n: {
        locales: ['en-US', 'es'],
        defaultLocale: 'en-US',
        //defaultLocale: 'default',
        // localeDetection: false,
    },
    /** To avoid issues when deploying to some paas (vercel...) */
    // localePath:
    //     typeof window === 'undefined'
    //         ? require('path').resolve('./public/locales')
    //         : '/locales',
}