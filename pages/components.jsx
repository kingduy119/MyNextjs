// import React from 'react';

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
//                     <h4>John Doe <small><i>Posted on February 19, 2016</i></small></h4>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

//                     <div class="media p-3">
//                         <img src="assets/img_avatar3.png" alt="John Doe" class="mr-3 mt-3 rounded-circle" style={{width:"60px"}}/>
//                         <div class="media-body">
//                             <h4>John Doe <small><i>Posted on February 19, 2016</i></small></h4>
//                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//                         </div>
//                     </div>

//                     <div class="media p-3">
//                         <img src="assets/img_avatar3.png" alt="John Doe" class="mr-3 mt-3 rounded-circle" style={{width:"60px"}}/>
//                         <div class="media-body">
//                             <h4>John Doe <small><i>Posted on February 19, 2016</i></small></h4>
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

// export default ComponentsPage;
