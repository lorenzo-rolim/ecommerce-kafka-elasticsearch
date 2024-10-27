import { STATUS_CODES } from "./status-codes";

class BaseError extends Error {
    public readonly name: string;
    public readonly status: number;
    public readonly message: string;

    constructor(name: string, status: number, description: string) {
        super(description);
        this.name = name;
        this.status = status;
        this.message = description;
        Object.setPrototypeOf(this, new.target.prototype);
        Error.captureStackTrace(this);
    }
}

// 500 Internal error
export class APIError extends BaseError {
    constructor(description = "api error") {
        super(
            "api internal server error",
            STATUS_CODES.INTERNAL_ERROR,
            description
        )
    }
}

// 400 Internal error
export class ValidationError extends BaseError {
    constructor(description = "bad request") {
        super(
            "bad request",
            STATUS_CODES.INTERNAL_ERROR,
            description
        )
    }
}

// 403 Internal error
export class AuthorizeError extends BaseError {
    constructor(description = "access denied") {
        super(
            "access denied",
            STATUS_CODES.UNAUTHORIZED,
            description
        )
    }
}

// 404 Internal error
export class NotFoundError extends BaseError {
    constructor(description = "Not found") {
        super(
            "Not found",
            STATUS_CODES.NOT_FOUND,
            description
        )
    }
}