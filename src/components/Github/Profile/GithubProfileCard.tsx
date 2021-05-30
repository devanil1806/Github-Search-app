import React from 'react';
import {IProfile} from '../Models/Iprofile';

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
        let {profile}=this.props;
        return(
            <>
            <div className="card">
                <img src={profile.avatar_url} className="image-fluid" />
                <div className="card-body">
                    <p className="h4 text-center text-info"><b>{profile.name}</b></p>
                    <small className='text-primary'>{profile.bio}</small><br/>
                    <a href={profile.html_url} target="_blank" className="btn rounded-3 purple-gradient mx-5 mt-4">My Account </a>
                </div>
                
            </div>



            </>
        )
    }

}
export default GithubProfile;


