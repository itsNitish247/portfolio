  import React from 'react'
  

  import { Container, Typography, Grid } from '@mui/material';

  
  function Skill() {
    return (
      <Container className="container">
        <div className="section">
          <Typography variant="h2">Tools</Typography>
          <Grid container alignItems="center">
            <Grid item>
              <img src="path/to/vscode.svg" alt="VS Code" className="icon" />
            </Grid>
            <Grid item>
              <span>VS Code</span>
            </Grid>
          </Grid>
          <Grid container alignItems="center">
            <Grid item>
              <img src="path/to/eclipse.svg" alt="Eclipse" className="icon" />
            </Grid>
            <Grid item>
              <span>Eclipse</span>
            </Grid>
          </Grid>
        </div>
        <div className="section">
          <Typography variant="h2">Skills</Typography>
          <Grid container alignItems="center">
            <Grid item>
              <img src="path/to/react.svg" alt="React" className="icon" />
            </Grid>
            <Grid item>
              <span>React</span>
            </Grid>
          </Grid>
          <Grid container alignItems="center">
            <Grid item>
              <img src="path/to/html.svg" alt="HTML" className="icon" />
            </Grid>
            <Grid item>
              <span>HTML</span>
            </Grid>
          </Grid>
          <Grid container alignItems="center">
            <Grid item>
              <img src="path/to/css.svg" alt="CSS" className="icon" />
            </Grid>
            <Grid item>
              <span>CSS</span>
            </Grid>
          </Grid>
          <Grid container alignItems="center">
            <Grid item>
              <img src="path/to/javascript.svg" alt="JavaScript" className="icon" />
            </Grid>
            <Grid item>
              <span>JavaScript</span>
            </Grid>
          </Grid>
        </div>
      </Container>
    );
  }
  
  export default Skill;
  
  