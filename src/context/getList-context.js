import React from 'react';

const taskListContext = React.createContext(
    {
        task: false,
        loading: true,
    }
)

export default taskListContext
