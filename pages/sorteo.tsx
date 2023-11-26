import Head from "next/head";
import Image from "next/image";
import Appbar from "../components/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Tooltip from "@mui/material/Tooltip";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { Theme } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import Hero from "../components/Hero";
import ShowerIcon from "@mui/icons-material/Shower";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import PetsIcon from "@mui/icons-material/Pets";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import Services from "../components/Services";
import Contact from "../components/Contact";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Home() {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  return (
    <>
      <Head>
        <title>O can de quen</title>
      </Head>
      <Appbar>
        <Box sx={{ background: "#f2f6fa", py: "100px" }}>
          <Container maxWidth='lg'>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant='h4'>Terminos y condiciones</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  La Promoción está abierta para todos los clientes. Cada vez que contraten un servicio basico, medio o completo en la peluquería canina contará como una participación (en adelante
                  los “Participantes”). No podrán participar las personas que no cumplan la condición anterior, los empleados de O can de quen, sus familias de primer grado, sus agentes o cualquier tercero
                  directamente relacionado con la gestión de la Promoción. El Responsable se reserva todos los derechos para solicitar la información o documentación necesaria para verificar que los
                  Participantes cumplan con todas las condiciones necesarias para ser considerado una Persona Incluida.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>La promoción es de carácter gratuito no siendo necesaria la compra o pago de importe alguno para la participación tan solo de un servicio ofertado por participación.</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  Solo se permite multiples participaciones por persona, una por cada servicios que haya consumido.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  El Responsable se reserva el derecho, a su entera discreción, de descalificar al Participante cuya actuación o conducta se contraria al espíritu o la intención de la Promoción o de
                  estos Términos y Condiciones de la Promoción, a su entera discreción.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  La Fecha de Inicio y la de Finalización para formalizar la participación son desde el momento en que se publiquen en redes sociales hasta el día 23/12/23 a la hora de 13:00. Las
                  participaciones recibidas después de la hora de Finalización no serán tenidas en cuenta.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  Los Participantes se comprometen a proporcionar información veraz y precisa. El Responsable no tendrá responsabilidad alguna en relación con participaciones perdidas, extraviadas,
                  dañadas, borradas, incompletas, ilegibles o de otro modo imposibles de leer o retrasadas en la entrega, independientemente de la causa, incluyendo, por ejemplo, como resultado de
                  cualquier fallo postal, fallo del equipo técnico, mal funcionamiento de equipos, sistemas, satélite, red, servidor, hardware informático o fallo del software de cualquier tipo. El
                  Responsable no acepta responsabilidad alguna por las participaciones que no se hayan completado con éxito debido a un fallo técnica, un fallo del hardware o software del ordenador,
                  un fallo del servidor, de la red o del satélite de cualquier tipo o debido a errores de entrada de datos u omisiones en una participación hecha por los Participantes. Los
                  Participantes aceptan que, en el caso de un problema técnico en el sistema del Responsable, las participaciones pueden no estar disponibles temporalmente y, si éstas se han visto
                  afectadas, es posible que los Participantes deban volver a ingresar su información para que su participación sea válida.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>La prueba de publicación o transmisión no constituye prueba de la participación o recibo por parte del Responsable de ninguna solicitud de participación.</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  Un ganador, será elegido tras la fecha fin de sorteo introduciendo todas las participaciones en la aplicación https://app-sorteos.com/
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>El (los) ganador recibirá el premio indicado a partir del momento en el que sea notificado que es el ganardor y podrá pasar a recogerlo en O can de quen.</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  El (los) ganador(es) serán notificados a través del método y en la fecha indicada utilizando las redes sociales. El Responsable puede solicitar más información al ganador para
                  confirmar que es una Persona Incluida y organizar la entrega del premio.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  En el caso de que un ganador no responda en el plazo indicado en los Términos y Condiciones Especiales, el Responsable se reserva el derecho de seleccionar otro ganador y otorgarle
                  el (los) premio(s).
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  El Responsable se reserva el derecho de seleccionar premios alternativos de valor equivalente o similar, sin previo aviso si el premio no estuviera disponible por cualquier motivo.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>El premio no es intercambiable, no es transferible y no se ofrece un pago alternativo en efectivo.</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  La decisión del Responsable con respecto a cualquier aspecto de la Promoción es definitiva y vinculante y no se entrará en discusión o negociación alguna al respecto.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  El nombre y el municipio o localidad del ganador se pueden obtener a través de los datos de contacto que se proporcionan en los Términos y Condiciones Especiales, dentro de los 7
                  días de la fecha de notificación al ganador (como se indica en los Términos y Condiciones Especiales).
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  Se considera que los Participantes han aceptado y acuerdan estar sujetos a los Términos y Condiciones de la Promoción en el momento de la inscripción. El Responsable se reserva el
                  derecho de denegar la participación o la entrega del premio a cualquier persona que incumpla los Términos y Condiciones de la Promoción.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                   El ganador es responsable de cualquier obligación de declarar el premio a las autoridades fiscales pertinentes y
                  de remitir, aceptar o pagar cualquier impuesto, tasa, retención y/o gasto de cualquier tipo, que en virtud de la aplicación de la normativa fiscal pudieran ser aplicables, quedando
                  el Responsable eximido de responsabilidad alguna en este sentido y no teniendo obligación alguna de proporcionar asesoramiento fiscal. Cualquier otro coste en el que se incurra,
                  además de los mencionados anteriormente y que sean incidentales al cumplimiento del premio, es responsabilidad del ganador (es).
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>El Responsable se reserva el derecho de anular, cancelar, suspender o modificar la Promoción cuando sea necesario a su entera discreción. </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  En la medida en que lo permita la ley aplicable, el Responsable, sus agentes o distribuidores no tendrá obligación alguna de compensar al (los) Ganador (es) bajo ninguna
                  circunstancia ni de aceptar ninguna responsabilidad por cualquier pérdida, o daño que ocurra como un resultado de aceptar o utilizar el premio. Sin perjuicio de lo anterior, nada de
                  lo dispuesto en los Términos y Condiciones de la Promoción puede excluir o limitar la responsabilidad del Responsable en los supuestos de lesión personal o muerte, cuando sean
                  causados por negligencia del Responsable, sus agentes o distribuidores o el de sus empleados. Los derechos imperativos de los Participantes no se ven afectados por esta disposición.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  Al ingresar a la Promoción, los Participantes confirman que son aptos para ello y que igualmente son aptos para recibir el premio. El Responsable puede requerir que los Participantes
                  proporcionen pruebas de que tienen la condición de Personas Incluidas para participar en la Promoción. Si se determina que el ganador no es apto, el Responsable se reserva el derecho
                  de otorgar el premio a otro Participante y solicitar la devolución de cualquier premio ya otorgado. El Responsable no aceptará ninguna responsabilidad por cualquier reclamación o
                  daño causado directa o indirectamente por el hecho de que un Participante no haya verificado su aptitud o la capacidad de recibir o disfrutar del premio antes de formalizar su
                  participación en la Promoción.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  Al participar en la Promoción, los Participantes acuerdan que el premio se otorga tal cual, y que ni el Responsable ni ninguna de sus compañías subsidiarias o pertenecientes a su
                  grupo de empresas hacen ninguna manifestación o garantía de ninguna naturaleza con respecto al premio.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>En las Promociones que requieren que los Participantes envíen imágenes, videos u otros medios, los Participantes confirman que:</Typography>
                <Typography>● Las imágenes y otras presentaciones son trabajos originales, no son difamatorias o calumniosas y que no infringen los derechos de terceros.</Typography>
                <Typography>● No existen acuerdos que entren en colisión y que puedan restringir el uso de estas imágenes u otras presentaciones.</Typography>
                <Typography>
                  ● Tienen el consentimiento para usar cualquier imagen de terceros en la participación y se ha renunciado a los derechos a tal efecto para ese uso. Si la imagen de un tercero es de
                  una persona menor de 18 años, se debe proporcionar el consentimiento de los padres o tutores.
                </Typography>
                <Typography>
                  ● El Participante presentará evidencia de cualquier consentimiento o autorización requerida a solicitud del Responsable, o correrá el riesgo de ser descalificado para ingresar a la
                  Promoción.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>El Responsable no reclama ningún derecho de propiedad o titularidad sobre su participación.</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  Los Participantes acuerdan que el Responsable puede, aunque no esté obligado a ello, hacer que la participación esté disponible en sus sitios web y en cualquier otro medio, ya sea
                  conocido o inventado en el futuro, y en relación con cualquier tipo de publicidad de la Promoción. Los Participantes acuerdan otorgar al Responsable una licencia irrevocable, no
                  exclusiva, libre de royalties, en todo el mundo, por el período completo de cualquier derecho de propiedad intelectual en la participación a la promoción y cualquier material que lo
                  acompañe, para usar, mostrar, publicar, transmitir, copiar, editar, alterar, almacenar, alterar y sub-licenciar la participación en la Promoción y cualquier material que lo acompañe
                  (incluidas las imágenes) para tales fines.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  Los ganadores aceptan que el Responsable puede usar su nombre, imagen y ciudad o país de residencia para anunciar al ganador de esta promoción y para cualquier otro propósito
                  promocional razonable y sin contraprestación o pago alguno. En este sentido, los Participantes acuerdan colaborar plenamente con el Responsable en el desarrollo de dichas actividades
                  promocionales.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  El Responsable recabará y tratará la información personal de los Participantes y podrá compartirla con los agentes y empresas de su grupo del Responsable (incluidos los que se
                  encuentran fuera del Espacio Económico Europeo) en la medida necesaria para poder desarrollar la Promoción, incluida en su caso la entrega del premio al Ganador. Si los Participantes
                  no proporcionan la información obligatoria solicitada al ingresar y participar en la Promoción, no podrán participar en la misma. El Responsable recabará y tratará los nombres de los
                  Participantes y otros datos personales derivados de su participación en la Promoción, que se utilizarán de acuerdo con la Política de Privacidad vigente en cada momento, según se
                  indica en los Términos y Condiciones Especiales.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  Los datos personales suministrados durante el curso de esta Promoción se pueden transmitir a terceros proveedores solo en la medida en que se requiera para el cumplimiento, entrega o
                  gestión de los premios.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  La promoción se regirá por la ley de la jurisdicción mencionada en los Términos y Condiciones Especiales y los Participantes de la Promoción se someterán a la jurisdicción de los
                  tribunales de la jurisdicción mencionados en los Términos y Condiciones Especiales.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>El Responsable es la entidad especificada en los Términos y Condiciones Especiales.</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  La Promoción no está patrocinada, respaldada o administrada de ninguna manera por, o asociada con cualquier sitio web de terceros o plataformas de medios sociales enumerados en los
                  Términos y Condiciones Especiales. El Responsable se exime de toda responsabilidad derivada del uso de sitios webs de terceros o redes sociales por parte del(os) Participante(s).
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Box>
          <a
            href='https://wa.me/34613651290'
            target='_blank'
            rel='noopener noreferrer'
            style={{
              position: "fixed",
              width: "60px",
              height: "60px",
              bottom: "40px",
              right: "40px",
              backgroundColor: "#25d366",
              color: "#FFF",
              borderRadius: "100%",
              textAlign: "center",
              zIndex: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <WhatsAppIcon sx={{ width: 40, height: 40 }} />
          </a>
        </Box>
      </Appbar>
    </>
  );
}
