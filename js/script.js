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
        restoreToDo(index) {
            this.toDoList.push(this.removedToDo[index]);
            this.removedToDo.splice(index,1);
        },
        deleteToDoDeleted(index) {
            this.removedToDo.splice(index,1);
        },
        removeAllToDo(index) {
            this.toDoList.splice(index,this.toDoList.length);
        }
    }
});
