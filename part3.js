var Todo = /** @class */ (function () {
    function Todo() {
        this.Tasks = [];
    }
    Todo.prototype.addTask = function (task) {
        this.Tasks.push(task);
        console.log(" task " + task + " add to my tasks array");
        return this.Tasks.length;
    };
    Todo.prototype.listAllTasks = function () {
        for (var i = 0; i < this.Tasks.length; i++) {
            console.log(" number " + (i + 1) + this.Tasks[i]);
        }
        this.Tasks.forEach(function (item) {
            console.log(item);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        var index = this.Tasks.indexOf(task);
        if (index > -1) {
            this.Tasks.splice(index, 1);
            console.log(" task " + task + " removed from array");
        }
        else {
            console.log(" task " + task + " no present in array");
        }
        return this.Tasks.length;
    };
    return Todo;
}());
var myTodo = new Todo();
myTodo.addTask("eat");
myTodo.addTask("work");
myTodo.addTask("sleep");
myTodo.listAllTasks();
myTodo.deleteTask("sleep");
