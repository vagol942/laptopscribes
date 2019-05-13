import React from 'react';

const styles = {
  header: {
    backgroundColor: '#b71c1c',
    height: '256px',
    position: 'relative', //??? Why u did dis?
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
  },
  title: {
    color: '#FAFAFA',
    textAlign: 'center',
    fontFamily: "'Audiowide', cursive",
    paddingTop: '76px',
    fontSize: '5vw',
  },
  subtitle: {
    color: '#fafafa',
    textAlign: 'center',
    paddingTop: '12px',
  },
  headerMobile: {
    backgroundColor: '#b71c1c',
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    minHeight: '72px',
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleMobile: {
    color: '#FAFAFA',
    textAlign: 'center',
    fontFamily: "'Audiowide', cursive",
    fontSize: "10vw",
  }
};

function Header() {
    if (window.innerWidth > 924) {
      return (
        <div style={styles.header}>
          <h1 style={styles.title}>LaptopScribes</h1>
          <h4 style={styles.subtitle}>Internet's only 0 bullshit gaming laptop recomendation site</h4>
        </div>
      );
    }
    else {
      return (
        <div style={styles.headerMobile}>
          <h1 style={styles.titleMobile}>LaptopScribes</h1>
        </div>
      );
    }
}

export default Header;
