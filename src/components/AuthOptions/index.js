import React from 'react';
// import {connect} from 'react-redux'
// import { fetchFacebookAuth } from '../../reducers/auth'
import { Segment, Grid, Button, Icon, Header} from 'semantic-ui-react';

const Options = () => {
    return (
        <Segment style={{ padding: '5em 0' }} basic>
    <Grid container>
        <Grid.Row verticalAlign='top'>
            <Grid.Column width={8} textAlign='center'>
                <Grid.Row>
                    <Header as='h1' content='Join Popin' style={{ fontSize: '3em', fontWeight: 'normal' }} />
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim nisi illum sint ullam ea commodi, deleniti placeat consequatur.
                    </p>
                </Grid.Row>
                <Grid.Row style={{ padding: '5em 0' }}>
                    <Grid.Row style={{ padding: '1em 0' }}>
                        <Button size='huge' circular basic fluid>
                            <Icon name='google' />Login with Google &nbsp; &nbsp; &nbsp;
                        </Button>
                    </Grid.Row>
                    <Grid.Row style={{ padding: '1em 0' }} onClick>
                        <Button size='huge' circular basic fluid>
                            <Icon name='facebook' />Login with Facebook</Button>
                    </Grid.Row>
                    <Grid.Row style={{ padding: '1em 0' }}>
                        <Button size='huge' circular basic fluid>
                            <Icon name='mail' />Login with email &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        </Button>
                    </Grid.Row>
                </Grid.Row>
            </Grid.Column>
            <Grid.Column width={8}>
                <iframe width="100%" title="Sign up 360 video" height="500" src="https://www.youtube.com/embed/d__GaVTyRv0?rel=0&autoplay=1&mute=1&loop=1&controls=1"
                    frameBorder="0" volume="0" allowFullScreen></iframe>
            </Grid.Column>
        </Grid.Row>
    </Grid>
</Segment>
    )
}

export default Options; 

// export default connect(
//   (state) => ({currentTodo: state.todo.currentTodo}),
//   {updateCurrent, saveTodo}
// )(TodoForm)