require("bootstrap/dist/css/bootstrap.css");

import React from 'react';
import {render} from 'react-dom';

class GridComponent extends React.Component {
    render() {
        return (
            <div style={{width:300, height: 300, padding: 20}}>
                <p>
                    <input type="text" placeholder="Filter by..."/>
                </p>
                <table className="table table-condensed">
                    <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Active</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>
                            <input type="checkbox" defaultChecked={false}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Mary</td>
                        <td>Moe</td>
                        <td>
                            <input type="checkbox" defaultChecked={false}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Peter</td>
                        <td>Noname</td>
                        <td>
                            <input type="checkbox" defaultChecked={true}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Ivan</td>
                        <td>Petrov</td>
                        <td>
                            <input type="radio" defaultChecked={false}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Sidor</td>
                        <td>Sidorchuk</td>
                        <td>
                            <input type="radio" defaultChecked={true}/>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

render(
    <GridComponent/>,
    document.getElementById('app')
);
