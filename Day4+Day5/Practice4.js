//1. Predict Output
try { throw new Error('oops') } catch(e) {
console.log(e.message, e instanceof Error)
} finally { console.log('done') }

/*oops true
done*/


//2. Predict Output 
try { null.x } catch(e) { console.log(e.constructor.name) }

//Output - TypeError

//3. Predict output
try {
try { throw 42 }
finally { console.log('inner') }
} catch(e) { console.log('caught', e) }
finally { console.log('outer') }

/* Output - inner
caught 42
outer */


//4. Predict Output
function f() { try { return 1 } finally { return 2 } }
console.log(f())

//Output - 2

//5. Predict Output 
async function go() {
try { await Promise.reject('bad') }
catch(e) { console.log(e) }
finally { console.log('fin') }
}
go()

/* Output - bad 
fin */

//6. Predict Output
try { undeclaredVar } catch(e) { console.log(e.constructor.name) }

//Output - ReferenceError


//7.Predict Output
class AppError extends Error {
constructor(msg, code) { super(msg); this.code = code }
}
try { throw new AppError('fail', 404) }
catch(e) { console.log(e.message, e.code, e instanceof Error) }

//Output - fail 404 true


//8. Predict Output
try { JSON.parse('{bad}') } catch(e) { console.log(e instanceof SyntaxError) }

//Output = True


//9. Predict Output
Promise.resolve()
.then(() => { throw new Error('p') })
.catch(e => console.log('c', e.message));
try { throw new Error('s') } catch(e) { console.log('s', e.message) }

/* Output - s s                                       
c p  */


//10. Predict Output 
const obj = {};
obj.foo.bar;

//Type Error


/*11.ValidationError, NetworkError, aur AuthError class banao
Teeno Error se extend hon. Alag name aur extra property: field, statusCode, userId.
Phir handle(err) function banao jo instanceof se sahi type detect kare.*/

class ValidationError extends Error {
    constructor(field) {
        super();
        this.field = field;
    }
}

class NetworkError extends Error {
    constructor(statusCode) {
        super();
        this.statusCode = statusCode;
    }
}

class AuthError extends Error {
    constructor(userId) {
        super();
        this.userId = userId;
    }
}

function handle(err) {
    if (err instanceof ValidationError) console.log(err.field);
    else if (err instanceof NetworkError) console.log(err.statusCode);
    else if (err instanceof AuthError) console.log(err.userId);
}

handle(new ValidationError("email"));
handle(new NetworkError(500));
handle(new AuthError(101));


/*12. safeDiv(a, b) function banao
b===0 par custom DivisionByZeroError throw karo.
Proper try/catch — error message console mein print ho.*/
class DivisionByZeroError extends Error {
    constructor() {
        super("Cannot divide by zero");
    }
}

function safeDiv(a, b) {
    if (b === 0) {
        throw new DivisionByZeroError();
    }
    return a / b;
}

try {
    console.log(safeDiv(10, 0));
} catch (err) {
    console.log(err.message);
}


/*13. retry(fn, times) — async retry function banao
fn ko times baar retry kare. Har attempt pe error log ho.
Sab fail ho jaayein toh custom MaxRetriesError throw karo with attempt count.*/

class MaxRetriesError extends Error {
    constructor(attempts) {
        super(`Failed after ${attempts} attempts`);
    }
}

async function retry(fn, times) {
    for (let i = 1; i <= times; i++) {
        try {
            return await fn();
        } catch (err) {
            console.log(`Attempt ${i} failed`);
        }
    }
    throw new MaxRetriesError(times);
}

// 14. ES Modules Project 

// mathUtils.js

export function add(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}

export function mul(a, b) {
    return a * b;
}

export function div(a, b) {
    if (b === 0) throw new Error("Cannot divide by zero");
    return a / b;
}
// main.js

import { add, sub, mul, div } from "./mathUtils.js";

console.log(add(10, 5));
console.log(sub(10, 5));
console.log(mul(10, 5));
console.log(div(10, 2));


//15. CommonJS Logger Module
// logger.js
function log(level, msg) {
    console.log(level + ": " + msg);
}

module.exports = log;
// app.js
const log = require("./logger");

log("INFO", "Server Started");




/*16.Dynamic import() se plugin loader banao
loadPlugin(name) function jo runtime par ./plugins/${name}.js load kare.
Plugin exist nahi kare toh custom PluginNotFoundError with plugin name*/ 

class PluginNotFoundError extends Error {
    constructor(name) {
        super("Plugin not found: " + name);
    }
}

async function loadPlugin(name) {
    try {
        return await import(`./plugins/${name}.js`);
    } catch {
        throw new PluginNotFoundError(name);
    }
}

// Test
loadPlugin("auth")
    .then(plugin => console.log("Loaded"))
    .catch(err => console.log(err.message));


// 17. config.js with Default Export
// config.js

export default {
    env: "development",
    port: 3000,
    dbUrl: "mongodb://localhost"
};
// main.js

import config from "./config.js";

if (!config.env || !config.port || !config.dbUrl) {
    throw new Error("Config value missing");
}

console.log(config.env);
console.log(config.port);
console.log(config.dbUrl);


/*18. errorBoundary(fn) higher-order function banao
fn throw kare → { ok: false, error: e.message }
fn succeed kare → { ok: true, data: result }
Sync aur async dono handle kare.
*/ 
function errorBoundary(fn) {
    return async (...args) => {
        try {
            const result = await fn(...args);
            return { ok: true, data: result };
        } catch (e) {
            return { ok: false, error: e.message };
        }
    };
}

// 19. Barrel Export
// stringUtils.js
export function upper(str) {
    return str.toUpperCase();
}
// arrayUtils.js
export function first(arr) {
    return arr[0];
}
// objectUtils.js
export function keys(obj) {
    return Object.keys(obj);
}
// index.js
export * from "./stringUtils.js";
export * from "./arrayUtils.js";
export * from "./objectUtils.js";
// main.js
import { upper, first, keys } from "./index.js";

console.log(upper("hello"));
console.log(first([1, 2, 3]));
console.log(keys({ a: 1, b: 2 }))


/*20. fetchWithTimeout(url, ms) function banao
ms milliseconds ke baad custom TimeoutError throw kare.
Promise.race() use karo. Dono (fetch + timeout) ka proper cleanup karo.*/

class TimeoutError extends Error {}

async function fetchWithTimeout(url, ms) {
    let id;

    const timeout = new Promise((_, reject) => {
        id = setTimeout(() => reject(new TimeoutError("Timeout")), ms);
    });

    try {
        return await Promise.race([fetch(url), timeout]);
    } finally {
        clearTimeout(id);
    }
}



/* 21. Custom EventEmitter */

class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(event, cb) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(cb);
    }

    off(event, cb) {
        this.events[event] =
            this.events[event]?.filter(fn => fn !== cb);
    }

    emit(event, ...args) {
        const listeners = this.events[event] || [];

        listeners.forEach(fn => {
            try {
                fn(...args);
            } catch (e) {
                console.log("Listener Error:", e.message);
            }
        });
    }
}

/* 22. parseJSON(str) */

function parseJSON(str) {
    try {
        return JSON.parse(str);
    } catch (e) {
        console.log(e.message);
        return null;
    } finally {
        console.log("Parsing Done");
    }
}

/* 23.  Predict Output */

const obj2 = {
    get val() {
        throw new Error("no");
    }
};

try {
    const { val } = obj2;
} catch (e) {
    console.log(e.message);
}

// Output:
// no


/* 24. Predict Output */

function* gen() {
    try {
        yield 1;
        yield 2;
    } finally {
        yield 3;
    }
}

const g = gen();

console.log(
    g.next(),
    g.return("done"),
    g.next()
);

/*

Output:

{ value: 1, done: false }
{ value: 3, done: false }
{ value: 'done', done: true }

*/

/*25.  Predict Output */

class E extends Error {}

const e = new E("test");

console.log(
    e instanceof E,
    e instanceof Error,
    e.name
);

// Output:
// true true E


// 51. Top-level await — kab valid, kab error?

/*

file: main.js

const m = await import("./mod.js");
console.log(m.default, m.named);

Top-level await tabhi chalega jab file ESM ho:
- .mjs file
- ya package.json me "type":"module"

CommonJS me:
SyntaxError

*/


// 52. Predict Output

try {
    eval("{{bad syntax{{");
} catch (e) {
    console.log(e.name);
}

// Output:
// SyntaxError


// 53. Predict Output

class HttpError extends Error {
    constructor(code) {
        super("HTTP " + code);
        this.code = code;
        this.name = "HttpError";
    }
}

const e = new HttpError(500);

console.log(
    e.message,
    e.stack?.split("\n")[0]
);

/*

Output:

HTTP 500
HttpError: HTTP 500

*/


// 54. Runtime behaviour mein kya farq hai? (ESM vs CJS)

/*

import x from "./a.js"
const x = require("./a.js")

ESM:
- static loading
- live bindings
- loads before execution

CJS:
- runtime loading
- copied value
- loads during execution

*/


// 55. Predict Output

const err = new TypeError("bad type");

console.log(
    err instanceof TypeError,
    err instanceof Error,
    err instanceof RangeError
);

// Output:
// true true false


// 61. pipe(...fns) function banao

class PipelineError extends Error {
    constructor(step) {
        super("Pipeline failed at step " + step);
    }
}

function pipe(...fns) {
    return async function(value) {
        let result = value;

        for (let i = 0; i < fns.length; i++) {
            try {
                result = await fns[i](result);
            } catch {
                throw new PipelineError(i);
            }
        }

        return result;
    };
}


// 62. tryCatch(fn, fallback) utility banao

function tryCatch(fn, fallback) {
    return async (...args) => {
        try {
            return await fn(...args);
        } catch {
            return typeof fallback === "function"
                ? fallback()
                : fallback;
        }
    };
}


// 63. Singleton config module banao

/*

// config.js

const config = {
    env: "dev"
};

export default config;


// app.js

import c1 from "./config.js";
import c2 from "./config.js";

console.log(c1 === c2);

// true

*/


// 64. Named + default export ek file mein

/*

// user.js

export const age = 20;
export default "Nera";


// main.js

import name, { age } from "./user.js";

console.log(name);
console.log(age);

*/


// 65. SafeMap class banao

class KeyNotFoundError extends Error {
    constructor(key) {
        super("Key not found: " + key);
    }
}

class SafeMap {
    constructor() {
        this.map = new Map();
    }

    set(key, value) {
        this.map.set(key, value);
    }

    get(key, defaultVal) {
        return this.map.has(key)
            ? this.map.get(key)
            : defaultVal;
    }

    getOrThrow(key) {
        if (!this.map.has(key)) {
            throw new KeyNotFoundError(key);
        }

        return this.map.get(key);
    }

    has(key) {
        return this.map.has(key);
    }

    delete(key) {
        return this.map.delete(key);
    }
}