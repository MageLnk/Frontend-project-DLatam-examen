import Topbar from './Topbar'
import Navbar from './Navbar';
import Info from './Info';

// App
const HeaderContent = () => {
  return (
      <div className="header">
        <Topbar/>
        <Navbar/>
        <Info/>
      </div>
    )
  };

export default HeaderContent;


