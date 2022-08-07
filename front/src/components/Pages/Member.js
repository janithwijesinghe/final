import './Member.css'
import person1 from '../../images/pexels-daniel-xavier-1102341.jpg'
import person2 from '../../images/pexels-italo-melo-2379004.jpg'
import person3 from '../../images/pexels-justin-shaifer-1222271.jpg'
import person4 from '../../images/pexels-stefan-stefancik-91227.jpg'
import person5 from '../../images/pexels-daniel-xavier-1212984.jpg'
function Member() {
    return <>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
    <body>
        <section class = "Members">
            <div className="container">
                <h1>Our Team</h1>
                <div className="row">
                    <div className="col-md-3 profile text-center">
                        <div className="img-box">
                            <img src={person5} alt= "Tharindu" width="400" height="400"  className="img-responsive"/>
                             <ul>
                             <a href="# "><li><i class="fa fa-facebook" aria-hidden="true"></i></li></a>
                             <a href="# "><li><i class="fa fa-twitter" aria-hidden="true"></i></li></a>
                             <a href="# "><li><i class="fa fa-linkedin" aria-hidden="true"></i></li></a>
                             </ul>
                        </div>
                        <h2>Tharindu Kuruppu</h2>
                        <h3>Founder / CEO</h3>
                    </div>
                    <div className="col-md-3 profile text-center">
                        <div className="img-box">
                            <img src={person1} alt= "Raveen" width="400" height="400"className="img-responsive"/>
                             <ul>
                             <a href="# "><li><i class="fa fa-facebook" aria-hidden="true"></i></li></a>
                             <a href="# "><li><i class="fa fa-twitter" aria-hidden="true"></i></li></a>
                             <a href="# "><li><i class="fa fa-linkedin" aria-hidden="true"></i></li></a>
                             </ul>
                        </div>
                        <h2>Raveen Wijekoon</h2>
                        <h3>Founder / CEO</h3>
                    </div>
                    <div className="col-md-3 profile text-center">
                        <div className="img-box">
                            <img src={person4} alt = "Shehan" width="400" height="400"  className="img-responsive"/>
                             <ul>
                             <a href="# "><li><i class="fa fa-facebook" aria-hidden="true"></i></li></a>
                             <a href="# "><li><i class="fa fa-twitter" aria-hidden="true"></i></li></a>
                             <a href="# "><li><i class="fa fa-linkedin" aria-hidden="true"></i></li></a>
                             </ul>
                        </div>
                        <h2>Shehan Kahandagamage</h2>
                        <h3>Secretary</h3>
                    </div>
                    <br />
                    <div className="col-md-3 profile text-center">
                        <div className="img-box">
                            <img src={person3} alt="Heshan" width="400" height="400"  className="img-responsive"/>
                             <ul>
                             <a href="# "><li><i class="fa fa-facebook" aria-hidden="true"></i></li></a>
                             <a href="# "><li><i class="fa fa-twitter" aria-hidden="true"></i></li></a>
                             <a href="# "><li><i class="fa fa-linkedin" aria-hidden="true"></i></li></a>
                             </ul>
                        </div>
                        <h2>Heshan Padukka</h2>
                        <h3>Founder Member</h3>
                    </div>
                    <div className="col-md-3 profile text-center">
                        <div className="img-box">
                            <img src={person2} alt="Hasuni" width="400" height="400"  className="img-responsive"/>
                             <ul>
                             <a href="# "><li><i class="fa fa-facebook" aria-hidden="true"></i></li></a>
                             <a href="# "><li><i class="fa fa-twitter" aria-hidden="true"></i></li></a>
                             <a href="# "><li><i class="fa fa-linkedin" aria-hidden="true"></i></li></a>
                             </ul>
                        </div>
                        <h2>Hasuni Nanayakkara</h2>
                        <h3>Founder Member</h3>
                    </div>
                </div>
            </div>
        </section>
    </body>
    </>;
}
 export default Member