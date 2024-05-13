import { CustomBox } from "./components/dashboard/box"
import { GaugeChart } from "./components/mui/gauce"
import { Bar } from "./components/mui/bar"
import { Layout } from "./layout/layout"
import { ButtonsGroup } from "./components/dashboard/buttonsGroup"
import { Calendar } from "./components/mui/calendar"
import { Button, Container, Grid, Paper, Stack, Typography } from "@mui/material"
import { FolderOutlined, PersonOutlined, EditOutlined, Done, GroupsOutlined } from "@mui/icons-material"
import { blue, red } from "@mui/material/colors"

function App() {

  return (
    <Layout>
      <Stack direction='column' paddingX={{ xs: 2, md: 8 }} paddingY={4} gap={4} justifyContent='center'>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <CustomBox
              title="Presentismo"
            >
              <Grid container justifyContent='center' alignItems='center'>
                <Grid item md={6}>
                  <GaugeChart
                    title="Llegadas tarde: 15"
                    value={60}
                    width={130}
                    height={130}
                  />
                </Grid>
                <Grid item md={6}>
                  <GaugeChart
                    title="Ausentes / Presentes: 15"
                    value={60}
                    width={130}
                    height={130}
                  />
                </Grid>
                <Grid item md={6}>
                  <GaugeChart
                    title="Ausencias: 15"
                    value={60}
                    width={130}
                    height={130}
                  />
                </Grid>
                <Grid item md={6}>
                  <GaugeChart
                    title="Inconsistencias: 15"
                    value={60}
                    width={130}
                    height={130}
                  />
                </Grid>
              </Grid>
            </CustomBox>
          </Grid>
          <Grid item xs={12} md={4}>
            <CustomBox
              title="Solicitudes Pendientes"
            >
              <Bar>
                <Typography variant="h4" color={red[600]} fontWeight={600}>25</Typography>
              </Bar>
            </CustomBox>
          </Grid>
          <Grid item xs={12} md={4}>
            <CustomBox>
              <Stack padding={1} spacing={2}>
                <Paper>
                  <Stack direction='row' spacing={2} paddingX={2} paddingY={1}>
                    <GroupsOutlined sx={{ fontSize: 60, color: '#007BC3' }} />
                    <Stack justifyContent='center' alignItems='center'>
                      <Typography variant="h6">Colaboradores activos</Typography>
                      <Typography variant="h4" fontWeight={700} color={blue[900]}>80</Typography>
                    </Stack>
                  </Stack>
                </Paper>
                <Paper>
                  <Stack direction='row' spacing={2} padding={1}>
                    <GaugeChart
                      value={60}
                      width={80}
                      height={80}
                    />
                    <Stack justifyContent='center' alignItems='center'>
                      <Typography variant="h6">Ingresos del mes</Typography>
                      <Typography variant="h4" fontWeight={700} color={blue[900]}>4</Typography>
                    </Stack>
                  </Stack>
                </Paper>
                <Paper>
                  <Stack direction='row' spacing={2} padding={1}>
                    <GaugeChart
                      value={60}
                      width={80}
                      height={80}
                    />
                    <Stack justifyContent='center' alignItems='center'>
                      <Typography variant="h6">Egresos del mes</Typography>
                      <Typography variant="h4" fontWeight={700} color={blue[900]}>2</Typography>
                    </Stack>
                  </Stack>
                </Paper>
              </Stack>
            </CustomBox>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <CustomBox
              title="Calendario"
            >
              <Calendar />
            </CustomBox>
          </Grid>
          <Grid item xs={12} md={6}>
            <CustomBox
              title="Sueldos"
            >
              <Container>
                <Stack spacing={2}>
                  <Stack direction='row' justifyContent='space-between' spacing={4}>
                    <FolderOutlined fontSize="large" />
                    <Typography variant="h6">Liquidaciones abiertas</Typography>
                    <Typography variant="h5" fontWeight={600} color={blue[900]}>5</Typography>
                  </Stack>
                  <Stack direction='row' justifyContent='space-between' spacing={4}>
                    <PersonOutlined fontSize="large" />
                    <Typography variant="h6">Colaboradores con errores</Typography>
                    <Typography variant="h5" fontWeight={600} color={blue[900]}>2</Typography>
                  </Stack>
                  <Stack direction='row' justifyContent='space-between' spacing={4}>
                    <EditOutlined fontSize="large" />
                    <Typography variant="h6">Recibos sin firmar</Typography>
                    <Typography variant="h5" fontWeight={600} color={blue[900]}>3</Typography>
                  </Stack>
                  <Stack direction='row' justifyContent='space-between' spacing={4}>
                    <Done fontSize="large" />
                    <Typography variant="h6">Colaboradores liquidados</Typography>
                    <Typography variant="h5" fontWeight={600} color={blue[900]}>2</Typography>
                  </Stack>

                  <Button
                    variant="contained"
                    color="primary"
                    size="medium"
                    fullWidth
                    
                  >
                    Ver más
                  </Button>
                </Stack>
              </Container>
            </CustomBox>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <CustomBox
              title="Vencimientos"
            >
              <Bar>
                <ButtonsGroup
                  values={['Contratos', 'Documentos']}
                />
              </Bar>
            </CustomBox>
          </Grid>
          <Grid item xs={12} md={4}>
            <CustomBox
              title="Reclutamientos RRHH"
            >
              <Bar>
                <ButtonsGroup
                  values={['Solicitudes', 'seleccionados', 'Reclutados']}
                />
              </Bar>
            </CustomBox>
          </Grid>
          <Grid item xs={12} md={4}>
            <CustomBox
              title="Evaluaciones RRGG"
            >
              <Bar>
                <ButtonsGroup
                  values={['Pendientes', 'Cerradas']}
                />
              </Bar>
            </CustomBox>
          </Grid>
        </Grid>
      </Stack>
    </Layout >
  )
}

export default App
