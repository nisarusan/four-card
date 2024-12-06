import './style.css';
import Image from 'next/image';
import KarmaIcon from '../public/images/icon-karma.svg';
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
             <Image src={KarmaIcon} alt="Karma Icon"  className="icn"/>
         </div>
     </div>
     <div className="items team">Team Build
         <p>Monitors activity to identify project roadblocks|</p>
         <div className="img-container">
             <Image src={KarmaIcon} alt="Karma Icon"  className="icn"/>
         </div>
     </div>
     <div className="items calc">Calculator
         <p>Monitors activity to identify project roadblocks|</p>
         <div className="img-container">
             <Image src={KarmaIcon} alt="Karma Icon"  className="icn"/>
         </div>
     </div>
     <div className="items karma">Karma
         <p>Monitors activity to identify project roadblocks</p>
         <div className="img-container">
             <Image src={KarmaIcon} alt="Karma Icon"  className="icn"/>
         </div>
     </div>
 </div>

 </body>
  );
}
