


const Infomation = (props) => (
    <div className="row">
        <div className="col-sm-6">
            <h4><b>Nguyen Hoang Duy</b></h4>
            <p>Da Nang-Viet Nam</p>
            <p>11/09/1992</p>
            <p>Male</p>
        </div>
        
        <div className="col-sm-6">
            <h4><b>Fullstack JS Developer</b></h4>
            <p>hoangduy1192@gmail.com</p>
            <p>hoangduy1192</p>
            <p>(+84)76 677 5461</p>
        </div>
    </div>
)


const Content = () => (
    <div className="row">
        <div className="col-sm-6">
            <h4><b>Education:</b></h4> {/* #Education */}
            <div className="mg-t4 mg-b4">
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
                <h6>2018-2020 | Gameloft Company - Junior Programer</h6>
                <ul>
                    <li>Writing, editing, and analysing code in C++.</li>
                    <li>Resolve problems about UI in game.</li>
                    <li>Handle and request to 3thparty to resolve error from serverside and gameside</li>
                </ul>
                <h6>2020-2021 | RnD Researching and studing </h6>
                <ul>
                    <li>Learning how to use ReactJS and NodeJS and how do they work.</li>
                    <li>Creating an application have authentication function and auth with google account</li>
                    <li>Handling state of component with ReduxJS</li>
                </ul>
            </div>
            <hr />

            <h4><b>Award:</b></h4> {/* #Award */}
            <div className="mg-t4 mg-b4">
                <h6>C++ Certificates | By Hackerrank.com</h6>
                <img src="assets/cert_inter_cpp.png" style={{width:"80%", height:"auto"}} />
                <a href="https://www.hackerrank.com/certificates/882a7879fb3c">https://www.hackerrank.com/certificates/882a7879fb3c</a>
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

            <h6><b>ReactJS:</b></h6>
            <div className="bg-lightgrey round-16">
                <div className="white-bluedark round-16 text-center tiny" style={{width:"50%"}}>50%</div>
            </div>
            <hr />

            <h6><b>NodeJS:</b></h6>
            <div className="bg-lightgrey round-16">
                <div className="white-bluedark round-16 text-center tiny" style={{width:"55%"}}>55%</div>
            </div>
            <hr />

            <h6><b>Framework/Library:</b></h6>
            <li>Redux, Express, NextJS, VueJS.</li>

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
)

function HoangDuyPage(props) {
    return <>
        <div className="pd-8">
            <div className="bg-black mg-b8" style={{height:"10px"}} />
            
            <div className="bor-l pd-l16 pd-r16" style={{marginLeft: "50px", borderWidth:"4px"}}>
                <Infomation />
                <hr />
                <Content />
            </div>

            <div className="bg-black mg-t8" style={{height:"10px"}} />
        </div>
        
    </>;
}

export default HoangDuyPage;