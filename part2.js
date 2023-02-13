var Tasks = [];
function addTask(task) {
    Tasks.push(task);
    console.log("task" + task + "add to my tasks array");
    return Tasks.length;
}
function listAllTasks() {
    for (var i = 0; i < Tasks.length; i++) {
        console.log("number" + (i + 1) + Tasks[i]);
    }
    Tasks.forEach(function (item) {
        console.log(item);
    });
}
function deleteTask(task) {
    var index = Tasks.indexOf(task);
    if (index > -1) {
        Tasks.splice(index, 1);
        console.log("task " + task + "removed from array");
    }
    else {
        console.log("task " + task + "no present in array");
    }
    return Tasks.length;
}
addTask("eat");
addTask("work");
addTask("sleep");
listAllTasks();
deleteTask("eat");
listAllTasks();
/*function myfunction(myString:String):void{
    console.log(myString);

}
myfunction("hello world");*/
