import React from 'react';
import MaterialCheckbox from '../UI/MaterialCheckbox/MaterialCheckbox'
import { Paper } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import Box from '@material-ui/core/Box';
class ListTask extends React.Component {
  render() {
    const styles = {
      Paper: {
        margin: "auto",
        padding: 0,
        display: "flex",
        alignItems: "center",
        marginTop: 0,
        justifyContent:"space-between",
        borderBottom: '1px solid',
        borderColor: '#ededed',
      },
      Delete: {
        cursor: 'pointer'
      }
    };
    return (
      <div>
        <Paper elevation={0} style={styles.Paper}>          
          <Box p={1} >
            <MaterialCheckbox onClick={this.props.edit} handleChange={this.props.select} />
          </Box>
          <Box p={1} flexGrow={1} >
            {this.props.title}
          </Box>
          <Box p={1} >
          <CloseIcon style={styles.Delete}  onClick={this.props.delete}/>
          </Box>
      </Paper>

      </div>
    );
  }
}

export default ListTask;
