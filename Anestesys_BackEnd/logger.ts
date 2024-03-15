import winston from 'winston';
import "dotenv/config";

const logFilePath = `${process.env.RUTA_LOG}`;

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: logFilePath })
  ],
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.simple()
  )
});

export default logger;