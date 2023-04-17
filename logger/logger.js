import pino from 'pino';

const logger = pino({
    level: process.env.NEXT_PUBLIC_PINO_LOG_LEVEL,
    timestamp: pino.stdTimeFunctions.isoTime,
});

export default logger