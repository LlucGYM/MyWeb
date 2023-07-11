import React, { useState } from "react";

export default function RepoListItem(props) {

    return (
        <div class ="ObjetoRepo">
            <table>
                <tr>
                    <td>
                    <h3>{props.name}</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                    <img alt="Imagen Repositorio"></img>
                    </td>
                </tr>
                <tr>
                    <td>
                    <p>{props.description}</p>
                    </td>
                </tr>
            </table>
        </div>
    );
}