var app = new Vue({
    el: ('#app'),
    data: {
        toDoList: [
            'Meeting w/Elon Musk',
            'Interview with Jeff Bezos',
            'Coffee with Tim Cook in Cupertino',
            'Coding',
        ],
        removedToDo: []
    },
    methods: {
        deleteToDo(index) {
            this.removedToDo.push(this.toDoList[index]);
            this.toDoList.splice(index,1);
            console.log(this.removedToDo);
        },
        removeAllToDo() {
            this.toDoList.forEach(element => {
                this.removedToDo.push(element);
            });
            this.toDoList.splice(0);
        },
        deleteToDoDeleted(index) {
            this.removedToDo.splice(index,1);
        },
        restoreToDoDeleted(index) {
            this.toDoList.push(this.removedToDo[index]);
            this.removedToDo.splice(index,1);
        },
        permanentlyDelete() {
            this.removedToDo.splice(0);
        },
        restoreAllDeleted() {
            this.removedToDo.forEach(element => {
                this.toDoList.push(element);
            });
            this.removedToDo.splice(0);
        },
        addToDo() {
            this.toDoList.push(this.newToDo);
        }
    }
});
