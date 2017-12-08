import React from 'react'
import Nav from '../../components/Nav';
import AuthOptions from '../../components/AuthOptions';
import { Segment } from 'semantic-ui-react';

const Login = () => (
<div className="Login">
	<Segment textAlign='center' style={{ padding: '1em 0em' }} vertical>
		<Segment textAlign='center' style={{ padding: '1em 0em' }} vertical>
			<Nav/>
		</Segment>
		<AuthOptions/>
	</Segment>
</div>
);

export default Login
