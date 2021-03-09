import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function MaterialRadio() {
    const [value, setValue] = React.useState('done');

    const handleChange = (event) => {
    setValue(event.target.value);
    };

    return (
    <FormControl component="fieldset">
        <FormLabel component="legend">Status</FormLabel>
        <RadioGroup aria-label="status" name="status" value={value} onChange={handleChange}>
            <FormControlLabel value="0" control={<Radio />} label="To do" />
            <FormControlLabel value="1" control={<Radio />} label="Done" />
        </RadioGroup>
    </FormControl>
    );
}
