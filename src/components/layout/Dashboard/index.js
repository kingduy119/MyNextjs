
import Topbar from './Topbar';
import Slidebar from './Slidebar';


const Dashboard = ({pathname, children}) => {
    return(
        <div className="dashboard">
            <Topbar />
            <Slidebar pathname={pathname} />
            <div className="dashboard__content">
                {children}
            </div>
        </div>
    )
}

export default Dashboard;

