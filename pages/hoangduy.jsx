
const Infomation = (props) => (
    <div className="row">
        <div className="col-sm-6">
            <h4><b>Nguyen Hoang Duy</b></h4>
            <p><i className="fa fa-home fa-fw pd-r4"/>Da Nang-Viet Nam</p>
            <p><i className="fa fa-birthday-cake fa-fw pd-r4"/>11/09/1992</p>
            <p><i className="fa fa-male fa-fw pd-r4"/>Male</p>
        </div>
        
        <div className="col-sm-6">
            <h4><b>Fullstack JS Developer</b></h4>
            <p><i className="fa fa-envelope fa-fw pd-r4"/>hoangduy1192@gmail.com</p>
            <p><i className="fa fa-skype fa-fw pd-r4"/>hoangduy1192</p>
            <p><i className="fa fa-phone fa-fw pd-r4"/>(+84)76 677 5461</p>
        </div>
    </div>
)

const Summary = (props) => (
    <div className="container-fluid">
        <p>
            I'm a game developer with 2+ years experience of C++ language. I really like technology
            and i want to be a professional in the future. I hope i can find a good environment to
            develop for myself. That's the best way for me to contribute and develop for company.
        </p>
        <p>System, Infrastructure, IoT. That's the way i am heading and is not limited by any programing language.</p>
    </div>
)

const Content = () => (
    <div className="row">
        <div className="col-sm-6">
            <h4><b>Education:</b></h4> {/* #Education */}
            <div className="mg-t4 mg-b4">
                <h6 className="green"><b>2011-2013 | Da Nang Polytechnic College</b></h6>
                <ul>
                    <li>Studying database management system.</li>
                    <li>Studying web design and creating web site with open source (joomla, wordpress).</li>
                    <li>Window and Linux operating systems.</li>
                    <li>Basic and advanced programming techniques.</li>
                    <li>Operation and maintenance of network systems.</li>
                </ul>
            </div>
            <hr />

            <h4><b>Experience:</b></h4> {/* #Experience */}
            <div className="mg-t4 mg-b4">
                <h6 className="green"><b>2018-2020 | Gameloft Company - Junior Programer</b></h6>
                <ul>
                    <li>Writing, editing, and analysing code.</li>
                    <li>Resolve problems about UI in game.</li>
                    <li>Handle and request to 3th party to resolve problem from serverside and gameside</li>
                    <li>Support others to resolve hard problem that is team member or other team.</li>
                </ul>
                <h6 className="green"><b>2020-2021 | RnD Researching and Learning</b></h6>
                <ul>
                    <li>Learning how to use ReactJS and NodeJS and how do they work.</li>
                    <li>Handling state of component with ReduxJS</li>
                    <li>Creating an application have authentication function and login page with google account</li>
                    <li>Using MongoDB to manage database</li>
                    <li>Using Docker and Nginx to deploy application to AWS Cloud or Google Cloud</li>
                </ul>
            </div>
            <hr />

            <h4><b>Award:</b></h4> {/* #Award */}
            <div className="mg-t4 mg-b4">
                <h6 className="green">C++ Certificates | By Hackerrank.com</h6>
                <img src="assets/cert_inter_cpp.png" style={{width:"70%", height:"auto"}} />
                <a href="https://www.hackerrank.com/certificates/882a7879fb3c">https://www.hackerrank.com/certificates/882a7879fb3c</a>
            </div>
        </div>
        
        <div className="col-sm-6 pd-r32">
            <h4><b>Skill:</b></h4> {/* #Skill */}
            <h6 className="green"><b>C++:</b></h6>
            <div className="bg-lightgrey round-16">
                <div className="white-bluedark round-16 text-center tiny" style={{width:"80%"}}>80%</div>
            </div>
            <hr />

            <h6 className="green"><b>Javascript:</b></h6>
            <div className="bg-lightgrey round-16">
                <div className="white-bluedark round-16 text-center tiny" style={{width:"65%"}}>65%</div>
            </div>
            <hr />

            <h6 className="green"><b>HTML/CSS:</b></h6>
            <div className="bg-lightgrey round-16">
                <div className="white-bluedark round-16 text-center tiny" style={{width:"69%"}}>69%</div>
            </div>
            <hr />

            <h6 className="green"><b>Algorithm/Data Structure:</b></h6>
            <div className="bg-lightgrey round-16">
                <div className="white-bluedark round-16 text-center tiny" style={{width:"55%"}}>55%</div>
            </div>
            <hr />

            <h6 className="green"><b>ReactJS:</b></h6>
            <div className="bg-lightgrey round-16">
                <div className="white-bluedark round-16 text-center tiny" style={{width:"50%"}}>50%</div>
            </div>
            <hr />

            <h6 className="green"><b>NodeJS:</b></h6>
            <div className="bg-lightgrey round-16">
                <div className="white-bluedark round-16 text-center tiny" style={{width:"55%"}}>55%</div>
            </div>
            <hr />

            <h6 className="green"><b>Framework/Library:</b></h6>
            <li>Redux, Express, NextJS, VueJS</li>

            <h6 className="green"><b>Database:</b></h6>
            <li>MongoDB, MySQL</li>

            <h6 className="green"><b>Knowledge:</b></h6>
            <li>RestFul API, MERN Stack.</li>

            <h6 className="green"><b>Operator Systems:</b></h6>
            <li>Window, Linux, Ubuntu.</li>

            <h6 className="green"><b>DevOps:</b></h6>
            <li>AWS, Docker, Jenkins, Nginx.</li>

            <h6 className="green"><b>Version control:</b></h6>
            <li>Git, SVN.</li>

            <h6 className="green"><b>Tool:</b></h6>
            <li>VS Studio, Vs Code, PuTTy, WinSCP...etc.</li>

            <h6 className="green"><b>Language:</b></h6>
            <li>English, Viet Nam.</li>
        </div>
    </div>
)

function HoangDuyPage(props) {
    return <>
        <div className="pd-8">
            <div className="bg-black mg-b8" style={{height:"10px"}} />
            
            <div className="bor-l pd-l32 mg-r64" style={{marginLeft: "50px", borderWidth:"4px"}}>
                <Infomation />
                <hr />
                <Summary />
                <hr />
                <Content />
            </div>

            <div className="bg-black mg-t8" style={{height:"10px"}} />
        </div>
        
    </>;
}

export default HoangDuyPage;