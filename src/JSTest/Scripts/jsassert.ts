class assert {
    public static fail(message?: string) {
        throw message || "assert.fail.";
    }
    public static isTrue(expression: boolean, message?: string) {
        if (!expression) {
            throw message || "assert.isTrue failed.";
        }
    }

    public static isFalse(expression: boolean, message?: string) {
        if (expression) {
            throw message || "assert.isFalse failed.";
        }
    }

    public static isNull(actual: any, message?: string) {
        if (actual !== null) {
            throw message || "assert.isNull failed.";
        }
    }

    public static isNotNull(actual: any, message?: string) {
        if (actual === null) {
            throw message || "assert.isNotNull failed.";
        }
    }

    public static isUndefined(actual: any, message?: string) {
        if (actual !== undefined) {
            throw message || "assert.isUndefined failed.";
        }
    }

    public static isNotUndefined(actual: any, message?: string) {
        if (actual === undefined) {
            throw message || "assert.isNotUndefined failed.";
        }
    }

    public static equal(expected: any, actual: any, message?: string) {
        if (expected !== actual && JSON.stringify(expected) !== JSON.stringify(actual)) {
            throw message || "assert.equal failed. Expected <" + JSON.stringify(expected) + ">. Actual <" + JSON.stringify(actual) + ">.";
        }
    }

    public static notEqual(notExpected: any, actual: any, message?: string) {
        if (notExpected === actual || JSON.stringify(notExpected) === JSON.stringify(actual)) {
            throw message || "assert.notEqual failed. Expected any value except <" + JSON.stringify(notExpected) + ">. Actual <" + JSON.stringify(actual) + ">.";
        }
    }

    public static throws(expected: any, action: any, message?: string) {
        var exceptionNotThrown = false;
        try {
            action();

            exceptionNotThrown = true;
        }
        catch (ex) {
            if (JSON.stringify(ex) !== JSON.stringify(expected)) {
                throw message || "assert.throws failed. Expected <" + JSON.stringify(expected) + ">. Actual <" + JSON.stringify(ex) + ">.";
            }
        }

        if (exceptionNotThrown) {
            throw message || "assert.throws failed. No exception was thrown.";
        }
    }
}