
import Jumbotron from './Jumbotron';
import Topbar from './Topbar';
import Slidebar from './Slidebar';


const Dashboard = ({pathname, children}) => {
    return(
        <div className="dashboard">
            <div className="dashboard__slidebar">
                <Slidebar />
            </div>
            <div className="dashboard__main">
                <Jumbotron />
                <Topbar />
                <div className="dashboard__content">
                    {children}
                </div>
                <div className="dashboard__footer">

                </div>
            </div>
        </div>
    )
}

export default Dashboard;

