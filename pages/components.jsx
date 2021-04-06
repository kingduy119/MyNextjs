
// class ComponentsPage extends React.Component {
//   render() {
//     return (
//       <>
//         <div className="jumbotron text-center" style={{marginBottom:"0"}}>
//           <div className="container">
//             <h1>Jumbotron Fluid</h1>
//             <p>Bootstrap is the most popular HTML, CSS...</p>
//             {/* <div className="spinner-border" /> */}
//           </div>
//         </div>

//         <div id="headerCarousel" className="carousel slide" data-ride="carousel">
//             {/* Indicators */}
//             <ul className="carousel-indicators">
//                 <li data-target="headerCarousel" data-slide-to="0" className="active" />
//                 <li data-target="headerCarousel" data-slide-to="1" />
//                 <li data-target="headerCarousel" data-slide-to="2" />
//             </ul>

//             {/* The slideshow */}
//             <div className="carousel-inner">
//                 <div className="carousel-item active">
//                     <img 
//                         src="https://www.w3schools.com/bootstrap4/la.jpg" 
//                         alt="Los Angeles" width="1100px" height="500px" 
//                     />
//                 </div>
//                 <div className="carousel-item">
//                     <img 
//                         src="https://www.w3schools.com/bootstrap4/chicago.jpg" 
//                         alt="Los Angeles" width="1100px" height="500px" 
//                     />
//                 </div>
//                 <div className="carousel-item">
//                     <img 
//                         src="https://www.w3schools.com/bootstrap4/ny.jpg" 
//                         alt="Los Angeles" width="1100px" height="500px" 
//                     />
//                 </div>

//                 {/* <!-- Left and right controls --> */}
//                 <a class="carousel-control-prev" href="#headerCarousel" data-slide="prev">
//                     <span class="carousel-control-prev-icon"></span>
//                 </a>
//                 <a class="carousel-control-next" href="#headerCarousel" data-slide="next">
//                     <span class="carousel-control-next-icon"></span>
//                 </a>
//             </div>
//         </div>

//         {/* Navbar */}
//         <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
//             <div className="container">
//                 <ul className="navbar-nav">
//                     <li className="nav-item">
//                     <a className="nav-link" href="#">
//                         Home
//                     </a>
//                     </li>
//                     <li className="nav-item">
//                     <a className="nav-link" href="#">
//                         Service
//                     </a>
//                     </li>
//                     <li className="nav-item">
//                     <a className="nav-link" href="#">
//                         About
//                     </a>
//                     </li>
//                 </ul>
//             </div>
//         </nav>

//         <div className="container" style={{marginTop:"30px"}}>
//             <div className="row">
//                 {/* ################### */}
//                 <div className="col-sm-4">
//                     <h2>#About Me</h2>
//                     <h5>Photo of me</h5>
//                     <div style={{height:"200px", backgroundColor:"#ccc"}} />
                    
//                     <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
//                     <h3>Some Links</h3>
//                     <p>Lorem ipsum dolor sit ame.</p>
//                     <ul class="nav nav-pills flex-column">
//                         <li class="nav-item">
//                         <a class="nav-link active" href="#">Active</a>
//                         </li>
//                         <li class="nav-item">
//                         <a class="nav-link" href="#">Link</a>
//                         </li>
//                         <li class="nav-item">
//                         <a class="nav-link" href="#">Link</a>
//                         </li>
//                         <li class="nav-item">
//                         <a class="nav-link disabled" href="#">Disabled</a>
//                         </li>
//                     </ul>
//                     <hr class="d-sm-none" />
//                 </div>
//                 {/* ################### */}
//                 <div className="col-sm-8">
//                     <h2>#TITLE HEADING</h2>
//                     <h5>Title description, Dec 7, 2017</h5>
//                     <div style={{height:"200px", backgroundColor:"#ccc"}} />
//                     <p>Some text..</p>
//                     <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
//                     <br />

//                     <h2>#TITLE HEADING</h2>
//                     <h5>Title description, Dec 7, 2017</h5>
//                     <div style={{height:"200px", backgroundColor:"#ccc"}} />
//                     <p>Some text..</p>
//                     <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
//                 </div>
//             </div>
//         </div>

//         <br />
//         <div className="container" style={{marginBottom:"30px"}}>
//             <div class="media border p-3">
//                 <img src="assets/img_avatar3.png" alt="John Doe" class="mr-3 mt-3 rounded-circle" style={{width:"60px"}}/>
//                 <div class="media-body">
//                     <h2>#John Doe <small><i>Posted on February 19, 2016</i></small></h2>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

//                     <div class="media p-3">
//                         <img src="assets/img_avatar3.png" alt="John Doe" class="mr-3 mt-3 rounded-circle" style={{width:"60px"}}/>
//                         <div class="media-body">
//                             <h2>#John Doe <small><i>Posted on February 19, 2016</i></small></h2>
//                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//                         </div>
//                     </div>

//                     <div class="media p-3">
//                         <img src="assets/img_avatar3.png" alt="John Doe" class="mr-3 mt-3 rounded-circle" style={{width:"60px"}}/>
//                         <div class="media-body">
//                             <h2>#John Doe <small><i>Posted on February 19, 2016</i></small></h2>
//                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>

//         <div class="jumbotron text-center" style={{margin:"0px"}}>
//             <p>Footer</p>
//         </div>
//       </>
//     );
//   }
// }

const Grids = () => <>
    <div className="row" id="grid">
        <div className="col-sm-6 col-md-4 col-lg-3 col-xl-6 border">
            col-sm-6 col-md-4 col-lg-3 col-xl-6
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 col-xl-6 border">
            col-sm-6 col-md-4 col-lg-3 col-xl-6
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 col-xl-6 border">
            col-sm-6 col-md-4 col-lg-3 col-xl-6
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 col-xl-6 border">
            col-sm-6 col-md-4 col-lg-3 col-xl-6
        </div>
    </div>
</>;

const Texts =  () =>
    <div className="container" id="texts">
        <p class="text-muted">This text is muted.</p>
        <p class="text-primary">This text is important.</p>
        <p class="text-success">This text indicates success.</p>
        <p class="text-info">This text represents some information.</p>
        <p class="text-warning">This text represents a warning.</p>
        <p class="text-danger">This text represents danger.</p>
        <p class="text-secondary">Secondary text.</p>
        <p class="text-dark">This text is dark grey.</p>
        <p class="text-body">Default body color (often black).</p>
        <p class="text-light">This text is light grey (on white background).</p>
        <p class="text-white">This text is white (on white background).</p>
    </div>;

const BasicTable = (props) => 
    <table className={`table ${props.className}`}>
        <thead>
            <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>John</td>
                <td>Doe</td>
                <td>john@example.com</td>
            </tr>
            <tr>
                <td>Mary</td>
                <td>Moe</td>
                <td>mary@example.com</td>
            </tr>
            <tr>
                <td>John</td>
                <td>Doe</td>
                <td>john@example.com</td>
            </tr>
        </tbody>
    </table>
    
const Tables = () => 
    <div className="container">
        <h4>Basic Table:</h4>
        <BasicTable />

        <h4>Striped Row: .table-striped</h4>
        <BasicTable className="table-striped" />

        <h4>Bordered Table: .table-bordered</h4>
        <BasicTable className="table-bordered" />

        <h4>Hover Row: .table-hover</h4>
        <BasicTable className="table-hover" />

        <h4>Contextual CLasses:</h4>
        <p>tr className="table-primary || table-success"</p>

        <h4>Table Head Colors:</h4>
        <p>thead className="thead-dark || thead-light"</p>
    </div>
    
const Buttons = () =>
    <div className="container">
        <h4>Button Styles:</h4>
        <button type="button" class="btn">Basic</button>
        <button type="button" class="btn btn-primary">Primary</button>
        <button type="button" class="btn btn-secondary">Secondary</button>
        <button type="button" class="btn btn-success">Success</button>
        <button type="button" class="btn btn-info">Info</button>
        <button type="button" class="btn btn-warning">Warning</button>
        <button type="button" class="btn btn-danger">Danger</button>
        <button type="button" class="btn btn-dark">Dark</button>
        <button type="button" class="btn btn-light">Light</button>
        <button type="button" class="btn btn-link">Link</button>

        <h4>Button Outline:</h4>
        <button type="button" class="btn btn-outline-primary">Primary</button>
        <button type="button" class="btn btn-outline-secondary">Secondary</button>
        <button type="button" class="btn btn-outline-success">Success</button>
        <button type="button" class="btn btn-outline-info">Info</button>
        <button type="button" class="btn btn-outline-warning">Warning</button>
        <button type="button" class="btn btn-outline-danger">Danger</button>
        <button type="button" class="btn btn-outline-dark">Dark</button>
        <button type="button" class="btn btn-outline-light text-dark">Light</button>

        <h4>Button sizes:</h4>
        <li>.btn-lg | .btn-sm</li>

        <h4>Block Button:</h4>
        <li>.btn-block</li>
    </div>

const ProgressBars = () =>
<>
    <div className="progress" style={{height: '10px'}}>
        <div className="progress-bar bg-primary" style={{width: '50%', height: '10px'}}></div>
    </div>
    <br />
    <div className="progress" style={{height: '10px'}}>
        <div className="progress-bar progress-bar-striped bg-success" style={{width: '50%', height: '10px'}}></div>
    </div>
    <br />
    <div className="progress" style={{height: '10px'}}>
        <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" style={{width: '50%', height: '10px'}}></div>
    </div>
    <br />
    <div className="progress" style={{height: '10px'}}>
        <div className="progress-bar progress-bar-striped bg-success" style={{width: '20%', height: '10px'}}></div>
        <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" style={{width: '30%', height: '10px'}}></div>
        <div className="progress-bar bg-danger" style={{width: '10%', height: '10px'}}></div>
    </div>
</>

const Pagination = () =>
<div className="container">
    <ul className="pagination pagination-sm justify-content-center"> {/* justify-content-center || justify-content-end*/}
        <li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>
        <li class="page-item active"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
    </ul>

    <div className="container">
        <h4>Breadcrumbs:</h4>
        <ul class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Photos</a></li>
            <li class="breadcrumb-item"><a href="#">Summer 2017</a></li>
            <li class="breadcrumb-item"><a href="#">Italy</a></li>
            <li class="breadcrumb-item active">Rome</li>
        </ul>
    </div>
</div>

const ListGroup = () => 
<div className="container" id="list-group">
    <h4>Basic List Group:</h4>
    <ul className="list-group">
        <li className="list-group-item active">First item (.active)</li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
            Second item
            <span className="badge badge-primary badge-pill">119</span>
        </li>
        <li className="list-group-item disabled">Third item (.disabled)</li>
    </ul>
    <br />
    <h4>Linked items group: (.list-group-flush)</h4>
    <div className="list-group list-group-flush">
        <a href="#list-group" className="list-group-item list-group-item-action active">First item</a>
        <a href="#list-group" className="list-group-item list-group-item-action">Second item</a>
        <a href="#list-group" className="list-group-item list-group-item-action disabled">Third item</a>
    </div>
    <br />
    <h4>Horizontal list groups: (.list-group-horizontal)</h4>
    <ul className="list-group list-group-horizontal">
        <li className="list-group-item active">First item (.active)</li>
        <li className="list-group-item list-group-item-warning">Second item (.list-group-item-warning)</li>
        <li className="list-group-item disabled">Third item (.disabled)</li>
    </ul>
</div>

const Card = () =>
<div className="container">
    <h4>Basic card:</h4>
    <div className="card">
        <div className="card-header">Header</div>
        <div className="card-body">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">Some example text. Some example text.</p>
            <a className="card-link">Card link</a>
            <a className="card-link">Another link</a>
        </div>
        <div className="card-footer">Footer</div>
    </div>
    <br />
    <h4>Color card:</h4>
    <div className="card bg-warning text-white" style={{width: "300px"}}>
        <div className="card-header">Header</div>
        <img className="card-img-top" src="assets/img_avatar3.png" alt="Card image" />
        <div className="card-body">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">Some example text. Some example text.</p>
            <a className="card-link">Card link</a>
            <a className="card-link">Another link</a>
            <a className="btn btn-primary" href="#">See profile</a>
        </div>
        <div className="card-footer">Footer</div>
    </div>
    <br />
    <h4>Card columns:</h4>
    <div className="card-columns">
        <div className="card bg-primary">
            <p className="card-text">Some text inside the card</p>
        </div>
        <div className="card bg-warning">
            <p className="card-text">Some text inside the card</p>
        </div>
        <div className="card bg-danger">
            <p className="card-text">Some text inside the card</p>
        </div>
        <div className="card bg-success">
            <p className="card-text">Some text inside the card</p>
        </div>
        <div className="card bg-light">
            <p className="card-text">Some text inside the card</p>
        </div>
        <div className="card bg-info">
            <p className="card-text">Some text inside the card</p>
        </div>
    </div>
</div>

const Dropdown = () =>
<div className="container">
    <h4>Basic dropdown:</h4>
    <div className="dropdown">
        <button 
            type="button" 
            className="btn btn-primary dropdown-toggle"
            data-toggle="dropdown"
        >
            Dropdown button
        </button>
        <div className="dropdown-menu">
            <a className="dropdown-item active">Link 1 (active)</a>
            <a className="dropdown-item">Link 2</a>
            <a className="dropdown-item disabled">Link 3 (disabled)</a>
            <div className="dropdown-divider" />
            <h5 className="dropdown-header">Dropdown header</h5>
            <a className="dropdown-item">Another link (dropdown-divider)</a>
        </div>
    </div>
</div>

const Collapse = () => 
<div className="container">
    <h4>Basic collapse:</h4>
    <button 
        type="button" 
        className="btn btn-primary" 
        data-toggle="collapse"
        data-target="#basic-collapse"
    >Show content collapse</button>
    <div id="basic-collapse" className="collapse">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </div>
    <br />
    <h4>Accordion collapse:</h4>
    <div id="accordion">
        <div className="card">
            <div className="card-header">
                <a className="card-link" data-toggle="collapse" href="#collapseOne">
                    Collapsible group item #1
                </a>
            </div>
            <div 
                id="collapseOne" 
                className="collapse"
                // data-parent="#accordion"
            >
                <div className="card-body">
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="card-header">
                <a className="card-link" data-toggle="collapse" href="#collapseTwo">
                    Collapsible group item #2
                </a>
            </div>
            <div
                id="collapseTwo" 
                className="collapse"
            >
                <div className="card-body">
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p>
                </div>
            </div>
        </div>
    </div>
</div>

const Nav = () => 
<div className="container">
    <h4>1 - Basic Nav:</h4>
    <ul className="nav nav-pills nav-tabs">
        <li className="nav-item">
            <a className="nav-link active" href="#">Link (active)</a>
        </li>
        <li className="nav-item dropdown">
            <a 
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
            >Dropdown</a>
            <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Link #</a>
                <a className="dropdown-item" href="#">Link #</a>
                <a className="dropdown-item" href="#">Link #</a>
            </div>
        </li>
        <li className="nav-item">
            <a className="nav-link disabled" href="#">Link (disabled)</a>
        </li>
    </ul>
    <br />
    <h4>2 - Vertical nav: <small>.flex-column</small></h4>
    <h4>3 - Tab nav: <small>nav nav-tabs</small></h4>
    <h4>4 - Toggleable / Dynamic Tabs Nav:</h4>
    <ul className="nav nav-tabs nav-pills" role="tablist">
        <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#home">Home</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#menu1">Menu 1</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#menu2">Menu 2</a>
        </li>
    </ul>
    <div className="tab-content">
        <div id="home" className="container tab-pane active">
            <h3>HOME</h3>
            <p>Lorem ipsum dolor sit amet.......</p>
        </div>
        <div id="menu1" className="container tab-pane fade">
            <h3>Menu 1</h3>
            <p>Lorem ipsum dolor sit amet.......</p>
        </div>
        <div id="menu2" className="container tab-pane fade">
            <h3>Menu 2</h3>
            <p>Lorem ipsum dolor sit amet.......</p>
        </div>
    </div>
</div>

const Navbar = () => 
<div className="container">
    <h4>Basic navbar:"<small>navbar bg-light</small>"</h4>
    <h5>Horizontal navbar:</h5>
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
            <img src="assets/logo.png" alt="Logo" style={{width: "40px"}} />
        </a>

        <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navCollapse"
        >
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navCollapse">
            <ul className="navbar-nav">
                <li className="nav-item"><a className="nav-link">Link</a></li>
                <li className="nav-item"><a className="nav-link">Link</a></li>
                <li className="nav-item"><a className="nav-link">Link</a></li>
                <li className="nav-item dropdown">
                    <a
                        href="#"
                        id="navbardrop"
                        data-toggle="dropdown"
                        className="nav-link dropdown-toggle"
                    >Dropdown</a>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Link</a>
                        <a className="dropdown-item" href="#">Link</a>
                        <a className="dropdown-item" href="#">Link</a>
                    </div>
                </li>
            </ul>
        </div>

        <form className="form-inline">
            <input
                type="text" 
                placeholder="Search"
                className="form-control mr-sm-2"
            />
            <button type="submit" className="btn btn-success">Search</button>
        </form>
    </nav>
</div>

const Forms = (props) => 
<div className="container">
    <h4>Form inline: <small>"form classname="form-inline"</small></h4>
    <h4>There are two types of form layouts:</h4>
    <p>• Stacked (full-width) form</p>
    <p>• Inline form</p>
    <h4>Basic form:</h4>
    <form className={props.className}>
        <div className="form-group">
            <label for="email">Email address:</label>
            <input 
                type="text" 
                className="form-control"
                placeholder="Enter email"
                id="email"
            />
        </div>
        <div className="form-group">
            <label for="pwd">Email Password:</label>
            <input 
                type="password" 
                className="form-control"
                placeholder="Enter password"
                id="pwd"
            />
        </div>
        <div className="form-group form-check">
            <label>
                <input type="checkbox" className="form-check"/> Remember me
            </label>
        </div>
        <button type="submit" className="btn btn-success">Submit</button>
    </form>
    <br />
    <h4>Form validation:</h4>
    <form className="was-validated">
        <div className="form-group">
            <label htmlFor="uname">Username:</label>
            <input
                id="uname"
                type="text"
                className="form-control"
                placeholder="Enter username"
                name="uname"
                required
            />
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Please fill out this field.</div>
        </div>
        <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input
                id="pwd"
                type="password"
                className="form-control"
                placeholder="Enter passwrod"
                name="pwd"  
                required
            />
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Please fill out this field.</div>
        </div>
        <div className="form-group form-check">
            <label className="form-check-label">
                <input
                    type="checkbox"
                    className="form-check-input"
                    name="remember"
                    required
                /> I agree on blabla.
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback">Check this checkbox to continue.</div>
            </label>
        </div>
        <button type="submit" className="btn btn-success">Submit</button>
    </form>
</div>

const Modals = () => 
<>
    <button
        type="button" 
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#demoModal"
    >Show Modal</button>
    <div className="modal fade" id="demoModal">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">Modal heading</h4>
                    <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                    >&times;</button>
                </div>
                <div className="modal-body">
                    Modal body....
                </div>
                <div className="modal-footer">
                    <button
                        type="button"
                        className="btn btn-danger"
                        data-dismiss="modal"
                    >Close</button>
                </div>
            </div>
        </div>
    </div>
</>

const Alerts = () => 
<div className="container">
    <div className="alert alert-success">
        <button type="button" className="close" data-dismiss="alert">&times;</button>
        <strong>Sucess!</strong> Indicates a successful or positive action.
    </div>
    <div className="alert alert-warning alert-dismissible">
        <button type="button" className="close" data-dismiss="alert">&times;</button>
        <strong>Warning!</strong>
    </div>
</div>

// ################################################
const ComponentsPage = () => 
<>    
    <div className="container">
        <h2>#Grids:</h2>
        <Grids />
        <br />

        <h2>#Texts:</h2>
        <Texts />
        <br />

        <h2>#Tables:</h2>
        <Tables />
        <br />

        <h2>#Buttons:</h2>
        <Buttons />
        <br />

        <h2>#Progress Bars:</h2>
        <ProgressBars />
        <br />

        <h2>#Pagination</h2>
        <Pagination />
        <br />

        <h2>#List Groups: </h2>
        <ListGroup />
        <br />

        <h2>#Cards:</h2>
        <Card />
        <br />

        <h2>#Dropdowns:</h2>
        <Dropdown/>
        <br />

        <h2>#Collapse</h2>
        <Collapse />
        <br />

        <h2>#Navs:</h2>
        <Nav />
        <br />

        <h2>#Navbar:</h2>
        <Navbar />
        <br />

        <h2>#Forms:</h2>
        <Forms />
        <br />

        <h2>#Modals:</h2>
        <Modals />
        <br />

        <h2>#Alert:</h2>
        <Alerts />
        <br />
    </div>
</>;

export default ComponentsPage;
