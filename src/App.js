import './App.css';
import './styles.css';
import { useReducer } from 'react';
import TicketForm from './components/TicketForm';
import ticketReduer from './reducer/ticketReducer';
import TicketList from './components/TicketList';
import {sortTicket} from './utilities/sortingUtilities'

function App() {

const initialState = {tickets:[], editingTicket: null, sortPreference: "High to Low"};

const [state, dispatch] = useReducer(ticketReduer, initialState);

const sortedTicket = sortTicket(state.tickets, state.sortPreference);

  return (
    <div className="App">
     <div className="container">
      <h1>Bug Blaster</h1>
      <TicketForm dispatch={dispatch} editingTicket={state.editingTicket}/>
      {state.tickets.length > 0 && 
      <div>
      <h2>All Tickets</h2>
      <select value={state.sortPreference} onChange={e=> dispatch({type: "SET_SORTING", payload: e.target.value})}>
        <option value="High to Low">High to Low</option>
        <option value="Low to High">Low to High</option>
      </select>
      <TicketList tickets ={sortedTicket} dispatch={dispatch} />
      </div>
      }
     </div>
    </div>
  );
}

export default App;
