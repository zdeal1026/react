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
  componentDidMount() {
    API.searchEmployees()
      .then((res) => this.setState({
        employees: res.data.results,
        fileteredEmployees: res.data.results
      })
      )
      .catch((err) => console.log(err));
  }
  
  //updating serach value to state by employee name
  handleInputChange = (e) => {
    const value = e.target.value;
    this.setState({ search: value });
    this.filterEmployees(value.toLowerCase().trim());
  };

  //searching API 
  handleFormSubmit = (e) => {
    e.preventDefault();
  };

  
  )
}
