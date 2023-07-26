import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PokemonHome } from "./pokemon-home"
import { PokemonDetails } from "./pokemon-details";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path = '/' element={<PokemonHome />} />
                <Route exact path = '/pokemon-details/:name' element={<PokemonDetails />}/>
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }