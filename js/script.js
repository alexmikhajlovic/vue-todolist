var app = new Vue({
    el: ('#app'),
    data: {
        newToDo: '',
        toDoList: [
            'Meeting w/Elon Musk',
            'Interview with Jeff Bezos',
            'Coffee with Tim Cook in Cupertino',
            'Visit the SpaceX HeadQuarters',
            'Buy Sneakers',
            'Coding',
        ],
        removedToDo: []
    },
    methods: {
        // Remove to-do and push into deleted's to-do
        deleteToDo(index) {
            this.removedToDo.push(this.toDoList[index]);
            this.toDoList.splice(index,1);
            console.log(this.removedToDo);
        },
        // Remove all to-do and push into deleted's to-do
        removeAllToDo() {
            this.toDoList.forEach(element => {
                this.removedToDo.push(element);
            });
            this.toDoList.splice(0);
        },
        // Delete Permanently do-do
        deleteToDoDeleted(index) {
            this.removedToDo.splice(index,1);
        },
        // Restore removed to-do into to-do's array
        restoreToDoDeleted(index) {
            this.toDoList.push(this.removedToDo[index]);
            this.removedToDo.splice(index,1);
        },
        // Delete Permanently all do-do with a confirm
        permanentlyDelete() {
            let check = confirm("Are you sure you want to delete the whole list? The operation is irreversible.");
                if (check == true) {
                    this.removedToDo.splice(0);;
                }
        },
        // Restore all removed to-do into to-do's array
        restoreAllDeleted() {
            this.removedToDo.forEach(element => {
                this.toDoList.push(element);
            });
            this.removedToDo.splice(0);
        },
        // Add new to-do from input
        addToDo() {
            (this.newToDo.length < 2) ? alert(`Too short, 3 characters min.`) :this.toDoList.push(this.newToDo);
            this.newToDo = '';
        }
    }
});