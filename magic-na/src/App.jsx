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
              top={"50%"}
              left={"50%"}
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          }
        >
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
            <Route
              path="/guias/descubretuarcano/descubretuarquetipo/formadepago/mercadopago"
              element={<MercadoPago />}
            />
            <Route
              path="/guias/descubretuarcano/descubretuarquetipo/formadepago/cafecito"
              element={<Cafecito />}
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
            <Route
              path="/guias/descubretuarcano/elcarro"
              element={<ElCarro />}
            />
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
            <Route
              path="/guias/descubretuarcano/latorre"
              element={<LaTorre />}
            />
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
            <Route
              path="/guias/descubretuarcano/elmundo"
              element={<ElMundo />}
            />
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
        </Suspense>
      </Box>
    </Box>
  );
}

export default App;
