import React from 'react';
import { Menu, Button, Segment, Container, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Hero = () => (
  	<Segment textAlign='center' inverted style={{minHeight: '700px', padding: '1em 0em'}} vertical>
		<Container>
			<Menu inverted pointing secondary size='large'>
				<Menu.Item as={Link} to='/'>
					<Button primary size='huge'>
						List popin
					</Button>
				</Menu.Item>
				<Menu.Item position='right'>
					<Button as={Link} to='/signup' inverted>Sign Up</Button>
					<Button as={Link} to='/login' style={{ marginLeft: '0.5em' }} inverted>Log in</Button>
				</Menu.Item>
			</Menu>
		</Container>
		<Container text>
			<Header as='h1' inverted content='Bringing your creation to the real world' style={ { fontSize: '3em', fontWeight:
			  'normal', margin: '4em 0 2em' }} />
			<Button primary size='huge'>
				Get Started
			</Button>
		</Container>
	</Segment>
)

export default Hero;