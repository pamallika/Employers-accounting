import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import './app.css';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';
function App(){
    const data=[
        {name:'Иванов И.И.' , salary:800, increase:false, id:1 },
        {name:'Петров И.И' , salary:3000, increase:true, id:2 },
        {name:'Сидоров И.И' , salary:15000, increase:false, id:3 }
    ];
    return (
        <div className="app">
            <AppInfo/>


            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

                <EmployersList data={data}/>
                <EmployersAddForm/>
        </div>
    );
}



export default App;