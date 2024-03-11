import Header from './Components/Header';
import './assets/css/authentication.css';
import './assets/css/blog.css';
import './assets/css/chatapp.css';
import './assets/css/bootstrap-select.css';
import './assets/css/color_skins.css';
import './assets/css/dataTables.bootstrap4.min.css';
import './assets/css/dropzone.css';
import './assets/css/inbox.css';
import './assets/css/jquery-jvectormap-2.0.3.min.css';
// import './assets/css/lightgallery.css';
import './assets/css/main.css';
import './assets/css/plugin.css';
import './assets/css/timeline.css';
import './assets/fonts/Material-Design-Iconic-Fontd1f1.ttf';
import './assets/fonts/Material-Design-Iconic-Fontd1f1.woff';
import './assets/fonts/Material-Design-Iconic-Fontd1f1.woff2';
import './assets/fonts/nucleo-outline.eot';
import './assets/fonts/nucleo-outline.ttf';
import './assets/fonts/nucleo-outline.woff';
import './assets/fonts/nucleo-outline.woff2';
import LeftSidebar from './Components/LeftSidebar';
import Main from './Components/Main';




function App() {
  return (
    <body class="theme-purple">
      <Header/>
      <LeftSidebar/>
      <Main/>
    </body>
  );
}

export default App;
