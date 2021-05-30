 import React from 'react';
import {IProfile} from '../Models/Iprofile';
import GithubProfileDetails from '../Profile/GithubProfileDetails';
import GithubProfileCard from '../Profile/GithubProfileCard';
interface Iprops{
    profile:IProfile;
}
interface Istate {

}
class GithubProfile extends React.PureComponent<Iprops,Istate>{
    constructor(props:Iprops){
        super(props);
    }
    render(){
        return(
            <>
            <div className="row">
                <div className="col-md-3">
                    <GithubProfileCard profile={this.props.profile}/>
                    
                </div>
                <div className="col-md-9">
                    <GithubProfileDetails profile={this.props.profile}/>
                    
                </div>
            </div>



            </>
        )
    }

}
export default GithubProfile

