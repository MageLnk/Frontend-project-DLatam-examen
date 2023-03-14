import Topbar from './Topbar'
import Navbar from './Navbar';
import Info from './Info';

// App
const HeaderContent = () => {
  return (
      <div class="header">
        <Topbar/>
        <Navbar/>
        <Info/>
      </div>
    )
  };

export default HeaderContent;


