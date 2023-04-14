
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


export default function Header(){
    return (
        <div>
            
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="/">Add Customer</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/display">Display Customer Details</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}