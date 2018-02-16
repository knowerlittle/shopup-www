// import React from 'react';
// import PropTypes from 'prop-types';
// import SocialLogin from 'react-social-login';


// class Button extends React.PureComponent {
//   static propTypes = {
//     triggerLogin: PropTypes.func.isRequired,
//     children: PropTypes.string.isRequired,
//   };

//   handleKeydown(e) {
//     const code = e.keyCode ? e.keyCode : e.which;
//     if (code === 13) {
//       // Enter keycode
//       this.props.triggerLogin();
//     }
//   }
//   render() {
//     const { triggerLogin, ...props } = this.props;
//     // const style = {
//     //   background: '#eee',
//     //   border: '1px solid black',
//     //   borderRadius: '3px',
//     //   display: 'inline-block',
//     //   margin: '5px',
//     //   padding: '10px 20px',
//     // };

//     return (
//       <div
//         onClick={triggerLogin}
//         onKeyDown={this.handleKeydown}
//         style={style}
//         {...props}
//         role="presentation"
//       >
//         {this.props.children}
//       </div>
//     );
//   }
// }

// export default SocialLogin(Button);
