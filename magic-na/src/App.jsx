import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Spinner, Box } from "@chakra-ui/react";

const LandingPage = lazy(() => import("./components/LandingPage"));
const Home = lazy(() => import("./components/Home"));
const Blog = lazy(() => import("./components/Blog"));
const Tarot = lazy(() => import("./components/Tarot"));
const Guias = lazy(() => import("./components/Guias"));
const DescubreTuArcano = lazy(() => import("./components/DescubreTuArcano"));
const PagoDeGuias = lazy(() => import("./components/PagoDeGuias"));
const PagoLatam = lazy(() => import("./components/PagoLatam"));
const PagoRestoDelMundo = lazy(() => import("./components/PagoRestoDelMundo"));
//  -----------importacion de arcanos----------
const ElMago = lazy(() => import("./components/arcanos/el-mago/ElMago"));
const LaSacerdotisa = lazy(() =>
  import("./components/arcanos/la-sacerdotisa/LaSacerdotisa")
);
const LaEmperatriz = lazy(() =>
  import("./components/arcanos/la-emperatriz/LaEmperatriz")
);
const ElEmperador = lazy(() =>
  import("./components/arcanos/el-emperador/ElEmperador")
);
const ElSacerdote = lazy(() =>
  import("./components/arcanos/el-sacerdote/ElSacerdote")
);
const LosEnamorados = lazy(() =>
  import("./components/arcanos/los-enamorados/LosEnamorados")
);
const ElCarro = lazy(() => import("./components/arcanos/el-carro/ElCarro"));
const LaFuerza = lazy(() => import("./components/arcanos/la-fuerza/LaFuerza"));
const ElErmitaño = lazy(() =>
  import("./components/arcanos/el-ermitaño/ElErmitaño")
);
const RuedaFortuna = lazy(() =>
  import("./components/arcanos/la-rueda/RuedaFortuna")
);
const LaJusticia = lazy(() =>
  import("./components/arcanos/la-justicia/LaJusticia")
);
const ElColgado = lazy(() =>
  import("./components/arcanos/el-colgado/ElColgado")
);
const LaMuerte = lazy(() => import("./components/arcanos/la-muerte/LaMuerte"));
const LaTemplanza = lazy(() =>
  import("./components/arcanos/la-templanza/LaTemplanza")
);
const ElDiablo = lazy(() => import("./components/arcanos/el-diablo/ElDiablo"));
const LaTorre = lazy(() => import("./components/arcanos/la-torre/LaTorre"));
const LaEstrella = lazy(() =>
  import("./components/arcanos/la-estrella/LaEstrella")
);
const LaLuna = lazy(() => import("./components/arcanos/la-luna/LaLuna"));
const ElSol = lazy(() => import("./components/arcanos/el-sol/ElSol"));
const ElJuicio = lazy(() => import("./components/arcanos/el-juicio/ElJuicio"));
const ElMundo = lazy(() => import("./components/arcanos/el-mundo/ElMundo"));
const ElLoco = lazy(() => import("./components/arcanos/el-loco/ElLoco"));
//----------importacion de guias--------------
const DescubreTuArquetipo1 = lazy(() =>
  import("./components/arcanos/el-mago/DescubreTuArquetipo1")
);
const DescubreTuArquetipo2 = lazy(() =>
  import("./components/arcanos/la-sacerdotisa/DescubreTuArquetipo2")
);
const DescubreTuArquetipo3 = lazy(() =>
  import("./components/arcanos/la-emperatriz/DescubreTuArquetipo3")
);
const DescubreTuArquetipo4 = lazy(() =>
  import("./components/arcanos/el-emperador/DescubreTuArquetipo4")
);
const DescubreTuArquetipo5 = lazy(() =>
  import("./components/arcanos/el-sacerdote/DescubreTuArquetipo5")
);
const DescubreTuArquetipo6 = lazy(() =>
  import("./components/arcanos/los-enamorados/DescubreTuArquetipo6")
);
const DescubreTuArquetipo7 = lazy(() =>
  import("./components/arcanos/el-carro/DescubreTuArquetipo7")
);
const DescubreTuArquetipo8 = lazy(() =>
  import("./components/arcanos/la-fuerza/DescubreTuArquetipo8")
);
const DescubreTuArquetipo9 = lazy(() =>
  import("./components/arcanos/el-ermitaño/DescubreTuArquetipo9")
);
const DescubreTuArquetipo10 = lazy(() =>
  import("./components/arcanos/la-rueda/DescubreTuArquetipo10")
);
const DescubreTuArquetipo11 = lazy(() =>
  import("./components/arcanos/la-justicia/DescubreTuArquetipo11")
);
const DescubreTuArquetipo12 = lazy(() =>
  import("./components/arcanos/el-colgado/DescubreTuArquetipo12")
);
const DescubreTuArquetipo13 = lazy(() =>
  import("./components/arcanos/la-muerte/DescubreTuArquetipo13")
);
const DescubreTuArquetipo14 = lazy(() =>
  import("./components/arcanos/la-templanza/DescubreTuArquetipo14")
);
const DescubreTuArquetipo15 = lazy(() =>
  import("./components/arcanos/el-diablo/DescubreTuArquetipo15")
);
const DescubreTuArquetipo16 = lazy(() =>
  import("./components/arcanos/la-torre/DescubreTuArquetipo16")
);
const DescubreTuArquetipo17 = lazy(() =>
  import("./components/arcanos/la-estrella/DescubreTuArquetipo17")
);
const DescubreTuArquetipo18 = lazy(() =>
  import("./components/arcanos/la-luna/DescubreTuArquetipo18")
);
const DescubreTuArquetipo19 = lazy(() =>
  import("./components/arcanos/el-sol/DescubreTuArquetipo19")
);
const DescubreTuArquetipo20 = lazy(() =>
  import("./components/arcanos/el-juicio/DescubreTuArquetipo20")
);
const DescubreTuArquetipo21 = lazy(() =>
  import("./components/arcanos/el-mundo/DescubreTuArquetipo21")
);
const DescubreTuArquetipo22 = lazy(() =>
  import("./components/arcanos/el-loco/DescubreTuArquetipo22")
);
const MercadoPago = lazy(() => import("./components/MercadoPago"));
const Cafecito = lazy(() => import("./components/Cafecito"));
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
        <Suspense
          fallback={
            <Spinner
              alignItems={"center"}
              justifyContent={"center"}
              position={"absolute"}
              left={"50%"}
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
              mt={"350px"}
            />
          }
        >
          <Routes>
            <Route path="/" exact element={<LandingPage />} />
            <Route path="/home" exact element={<Home />} />
            <Route path="/blog" exact element={<Blog />} />
            <Route path="/tarot" exact element={<Tarot />} />
            <Route path="/guias" exact element={<Guias />} />
            <Route
              path="/guias/descubretuarcano"
              exact
              element={<DescubreTuArcano />}
            />
            <Route
              path="/guias/descubretuarcano/descubretuarquetipo/formadepago"
              exact
              element={<PagoDeGuias />}
            />
            <Route
              path="/guias/descubretuarcano/descubretuarquetipo/formadepago/latam"
              exact
              element={<PagoLatam />}
            />
            <Route
              path="/guias/descubretuarcano/descubretuarquetipo/formadepago/restodelmundo"
              exact
              element={<PagoRestoDelMundo />}
            />
            <Route
              path="/guias/descubretuarcano/descubretuarquetipo/formadepago/mercadopago"
              exact
              element={<MercadoPago />}
            />
            <Route
              path="/guias/descubretuarcano/descubretuarquetipo/formadepago/cafecito"
              exact
              element={<Cafecito />}
            />
            {/* --------ARCANOS--------- */}
            <Route
              path="/guias/descubretuarcano/elmago"
              exact
              element={<ElMago />}
            />
            <Route
              path="/guias/descubretuarcano/lasacerdotisa"
              exact
              element={<LaSacerdotisa />}
            />
            <Route
              path="/guias/descubretuarcano/laemperatriz"
              exact
              element={<LaEmperatriz />}
            />
            <Route
              path="/guias/descubretuarcano/elemperador"
              exact
              element={<ElEmperador />}
            />
            <Route
              path="/guias/descubretuarcano/elsacerdote"
              exact
              element={<ElSacerdote />}
            />
            <Route
              path="/guias/descubretuarcano/losenamorados"
              exact
              element={<LosEnamorados />}
            />
            <Route
              path="/guias/descubretuarcano/elcarro"
              exact
              element={<ElCarro />}
            />
            <Route
              path="/guias/descubretuarcano/lafuerza"
              exact
              element={<LaFuerza />}
            />
            <Route
              path="/guias/descubretuarcano/elermitanio"
              exact
              element={<ElErmitaño />}
            />
            <Route
              path="/guias/descubretuarcano/laruedadelafortuna"
              exact
              element={<RuedaFortuna />}
            />
            <Route
              path="/guias/descubretuarcano/lajusticia"
              exact
              element={<LaJusticia />}
            />
            <Route
              path="/guias/descubretuarcano/elcolgado"
              exact
              element={<ElColgado />}
            />
            <Route
              path="/guias/descubretuarcano/lamuerte"
              exact
              element={<LaMuerte />}
            />
            <Route
              path="/guias/descubretuarcano/latemplanza"
              exact
              element={<LaTemplanza />}
            />
            <Route
              path="/guias/descubretuarcano/eldiablo"
              exact
              element={<ElDiablo />}
            />
            <Route
              path="/guias/descubretuarcano/latorre"
              exact
              element={<LaTorre />}
            />
            <Route
              path="/guias/descubretuarcano/laestrella"
              exact
              element={<LaEstrella />}
            />
            <Route
              path="/guias/descubretuarcano/laluna"
              exact
              element={<LaLuna />}
            />
            <Route
              path="/guias/descubretuarcano/elsol"
              exact
              element={<ElSol />}
            />
            <Route
              path="/guias/descubretuarcano/eljuicio"
              exact
              element={<ElJuicio />}
            />
            <Route
              path="/guias/descubretuarcano/elmundo"
              exact
              element={<ElMundo />}
            />
            <Route
              path="/guias/descubretuarcano/elloco"
              exact
              element={<ElLoco />}
            />
            {/* -------------Guías---------------- */}
            <Route
              path="/guias/descubretuarcano/elmago/descubretuarquetipo"
              exact
              element={<DescubreTuArquetipo1 />}
            />
            <Route
              path="/guias/descubretuarcano/lasacerdotisa/descubretuarquetipo"
              exact
              element={<DescubreTuArquetipo2 />}
            />
            <Route
              path="/guias/descubretuarcano/laemperatriz/descubretuarquetipo"
              exact
              element={<DescubreTuArquetipo3 />}
            />
            <Route
              path="/guias/descubretuarcano/elemperador/descubretuarquetipo"
              exact
              element={<DescubreTuArquetipo4 />}
            />
            <Route
              path="/guias/descubretuarcano/elsacerdote/descubretuarquetipo"
              exact
              element={<DescubreTuArquetipo5 />}
            />
            <Route
              path="/guias/descubretuarcano/losenamorados/descubretuarquetipo"
              exact
              element={<DescubreTuArquetipo6 />}
            />
            <Route
              path="/guias/descubretuarcano/elcarro/descubretuarquetipo"
              exact
              element={<DescubreTuArquetipo7 />}
            />
            <Route
              path="/guias/descubretuarcano/lafuerza/descubretuarquetipo"
              exact
              element={<DescubreTuArquetipo8 />}
            />
            <Route
              path="/guias/descubretuarcano/elermitaño/descubretuarquetipo"
              exact
              element={<DescubreTuArquetipo9 />}
            />
            <Route
              path="/guias/descubretuarcano/laruedadelafortuna/descubretuarquetipo"
              exact
              element={<DescubreTuArquetipo10 />}
            />
            <Route
              path="/guias/descubretuarcano/lajusticia/descubretuarquetipo"
              exact
              element={<DescubreTuArquetipo11 />}
            />
            <Route
              path="/guias/descubretuarcano/elcolgado/descubretuarquetipo"
              exact
              element={<DescubreTuArquetipo12 />}
            />
            <Route
              path="/guias/descubretuarcano/lamuerte/descubretuarquetipo"
              exact
              element={<DescubreTuArquetipo13 />}
            />
            <Route
              path="/guias/descubretuarcano/latemplanza/descubretuarquetipo"
              exact
              element={<DescubreTuArquetipo14 />}
            />
            <Route
              path="/guias/descubretuarcano/eldiablo/descubretuarquetipo"
              exact
              element={<DescubreTuArquetipo15 />}
            />
            <Route
              path="/guias/descubretuarcano/latorre/descubretuarquetipo"
              exact
              element={<DescubreTuArquetipo16 />}
            />
            <Route
              path="/guias/descubretuarcano/laestrella/descubretuarquetipo"
              exact
              element={<DescubreTuArquetipo17 />}
            />
            <Route
              path="/guias/descubretuarcano/laluna/descubretuarquetipo"
              exact
              element={<DescubreTuArquetipo18 />}
            />
            <Route
              path="/guias/descubretuarcano/elsol/descubretuarquetipo"
              exact
              element={<DescubreTuArquetipo19 />}
            />
            <Route
              path="/guias/descubretuarcano/eljuicio/descubretuarquetipo"
              exact
              element={<DescubreTuArquetipo20 />}
            />
            <Route
              path="/guias/descubretuarcano/elmundo/descubretuarquetipo"
              exact
              element={<DescubreTuArquetipo21 />}
            />
            <Route
              path="/guias/descubretuarcano/elloco/descubretuarquetipo"
              exact
              element={<DescubreTuArquetipo22 />}
            />
          </Routes>
        </Suspense>
      </Box>
    </Box>
  );
}

export default App;
