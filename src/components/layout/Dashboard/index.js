
import Topbar from './Topbar';
import Navbar from './Navbar';




const Dashboard = ({children}) => {
    return(
        <div>
            <Topbar />
            <Navbar />
            {children}
        </div>
    )
}

export default Dashboard;

