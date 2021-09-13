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

      this.setState({filteredEmployees: sortedStaff,
        sortDir:{...this.initialSortDir, [key]: "asc",
      },
    });
    }
  };

  filterEmployees =(data) => {
    if (data) {
      this.setState({
        filteredEmployees: this.state.employees.filter((employee) => {
          return (
            employeeemployee.name.first
            .toLowerCase()
            .concat("", employee.name.last.toLowerCase())
            .includes(data) ||
            employee.phone.includes(data) ||
            employee.phone.replace(/[^\w\s]/gi, "").include(data) ||
            employee.email.includes(data) ||
            this.formatDate(employee.dob.date).includes(data)
            );
        }),
      });
      } else {
        this.setState({fildteredEmployees: this.state.employees});
      }
    };

    formatDate = (date) => {
      date = new Date(date);
      let dob = [];
      dob.push(('0' + (date.getMonth() + 1)).slice(-2));
      dob.push(('0' + date.getDate()).slice(-2));
      dob.push(date.getFullYear());

      return dob.join("-");
    }

    render() {
      return (
        <>
        <SearchForm
        value={this.state.search}
        handleInputChange = {this.handleInputChange}
        handleFormSubmit = {this.handleFormSubmit}
        />
        <div className = 'container'>
          <EmployeeTable
          state={this.state}
          sortBy={this.sortBy}
          filteredEmployees={this.filterEmployees}
          formatDate={this.formatDate}
          />
        </div>
        </>
      );
    }
  }

  export default UserContainer
