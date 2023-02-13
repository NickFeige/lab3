interface ToDoInterface {
    Tasks: string[];
    addTask(task: string): number;
    listAllTasks(): void;
    deleteTask(task:string):number;

}
class Todo implements ToDoInterface {
    Tasks: string[] = [];

    addTask(task: string): number {
        this.Tasks.push(task);
        console.log(" task " + task + " add to my tasks array");
        return this.Tasks.length;
    }
    listAllTasks(): void {
        for (let i = 0; i < this.Tasks.length; i++) {
            console.log(" number " + (i + 1) + this.Tasks[i]);
        }
        this.Tasks.forEach((item) => {
            console.log(item);
        })
    }
    deleteTask(task: string): number 
    {
        let index: number = this.Tasks.indexOf(task);
        if (index > -1) {
            this.Tasks.splice(index, 1);
            console.log(" task " + task + " removed from array");
        }
        else {
            console.log(" task " + task + " no present in array");
        }
        return this.Tasks.length;

    }
}
let myTodo = new Todo();
myTodo.addTask("eat");
myTodo.addTask("work");
myTodo.addTask("sleep");
myTodo.listAllTasks();
myTodo.deleteTask("sleep");