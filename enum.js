var level_of;
(function (level_of) {
    level_of[level_of["Low"] = 0] = "Low";
    level_of[level_of["Medium"] = 1] = "Medium";
    level_of[level_of["High"] = 2] = "High";
})(level_of || (level_of = {}));
console.log(level.Low);
console.log(level.Medium);
console.log(level.High);
console.log(level_of);
for (var index = 0; index < Array.length; index++) {
    console.log(level_of[index]);
}
