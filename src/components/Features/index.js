import React from 'react';
import { Segment, Header, Image, Grid } from 'semantic-ui-react';

const Features = () => (
  	<Segment style={{ padding: '8em 0em' }} vertical>
		<Grid container stackable verticalAlign='middle'>
			<Grid.Row>
				<Grid.Column width={8}>
					<Header as='h3' style={{ fontSize: '2em' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit</Header>
					<p style={{ fontSize: '1.33em' }}>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, saepe sapiente qui natus voluptates itaque quaerat
						magnam recusandae aliquid ut asperiores.
					</p>
					<Header as='h3' style={{ fontSize: '2em' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit</Header>
					<p style={{ fontSize: '1.33em' }}>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, saepe sapiente qui natus voluptates itaque quaerat
						magnam recusandae.
					</p>
				</Grid.Column>
				<Grid.Column floated='right' width={6}>
					<Image bordered rounded size='large' src='http://via.placeholder.com/700x550' />
				</Grid.Column>
			</Grid.Row>
		</Grid>
	</Segment>
)

export default Features;