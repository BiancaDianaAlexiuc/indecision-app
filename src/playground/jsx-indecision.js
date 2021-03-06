console.log('App.js is runnig');

//JSX - Javascript XML

const app = {
    title: 'This is a title',
    subtitle: 'This is a subtitle', 
    options: []

};

const onFormSubmit = (e) => {
    e.preventDefault();
    
    const option = e.target.elements.option.value;

    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }

    renderTemplate();
};

const wipeForm = () => {
   

    app.options.length = [];
    renderTemplate();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
    console.log(randomNum);
};


const appRoot = document.getElementById('app');

const renderTemplate = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
           
        {app.subtitle && <p>{app.subtitle}</p>}
         <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
         <p>{app.options.length}</p>
         <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
         <button onClick={wipeForm}>Remove all</button>
     
            <ol>
            {
                app.options.map((option) => <li key={option}>Option: {option}</li>)
            }
                
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);

};

renderTemplate();





