import Home from "../pages/Home/Home"
import Login from "../pages/login/Login"
import Register from "../pages/register/Register"
import Help from "../pages/specialFunction/Help"
import GamePlay from "../pages/Gameplay/GamePlay"

const routes = {
    data: [
        {
          name: "Home",
          path: "/",
          component: <Home/>,
          type: "main",
        },
        {
            name: "Login",
            path: "/login",
            component: <Login/>,
            type: "",
        },
        {
            name: "Register",
            path: "/register",
            component: <Register/>,
            type: "",
         },
         {
            name: "GamePlay",
            path: "/gameplay",
            component: <GamePlay/>,
            type: "",
         },
        
         {
            name: "help",
            path: "/help",
            component: <Help />,
            type: "",
         }
    ]
}
export default routes