

function HoangDuyPage(props) {
    return <>
        {/* Information */}
        <div className="container bor-b pd-t24 pd-b24">
          <div className="row">
                <div className="col-sm-4">
                    <h4><b>Nguyen Hoang Duy</b></h4>
                    <p>Da Nang-Viet Nam</p>
                    <p>11/09/1992</p>
                    <p>Male</p>
                </div>
                <div className="col-sm-2">
                    <img src="assets/profile_4.jpg" style={{borderRadius:"10%", width:"100%"}}/>
                </div>
                <div className="col-sm-6">
                    <h4><b>Fullstack JS Developer</b></h4>
                    <p>hoangduy1192@gmail.com</p>
                    <p>hoangduy1192</p>
                    <p>(+84)76 677 5461</p>
                </div>
            </div>
       </div>

        <div className="container ">
            <div className="row">
                <div className="col-sm-6">
                    <h4><b>Education:</b></h4> {/* #Education */}
                    <div className="mg-t4 mg-b4">
                        <h6>2008-2010 | Ngo Quyen High School</h6>
                        <h6>2011-2013 | Da Nang Polytechnic College</h6>
                        <ul>
                            <li>Studying  database management system.</li>
                            <li>Studying web design and creating web site with open source (joomla, wordpress).</li>
                            <li>Window and Linux operating systems.</li>
                            <li>Basic and advanced programming techniques.</li>
                            <li>Operation and maintenance of network systems.</li>
                        </ul>
                    </div>
                    <hr />

                    <h4><b>Experience:</b></h4> {/* #Experience */}
                    <div className="mg-t4 mg-b4">
                        <h6>2013-2018 | Freelancer Job</h6>
                        <h6>2018-2020 | Gameloft Company - Junior Programer</h6>
                        <ul>
                            <li>Writing, editing, and analysing code in C++.</li>
                            <li>Resolve problems about UI in game.</li>
                            <li>Handle and request to 3thparty to resolve error from serverside and gameside</li>
                        </ul>
                        <h6>2020-2021 | RnD Researching and studing </h6>
                        <p>Learning and searching every thing to develop a basic system. Follow detail:</p>
                        <h6>FE - ReactJS:</h6>
                        <ul>
                            <li>1</li>
                            <li>1</li>
                        </ul>
                        <h6>BE - NodeJS:</h6>
                        <ul>
                            <li>1</li>
                            <li>1</li>
                        </ul>
                        <h6>DevOps:</h6>
                        <ul>
                            <li>1</li>
                            <li>1</li>
                        </ul>
                    </div>
                </div>
                
                <div className="col-sm-6">
                    <h4><b>Skill:</b></h4> {/* #Skill */}
                    <h6><b>C++:</b></h6>
                    <div className="bg-lightgrey round-16">
                        <div className="white-bluedark round-16 text-center tiny" style={{width:"80%"}}>80%</div>
                    </div>
                    <hr />

                    <h6><b>Javascript:</b></h6>
                    <div className="bg-lightgrey round-16">
                        <div className="white-bluedark round-16 text-center tiny" style={{width:"65%"}}>65%</div>
                    </div>
                    <hr />

                    <h6><b>HTML/CSS:</b></h6>
                    <div className="bg-lightgrey round-16">
                        <div className="white-bluedark round-16 text-center tiny" style={{width:"69%"}}>69%</div>
                    </div>
                    <hr />

                    <h6><b>Algorithm/Structure:</b></h6>
                    <div className="bg-lightgrey round-16">
                        <div className="white-bluedark round-16 text-center tiny" style={{width:"55%"}}>55%</div>
                    </div>
                    <hr />

                    <h6><b>Framework/Library:</b></h6>
                    <li>React/Redux, NodeJs/Express, NextJS, VueJS.</li>

                    <h6><b>Knowledge:</b></h6>
                    <li>RestFul API, MERN Stack.</li>

                    <h6><b>Operator Systems:</b></h6>
                    <li>Window, Linux, Ubuntu.</li>

                    <h6><b>DevOps:</b></h6>
                    <li>AWS, Docker, Jenkins, Nginx.</li>

                    <h6><b>Language:</b></h6>
                    <li>English, Viet Nam.</li>
                </div>
            </div>
        </div>
    </>;
}

export default HoangDuyPage;