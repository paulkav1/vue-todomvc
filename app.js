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

/**
 * All Vue applications are initialized with a `new Vue()` method call. The object that is passed to the method call is the configuration for our whole application.
 */
new Vue({
    /**
     * The "el" option indicates which HTML element the application should initially load, into. If you look at `index.html`, you will notice a div tag with the ID #app. This initial load process is also known as "bootstrapping."
     */
    el:`#app`,

    /**
     * The template for the application defines the basic structure of its HTML.
     * There are many ways to define a template in Vue, but this example uses HTML templates. If you look at the Index file, you will see an `x-template` tag with this ID. Changing the contents of that tag will change the way the application looks.
     * Other ways to define a template include using JSX or just a JavaScript string.
     */
    template:"#app-template",

    /**
     * The data method is called by the component, and the values returned become the data model for that component.
     * The todos being passed here are defined at the top of this file.
     */
    data:()=>(
        {
            todos,
            text:``,
            showComplete:true,
        }
    ),

    /**
     * Computed properties are like data, except instead of a specific value, they are a function. The function is called and then the component can use the value that is returned, like a normal property.
     * Computed properties can take various factors into account - for example, the filteredTodos computed property is different depending on the status of the showComplete property of the application.
     */
    computed:{

        /**
         * Returns a list of todos with the completed ones removed, when the application is so configured.
         */
        filteredTodos(){
            return this.todos
                .filter(todo=>this.showComplete ? true : !todo.complete);
        },

        /**
         * A boolean indicating if the submit button should be disabled, based on the content of the input box.
         * This method could be upgraded to take into accounts other things - like if the text input is valid based on the output of some validator.
         */
        submitIsDisabled(){
            return this.text == "";
        }
    },

    methods:{
        /**
         * addTodo() takes whatever is in the text input box, and makes it into a list element. There is no need to call a `render()` method, as Vue can determine on its own what to redraw.
         */
        addTodo(){
            todos.push({
                name:this.text,
                complete:false
            });

            this.text = ``;
        },
    }
});