/*
 * Copyright (c) 2019, No Doubt Showcase, llc. All rights reserved.
 */

"use strict";

/**
 * @brief
 *
 * @author Robert R Murrell
 */
class ValidationError {
    /**
     * @brief
     *
     * @param {string} message
     * @param {string} tag
     * @param {number} code
     */
    constructor(message, tag, code = 400) {
        this._message = message;
        this._tag     = tag;
        this._code    = code;
    }

    get message() {
        return this._message;
    }

    get tag() {
        return this._tag;
    }

    get code() {
        return this._code;
    }

    toString() {
        return "[" + this._code + "][" + this._tag + "]: " + this._message;
    }
}

module.exports = {
    ValidationError: ValidationError
};