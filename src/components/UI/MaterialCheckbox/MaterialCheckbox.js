import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

export default function MaterialCheckbox(props) {
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
    setChecked(event.target.checked);
    };

    return (
    <div>
        <Checkbox onChange={props.handleChange} onClick={props.onClick} inputProps={{ 'aria-label': 'secondary checkbox' }}/>
    </div>
    );
}
