import React from 'react';
import { connect } from 'react-redux'
import {getStream, updateStream} from '../../actions';
import StreamForm from '../streams/StreamForm'

class StreamEdit extends React.Component{
    componentDidMount = () =>{
        this.props.getStream(this.props.match.params.id)
    }

    onSubmit = (formValues) =>{
        this.props.updateStream(this.props.match.params.id, formValues);
    }

    render(){
        if(!this.props.stream){
            return(
                <div> Loading...</div>
            )
        }
        return(
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm
                    onSubmit={this.onSubmit}
                    initialValues={{title: this.props.stream.title, description: this.props.stream.description}}
                />
            </div>
        )
    }
}

const mapStateToProps= (state, ownProps) =>{
    return {
        stream: state.streams[ownProps.match.params.id],
    }
}

export default connect(mapStateToProps, {getStream, updateStream})(StreamEdit);