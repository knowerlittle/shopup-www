import React from 'react';
import { Menu, Button, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
return(
<Container>
	<Menu secondary size='large' inverted={props.inverted}>
		<Menu.Item as={Link} to='/'>
			<Button primary size='huge' circular>
				Post a Popin
			</Button>
		</Menu.Item>
		<Menu.Menu position='right'>
			<Menu.Item  as={Link} to='/signup'>Sign Up</Menu.Item>
			<Menu.Item  as={Link} to='/login' style={{ marginLeft: '0.5em' }}>Log in</Menu.Item>
		</Menu.Menu>
	</Menu>
</Container>
)
};

export default Nav;