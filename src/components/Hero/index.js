import React from 'react';
import Nav from '../Nav'
import { Button, Segment, Container, Header } from 'semantic-ui-react';

const Hero = () => (
  	<Segment textAlign='center' inverted style={{minHeight: '700px', padding: '1em 0em'}} vertical>
		<Nav inverted/>
		<Container text>
			<Header as='h1' inverted content=' Discover space for you and your brand' style={ { fontSize: '3em', fontWeight:
			  'normal', margin: '4em 0 2em' }} />
			<Button primary size='huge'>
				Get Started
			</Button>
		</Container>
	</Segment>
)

export default Hero;