require("bootstrap/dist/css/bootstrap.css");

import React from 'react';
import {render} from 'react-dom';
import GridComponent from "./GridComponent";

render(
    <GridComponent/>,
    document.getElementById('app')
);
