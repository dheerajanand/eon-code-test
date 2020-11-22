import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  imgWrap: {
    float: "left",
    padding: "0 0.75rem 0.75rem 0",
    [theme.breakpoints.down("sm")]: {
      float: "none",
      textAlign: "center",
    },
  },
  clearfix: {
    overflow: "auto",
  },
}));

export default function ContentPanel() {
  const classes = useStyles();
  return (
    <div className={`${classes.root} ${classes.clearfix}`}>
      <Typography component="h1" variant="h3" align="center">
        Content
      </Typography>
      <img src="/images/image.png" alt="sds" className={classes.imgWrap} />
      <Typography component="p" variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Eget nulla facilisi
        etiam dignissim diam quis. Vitae tempus quam pellentesque nec nam. Vitae
        tortor condimentum lacinia quis vel eros donec. Adipiscing tristique
        risus nec feugiat in. Ac tortor vitae purus faucibus ornare suspendisse
        sed. Purus faucibus ornare suspendisse sed nisi lacus sed viverra
        tellus. Urna condimentum mattis pellentesque id nibh tortor id aliquet.
        Proin fermentum leo vel orci. Integer vitae justo eget magna
        fermentumiaculis. Id velit ut tortor pretium viverra suspendisse
        potenti.
      </Typography>
      <Typography component="p" variant="body1">
        Dictum varius duis at consectetur lorem donec. Maecenas sed enim ut sem
        viverra aliquet. Sed augue lacus viverra vitae congue eu consequat ac.
        Integer enim neque volutpat ac tincidunt vitae semper quis. Ut tellus
        elementum sagittis vitae et leo. Mattis pellentesque id nibh tortor id
        aliquet lectus proin. Tempus quam pellentesque nec nam aliquam sem et
        tortor. Nulla aliquet porttitor lacus luctus. Blandit cursus risus at
        ultrices. Velit euismod in pellentesque massa placerat duis. Sit amet
        massa vitae tortor condimentum. Amet dictum sit amet justo donec enim
        diam vulputate ut. Eros donec ac odio tempor orci dapibus ultrices in.
        Scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt.
        Sit amet cursus sit amet. Lectus nulla at volutpat diam ut venenatis
        tellus in. Velit laoreet id donec ultrices tincidunt arcu non. Risus sed
        vulputate odio ut enim blandit volutpat maecenas.
      </Typography>
      <Typography component="p" variant="body1">
        Cras ornare arcu dui vivamus arcu felis. Nam aliquam sem et tortor
        consequat id porta. Ligula ullamcorper malesuada proin libero nunc
        consequat interdum. Facilisi nullam vehicula ipsum a arcu cursus. Nec
        ullamcorper sit amet risus nullam. Magna fringilla urna porttitor
        rhoncus dolor purus non enim. Proin sed libero enim sed faucibus turpis
        in. Non pulvinar neque laoreet suspendisse interdum consectetur lectus
        vestibulum. Cursus risus at ultrices mi tempus imperdiet nulla. Diam
        vulputate ut pharetra sit amet. Felis imperdiet proin fermentum leo vel
        orci. Leo a diam sollicitudin tempor id eu nisl. Dictum sit amet justo
        donec. Velpharetra vel turpis nunc. Tellus rutrum tellus pellentesque
        eu.
      </Typography>
      <Typography component="p" variant="body1">
        Lacus vel facilisis volutpat est velit egestas dui. At auctor urna nunc
        id cursus metus. Sed augue lacus viverra vitae congue eu. Condimentum
        lacinia quis vel eros donec ac odio. Egestas pretium aenean pharetra
        magna ac placerat. Amet tellus cras adipiscing enim. Convallis convallis
        tellus id interdum velit laoreet. Augue mauris augue neque gravida in
        fermentum et sollicitudin. Bibendum at varius vel pharetra vel turpis
        nunc eget. Risus ultricies tristique nulla aliquet enim. Risus sed
        vulputate odio ut.
      </Typography>
    </div>
  );
}
