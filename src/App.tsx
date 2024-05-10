import { Box } from "./components/dashboard/box"
import { GaugeChart } from "./components/mui/gauce"
import { Bar } from "./components/mui/bar"
import { Layout } from "./layout/layout"
import { ButtonsGroup } from "./components/dashboard/buttonsGroup"
import { Calendar } from "./components/mui/calendar"
import { Button } from "@mui/material"
import { FolderOutlined, PersonOutlined, EditOutlined, Done, GroupsOutlined } from "@mui/icons-material"

function App() {

  return (
    <Layout>
      <div className="w-full flex flex-col px-2 md:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Box
            title="Presentismo"
          >
            <div className="h-full grid grid-cols-2 grid-rows-2 gap-2">
              <GaugeChart
                title="Llegadas tarde: 15"
                value={60}
                height={130}
              />
              <GaugeChart
                title="Ausentes / Presentes: 15"
                value={60}
                height={130}
              />
              <GaugeChart
                title="Ausencias: 15"
                value={60}
                height={130}
              />
              <GaugeChart
                title="Inconsistencias: 15"
                value={60}
                height={130}
              />
            </div>
          </Box>
          <Box
            title="Solicitudes Pendientes"
          >
            <Bar>
              <h3 className="text-red-600 text-xl font-semibold">25</h3>
            </Bar>
          </Box>
          <Box>
            <div className="flex flex-col gap-8">
              <div className="flex gap-4 justify-start items-center shadow-md px-4 py-2">
                <GroupsOutlined sx={{ fontSize: 60, color: '#007BC3'}}/>
                <div className="flex flex-col items-center">
                  <h3 className="text-lg">Colaboradores activos</h3>
                  <span className="text-4xl font-semibold text-blue-800">80</span>
                </div>
              </div>
              <div className="flex gap-4 justify-start items-center shadow-md px-4">
                <GaugeChart
                  value={60}
                  width={80}
                  height={80}
                />
                <div className="flex flex-col items-center">
                  <h3 className="text-lg">Ingresos del mes</h3>
                  <span className="text-4xl font-semibold text-blue-800">4</span>
                </div>
              </div>
              <div className="flex gap-4 justify-start items-center shadow-md px-4">
                <GaugeChart
                  value={60}
                  width={80}
                  height={80}
                />
                <div className="flex flex-col items-center">
                  <h3 className="text-lg">Egresos del mes</h3>
                  <span className="text-4xl font-semibold text-blue-800">2</span>
                </div>
              </div>
            </div>
          </Box>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Box
            title="Calendario"
          >
            <Calendar/>
          </Box>
          <Box
            title="Sueldos"
          >
            <div className="flex flex-col items-center h-full justify-between px-8 gap-8">
              <div className="flex flex-col w-5/6 gap-4 ">
                <div className="flex justify-between">
                  <FolderOutlined fontSize="large"/>
                  <h4 className="text-xl">Liquidaciones abiertas</h4>
                  <span className="text-xl text-blue-800">5</span>
                </div>
                <div className="flex justify-between">
                  <PersonOutlined fontSize="large"/>
                  <h4 className="text-xl">Colaboradores con errores</h4>
                  <span className="text-xl text-blue-800">2</span>
                </div>
                <div className="flex justify-between">
                  <EditOutlined fontSize="large"/>
                  <h4 className="text-xl">Recibos sin firmar</h4>
                  <span className="text-xl text-blue-800">3</span>
                </div>
                <div className="flex justify-between">
                  <Done fontSize="large"/>
                  <h4 className="text-xl">Colaboradores liquidados</h4>
                  <span className="text-xl text-blue-800">2</span>
                </div>
              </div>
              <div className="w-1/2 mt-auto">
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  fullWidth
                >
                  Ver más
                </Button>
              </div>
            </div>
          </Box>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Box
            title="Vencimientos"
          >
            <Bar>
              <ButtonsGroup
                values={['Contratos', 'Documentos']}
              />
            </Bar>
          </Box>
          <Box
            title="Reclutamientos RRHH"
          >
            <Bar>
              <ButtonsGroup
                values={['Solicitudes', 'seleccionados', 'Reclutados']}
              />
            </Bar>
          </Box>
          <Box
            title="Evaluaciones RRGG"
          >
            <Bar>
              <ButtonsGroup
                values={['Pendientes', 'Cerradas']}
              />
            </Bar>
          </Box>
        </div>
      </div>
    </Layout>
  )
}

export default App
