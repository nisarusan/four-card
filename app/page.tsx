import './style.css';
import Image from 'next/image';
import KarmaIcon from '../public/images/icon-karma.svg';
import Super from '../public/images/icon-supervisor.svg';
import Calc from '../public/images/icon-calculator.svg';
import Team from '../public/images/icon-team-builder.svg';
export default function Home() {
  return (
 <body>
 <div className="intro">
     <h2>
         Reliable, efficient deliver
     </h2>
     <h2><strong>Powered by Technology</strong></h2>
         <p>Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is
         successful</p>
 </div>
 <div className="grid-container">
     <div className="items super"><h2>Super visor</h2>
         <p>Monitors activity to identify project roadblocks|</p>
         <div className="img-container">
             <Image src={Super} alt="Karma Icon"  className="icn"/>
         </div>
     </div>
     <div className="items team">   <h2>Team Build</h2>
         <p>Monitors activity to identify project roadblocks|</p>
         <div className="img-container">
             <Image src={Team} alt="Karma Icon"  className="icn"/>
         </div>
     </div>
     <div className="items calc"><h2>Calculator</h2>
         <p>Monitors activity to identify project roadblocks|</p>
         <div className="img-container">
             <Image src={Calc} alt="Karma Icon"  className="icn"/>
         </div>
     </div>
     <div className="items karma"><h2>Karma</h2>
         <p>Monitors activity to identify project roadblocks</p>
         <div className="img-container">
             <Image src={KarmaIcon} alt="Karma Icon"  className="icn"/>
         </div>
     </div>
 </div>

 </body>
  );
}
