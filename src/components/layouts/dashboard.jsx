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
          <img src="img/girlimg.png" alt="girlimg" width={90} height={90} />
          <h2>Monica Gamage</h2>
          <p style={{color: 'tomato'}}>@monicagamage</p>
          <button a href="index.jsx" className="button" >Log Out</button>
          <img src="img/oclock.png" alt="oclock" width={120} height={120} />
          <h2>Good Afternoon</h2>
          <h1>Task List</h1>
          <img src="img/task.png" alt="task" />
        </div>
      );
    }
  });