
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
//                     <h2>About Me</h2>
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
//                     <h2>TITLE HEADING</h2>
//                     <h5>Title description, Dec 7, 2017</h5>
//                     <div style={{height:"200px", backgroundColor:"#ccc"}} />
//                     <p>Some text..</p>
//                     <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
//                     <br />

//                     <h2>TITLE HEADING</h2>
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
//                     <h2>John Doe <small><i>Posted on February 19, 2016</i></small></h2>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

//                     <div class="media p-3">
//                         <img src="assets/img_avatar3.png" alt="John Doe" class="mr-3 mt-3 rounded-circle" style={{width:"60px"}}/>
//                         <div class="media-body">
//                             <h2>John Doe <small><i>Posted on February 19, 2016</i></small></h2>
//                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//                         </div>
//                     </div>

//                     <div class="media p-3">
//                         <img src="assets/img_avatar3.png" alt="John Doe" class="mr-3 mt-3 rounded-circle" style={{width:"60px"}}/>
//                         <div class="media-body">
//                             <h2>John Doe <small><i>Posted on February 19, 2016</i></small></h2>
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


const ComponentsPage = () => 
<>    
    <div className="container">
        <h2>Grids:</h2>
        <Grids />
        <br />

        <h2>Texts:</h2>
        <Texts />
        <br />

        <h2>Tables:</h2>
        <Tables />
        <br />

        <h2>Buttons:</h2>
        <Buttons />
        <br />

        <h2>Progress Bars:</h2>
        <ProgressBars />
        <br />

        <h2>Pagination</h2>
        <Pagination />
        <br />

        <h2>List Groups: </h2>
        <br />

        <h2>Cards:</h2>
        <br />

        <h2>Dropdowns:</h2>
        <br />

        <h2>Collapse</h2>
        <br />

        <h2>Navs:</h2>
        <br />

        <h2>Navbar:</h2>
        <br />
    </div>
</>;

export default ComponentsPage;
