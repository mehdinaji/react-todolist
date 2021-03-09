import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

const Checkboxes = (props) => {
    // const [checked, setChecked] = React.useState(false);

    // const handleChange = (event) => {
    //     setChecked(event.target.checked);
    //     console.log ('s')
    // };

    return (
        <div>
        <Checkbox color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }} onChange={props.handleChange} />
    </div>
    );
}

export default Checkboxes;