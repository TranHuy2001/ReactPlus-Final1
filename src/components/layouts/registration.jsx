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
          <h2>Get's things done</h2>
          <h2>with TODO</h2>
          <p>Let's help you meet up your tasks</p>
          <div>
            <form action="/login.jsx">
              <label htmlFor="fname" />
              <input type="text" id="fname" name="fistname" placeholder="Enter your full name" required />
              <label htmlFor="email" />
              <input type="text" id="email" name="email" placeholder="Enter your email" required />
              <label htmlFor="psw" />
              <input type="password" id="psw" name="psw" placeholder="Enter password" required />
              <label htmlFor="psw-repeat" />
              <input type="password" id="psw-repeat" name="psw-repeat" placeholder="Confirm Password" required />
            </form>
            <button a href="login.jsx" className="button">Register </button>
            <h2>Already have an account ?<a href="/login.jsx" style={{color: 'tomato'}}>Sign In</a></h2><a href="/login.jsx" style={{color: 'tomato'}}>
            </a></div><a href="/login.jsx" style={{color: 'tomato'}}>
          </a></div>
      );
    }
  });