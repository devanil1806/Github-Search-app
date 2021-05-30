import React from 'react';
import {IProfile} from '../Models/Iprofile';

interface Iprops{
    profile: IProfile;
}
interface Istate{

}
class GithubProfileDetail extends React.Component<Iprops, Istate> {
    constructor(props: Iprops){
        super(props);

    }
    render(){
        let {profile} = this.props;

        
        return (
            <>
            <div className="card">
                <div className="card-header">
                    <span className="badge badge-success mx-2">{profile.followers}&nbsp;  Followers</span>
                    <span className="badge badge-warning mx-2">{profile.public_repos}&nbsp;  Repos</span>
                    <span className="badge badge-secondary mx-2">{profile.public_gists}&nbsp;  Gists</span>
                    <span className="badge badge-danger mx-2">{profile.following}&nbsp;  Following</span>
                </div>
            </div>
            <div className="card mt-3">
            <div className="card-body">
                <ul className="list-group">
                    <li className="list-group-item">
                        Name :  <span className="font-weight-bold text-success">{profile.name}</span>
                    </li>
                    <li className="list-group-item">
                        Location : <span className="font-weight-bold">{profile.location}</span>
                    </li>
                    <li className="list-group-item">
                        Email Id : <span className="font-weight-bold">{profile.email}</span>
                    </li>
                    <li className="list-group-item">
                        Tweeter : <span className="font-weight-bold">{profile.twitter_username}</span>
                    </li>
                    
                    <li className="list-group-item">
                        Company : <span className="font-weight-bold">{profile.company}</span>
                    </li>
                    <li className="list-group-item">
                        Blog : <span className="font-weight-bold">{profile.blog}</span>
                    </li>
                    <li className="list-group-item">
                        Member Sence : <span className="font-weight-bold">{profile.created_at}</span>
                    </li>
                    <li className="list-group-item">
                        Profile url:<span>
                            <a href={profile.html_url} target="_blank">{profile.html_url}</a>
                        </span>
                    </li>
                    <li className="list-group-item">
                        Profile ID : <span className="font-weight-bold">{profile.id}</span>
                    </li>
                    <li className="list-group-item">
                        Updated : <span className="font-weight-bold">{profile.updated_at}</span>
                    </li>

                </ul>
            </div>

            </div>




            </>
        )
    }
}
export default GithubProfileDetail;