import { BrowserRouter, Route, Link, Switch } from "react-router-dom"; //import the package
import About from "Pages/About" //import your signIn page

function MainRouter(){
    return(
        <BrowserRouter>
            <div className="container">
                <Switch>
                    <Route path="/About" exact component={About} />
                </Switch>
            </div>
       </BrowserRouter>

    )
}
export default MainRouter