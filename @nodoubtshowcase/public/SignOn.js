/*
 * Copyright (c) 2019, No Doubt Showcase, llc. All rights reserved.
 */

"use strict";

import {ValidationError} from "./ValidationError";
import validator         from "validator";

/**
 * @brief
 *
 * @author Robert R Murrell
 */
class SignOn {
    /**
     * @brief
     *
     * @param {Object} source
     */
    constructor(source) {
        this.email    = null;
        this.password = null;
        Object.assign(this, source);
    }

    /**
     * @brief
     *
     * @returns {SignOn}
     */
    clone() {
        return SignOn.copy(this);
    }

    /**
     * @brief
     *
     * @returns {string}
     */
    stringify() {
        return JSON.stringify(this);
    }

    /**
     * @brief
     *
     * @param {Object} source
     *
     * @returns {boolean}
     *
     * @private
     */
    static _isObject(source) {
        if(typeof source === "undefined" || source == null)
            return false;
        else {
            if(!source.hasOwnProperty("email"))
                return false;
            return source.hasOwnProperty("password");
        }
    }

    /**
     * @brief
     *
     * @param {Object} source
     *
     * @return {SignOn}
     */
    static copy(source) {
        if(typeof source === "undefined" || source == null)
            throw new Error("source is required.");

        if(!(source instanceof SignOn)) {
            if(SignOn._isObject(source)) {
                if(validator.isEmail(source.email))
                    throw new ValidationError("Password is required.", "SignOn.password");
                if(validator.isEmpty(source.password))
                    throw new ValidationError("Password is required.", "SignOn.password");
            }
            else
                throw new Error("source is not compatible with SignOn.");
        }

        return new SignOn(source);
    }

    /**
     * @brief
     *
     * @param {string} email
     * @param {string} password
     */
    static create(email, password) {
        let source = {
            email:    email,
            password: password
        };

        return SignOn.copy(source);
    }
}