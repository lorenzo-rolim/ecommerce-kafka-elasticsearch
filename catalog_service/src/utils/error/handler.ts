import { NextFunction, Request, Response } from "express";
import { AuthorizeError, NotFoundError } from "./errors";
import { ValidationError } from "class-validator";
import { logger } from "../logger";

export const HandleErrorWithLogger = (
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    let reportError = true;
    let status = 500;
    let data = error.message;

    [NotFoundError, ValidationError, AuthorizeError].forEach(
        (typeOfError) => {
            if (error instanceof typeOfError) {
                reportError = false;
                status = error.status;
                data = error.message
            };
        }
    );


    if (reportError) {
        logger.error(error);
    } else {
        logger.warn(error);
    }

    return res.status(status).json(data);
};

export const HandleUncaughtException = async (
    error: Error
) => {
    // error report / monitoring tools
    logger.error(error);
    //recover
    process.exit(1)
}