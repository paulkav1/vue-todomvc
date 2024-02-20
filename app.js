/**
 * First Vue app
 **/

let todos = [{
    name:"Attend standup",
    complete: false,
},{
    name:"Play with cat",
    complete: true
},{
    name:"Walk dog",
    complete: true
},{
    name: "Cook dinner",
    complete: false
}];


new Vue({

    el:`#app`,

    template:"#app-template",

    data:()=>(
        {
            todos,
            text:``,
            showComplete:true,
        }
    ),

    computed:{

        filteredTodos(){
            return this.todos
                .filter(todo=>this.showComplete ? true : !todo.complete);
        },

        submitIsDisabled(){
            return this.text == "";
        }
    },

    methods:{

        addTodo(){
            todos.push({
                name:this.text,
                complete:false
            });

            this.text = ``;
        },
    }
});