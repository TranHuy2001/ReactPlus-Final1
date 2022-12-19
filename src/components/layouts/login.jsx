var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet" />
          <link rel="stylesheet" href="style.scss" />
          <title>Document</title>
          <img src="img/fromfigma.png" alt="girl" width={278} height={215} />
          <h2>Welcome back</h2>
          <h2>to</h2>
          <h2>OUR REMINDER</h2>
          <div>
            <form action="/dashboard.jsx">
              <label htmlFor="email" />
              <input type="text" id="email" name="email" placeholder="Enter your email" required /><br />
              <label htmlFor="psw" />
              <input type="password" id="psw" name="psw" placeholder="Enter password" required /><br />
            </form>
          </div>
          <button a href="dashboard.jsx" className="button">Sign In</button>
          <h2>Don't have an account ?<a href="/registration.jsx" style={{color: 'tomato'}}>Sign Up</a></h2><a href="/registration.html" style={{color: 'tomato'}}>
          </a></div>
      );
    }
  });