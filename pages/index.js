import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';

class IndexPage extends Component {
  // this method executes either on the server or client (depending on page click or typing a url)
  // you can use this to initialize your app before it loads
  // for example, you can get data from a database then prepopulate the props that the render method will receive for the page component 
  // static async getInitialProps(context) {
  //   console.log(context);
  //   // await keyword (if fetching with axios, for example)
  //   return {appName: 'Super App'}; // for example, you can prepopulate it with props of your choice
  // }
  static getInitialProps(context) { // this method works together with your promises or promises returned by 3rd party packages
    console.log(context);
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({appName: 'Super App'})
      }, 1000);
    });
    return promise;
  }

  render () {
    return (
      <div>
        <h1>The Main Page of {this.props.appName}</h1>
        <p>Go to{' '}
          <Link href='/auth'>
            <a>Auth</a>
          </Link>
        </p>
        <button onClick={() => Router.push('/auth')}>Go to Auth</button>
      </div>
    );
  }
}

export default IndexPage;
