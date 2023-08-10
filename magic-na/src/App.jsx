import { Route, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Tarot from "./components/Tarot";
import Guias from "./components/Guias";
import DescubreTuArcano from "./components/DescubreTuArcano";
import PagoDeGuias from "./components/PagoDeGuias";
//  -----------importacion de arcanos----------
import ElMago from "./components/arcanos/el-mago/ElMago";
import LaSacerdotisa from "./components/arcanos/la-sacerdotisa/LaSacerdotisa";
import LaEmperatriz from "./components/arcanos/la-emperatriz/LaEmperatriz";
import ElEmperador from "./components/arcanos/el-emperador/ElEmperador";
import ElSacerdote from "./components/arcanos/el-sacerdote/ElSacerdote";
import LosEnamorados from "./components/arcanos/los-enamorados/LosEnamorados";
import ElCarro from "./components/arcanos/el-carro/ElCarro";
import LaFuerza from "./components/arcanos/la-fuerza/LaFuerza";
import ElErmitaño from "./components/arcanos/el-ermitaño/ElErmitaño";
import RuedaFortuna from "./components/arcanos/la-rueda/RuedaFortuna";
import LaJusticia from "./components/arcanos/la-justicia/LaJusticia";
import ElColgado from "./components/arcanos/el-colgado/ElColgado";
import LaMuerte from "./components/arcanos/la-muerte/LaMuerte";
import LaTemplanza from "./components/arcanos/la-templanza/LaTemplanza";
import ElDiablo from "./components/arcanos/el-diablo/ElDiablo";
import LaTorre from "./components/arcanos/la-torre/LaTorre";
import LaEstrella from "./components/arcanos/la-estrella/LaEstrella";
import LaLuna from "./components/arcanos/la-luna/LaLuna";
import ElSol from "./components/arcanos/el-sol/ElSol";
import ElJuicio from "./components/arcanos/el-juicio/ElJuicio";
import ElMundo from "./components/arcanos/el-mundo/ElMundo";
import ElLoco from "./components/arcanos/el-loco/ElLoco";
//----------importacion de guias--------------
import DescubreTuArquetipo1 from "./components/arcanos/el-mago/DescubreTuArquetipo1";
import DescubreTuArquetipo2 from "./components/arcanos/la-sacerdotisa/DescubreTuArquetipo2";
import DescubreTuArquetipo3 from "./components/arcanos/la-emperatriz/DescubreTuArquetipo3";
import DescubreTuArquetipo4 from "./components/arcanos/el-emperador/DescubreTuArquetipo4";
import DescubreTuArquetipo5 from "./components/arcanos/el-sacerdote/DescubreTuArquetipo5";
import DescubreTuArquetipo6 from "./components/arcanos/los-enamorados/DescubreTuArquetipo6";
import DescubreTuArquetipo7 from "./components/arcanos/el-carro/DescubreTuArquetipo7";
import DescubreTuArquetipo8 from "./components/arcanos/la-fuerza/DescubreTuArquetipo8";
import DescubreTuArquetipo9 from "./components/arcanos/el-ermitaño/DescubreTuArquetipo9";
import DescubreTuArquetipo10 from "./components/arcanos/la-rueda/DescubreTuArquetipo10";
import DescubreTuArquetipo11 from "./components/arcanos/la-justicia/DescubreTuArquetipo11";
import DescubreTuArquetipo12 from "./components/arcanos/el-colgado/DescubreTuArquetipo12";
import DescubreTuArquetipo13 from "./components/arcanos/la-muerte/DescubreTuArquetipo13";
import DescubreTuArquetipo14 from "./components/arcanos/la-templanza/DescubreTuArquetipo14";
import DescubreTuArquetipo15 from "./components/arcanos/el-diablo/DescubreTuArquetipo15";
import DescubreTuArquetipo16 from "./components/arcanos/la-torre/DescubreTuArquetipo16";
import DescubreTuArquetipo17 from "./components/arcanos/la-estrella/DescubreTuArquetipo17";
import DescubreTuArquetipo18 from "./components/arcanos/la-luna/DescubreTuArquetipo18";
import DescubreTuArquetipo19 from "./components/arcanos/el-sol/DescubreTuArquetipo19";
import DescubreTuArquetipo20 from "./components/arcanos/el-juicio/DescubreTuArquetipo20";
import DescubreTuArquetipo21 from "./components/arcanos/el-mundo/DescubreTuArquetipo21";
import DescubreTuArquetipo22 from "./components/arcanos/el-loco/DescubreTuArquetipo22";
function App() {
  return (
    <Box
      position="relative"
      minHeight="100vh"
      bgImage="url('https://res.cloudinary.com/dldclv2km/image/upload/v1690774512/Blue_White_One_Photo_Night_Sky_Desktop_Wallpaper_tngqv7.png')"
      bgSize="cover"
      bgPosition="center"
    >
      <Box position="relative" zIndex="1" bg="transparent">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/tarot" element={<Tarot />} />
          <Route path="/guias" element={<Guias />} />
          <Route
            path="/guias/descubretuarcano"
            element={<DescubreTuArcano />}
          />
          <Route
            path="/guias/descubretuarcano/descubretuarquetipo/formadepago"
            element={<PagoDeGuias />}
          />
          {/* --------ARCANOS--------- */}
          <Route path="/guias/descubretuarcano/elmago" element={<ElMago />} />
          <Route
            path="/guias/descubretuarcano/lasacerdotisa"
            element={<LaSacerdotisa />}
          />
          <Route
            path="/guias/descubretuarcano/laemperatriz"
            element={<LaEmperatriz />}
          />
          <Route
            path="/guias/descubretuarcano/elemperador"
            element={<ElEmperador />}
          />
          <Route
            path="/guias/descubretuarcano/elsacerdote"
            element={<ElSacerdote />}
          />
          <Route
            path="/guias/descubretuarcano/losenamorados"
            element={<LosEnamorados />}
          />
          <Route path="/guias/descubretuarcano/elcarro" element={<ElCarro />} />
          <Route
            path="/guias/descubretuarcano/lafuerza"
            element={<LaFuerza />}
          />
          <Route
            path="/guias/descubretuarcano/elermitanio"
            element={<ElErmitaño />}
          />
          <Route
            path="/guias/descubretuarcano/laruedadelafortuna"
            element={<RuedaFortuna />}
          />
          <Route
            path="/guias/descubretuarcano/lajusticia"
            element={<LaJusticia />}
          />
          <Route
            path="/guias/descubretuarcano/elcolgado"
            element={<ElColgado />}
          />
          <Route
            path="/guias/descubretuarcano/lamuerte"
            element={<LaMuerte />}
          />
          <Route
            path="/guias/descubretuarcano/latemplanza"
            element={<LaTemplanza />}
          />
          <Route
            path="/guias/descubretuarcano/eldiablo"
            element={<ElDiablo />}
          />
          <Route path="/guias/descubretuarcano/latorre" element={<LaTorre />} />
          <Route
            path="/guias/descubretuarcano/laestrella"
            element={<LaEstrella />}
          />
          <Route path="/guias/descubretuarcano/laluna" element={<LaLuna />} />
          <Route path="/guias/descubretuarcano/elsol" element={<ElSol />} />
          <Route
            path="/guias/descubretuarcano/eljuicio"
            element={<ElJuicio />}
          />
          <Route path="/guias/descubretuarcano/elmundo" element={<ElMundo />} />
          <Route path="/guias/descubretuarcano/elloco" element={<ElLoco />} />
          {/* -------------Guías---------------- */}
          <Route
            path="/guias/descubretuarcano/elmago/descubretuarquetipo"
            element={<DescubreTuArquetipo1 />}
          />
          <Route
            path="/guias/descubretuarcano/lasacerdotisa/descubretuarquetipo"
            element={<DescubreTuArquetipo2 />}
          />
          <Route
            path="/guias/descubretuarcano/laemperatriz/descubretuarquetipo"
            element={<DescubreTuArquetipo3 />}
          />
          <Route
            path="/guias/descubretuarcano/elemperador/descubretuarquetipo"
            element={<DescubreTuArquetipo4 />}
          />
          <Route
            path="/guias/descubretuarcano/elsacerdote/descubretuarquetipo"
            element={<DescubreTuArquetipo5 />}
          />
          <Route
            path="/guias/descubretuarcano/losenamorados/descubretuarquetipo"
            element={<DescubreTuArquetipo6 />}
          />
          <Route
            path="/guias/descubretuarcano/elcarro/descubretuarquetipo"
            element={<DescubreTuArquetipo7 />}
          />
          <Route
            path="/guias/descubretuarcano/lafuerza/descubretuarquetipo"
            element={<DescubreTuArquetipo8 />}
          />
          <Route
            path="/guias/descubretuarcano/elermitaño/descubretuarquetipo"
            element={<DescubreTuArquetipo9 />}
          />
          <Route
            path="/guias/descubretuarcano/laruedadelafortuna/descubretuarquetipo"
            element={<DescubreTuArquetipo10 />}
          />
          <Route
            path="/guias/descubretuarcano/lajusticia/descubretuarquetipo"
            element={<DescubreTuArquetipo11 />}
          />
          <Route
            path="/guias/descubretuarcano/elcolgado/descubretuarquetipo"
            element={<DescubreTuArquetipo12 />}
          />
          <Route
            path="/guias/descubretuarcano/lamuerte/descubretuarquetipo"
            element={<DescubreTuArquetipo13 />}
          />
          <Route
            path="/guias/descubretuarcano/latemplanza/descubretuarquetipo"
            element={<DescubreTuArquetipo14 />}
          />
          <Route
            path="/guias/descubretuarcano/eldiablo/descubretuarquetipo"
            element={<DescubreTuArquetipo15 />}
          />
          <Route
            path="/guias/descubretuarcano/latorre/descubretuarquetipo"
            element={<DescubreTuArquetipo16 />}
          />
          <Route
            path="/guias/descubretuarcano/laestrella/descubretuarquetipo"
            element={<DescubreTuArquetipo17 />}
          />
          <Route
            path="/guias/descubretuarcano/laluna/descubretuarquetipo"
            element={<DescubreTuArquetipo18 />}
          />
          <Route
            path="/guias/descubretuarcano/elsol/descubretuarquetipo"
            element={<DescubreTuArquetipo19 />}
          />
          <Route
            path="/guias/descubretuarcano/eljuicio/descubretuarquetipo"
            element={<DescubreTuArquetipo20 />}
          />
          <Route
            path="/guias/descubretuarcano/elmundo/descubretuarquetipo"
            element={<DescubreTuArquetipo21 />}
          />
          <Route
            path="/guias/descubretuarcano/elloco/descubretuarquetipo"
            element={<DescubreTuArquetipo22 />}
          />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
