import React, {useState} from 'react';
import forma from './forma';
import corte from './corte';
import color from './color';
import claridad from './claridad';
import Slider from '@material-ui/core/Slider';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import HelpComponent from './HelpComponent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const section = {
  width: "16%",
  backgroundColor: "#fff"
};

const sectionCorte = {
  width: "24%",
}

function App() {


  const [value, setValue] = useState([0.0, 30.0]);
  const [value2, setValue2] = useState([200, 5000000]);
  const [valueForma, setForma] = useState(1);
  const [valueColor, setColor] = useState(1);
  const [valueClaridad, setClaridad] = useState(1);
  const [valueCorte, setCorte] = useState(1);

  const handleFormaChange = (event, newValue) => {
    setForma(newValue);
  };

  const handleColorChange = (event, newValue) => {
    setColor(newValue);
  };

  const handleClaridadChange = (event, newValue) => {
    setClaridad(newValue);
  };

  const handleCorteChange = (event, newValue) => {
    setCorte(newValue);
  };


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function valuetext(value) {
    return `${value}`;
  }

  const handleChange2 = (event, newValue) => {
    setValue2(newValue);
  };

  function valuetext2(value2) {
    return `${value2}`;
  }

  const buscarClick = (event) => {
    console.log("Forma: " + valueForma + ", " + JSON.stringify(forma[valueForma-1]));
    console.log("Color: " + valueColor + ", " + JSON.stringify(color[valueColor-1]));
    console.log("Claridad: " + valueClaridad + ", " + JSON.stringify(claridad[valueClaridad-1]));
    console.log("Corte: " + valueCorte + ", " + JSON.stringify(corte[valueCorte-1]));
    console.log("Quilataje: " + value );
    console.log("Precio: " + value2);
  };

  const limpiarClick = (event) => {
    setValue([0.0, 30.0]);
    setValue2([200, 5000000]);
    setForma(1);
    setColor(1);
    setClaridad(1);
    setCorte(1);
  };

  return (
  <Container maxWidth="xl">
    <Grid container spacing={2}>

      <Grid container item xs={6}>
      <Grid><HelpComponent title="FORMA" helper="FORMA Helper text"></HelpComponent></Grid>
      <Grid container item>
      { forma.map(({id, src, title}) => 
            <div style={section}>
            <Box border={1} alignItems="center" justifyContent="center"
            className={valueForma === id ? "selected-box" : null}
            borderColor={valueForma === id ? "primary.main" : null}
            onClick={(event) => handleFormaChange(event, id)}
            value={id}
            >
                <img key={id} src={src} title={title}/>
                <p className="center">{title}</p>
            </Box>
            </div>

      )}   
      </Grid >

      <Grid >
      <HelpComponent title="COLOR" helper="COLOR Helper text"></HelpComponent>
      </Grid>
      <Grid container item>
      { color.map(({id, src, title}) => 
            <div style={sectionCorte}>
            <Box border={1} display="flex" flexWrap="wrap" flexDirection="column"
              className={valueColor === id ? "selected-box" : null}
              borderColor={valueColor === id ? "primary.main" : null}
              onClick={(event) => handleColorChange(event, id)}
              value={id}
            >
                <img key={id} src={src} title={title}/>
                <p className="center">{title}</p>
            </Box>
            </div>

      )}   
      </Grid>

      <Grid>
      <HelpComponent title="CLARIDAD" helper="CLARIDAD Helper text"></HelpComponent>

      </Grid>
      <Grid container item>
      { claridad.map(({id, src, title, subtitle}) => 
            <div style={sectionCorte}>
            <Box border={1}
              className={valueClaridad === id ? "selected-box" : null}
              borderColor={valueClaridad === id ? "primary.main" : null}
              onClick={(event) => handleClaridadChange(event, id)}
              value={id}
            >
                <img key={id} src={src} title={title}/>
                <p className="center">{title}</p>
                <p className="center">{subtitle}</p>
            </Box>
            </div>

      )}   
      </Grid>

      </Grid>

      <Grid container item xs={6}>
      <Grid><HelpComponent title="CORTE" helper="CORTE Helper text"></HelpComponent></Grid>
      <Grid container item>
      { corte.map(({id, src, title, subtitle}) => 
            <div style={sectionCorte}>
            <Box border={1}
              className={valueCorte === id ? "selected-box" : null}
              borderColor={valueCorte === id ? "primary.main" : null}
              onClick={(event) => handleCorteChange(event, id)}
              value={id}
            >
              <div id="img-wrapper">
              <img key={id} src={src} title={title}/>
              </div>
                <p className="center">{title}</p>
                <p className="center">{subtitle}</p>
            </Box>
            </div>

      )}   
      </Grid>

      <Grid><HelpComponent title="QUILATAJE" helper="QUILATAJE Helper text"></HelpComponent></Grid>

      <Grid container item xs={12}></Grid> 

      <Grid container item xs={12}>
        <Grid item xs={0} >
        <div id="img-wrapper">
        <img className="small-img"  src={require('./assets/Quilataje/pequeno.png')}></img>
        </div>
        </Grid>
        <Grid item xs={10}></Grid>
        <Grid item xs={0} >

          <img  src={require('./assets/Quilataje/grande.png')}></img>
        </Grid>
      </Grid>
      <Grid item xs={11}>
      <Slider
        className="slider-item space-box"
        value={value}
        onChange={handleChange}
        valueLabelDisplay="off"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        min={0.0}
        max={30.0}
      />
      </Grid>

      <Grid item xs={2}>
      <TextField id="outlined-basic" className="quilataje-value" label="" value={value[0]} size="small" variant="outlined" />
      </Grid>
      <Grid item xs={8}></Grid>
      <Grid item xs={2}>
      <TextField id="outlined-basic" label="" className="quilataje-value"  value={value[1]}  size="small" variant="outlined" />
      </Grid>

      <Grid><HelpComponent title="PRECIO"></HelpComponent></Grid>

      <Grid container item xs={12}></Grid> 


      <Grid item xs={11}>
      <Slider
        className="slider-item space-box"
        value={value2}
        onChange={handleChange2}
        valueLabelDisplay="off"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext2}
        min={0}
        max={5000000}
      />
      </Grid>

      <Grid item xs={2}>
      <TextField id="outlined-basic" className="quilataje-value" label=""  value={value2[0]}  size="small" variant="outlined" />
      </Grid>
      <Grid item xs={8}></Grid>
      <Grid item xs={2}>
      <TextField id="outlined-basic" label="" className="quilataje-value"  value={value2[1]}  size="small" variant="outlined" />
      </Grid>

      </Grid>

    </Grid>

    <div className="spacer"></div>

<Grid container xs={12}
justify="center"
alignItems="center"
>

<Grid item>
    <Button variant="contained" className="filled-btn" color="primary"
      onClick={(event) => buscarClick(event)}
    >
        BUSCAR
      </Button>
    <Button variant="outlined" className="outlined-btn" color="primary"
          onClick={(event) => limpiarClick(event)}
    >
      LIMPIAR FILTROS
    </Button>
</Grid>

</Grid>




   </Container>
  );
}

export default App;