import SearchForm from "./Searchform/SearchForm.js";
import API from "../../utils/API";

class UserContainer extends Component {
  state = {
    search:"",
    employees: [],
    filteredEmployees: [],
    sortDir: this.initialSortDir,    
  };

  //sorting columns
  get initialSortDir(){
    return{
      name:"",
      phone:"",
      email:"",
      dob:'',
    }
  };

  //calling api when component mounts
}
