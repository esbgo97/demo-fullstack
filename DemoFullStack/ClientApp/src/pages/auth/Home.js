import React, { Component } from 'react';
import { Typography } from "@mui/material";

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <Typography variant="h4" color="primary">Demo FullStack</Typography>
        <p>This Project shows implementations of an application, built with:</p>
        <ul>
          <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
          <li><a href='https://facebook.github.io/react/'>React</a> for client-side code</li>
        </ul>
        <p>Using this Backend libraries:</p>
        <ul>
          <li><strong>CORS</strong>. Cross Origin Request for comunication between Front and Back.</li>
          <li><strong>JWT</strong>. For securing transactions.</li>
          <li><strong>Swagger</strong>. For API Documentation.</li>
          <li><strong>SignalR</strong>. Real Time Layer.</li>
          <li><strong>Entity Framework</strong>. Database Management.</li>
          <li><strong>Dapper</strong>. Database Ligth Management.</li>
        </ul>
        <p>Using this Frontend libraries:</p>
        <ul>
          <li><strong>Material UI</strong>. For styles and UI Components.</li>
          <li><strong>Axios</strong>. Rest Layer for API request.</li>
          <li><strong>Redux</strong>. App State management.</li>
          <li><strong>SignalR</strong>. Real Time comunication for front.</li>
          <li><strong>Firebase</strong>. Cloud Backend for Authentication and other utilities.</li>
        </ul>
      </div>
    );
  }
}
