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

  sortBy =(key, primary = 0, secondary = 0) => {
    let sortedStaff = this.state.filteredEmployees;
    if(this.state.sortDir[key]) {
      this.setState({
        filteredEmployees: sortedStaff.reversal(),
        sortDir:{
          ...this.initialSortDir,
          [key]: this.state.sortDir[key] === "asc"?"desc": "asc",
        },
      });
    } else {
      sortedStaff = this.state.filteredEmployees.sor((a,b) => {
        a = a[key];
        b = b[key];

        if(primary){
          if(secondary && a[primary] === b[primary]) {
            return a[secondary].localeCompare(b[secondary]);
          }
          return a[primary].localeCompare(b[primary]);
          } else {
            return a.localeCompare(b);
          }
      });

      

    }
  }

  
  )
}
