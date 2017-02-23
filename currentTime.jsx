
const numbers = [{"startTime":0,"endTime":236,"daysOfWeekOpen":[1,2,3,4],"menu":"Midnight menu"},{"startTime":660,"endTime":780,"daysOfWeekOpen":[1,2,3,4],"menu":"Lunch menu"},{"startTime":1080,"endTime":1200,"daysOfWeekOpen":[1,2,3,4],"menu":"Dinner menu"},{"startTime":0,"endTime":1440,"daysOfWeekOpen":[7],"menu":"Sunday menu"}];

let currentTime = new Date().getMinutes()+new Date().getHours()*60;
let currentDay = new Date().getDay();
// numbers.map() takes value from an array and convert into another array.
let number = numbers.map((data)=>{
  		if(data.startTime<=currentTime&&data.endTime>=currentTime&&data.daysOfWeekOpen.indexOf(currentDay)!=-1){
  				return data.menu;
  		} 
  		else {
  			return "...."
  		}
});

// Clock Class Extends React Component where we set the state for the  date 
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  
  	
// It calls as soon as render function is called, where generally timers can be set.
  componentDidMount() {
    this.timerID = setInterval(
      () => this.getCurrentTime(),
      60000
    );
  }
  
  getCurrentTime() {
    this.setState({
      date: new Date()
    });
  }
  
//This function renders the React code into HTML, that returns needed component markups.
  render() {
    return (
      <div>
        <h1>Current Time</h1>
        <h2>{(this.state.date.getMinutes()+this.state.date.getHours()*60)}</h2>
        <h1>Current Day</h1>
        <h2>{(this.state.date.getDay())}</h2>
        `{number}
      </div>
    );
  }
}






function App() {
  
  
    return (
      <div>
        <Clock />
        <currentDay />
      </div>
    );
  
}

ReactDOM.render(
  <App />,
  document.getElementById('container')
);


