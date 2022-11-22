module.exports = {
    mongodb: {
        DATABASE_URI: process.env.DATABASE_URI,
    },
    token: {
        TOKEN_EXPIRE_TIME: 86400,
    },
    secretKey: {
        JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
    },
    statusMessage: {
        PERMISSION_DENIED: "PERMISSION_DENIED",
        BAD_REQUEST: "BAD_REQUEST",
        USER_NOT_FOUND: "USER_NOT_FOUND",
        USER_ALREADY_EXIST: "USER_ALREADY_EXIST",
        INVALID_USERNAME_OR_PASSWORD: "INVALID_USERNAME_OR_PASSWORD",
        INVALID_PHONE_NUMBER: "INVALID_PHONE_NUMBER",
        INVALID_PASSWORD: "INVALID_PASSWORD",
        CONNECTION_ERROR: "CONNECTION_ERROR",
        TOKEN_EXPIRED: "TOKEN_EXPIRED",
    },
    role: {
        ADMIN_ROLE: "ADMIN",
        STAFF_ROLE: "STAFF",
        CUSTOMER_ROLE: "CUSTOMER",
    }
}
