
export const COLORS = {
  background:"lavenderblush",
  text:'purple',
  header:'mediumpurple',
  grey:'grey',
  darkgray: "darkgray",
  showdow:"'c0c0c0'",
  button: 'firebrick',

};
export const LOCATION = {
  center: "center",
  left: "left",

};

  export const COMMON_STYLES = {
    container: {
      flex: 1,
      justifyContent: LOCATION.center,
      alignItems: LOCATION.center,
      backgroundColor: COLORS.background,
      
    },
    topView: {
      flex: 1,
      alignItems: LOCATION.center,
      backgroundColor: COLORS.background,
      justifyContent: LOCATION.center,
    },
    bottomView: {
      flex: 1,
      justifyContent: LOCATION.center,
      alignItems: LOCATION.center,
    },
    labelText: {
      color: COLORS.text,
      fontSize: 25,
    },
  
  };