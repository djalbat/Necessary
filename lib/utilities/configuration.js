"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _path = _interopRequireDefault(require("path"));
var _array = require("../utilities/array");
var _constants = require("../constants");
var _fileSystem = require("../utilities/fileSystem");
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
if (!globalThis.rc) {
    globalThis.rc = _rc;
}
var rc = globalThis.rc;
var _default = {
    rc: rc
};
exports.default = _default;
var baseExtension = _constants.DEFAULT_RC_BASE_EXTENSION;
function _rc(param) {
    var environmentNameOrArgv = param === void 0 ? null : param;
    var environment, environmentName, environmentNameOrArgvArgv = _instanceof(environmentNameOrArgv, Array);
    if (environmentNameOrArgvArgv) {
        var argv = environmentNameOrArgv; ///
        environmentName = environmentNameFromArgv(argv);
    } else {
        environmentName = environmentNameOrArgv; ///
    }
    var json = readRCFile(), environments = json.environments;
    if (environmentName === null) {
        var firstEnvironment = (0, _array).first(environments);
        environment = firstEnvironment; ///
    } else {
        environment = environments.find(function(environment1) {
            var name = environment1.name, found = name === environmentName;
            return found;
        });
    }
    delete environment.name;
    Object.assign(rc, environment);
    return environment;
}
function readRCFile() {
    var rcFilePath = rcFilePathFromNothing(), rcFileContent = (0, _fileSystem).readFile(rcFilePath), json = JSON.parse(rcFileContent);
    return json;
}
function writeRCFile(json) {
    var rcFilePath = rcFilePathFromNothing(), rdFileContent = JSON.stringify(json, null, "  ");
    (0, _fileSystem).writeFile(rcFilePath, rdFileContent);
}
function updateRCFile(addedProperties) {
    for(var _len = arguments.length, deletedPropertyNames = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        deletedPropertyNames[_key - 1] = arguments[_key];
    }
    var json = readRCFile();
    if (addedProperties) {
        Object.assign(json, addedProperties);
    }
    deletedPropertyNames.forEach(function(deletedPropertyName) {
        delete json[deletedPropertyName];
    });
    writeRCFile(json);
}
function checkRCFileExists() {
    var rcFilePath = rcFilePathFromNothing(), rcFileExists = (0, _fileSystem).checkFileExists(rcFilePath);
    return rcFileExists;
}
function createVacuousRCFile() {
    var json = {
        "environments": [
            {
            }
        ]
    };
    writeRCFile(json);
}
function setRCBaseExtension(rcBaseExtension) {
    baseExtension = rcBaseExtension;
}
Object.assign(_rc, {
    readRCFile: readRCFile,
    writeRCFile: writeRCFile,
    updateRCFile: updateRCFile,
    checkRCFileExists: checkRCFileExists,
    createVacuousRCFile: createVacuousRCFile,
    setRCBaseExtension: setRCBaseExtension
});
function environmentNameFromArgv(argv) {
    var environmentName = null;
    argv.find(function(argument) {
        var matches = argument.match(/--environment=(.+)/), found = matches !== null;
        if (found) {
            var secondMatch = (0, _array).second(matches);
            environmentName = secondMatch;
        }
        return found;
    });
    return environmentName;
}
function rcFilePathFromNothing() {
    var rcFilePath = "./.".concat(baseExtension, "rc");
    return rcFilePath;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29uZmlndXJhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcblxuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IERFRkFVTFRfUkNfQkFTRV9FWFRFTlNJT04gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyByZWFkRmlsZSwgd3JpdGVGaWxlLCBjaGVja0ZpbGVFeGlzdHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2ZpbGVTeXN0ZW1cIjtcblxuaWYgKCFnbG9iYWxUaGlzLnJjKSB7XG4gIGdsb2JhbFRoaXMucmMgPSBfcmM7XG59XG5cbmNvbnN0IHsgcmMgfSA9IGdsb2JhbFRoaXM7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmNcbn07XG5cbmxldCBiYXNlRXh0ZW5zaW9uID0gREVGQVVMVF9SQ19CQVNFX0VYVEVOU0lPTjtcblxuZnVuY3Rpb24gX3JjKGVudmlyb25tZW50TmFtZU9yQXJndiA9IG51bGwpIHtcbiAgbGV0IGVudmlyb25tZW50LFxuICAgICAgZW52aXJvbm1lbnROYW1lLFxuICAgICAgZW52aXJvbm1lbnROYW1lT3JBcmd2QXJndiA9IChlbnZpcm9ubWVudE5hbWVPckFyZ3YgaW5zdGFuY2VvZiBBcnJheSk7XG5cbiAgaWYgKGVudmlyb25tZW50TmFtZU9yQXJndkFyZ3YpIHtcbiAgICBjb25zdCBhcmd2ID0gZW52aXJvbm1lbnROYW1lT3JBcmd2OyAvLy9cblxuICAgIGVudmlyb25tZW50TmFtZSA9IGVudmlyb25tZW50TmFtZUZyb21Bcmd2KGFyZ3YpO1xuICB9IGVsc2Uge1xuICAgIGVudmlyb25tZW50TmFtZSA9IGVudmlyb25tZW50TmFtZU9yQXJndjsgIC8vL1xuICB9XG5cbiAgY29uc3QganNvbiA9IHJlYWRSQ0ZpbGUoKSxcbiAgICAgICAgeyBlbnZpcm9ubWVudHMgfSA9IGpzb247XG5cbiAgaWYgKGVudmlyb25tZW50TmFtZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IGZpcnN0RW52aXJvbm1lbnQgPSBmaXJzdChlbnZpcm9ubWVudHMpO1xuXG4gICAgZW52aXJvbm1lbnQgPSBmaXJzdEVudmlyb25tZW50OyAvLy9cbiAgfSBlbHNlIHtcbiAgICBlbnZpcm9ubWVudCA9IGVudmlyb25tZW50cy5maW5kKChlbnZpcm9ubWVudCkgPT4ge1xuICAgICAgY29uc3QgeyBuYW1lIH0gPSBlbnZpcm9ubWVudCxcbiAgICAgICAgICAgIGZvdW5kID0gKG5hbWUgPT09IGVudmlyb25tZW50TmFtZSk7XG5cbiAgICAgIHJldHVybiBmb3VuZDtcbiAgICB9KTtcbiAgfVxuXG4gIGRlbGV0ZSBlbnZpcm9ubWVudC5uYW1lO1xuXG4gIE9iamVjdC5hc3NpZ24ocmMsIGVudmlyb25tZW50KTtcblxuICByZXR1cm4gZW52aXJvbm1lbnQ7XG59XG5cbmZ1bmN0aW9uIHJlYWRSQ0ZpbGUoKSB7XG4gIGNvbnN0IHJjRmlsZVBhdGggPSByY0ZpbGVQYXRoRnJvbU5vdGhpbmcoKSxcbiAgICAgICAgcmNGaWxlQ29udGVudCA9IHJlYWRGaWxlKHJjRmlsZVBhdGgpLFxuICAgICAgICBqc29uID0gSlNPTi5wYXJzZShyY0ZpbGVDb250ZW50KTtcblxuICByZXR1cm4ganNvbjsgICAgICBcbn1cblxuZnVuY3Rpb24gd3JpdGVSQ0ZpbGUoanNvbikge1xuICBjb25zdCByY0ZpbGVQYXRoID0gcmNGaWxlUGF0aEZyb21Ob3RoaW5nKCksXG4gICAgICAgIHJkRmlsZUNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShqc29uLCBudWxsLCBcIiAgXCIpO1xuXG4gIHdyaXRlRmlsZShyY0ZpbGVQYXRoLCByZEZpbGVDb250ZW50KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlUkNGaWxlKGFkZGVkUHJvcGVydGllcywgLi4uZGVsZXRlZFByb3BlcnR5TmFtZXMpIHtcbiAgbGV0IGpzb24gPSByZWFkUkNGaWxlKCk7XG5cbiAgaWYgKGFkZGVkUHJvcGVydGllcykge1xuICAgIE9iamVjdC5hc3NpZ24oanNvbiwgYWRkZWRQcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIGRlbGV0ZWRQcm9wZXJ0eU5hbWVzLmZvckVhY2goKGRlbGV0ZWRQcm9wZXJ0eU5hbWUpID0+IHtcbiAgICBkZWxldGUganNvbltkZWxldGVkUHJvcGVydHlOYW1lXTtcbiAgfSk7XG5cbiAgd3JpdGVSQ0ZpbGUoanNvbik7ICAgICAgXG59XG5cbmZ1bmN0aW9uIGNoZWNrUkNGaWxlRXhpc3RzKCkge1xuICBjb25zdCByY0ZpbGVQYXRoID0gcmNGaWxlUGF0aEZyb21Ob3RoaW5nKCksXG4gICAgICAgIHJjRmlsZUV4aXN0cyA9IGNoZWNrRmlsZUV4aXN0cyhyY0ZpbGVQYXRoKTtcblxuICByZXR1cm4gcmNGaWxlRXhpc3RzO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVWYWN1b3VzUkNGaWxlKCkge1xuICBjb25zdCBqc29uID0ge1xuICAgIFwiZW52aXJvbm1lbnRzXCI6IFtcbiAgICAgIHt9XG4gICAgXVxuICB9O1xuXG4gIHdyaXRlUkNGaWxlKGpzb24pO1xufVxuXG5mdW5jdGlvbiBzZXRSQ0Jhc2VFeHRlbnNpb24ocmNCYXNlRXh0ZW5zaW9uKSB7IGJhc2VFeHRlbnNpb24gPSByY0Jhc2VFeHRlbnNpb247IH1cblxuT2JqZWN0LmFzc2lnbihfcmMsIHtcbiAgcmVhZFJDRmlsZSxcbiAgd3JpdGVSQ0ZpbGUsXG4gIHVwZGF0ZVJDRmlsZSxcbiAgY2hlY2tSQ0ZpbGVFeGlzdHMsXG4gIGNyZWF0ZVZhY3VvdXNSQ0ZpbGUsXG4gIHNldFJDQmFzZUV4dGVuc2lvblxufSk7XG5cbmZ1bmN0aW9uIGVudmlyb25tZW50TmFtZUZyb21Bcmd2KGFyZ3YpIHtcbiAgbGV0IGVudmlyb25tZW50TmFtZSA9IG51bGw7XG5cbiAgYXJndi5maW5kKChhcmd1bWVudCkgPT4geyAgLy8vXG4gICAgY29uc3QgbWF0Y2hlcyA9IGFyZ3VtZW50Lm1hdGNoKC8tLWVudmlyb25tZW50PSguKykvKSxcbiAgICAgICAgICBmb3VuZCA9IChtYXRjaGVzICE9PSBudWxsKTtcblxuICAgIGlmIChmb3VuZCkge1xuICAgICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICAgIGVudmlyb25tZW50TmFtZSA9IHNlY29uZE1hdGNoO1xuICAgIH1cblxuICAgIHJldHVybiBmb3VuZDtcbiAgfSk7XG5cbiAgcmV0dXJuIGVudmlyb25tZW50TmFtZTtcbn1cblxuZnVuY3Rpb24gcmNGaWxlUGF0aEZyb21Ob3RoaW5nKCkge1xuICBjb25zdCByY0ZpbGVQYXRoID0gYC4vLiR7YmFzZUV4dGVuc2lvbn1yY2A7XG5cbiAgcmV0dXJuIHJjRmlsZVBhdGg7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFSyxLQUFNO0lBRU8sTUFBb0I7SUFDUixVQUFjO0lBQ0gsV0FBeUI7Ozs7Ozs7Ozs7Ozs7S0FFekUsVUFBVSxDQUFDLEVBQUU7SUFDaEIsVUFBVSxDQUFDLEVBQUUsR0FBRyxHQUFHOztJQUdiLEVBQUUsR0FBSyxVQUFVLENBQWpCLEVBQUU7O0lBR1IsRUFBRSxFQUFGLEVBQUU7OztJQUdBLGFBQWEsR0FieUIsVUFBYztTQWUvQyxHQUFHLENBQUMsS0FBNEI7UUFBNUIscUJBQXFCLEdBQXJCLEtBQTRCLGNBQUosSUFBSSxHQUE1QixLQUE0QjtRQUNuQyxXQUFXLEVBQ1gsZUFBZSxFQUNmLHlCQUF5QixHQUFJLFdBQXNDLENBQXRDLHFCQUFxQixFQUFZLEtBQUs7UUFFbkUseUJBQXlCO1lBQ3JCLElBQUksR0FBRyxxQkFBcUIsQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7UUFFdkMsZUFBZSxHQUFHLHVCQUF1QixDQUFDLElBQUk7O1FBRTlDLGVBQWUsR0FBRyxxQkFBcUIsQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7O1FBR3pDLElBQUksR0FBRyxVQUFVLElBQ2YsWUFBWSxH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