// modules
function moo(string) {
    var something = string;
    var another = [1, 2, 3];

    function doSomething() {
        console.log(something);
    }

    function doAnother() {
        console.log(another.join(" ! "));
    }

    return { // object has references to inner functions, not to inner data variables, it's a public API for this module
        // returned object can be named
        doSomething: doSomething,
        doAnother: doAnother
    };
}

var mooInstance = moo('argument string'); // module instance created; moo() is a module creator
var mooAnotherInstance = moo('new string');
mooAnotherInstance.doSomething();
mooInstance.doAnother();
mooInstance.doSomething();

var fooo = (function CoolModule(id) {
    function change() {
// modifying the public API
        publicAPI.identify = identify2;
    }

    function identify1() {
        console.log(id);
    }

    function identify2() {
        console.log(id.toUpperCase());
    }

    var publicAPI = {
        change: change,
        identify: identify1
    };
    return publicAPI;
})("foo module");
fooo.identify(); // foo module
fooo.change();
fooo.identify(); // FOO MODULE

// module constructor example
var MyModules = (function Manager() {
    var modules = {};

    function define(name, deps, impl) {
        for (var i = 0; i < deps.length; i++) {
            deps[i] = modules[deps[i]];
        }
        modules[name] = impl.apply(impl, deps);
    }

    function get(name) {
        return modules[name];
    }

    return {
        define: define,
        get: get
    };
})();

// module definition using the constructor from above
MyModules.define("bar", [], function () {
    function hello(who) {
        return "Let me introduce: " + who;
    }

    return {
        hello: hello
    };
});
MyModules.define("foo", ["bar"], function (bar) {
    var hungry = "hippo";

    function awesome() {
        console.log(bar.hello(hungry).toUpperCase());
    }

    return {
        awesome: awesome
    };
});
var barr = MyModules.get("bar");
var fooo = MyModules.get("foo");
console.log(
    barr.hello("hippo")
); // Let me introduce: hippo
fooo.awesome(); // LET ME INTRODUCE: HIPPO

/*module foo from "foo";
module bar from "bar";
console.log(
    bar.hello( "rhino" )
); // Let me introduce: rhino
foo.awesome(); // LET ME INTRODUCE: HIPPO*/ // unexpected identifiers
